$("document").ready(function () {

    var topicsArr = ["surfing", "mountain biking", "bowling", "cars", "happy", "funny", "cats", "dogs", "trump", "animals"]


    // Create a button within the HTML for every item in the topics array.
    // Loop through the array and append a button.
    for (var i = 0; i < topicsArr.length; i++) {

        $("#topics").append('<input type="button" class="btn btn-primary topic-button topic topic-button-color" data-name="' + i + '" value="' + topicsArr[i] + '">' + '</input>');
    }

    //When user clicks on a button the page should grab 10 static, 
    // non-animated gif images from the GIPHY API and place them on the page.

    $("#topics").on("click", function(event) {
        var btnTopic =$(event.target).val();
        console.log(btnTopic)
    })




    // When the user clicks one of the still GIPHY images, 
    // the gif should animate. If the user clicks the gif again, it should stop playing.


})



