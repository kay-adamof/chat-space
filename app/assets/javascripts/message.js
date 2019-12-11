$(function() {

  function buildHTML(message) {
    var img = message.image ? `<img src=${message.image}>` : ""
    var html = `
    <div class="chat-space" data-message-id=${message.id}>
      <p>
        <span class='main__body__message__userName'>
          ${message.user_name}
        </span>
        <span class='main__body__message__date'>
          ${message.created_at}
        </span>
      </p>
      <div class='main__body__message__text'>
        <p>
          ${message.content}
        </p>
        ${img}
      </div>
    </div>`
    return html;
  }
  $('#new_message').on("submit", function(e) {
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
        url: url,
        type: 'POST',
        data: formData,
        dataType: 'json',
        processData: false,
        contentType: false
      })
      .done(function(data) {
        var html = buildHTML(data);
        $('.main__body__message').append(html);
        $('.main__body').animate({
          scrollTop: $('.main__body')[0].scrollHeight,
        });
        $('#new_message')[0].reset()
        $('#submit').removeAttr('disabled')
      })
      .fail(function() {
        alert("メッセージ送信に失敗しました");
        $('#new_message')[0].reset()
        $('#submit').removeAttr('disabled')
      });
  })

  var reloadMessages = function() {
    var last_message_id = $(".chat-space").last().data('message-id');
    $.ajax({
        url: 'api/messages',
        type: 'get',
        dataType: 'json',
        data: { id: last_message_id }
      })
      .done(function(messages) {
        var insertHTML = '';
        $.each(messages, function(i, message) {
          insertHTML += buildHTML(message)
        });
        $('.main__body__message').append(insertHTML);
        $('.main__body').animate({
          scrollTop: $('.main__body')[0].scrollHeight,
        });
      })
      .fail(function() {
        console.log('error');
      });
  };


  $(window).bind("load", function() {
    if (document.URL.match(/groups/)) {
      setInterval(reloadMessages, 7000);
    }
  });
  // if (!($('.group-field__name').data('group-id') === undefined)) {
  //   setInterval(reloadMessages, 7000);
  // }
  // setInterval(reloadMessages, 7000);
});