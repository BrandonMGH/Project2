

//below is our post onclick event listener / route
$("#create-thread").on("click", function(event) {
  // Make sure to preventDefault on a submit event.
  event.preventDefault();
  var id  = location.href.split('').pop();

  console.log(id);




  var body = {
    title: $("#thread-title").val().trim(),
  };

  // Send the POST request.
  // $.ajax("/api/add-thread", {
  //   method: "POST",
  //   data: body
  // }).then(
  //   function(res) {
  //     console.log(res)
  //     //location.reload();
  //   }
  // );
});






/////////////////////////////////////////////////////
//BELOW IS THE ORIGINAL JS FOR GET POST DELETE
/////////////////////////////////////////////////////


// // Get references to page elements
// var $exampleText = $("#example-text");
// var $exampleDescription = $("#example-description");
// var $submitBtn = $("#submit");
// var $exampleList = $("#example-list");
// //below is for posts

// // The API object contains methods for each kind of request we'll make
// var API = {
//   saveExample: function(example) {
//     return $.ajax({
//       headers: {
//         "Content-Type": "application/json"
//       },
//       type: "POST",
//       url: "api/examples",
//       data: JSON.stringify(example)
//     });
//   },
//   getExamples: function() {
//     return $.ajax({
//       url: "api/examples",
//       type: "GET"
//     });
//   },
//   deleteExample: function(id) {
//     return $.ajax({
//       url: "api/examples/" + id,
//       type: "DELETE"
//     });
//   }
// };



// // refreshExamples gets new examples from the db and repopulates the list
// var refreshExamples = function() {
//   API.getExamples().then(function(data) {
//     //below we are looping through the data using the .map method and for
//     //each example we are creating an anchor tag
//     //that will show the example.text then take us to the example page
//     //corresponding to the example.id
//     var $examples = data.map(function(example) {
//       var $a = $("<a>")
//         .text(example.text)
//         .attr("href", "/example/" + example.id);

//       var $li = $("<li>")
//         .attr({
//           class: "list-group-item",
//           "data-id": example.id
//         })
//         .append($a);
//         //below is creating a delete button dynamically and appendeding it to each example
//       var $button = $("<button>")
//         .addClass("btn btn-danger float-right delete")
//         .text("Delete");

//       $li.append($button);

//       return $li;
//     });
//     //JH: I think the 2 lines of code below empty the example list and then append all the examples in
//     //JH:the data base so we have the most current data shown
//     $exampleList.empty();
//     $exampleList.append($examples);
//   });
// };

// // handleFormSubmit is called whenever we submit a new example
// // Save the new example to the db and refresh the list
// var handleFormSubmit = function(event) {
//   event.preventDefault();
// //the below variable is where the new example is created and passed the values
//   var example = {
//     text: $exampleText.val().trim(),
//     description: $exampleDescription.val().trim()
//   };
// //below is a check stating if both fields are null, alert user must enter text and description
//   if (!(example.text && example.description)) {
//     alert("You must enter an example text and description!");
//     return;
//   }

//   API.saveExample(example).then(function() {
//     refreshExamples();
//   });

//   $exampleText.val("");
//   $exampleDescription.val("");
// };

// // handleDeleteBtnClick is called when an example's delete button is clicked
// // Remove the example from the db and refresh the list
// var handleDeleteBtnClick = function() {
//   var idToDelete = $(this)
//     .parent()
//     .attr("data-id");

//   API.deleteExample(idToDelete).then(function() {
//     refreshExamples();
//   });
// };

// // Add event listeners to the submit and delete buttons
// $submitBtn.on("click", handleFormSubmit);
// $exampleList.on("click", ".delete", handleDeleteBtnClick);

/////////////////////////////////////////////////////
//ABOVE IS THE ORIGINAL JS FOR GET POST DELETE
/////////////////////////////////////////////////////

