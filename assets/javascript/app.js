$("document").ready(function () {

    var topicsArr = ["surfing", "mountain biking", "bowling", "cars", "happy", "funny", "cats", "dogs", "trump", "animals"]


    //***Print the buttons to the page***
    // Create a button within the HTML for every item in the topics array.
    // Loop through the array and append a button.
    //________________________________________________________________________________________________________________

    for (var i = 0; i < topicsArr.length; i++) {
        $("#topics").append('<input type="button" class="btn btn-primary topic-button topic topic-button-color" data-name="' + i + '" value="' + topicsArr[i] + '">' + '</input>');
    }


    //To Do
    //*Pull GIPHs onto page
    //When user clicks on a button the page should grab 10 static, 
    // non-animated gif images from the GIPHY API and place them on the page.
    //-----------------------------------------------------------------------------------------------------------------

    $("#topics").on("click", function (event) {
        var btnTopic = $(event.target).val();
        console.log(btnTopic)
    })

    // When the user clicks one of the still GIPHY images, 
    // the gif should animate. If the user clicks the gif again, it should stop playing.


})
//*Add new topic to toics array*
//-----------------------------------------------------------------------------------------------------------------

$("#adder").on("click", function (event) {
    event.preventDefault();
    console.log("you clicked the adder button")

    // Get the adder "value" from the textbox and store it a variable
    var newTopic = $("#addTopic").val().trim();
    console.log("Your new topic is: " + newTopic)

    $("#topics").append('<input type="button" class="btn btn-primary topic-button topic topic-button-color" data-name="' + newTopic + '" value="' + newTopic + '">' + '</input>');

})



