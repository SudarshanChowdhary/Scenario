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
				setTimeout(function(){ $('h3').focus(); }, 400);


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

				$("#customRadioGroup li").on("click", function(event) {
					
					$(".feedback_container").removeClass('correct');
					$(".feedback_container").removeClass('incorrect');
					$(".feedback_container").removeClass('show');
					$(".blue_button_active").removeClass("correct");
					$(".blue_button_active").removeClass("incorrect");
				$("#customRadioGroup li").attr("tabindex","-1");
				$("#customRadioGroup li").attr("aria-checked","false");
				$(this).attr("tabindex","0");
				$(this).attr("aria-checked","true");
				$(this).focus();
				if ($(this).attr('aria-checked')=="true") {
					
						var i = parseInt($(this).attr('count'));
						//alert(i);
						if(slides[currentSlide].answer=='0'){
							$(".nav_btn.prev_btn").hide();
						}
						if (i == slides[currentSlide].answer) { //change the scenario id
							$(".button_" + (i + 1)).addClass("correct");
							$(".feedback_container").addClass('correct show');
							$(".feedback_container .feedback").html(feedbacks[i]);
							$(".nav_btn.next_btn").show();
							setTimeout(function(){ $('#answer-sel').empty().text('Selection is Correct'); }, 500);
						} else {
							$(".button_" + (i + 1)).addClass("incorrect");
							$(".feedback_container").addClass('incorrect show');
							$(".feedback_container .feedback").html(feedbacks[i]);
							$(".nav_btn.next_btn").hide();
							slides[currentSlide].answer=='0' ? $(".nav_btn.prev_btn").hide() : $(".nav_btn.prev_btn").show();
							setTimeout(function(){ $('#answer-sel').empty().text('Selection is Wrong'); }, 500);
							setTimeout(function(){ $('#answer-sel').empty(); }, 700);
							
						}
					}
			});

			$("#customRadioGroup li").on("keydown", function(event) {
				switch(event.keyCode){
					case 39:
					case 40:
						if( $(this).next().length==0 ){
							$(this).parent().find(":first").click();
						}else{
							$(this).next().click();	
						}
						event.preventDefault();
						break;
					case 37:
					case 38:
						if( $(this).prev().length==0 ){
							$(this).parent().find(":last").click();
						}else{
							$(this).prev().click();	
						}
						event.preventDefault();
						break;
					case 32:
						$(this).click();
						event.preventDefault();
						break;
				}
			});
			}