$("document").ready(function () {

    var topicsArr = ["surfing", "mountain biking", "bowling", "cars", "happy", "funny", "cats", "dogs", "trump", "animals"]


    // Create a button within the HTML for every item in the topics array.
    // Loop through the array and append a button.
    for (var i = 0; i < topicsArr.length; i++) {

        var topicBtn = $("<button>")
        topicBtn.attr("type","button")
        topicBtn.attr("class", "btn btn-primary topic-button topic topic-button-color")
        topicBtn.attr("data-topic", topicsArr[i])
        topicBtn.text(topicsArr[i])
        $("#topics").append(topicBtn)
    }

    //When user clicks on a button the page should grab 10 static, 
    // non-animated gif images from the GIPHY API and place them on the page.


    // When the user clicks one of the still GIPHY images, 
    // the gif should animate. If the user clicks the gif again, it should stop playing.


})



