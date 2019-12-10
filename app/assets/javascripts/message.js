$(function() {
  $('#new_message').on("submit", function(e) {
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');

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
        <img src="${img}">
      </div>`
      return html;
    }

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
        $('.main__body__message').append(html)
        console.log(this)
      })
      .fail(function() {

      });
  })
});