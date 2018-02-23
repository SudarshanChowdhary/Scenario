alert("heloo");
$("document").ready(function () {
  var slides = [{
      "question": "<h3>Scenario 1 of 7</h3><p>You frequently refer customers to apple.com/batteries so they can learn more about managing their devices’ battery life. Where can you add this link so you can quickly open it later in Safari?</p>",
      "answer": 0
    },
    {
      "question": "<h3>Scenario 2 of 7</h3><p>You have three follow-up calls to make to customers. Where can you find a list of your follow-up calls?</p>",
      "answer": 1
    },
    {
      "question": "<h3>Scenario 3 of 7</h3><p>You are about to set your AUX state to Available, but you can't get to Case View. Which section do you need to review before you can start working with customers?</p>",
      "answer": 2
    },
    {
      "question": "<h3>Scenario 4 of 7</h3><p>Your teammate just informed you of a new procedure that was just published. In which section can you find the new procedure?</p>",
      "answer": 3
    },
    {
      "question": "<h3>Scenario 5 of 7</h3><p>After the new iPhone release, Engineering published an article to help Advisors resolve an issue that Apple is tracking. In which section can you find this article? </p>",
      "answer": 6
    },
    {
      "question": "<h3>Scenario 6 of 7</h3><p>Your manager wants to review a case with you that you handled yesterday. Which section can you use to quickly locate the case in iLog? </p>",
      "answer": 5
    },
    {
      "question": "<h3>Scenario 7 of 7</h3><p>Your manager asked you to determine whether you have any overdue training. Which section of Dashboard can you use to locate this information?</p>",
      "answer": 4
    }
  ];
  var feedbacks = [
    "You use the My Links section to save your frequently used links. Remember, you can add and remove links and organize links using folders.",
    "The Needs Attention section lists Bullet*News articles.",
    "The My Commitments section lists your callbacks and follow-ups.",
    "The Recently Published section lists SOPs, non-urgent Bullet*News, and ISCS content.",
    "The AppleLearn section lists new, pending, and overdue training.",
    "The Emerging Issues section lists articles related to issues Engineering is tracking.",
    "The My Handled Cases section lists cases you handled within the last 24 hours."
  ];


  var currentSlide = 0;
  $(".nav_btn.prev_btn").hide();
  $(".nav_btn.next_btn").hide();

  if (currentSlide == 0) {
    $(".nav_btn.prev_btn").prop('disabled', true);
    $(".nav_btn.prev_btn").hide();
  }
  loadSlide(currentSlide);

  $(".nav_btn.next_btn").on('click', function () {
    if (currentSlide < slides.length) {
      $(".nav_btn.next_btn").prop('disabled', false);
      $(".nav_btn.next_btn").hide();
      $(".nav_btn.prev_btn").prop('disabled', false);
      $(".nav_btn.prev_btn").show();
      currentSlide++;
      loadSlide(currentSlide);
      console.log(currentSlide);
    }
    if (currentSlide >= slides.length) {
      $(".nav_btn.next_btn").prop('disabled', true);
      $(".nav_btn.next_btn").hide();
      $(".nav_btn.prev_btn").show();
    }
  })

  $(".nav_btn.prev_btn").on('click', function () {
    if (currentSlide > 0) {
      currentSlide--;
      loadSlide(currentSlide);
      console.log(currentSlide)
      $(".nav_btn.next_btn").prop('disabled', false);
      $(".nav_btn.next_btn").show();
    }
    if (currentSlide <= 0) {
      $(".nav_btn.prev_btn").prop('disabled', true);
      $(".nav_btn.prev_btn").hide();
    }
  })

  $("label.blue_button_active").on('mouseenter', function () {
    var hoveredBtn = $(this).attr("count");
    $(".item").each(function (i) {
      $(this).removeClass("on_hover");
      if (i == hoveredBtn) {
        $(".item_" + (i + 1)).addClass("on_hover");
      }
    })
  });

  $("label.blue_button_active").on('mouseleave', function () {
    var hoveredBtn = $(this).attr("count");
    $(".item_" + (parseInt(hoveredBtn) + 1)).removeClass("on_hover");
  });

  function loadSlide(currentSlide) {
    $(".question_txt").html(slides[currentSlide].question);
    $(".feedback_container").addClass('hide');
    $(".feedback_container").removeClass('show');


    $(".aa").on("change", function () {
      $(".feedback_container").removeClass('correct');
      $(".feedback_container").removeClass('incorrect');
      $(".feedback_container").removeClass('show');
      $(".blue_button_active").removeClass("correct");

      $(".blue_button_active").removeClass("incorrect");
      if ($(this).is(":checked")) {
        var i = parseInt($(this).val());
        if (i == slides[currentSlide].answer) { //change the scenario id
          $(".button_" + (i + 1)).addClass("correct");
          $(".feedback_container").addClass('correct show');
          $(".feedback_container .feedback").html(feedbacks[i]);
          $(".nav_btn.next_btn").show();
        } else {
          $(".button_" + (i + 1)).addClass("incorrect");
          $(".feedback_container").addClass('incorrect show');
          $(".feedback_container .feedback").html(feedbacks[i]);
          $(".nav_btn.next_btn").hide();
          $(".nav_btn.prev_btn").show();
        }
      }
    });


    $(".aa").on("click", function () {
      $(".feedback_container").removeClass('correct');
      $(".feedback_container").removeClass('incorrect');
      $(".feedback_container").removeClass('show');
      $(".blue_button_active").removeClass("correct");
      $(".blue_button_active").removeClass("incorrect");


      if ($(this).is(":checked")) {
        var i = parseInt($(this).val());
        if (i == slides[currentSlide].answer) { //change the scenario id
          $(".button_" + (i + 1)).addClass("correct");
          $(".feedback_container").addClass('correct show');
          $(".feedback_container .feedback").html(feedbacks[i]);
          $(".nav_btn.next_btn").show();
        } else {
          $(".button_" + (i + 1)).addClass("incorrect");
          $(".feedback_container").addClass('incorrect show');
          $(".feedback_container .feedback").html(feedbacks[i]);
          $(".nav_btn.next_btn").hide();
          $(".nav_btn.prev_btn").show();
        }
      }
    });
  }
});