var render = function() {
  $.ajax({
    type: "get",
    url: "http://localhost:8080/api/posts",
    success: function(data) {
      _.each(data, function(comment) {
        var createdAt = comment.createdAt;

        var current_datetime = new Date(createdAt);

        var formatted_date =
          current_datetime.getDate() +
          "-" +
          (current_datetime.getMonth() + 1) +
          "-" +
          current_datetime.getFullYear();

        var delete_btn =
          '<div class = "col-sm-1"><img src="https://cdn.onlinewebfonts.com/svg/img_422287.png" class = "del_btn" id= "' +
          comment._id +
          '_btn"></div>';

        var title_template =
          "<div class= 'row' id ='title_value'>" +
          "<div class='col-sm-11'>" +
          " title: " +
          comment.title +
          "</div>" +
          delete_btn;

        var createdtime_template =
          "<div class='col-sm' id = 'createdAt'>" + formatted_date + "</div>";

        $(".container").append(
          "<div class='post col' id =" +
            comment._id +
            ">" +
            title_template +
            "</div>" +
            "<div class='row align-items-end'>" +
            createdtime_template +
            "</div>"
        );

        $("#" + comment._id + "_btn").click(function() {
          $.ajax({
            type: "delete",
            url: "http://localhost:8080/api/posts/" + comment._id
          });
          $(".post").remove();
          render();
        });

        console.log(comment);
      });
    }
  });
};

render();
$("#post_btn").click(function() {
  var input = $("#input_box").val();
  $.post("http://localhost:8080/api/posts", {
    title: input
  }).then(function() {
    $(".post").remove();
    render();
  });
});
