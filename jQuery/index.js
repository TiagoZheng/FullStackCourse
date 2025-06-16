// Selecting elements, selects all
$("h1");

// Manipulating or getting styles
$("h1").css("font-size", "5rem");

// Adding/removing classes to element
$("h1").addClass("big-tittle margin-50"); // Add more classesd by adding a space and name of the class
$("h1").removeClass("big-tittle");

// Checking if has class
$("h1").hasClass("margin-50");

// Manipulating text
$("h1").text("Bye");
$("button").text("Don't click me"); // Changes all buttons

// .innerHTML = .html
$("button").html("<em>Hey</em>");

// Manipulating Attributes
console.log($("img").attr("src")); // returns the value of src attribute
$("a").attr("href", "https://yahoo.com"); // sets the value of the attribute to the second parameter

// Event Litener
$("h1").click(function () {
  $("h1").css("color", "purple");
});

// Adds the event listener to all buttons (onMouseClick)
$("button").click(function () {
  $("h1").css("color", "purple");
});

// Adding event listener to keypress
$("input").keydown(function (event) {
  console.log(event.key);
});

// Changes h1 to the key pressed
$(document).keydown(function (event) {
  $("h1").text(event.key);
});

// Any event listed in MDN docs for "Event reference"
$("h1").on("mouseover", function () {
  $("h1").css("color", "red");
});

// Adding HTLM Code
$("h1").before("<button>New</button>"); // Adds a button BEFORE h1 element
$("h1").after("<button>New</button>"); // Adds a button AFTER h1 element
$("h1").prepend("<button>New</button>"); // Adds a button WITHIN h1 element BEFORE the context
$("h1").append("<button>New</button>"); // Adds a button WITHIN h1 element AFTER the context

// Remove elements (all buttons in this case)
$("button").remove();
