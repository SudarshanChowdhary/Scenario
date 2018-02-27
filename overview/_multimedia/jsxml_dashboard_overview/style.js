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
        $("#My_Links_msg1").focus();
        var mylinks = true;
    });

    $("#needs-attention-btn").click(function () {
        $("#slide1").hide();
        $(this).addClass("correct");
        $("#needs-attention-slide").show();
        $("#Need_attention_msg1").focus();
        var needsAttentionBtnVal = true;
        
    });

    $("#my-commitments-btn").click(function () {
        $("#slide1").hide();
        $(this).addClass("correct");
        $("#my-commitments-slide").show();
        $("#my-commitments-msg1").focus();
        var myCommitmentsBtnVal = true;
        
    });

    $("#recently-published-btn").click(function () {
        $("#slide1").hide();
        $(this).addClass("correct");
        $("#recently-published-slide").show();
        $("#recently-published-msg1").focus();
        var recentlyPublishedBtnVal = true;
       
    });

    $("#apple-learn-btn").click(function () {
        $("#slide1").hide();
        $(this).addClass("correct");
        $("#apple-learn-slide").show();
        $("#apple-learn-msg1").focus();
        var appleLearnBtnVal = true;
       
    });

    $("#emerging-issues-btn").click(function () {
        $("#slide1").hide();
        $(this).addClass("correct");
        $("#emerging-issues-slide").show();
        $("#emerging-issues-msg1").focus();
        var emergingBtnVal = true;
       
    });

    $("#my-handled-cases-btn").click(function () {
        $("#slide1").hide();
        $(this).addClass("correct");
        $("#my-handled-cases-slide").show();
        $("#my-handled-cases-msg1").focus();
        var myHandledCasesBtnVal = true;
    });

    flag= true;
    $(".Need_attention_common").click(function () {
        if(flag){
            Need_attention_common(this.id);
            flag =false;
        }else{
            reset_all_msg();
            flag=true;            
        }
    });

    $(".zoom_out_btn").click(function () {
        reset_all_msg();
        $("#slide1").show();
        $("#" + this.parentElement.parentNode.id).hide();
        switch (this.value) {
            case 'mylinks':
                $(".my-links-triggle").focus();
                break;
            case 'slide3BtnVal':
                $(".my-links-triggle").focus();
                break;
            case 'needsAttentionBtnVal':
                $(".need-attention-triggle").focus();
                break;
            case 'myCommitmentsBtnVal':
                $(".my-commitments-triggle").focus();
                break;
            case 'recentlyPublishedBtnVal':
                $(".recently-publish-triggle").focus();
                break;
            case 'appleLearnBtnVal':
                $(".apple-learn-triggle").focus();
                break;
            case 'emergingBtnVal':
                $(".emerging-issues-triggle").focus();
                break;
            case 'myHandledCasesBtnVal':
                $(".my-handled-triggle").focus();
                break;
        };
    })

    function reset_all_msg() {
        $('.feedback_1, .feedback_2, .feedback_3, .feedback_4').hide();
        $('#My_Links_msg1, #My_Links_msg2, #Need_attention_msg1, #Need_attention_msg2, #Need_attention_msg3, #Need_attention_msg4, #slide3-msg1, #my-commitments-msg1, #my-commitments-msg2, #recently-published-msg1, #recently-published-msg2, #recently-published-msg3, #apple-learn-msg1, #emerging-issues-msg1, #my-handled-cases-msg1, #my-handled-cases-msg2').attr("aria-expanded", "false");
    };

    function Need_attention_common(val) {
        switch (val) {
            case 'My_Links_msg1':
                $('.feedback_1').show();
                $('.feedback_2').hide();
                $('#My_Links_msg1').attr("aria-expanded", "true");
                break;
            case 'My_Links_msg2':
                $('.feedback_2').show();
                $('.feedback_1').hide();
                $('#My_Links_msg2').attr("aria-expanded", "true");

                break;
            case 'Need_attention_msg1':
                $('.feedback_1').show();
                $('.feedback_2').hide();
                $('.feedback_3').hide();
                $('.feedback_4').hide();
                $('#Need_attention_msg1').attr("aria-expanded", "true");
                break;
            case 'Need_attention_msg2':
                $('.feedback_2').show();
                $('.feedback_1').hide();
                $('.feedback_3').hide();
                $('.feedback_4').hide();
                $('#Need_attention_msg2').attr("aria-expanded", "true");
                break;
            case 'Need_attention_msg3':
                $('.feedback_3').show();
                $('.feedback_1').hide();
                $('.feedback_2').hide();
                $('.feedback_4').hide();
                $('#Need_attention_msg3').attr("aria-expanded", "true");
                break;
            case 'Need_attention_msg4':
                $('.feedback_4').show();
                $('.feedback_1').hide();
                $('.feedback_2').hide();
                $('.feedback_3').hide();
                $('#Need_attention_msg4').attr("aria-expanded", "true");
                break;
            case 'slide3-msg1':
                $('.feedback_1').show();
                $('#Mslide3-msg1').attr("aria-expanded", "true");
                break;
            case 'my-commitments-msg1':
                $('.feedback_1').show();
                $('.feedback_2').hide();
                $('#my-commitments-msg1').attr("aria-expanded", "true");
                break;
            case 'my-commitments-msg2':
                $('.feedback_1').hide();
                $('.feedback_2').show();
                $('#my-commitments-msg2').attr("aria-expanded", "true");
                break;
            case 'recently-published-msg1':
                $('.feedback_2').hide();
                $('.feedback_1').show();
                $('.feedback_3').hide();
                $('#recently-published-msg1').attr("aria-expanded", "true");
                break;
            case 'recently-published-msg2':
                $('.feedback_2').show();
                $('.feedback_1').hide();
                $('.feedback_3').hide();
                $('#recently-published-msg2').attr("aria-expanded", "true");
                break;
            case 'recently-published-msg3':
                $('.feedback_2').hide();
                $('.feedback_1').hide();
                $('.feedback_3').show();
                $('#recently-published-msg3').attr("aria-expanded", "true");
                break;
            case 'apple-learn-msg1':
                $('.feedback_1').show();
                $('#apple-learn-msg1').attr("aria-expanded", "true");
                break;
            case 'emerging-issues-msg1':
                $('.feedback_1').show();
                $('#emerging-issues-msg1').attr("aria-expanded", "true");
                break;
            case 'my-handled-cases-msg1':
                $('.feedback_1').show();
                $('.feedback_2').hide();
                $('#my-handled-cases-msg1').attr("aria-expanded", "true");
                break;
            case 'my-handled-cases-msg2':
                $('.feedback_1').hide();
                $('.feedback_2').show();
                $('#my-handled-cases-msg2').attr("aria-expanded", "true");
                break;


        }

    };
})