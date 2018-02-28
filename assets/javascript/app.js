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
        console.log("Chosen topic = " + btnTopic)

        //Reqeust image info using giphy's API
        var gifData = $.get("https://api.giphy.com/v1/gifs/search?q=" + btnTopic + "&api_key=WZw70fBlzuvbsKf9eHwPyYjI6fWkyyL0&limit=10&rating=g");
        gifData.done(function (result) {
            console.log("API call successful", result);

            //Now you're inside of the data object you requested from giphy. 
            $(".gifDiv").empty()

            //Loop through queried object
            for (i = 0; i < 10; i++) {
                var animatedLink = result.data[i].images.downsized.url
                var stillLink = result.data[i].images.downsized_still.url
                var state = "still"
                var rating = "Rating: " + result.data[i].rating

                //print gifs to the page
                $("#images").append('<div class="card" style="width: 18rem;">' +
                    '<img class="card-img-top" data-state =' + state + ' data-still=' + stillLink + 'data-animated=' + animatedLink + ' src=' + stillLink + 'alt="Card image cap">' + '<div class="card-body">' + '<p class="card-text">' + rating + '</p>' +
                    '</div>' + '</div>');
            }

            // Logic to switch images between still and animated states.
            $(".card-img-top").on("click", function () {
                if ($(this).attr("data-state") === "still") {
                    console.log("true")
                    $(this).attr("src", $(this).attr("data-animate"))
                    $(this).attr("data-state", "animate")
                }
                else if ($(this).attr("data-state") === "animate") {
                    console.log("false")
                    $(this).attr("src", $(this).attr("data-still"))
                    $(this).attr("data-state", "still")
                }
            })

        }).fail(function (err) {
            throw err;
        });
    });

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

})




