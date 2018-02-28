$("document").ready(function () {

    //Global variables
    btnTopic = ""

    //Initial array of topics
    var topicsArr = ["surfing", "mountain biking", "bowling", "cars", "happy", "funny", "cats", "dogs", "trump", "animals"]


    //*Prints initial topic array to the page as buttons*
    for (var i = 0; i < topicsArr.length; i++) {
        $("#topics").append('<input type="button" class="btn btn-primary topic-button topic topic-button-color" data-name="' + i + '" value="' + topicsArr[i] + '">' + '</input>');
    }

    //On topic button click, set the button's value.  
    $(".topic-button").on("click", function (event) {
        btnTopic = $(event.target).val().trim()
        toString(btnTopic)
        console.log(btnTopic)


        //Get request using giphy API
        var gif = $.get("http://api.giphy.com/v1/gifs/search?q=" + btnTopic + "&api_key=WZw70fBlzuvbsKf9eHwPyYjI6fWkyyL0&limit=10&rating=g");
        gif.done(function (data) 

        { console.log("success got data", data); });
        
        //Now you're inside of the data object you requested from giphy. 
        //print gifs to the page
        
    //     { $("#images").append('<div class="card" style="width: 18rem;">'+
    //     '<img class="card-img-top" src="" alt="Card image cap">'+'<div class="card-body">'+'<p class="card-text">Rating'+'</p>'+
    //     '</div>'+'</div>'); 
    
    // });



})

// When the user clicks one of the still GIPHY images, 
// the gif should animate. If the user clicks the gif again, it should stop playing.


//*Add new topic to toics array*
//-----------------------------------------------------------------------------------------------------------------

$("#add-btn").on("click", function (event) {
    event.preventDefault();
    console.log("you clicked the adder button")

    // Get the adder "value" from the textbox and store it a variable
    var newTopic = $("#addBox").val().trim();
    console.log("Your new topic is: " + newTopic)

    $("#topics").append('<input type="button" class="btn btn-primary topic-button topic topic-button-color" data-name="' + newTopic + '" value="' + newTopic + '">' + '</input>');

})

//To do
//AJAX Query & Functions
//Create an AJAX query that uses the giphy API.
//Any time you click a topics button a function runs to 1)request data from the server and 2)display it

function displayGifs() {

    var query = $(this).attr("data-name");
    console.log("this = " + this)
    var queryURL = "https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";

}   

   





})




