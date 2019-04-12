$("#create-post").on("click", function (event) {
    event.preventDefault();
    $.ajax({
        method: "POST",
        url: "/api/posts",
        data: {
            body: $("#post-body").val().trim(),
            ThreadId: $("#post-body").data("threadid")
        }
    })
        .then(function (data) {
            console.log(data);
            location.reload();
        })
        .catch(function (err) {
            console.log(err);
            alert(err.responseText);
        });
});