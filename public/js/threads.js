$("#create_topic_but").click(function () {
    $("#create_topic").show();
    $("#create_topic_but").hide();
});

$("#create-thread").on("click", function (event) {
    event.preventDefault();
    $.ajax({
        method: "POST",
        url: "/api/threads",
        data: {
            title: $("#thread-title").val().trim(),
            TopicId: $("#thread-title").data("topicid")
        }
    })
        .then(function (data) {
            console.log(data);
            window.location.replace(data);
        })
        .catch(function (err) {
            console.log(err);
            alert(err.responseText);
        });
});


