$(document).ready(function () {
    $('.feedback_container').hide();
    $(".blue_button_active").on('mouseenter', function () {
        var hoveredBtn = parseInt($(this).attr("count"));
        $(".item_" + (hoveredBtn + 1)).addClass("on_hover");
    });
    $(".blue_button_active").on('mouseleave', function () {
        var hoveredBtn = parseInt($(this).attr("count"));
        $(".item_" + (hoveredBtn + 1)).removeClass("on_hover");
    });

    $("#my-links-btn").click(function () {
        $("#slide1").hide();
        $(this).addClass("correct");
        $("#my-links-slide").show();
    });

    $("#needs-attention-btn").click(function () {
        $("#slide1").hide();
        $(this).addClass("correct");
        $("#needs-attention-slide").show();
    });

    $("#my-commitments-btn").click(function () {
        $("#slide1").hide();
        $(this).addClass("correct");
        $("#my-commitments-slide").show();
    });

    $("#recently-published-btn").click(function () {
        $("#slide1").hide();
        $(this).addClass("correct");
        $("#recently-published-slide").show();
    });

    $("#apple-learn-btn").click(function () {
        $("#slide1").hide();
        $(this).addClass("correct");
        $("#apple-learn-slide").show();
    });

    $("#emerging-issues-btn").click(function () {
        $("#slide1").hide();
        $(this).addClass("correct");
        $("#emerging-issues-slide").show();
    });

    $("#my-handled-cases-btn").click(function () {
        $("#slide1").hide();
        $(this).addClass("correct");
        $("#my-handled-cases-slide").show();
    });
  

    $(".Need_attention_common").click(function () {
        Need_attention_common(this.id);
    });

    $(".zoom_out_btn").click(function () {
        reset_all_msg();
        $("#slide1").show();
        $("#" + this.parentElement.parentNode.id).hide();
    })

    function reset_all_msg() {
        $('.feedback_1, .feedback_2, .feedback_3, .feedback_4').hide();
    };

    function Need_attention_common(val) {
        switch (val) {
            case 'My_Links_msg1':
                $('.feedback_1').show();
                $('.feedback_2').hide();
                break;
            case 'My_Links_msg2':
                $('.feedback_2').show();
                $('.feedback_1').hide();

                break;
            case 'Need_attention_msg1':
                $('.feedback_1').show();
                $('.feedback_2').hide();
                $('.feedback_3').hide();
                $('.feedback_4').hide();
                break;
            case 'Need_attention_msg2':
                $('.feedback_2').show();
                $('.feedback_1').hide();
                $('.feedback_3').hide();
                $('.feedback_4').hide();
                break;
            case 'Need_attention_msg3':
                $('.feedback_3').show();
                $('.feedback_1').hide();
                $('.feedback_2').hide();
                $('.feedback_4').hide();
                break;
            case 'Need_attention_msg4':
                $('.feedback_4').show();
                $('.feedback_1').hide();
                $('.feedback_2').hide();
                $('.feedback_3').hide();
                break;
            case 'slide3-msg1':
                $('.feedback_1').show();
                break;
            case 'my-commitments-msg1':
                $('.feedback_1').show();
                $('.feedback_2').hide();
                break;
            case 'my-commitments-msg2':
                $('.feedback_1').hide();
                $('.feedback_2').show();
                break;
            case 'recently-published-msg1':
                $('.feedback_2').hide();
                $('.feedback_1').show();
                $('.feedback_3').hide();
                break;
            case 'recently-published-msg2':
                $('.feedback_2').show();
                $('.feedback_1').hide();
                $('.feedback_3').hide();
                break;
            case 'recently-published-msg3':
                $('.feedback_2').hide();
                $('.feedback_1').hide();
                $('.feedback_3').show();
                break;
            case 'apple-learn-msg1':
                $('.feedback_1').show();
                break;
            case 'emerging-issues-msg1':
                $('.feedback_1').show();
                break;
            case 'my-handled-cases-msg1':
                $('.feedback_1').show();
                $('.feedback_2').hide();
                break;
            case 'my-handled-cases-msg2':
                $('.feedback_1').hide();
                $('.feedback_2').show();
                break;


        }

    };
})