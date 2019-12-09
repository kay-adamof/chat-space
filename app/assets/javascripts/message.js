$(function() {
  $("form").on("click", function(e) {
    e.preventDefault();
    var formData = new FormData(this);
    $.ajax({
      url: "",
      type: 'POST',
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
  })
});