$(function() {
  $('#new_message').on("submit", function(e) {
    function buildHTML(message) {
      var img = message.image ? `<img src=${message.image}>` : ""
      var html = `
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
      </div>`
      return html;
    }
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
        debugger;
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
      });
  })
});