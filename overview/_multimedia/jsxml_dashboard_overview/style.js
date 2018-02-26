$(document).ready(function() {
    $(".blue_button_active").on('mouseenter', function() {
        var hoveredBtn = parseInt($(this).attr("count"));
        $(".item_" + (hoveredBtn + 1)).addClass("on_hover");
    });
    $(".blue_button_active").on('mouseleave', function() {
        var hoveredBtn = parseInt($(this).attr("count"));
        $(".item_" + (hoveredBtn + 1)).removeClass("on_hover");
    });

    $("#my-links-btn").click(function() {
        $("#slide1").hide();
        $("#my-links-slide").show();
    });

    $("#my-links-zoomout").click(function() {
        $("#slide1").show();
        $("#my-links-slide").hide();
    })


    $("#needs-attention-btn").click(function() {
        $("#slide1").hide();
        $("#needs-attention-slide").show();
    });

    $("#needs-attention-zoomout").click(function() {
        $("#slide1").show();
        $("#needs-attention-slide").hide();
    })

    $("#my-commitments-btn").click(function() {
        $("#slide1").hide();
        $("#my-commitments-slide").show();
    });

    $("#my-commitments-zoomout").click(function() {
        $("#slide1").show();
        $("#my-commitments-slide").hide();
    })

    $("#recently-published-btn").click(function() {
        $("#slide1").hide();
        $("#recently-published-slide").show();
    });

    $("#recently-published-zoomout").click(function() {
        $("#slide1").show();
        $("#recently-published-slide").hide();
    })

    $("#apple-learn-btn").click(function() {
        $("#slide1").hide();
        $("#apple-learn-slide").show();
    });

    $("#apple-learn-zoomout").click(function() {
        $("#slide1").show();
        $("#apple-learn-slide").hide();
    })

    $("#emerging-issues-btn").click(function() {
        $("#slide1").hide();
        $("#emerging-issues-slide").show();
    });

    $("#emerging-issues-zoomout").click(function() {
        $("#slide1").show();
        $("#emerging-issues-slide").hide();
    })

    $("#my-handled-cases-btn").click(function() {
        $("#slide1").hide();
        $("#my-handled-cases-slide").show();
    });

    $("#my-handled-cases-zoomout").click(function() {
        $("#slide1").show();
        $("#my-handled-cases-slide").hide();
    })

})