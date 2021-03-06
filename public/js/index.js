// Get references to page elements
var $exampleText = $("#example-text");
var $exampleDescription = $("#example-description");
var $submitBtn = $("#submit");
var $exampleList = $("#example-list");
//below is for posts

// The API object contains methods for each kind of request we'll make
var API = {
  saveExample: function(example) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/examples",
      data: JSON.stringify(example)
    });
  },
  getExamples: function() {
    return $.ajax({
      url: "api/examples",
      type: "GET"
    });
  },
  deleteExample: function(id) {
    return $.ajax({
      url: "api/examples/" + id,
      type: "DELETE"
    });
  }
};



// refreshExamples gets new examples from the db and repopulates the list
var refreshExamples = function() {
  API.getExamples().then(function(data) {
    //below we are looping through the data using the .map method and for
    //each example we are creating an anchor tag
    //that will show the example.text then take us to the example page
    //corresponding to the example.id
    var $examples = data.map(function(example) {
      var $a = $("<a>")
        .text(example.text)
        .attr("href", "/example/" + example.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": example.id
        })
        .append($a);
        //below is creating a delete button dynamically and appendeding it to each example
      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("Delete");

      $li.append($button);

      return $li;
    });
    //JH: I think the 2 lines of code below empty the example list and then append all the examples in
    //JH:the data base so we have the most current data shown
    $exampleList.empty();
    $exampleList.append($examples);
  });
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();
//the below variable is where the new example is created and passed the values
  var example = {
    text: $exampleText.val().trim(),
    description: $exampleDescription.val().trim()
  };
//below is a check stating if both fields are null, alert user must enter text and description
  if (!(example.text && example.description)) {
    alert("You must enter an example text and description!");
    return;
  }

  API.saveExample(example).then(function() {
    refreshExamples();
  });

  $exampleText.val("");
  $exampleDescription.val("");
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteExample(idToDelete).then(function() {
    refreshExamples();
  });
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$exampleList.on("click", ".delete", handleDeleteBtnClick);


// //below is our post onclick event listener / route
// $(".create-post").on("submit", function(event) {
//   // Make sure to preventDefault on a submit event.
//   event.preventDefault();

//   var newPost = {
//     body: $("#post-body").val().trim(),
//   };

//   // Send the POST request.
//   $.ajax("/api/Post", {
//     method: "POST",
//     data: newPost
//   }).then(
//     function(res) {
//       console.log(res)
//       location.reload();
//     }
//   );
// });

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