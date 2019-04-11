
const topicLogo = {
  GitHub: "/images/github.png",
  
  Bootstrap: "/images/bootstrap.png",

  Node: "/images/node.png",

  jQuery: "/images/jquery.png",

  MySQL: "/images/mysql.png",

  JavaScript: "/images/javascript.png",
  
};

$(document).ready(function() {
  const $topic = $("#topic_header");
  const title = $topic.attr("data-id");
  console.log(title);
  console.log(topicLogo[title]);
  const $image = $("<img>").attr({
    src: `${topicLogo[title]}`,
    // src: "/images/github.png",
    alt: "Topic Logo",
    title: "Topic Logo",
    width: 40,
    height: 40,
    class: "topic-image",
  
  })
  $image.appendTo("#topic_header");
});



