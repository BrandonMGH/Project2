$(".topic1").on("click", function (event) {
    let id = $(this).attr("data-id");
    $.ajax({
        url: `/topic/1`,
        method: "GET",
        data: {
            burgerId:id
            }
    }).then(function (response) {
        if (response) {
            location.reload();
        }
    });
});