$(function() {
  $('#new_message').on("submit", function(e) {
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');

    function buildHTML(message) {
      var img = message.image ? `<img src=${message.image}>` : ""
      var html = `<div class="main_body_message" data-message-id="${message.id}">
                    <div class="main_body_message-name">
                      ${message.user_name}
                    </div>
                    <div class="main_body_message-time">
                      ${message.created_at}
                    </div>
                    <div class="main_body_message-text">
                      ${ message.content}
                    <div>
                    <div class="main_body_message-image">
                      ${ img}
                    </div>
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
        console.log(data)
        var html = buildHTML(data);
        console.log(html)
      })
      .fail(function() {

      });
  })
});