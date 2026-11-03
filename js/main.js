$(document).ready(function () {
    console.log("jQuery is ready!");

    // Part 1: Setup and selectors
    $("#ready-status").text("jQuery is ready!");
    $("#check-ready").on("click", function () {
        $("#ready-status").text("jQuery is ready and working correctly.");
    });

    $("#change-text").on("click", function () {
        $("#selector-id").text("The text was changed with the .text() method.");
        $(".selector-class").css("color", "#3457d5");
        $("#selector-output").text("Selected an element by ID and a class.");
    });

    $("#change-html").on("click", function () {
        $("#selector-output").html("<strong>HTML content</strong> was inserted with .html().");
    });

    $("#change-css").on("click", function () {
        $("p").css("font-family", "Georgia, serif");
        $("#selector-output").text("The paragraph styles were changed with .css().");
    });

    // Part 2: Visibility, fade, and slide effects
    $("#hide-text").on("click", function () {
        $("#visibility-text").hide(400);
    });

    $("#show-text").on("click", function () {
        $("#visibility-text").show(400);
    });

    $("#toggle-text").on("click", function () {
        $("#visibility-text").toggle(400);
    });

    $("#fade-in").on("click", function () {
        $("#fade-image").fadeIn(500);
    });

    $("#fade-out").on("click", function () {
        $("#fade-image").fadeOut(500);
    });

    $("#fade-toggle").on("click", function () {
        $("#fade-image").fadeToggle(500);
    });

    $("#slide-up").on("click", function () {
        $("#slide-panel").slideUp(400);
    });

    $("#slide-down").on("click", function () {
        $("#slide-panel").slideDown(400);
    });

    $("#slide-toggle").on("click", function () {
        $("#slide-panel").slideToggle(400);
    });

    // Part 3: DOM manipulation and attributes
    let itemCount = 2;

    $("#append-item").on("click", function () {
        itemCount += 1;
        $("#item-list").append("<li>New item " + itemCount + "</li>");
    });

    $("#prepend-item").on("click", function () {
        itemCount += 1;
        $("#item-list").prepend("<li>New first item " + itemCount + "</li>");
    });

    $("#remove-item").on("click", function () {
        $("#item-list li:last").remove();
    });

    let alternateImage = false;

    $("#change-image").on("click", function () {
        const firstImage = "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=900";
        const secondImage = "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=900";
        alternateImage = !alternateImage;
        $("#attribute-image").attr("src", alternateImage ? secondImage : firstImage);
    });

    $("#change-link").on("click", function () {
        const currentLink = $("#dynamic-link").attr("href");
        const newLink = currentLink === "https://www.w3schools.com/jquery/"
            ? "https://jquery.com/"
            : "https://www.w3schools.com/jquery/";

        $("#dynamic-link")
            .attr("href", newLink)
            .text(newLink.includes("w3schools") ? "Open W3Schools jQuery" : "Open jQuery website");
    });

    $("#name-input").on("input", function () {
        $("#name-preview").text($(this).val() || "—");
    });

    $("#email-input").on("input", function () {
        $("#email-preview").text($(this).val() || "—");
    });

    $("#live-form").on("submit", function (event) {
        event.preventDefault();
    });

    // Part 4: Animations
    $("#basic-animation").on("click", function () {
        $("#basic-box").stop(true).animate({
            width: "95px",
            height: "95px",
            left: "150px"
        }, 700);
    });

    $("#sequence-animation").on("click", function () {
        $("#sequence-box")
            .stop(true)
            .css({ left: 0, top: 0, width: "55px", height: "55px" })
            .animate({ left: "180px" }, 500)
            .animate({ top: "110px" }, 500)
            .animate({ width: "30px", height: "30px" }, 500)
            .animate({
                left: 0,
                top: 0,
                width: "55px",
                height: "55px"
            }, 500);
    });

    $("#combined-animation").on("click", function () {
        $("#combined-box")
            .stop(true)
            .css({ left: 0, opacity: 1, width: "55px", height: "55px" })
            .animate({
                left: "180px",
                opacity: 0.35,
                width: "95px",
                height: "95px"
            }, 900);
    });

    // Part 5: Interactive image gallery
    $(".thumbnail").on("click", function () {
        const selectedImage = $(this).data("image");

        $(".thumbnail").removeClass("active");
        $(this).addClass("active");

        $("#gallery-large").fadeOut(180, function () {
            $(this).attr("src", selectedImage).fadeIn(250);
        });
    });
});
