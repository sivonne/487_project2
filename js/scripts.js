$(function(){
  /*Plug in for Slider, horizontal functionality*/
  $('section').horizon();

  //Plugin for Cool Modal Windows, tells the modal what to do when button is clicked:
  $("#demo01").animatedModal();
  $("#demo02").animatedModal({
    modalTarget:'modal-02',
    animatedIn:'lightSpeedIn',
    animatedOut:'bounceOutDown',
    color:'#3498db',
    // Callbacks
    beforeOpen: function() {
      console.log("The animation was called");
    },
    afterOpen: function() {
      console.log("The animation is completed");
    },
    beforeClose: function() {
      console.log("The animation was called");
    },
    afterClose: function() {
      console.log("The animation is completed");
    }
  });
  $("#demo03").animatedModal({
    modalTarget:'modal-03',
    animatedIn:'lightSpeedIn',
    animatedOut:'bounceOutDown',
    color:'#3498db',
    // Callbacks
    beforeOpen: function() {
      console.log("The animation was called");
    },
    afterOpen: function() {
      console.log("The animation is completed");
    },
    beforeClose: function() {
      console.log("The animation was called");
    },
    afterClose: function() {
      console.log("The animation is completed");
    }
  });
  $("#demo04").animatedModal({
    modalTarget:'modal-04',
    animatedIn:'lightSpeedIn',
    animatedOut:'bounceOutDown',
    color:'#3498db',
    // Callbacks
    beforeOpen: function() {
      console.log("The animation was called");
    },
    afterOpen: function() {
      console.log("The animation is completed");
    },
    beforeClose: function() {
      console.log("The animation was called");
    },
    afterClose: function() {
      console.log("The animation is completed");
    }
  });
  $("#demo05").animatedModal({
    modalTarget:'modal-05',
    animatedIn:'lightSpeedIn',
    animatedOut:'bounceOutDown',
    color:'#3498db',
    // Callbacks
    beforeOpen: function() {
      console.log("The animation was called");
    },
    afterOpen: function() {
      console.log("The animation is completed");
    },
    beforeClose: function() {
      console.log("The animation was called");
    },
    afterClose: function() {
      console.log("The animation is completed");
    }
  });


  //tells the button on the main page to go to page 2 when clicked
  $(document).on('click', '.go-to-1', function () {
    $(document).horizon('scrollTo', 'section-groening');
  });


  /*Plugin for Font-Resizing for Responsiveness, setting sizes for different device sizes:*/

  $(function() {
    $('h3').fontFlex(40, 60, 90);
    $('.trait-list').fontFlex(12,22,40);
    $('#information').fontFlex(12,15,20);
    $('#coding').fontFlex(12,15,20);
    $('#images').fontFlex(12,15,20);

  });

  /*Quiz Plugin*/
  // Quiz result options in a separate object for flexibility
  var resultOptions = [
    {   title: 'You Are a Homer',
    desc: '<p>Here, have a Donut</p><img src="img/donut.jpeg"/>'},
    {   title: 'You Are a Bender',
    desc: '<p>Here, have an Beer</p><img src="img/beer.jpg"/>'},
    {   title: 'You Are a Fry (no not the snack!)',
    desc: '<p>Here, have some pizza!</p><img src="img/pizza.jpg"/>'},
    {   title: 'You Are a Marge!',
    desc: '<p>Here, have some Tea</p><img src="gif/marge.gif"/>'},
    {   title: 'You Are A Binky (hehe)',
    desc: '<p>Here, have a binky.</p><img src="img/binky.gif"/>'}
  ];

  // global variables
  var quizSteps = $('#quizzie .quiz-step'),
  totalScore = 0;

  // for each step in the quiz, add the selected answer value to the total score
  // if an answer has already been selected, subtract the previous value and update total score with the new selected answer value
  // toggle a visual active state to show which option has been selected
  quizSteps.each(function () {
    var currentStep = $(this),
    ansOpts = currentStep.children('.quiz-answer');
    // for each option per step, add a click listener
    // apply active class and calculate the total score
    ansOpts.each(function () {
      var eachOpt = $(this);
      eachOpt[0].addEventListener('click', check, false);
      function check() {
        var $this = $(this),
        value = $this.attr('data-quizIndex'),
        answerScore = parseInt(value);
        // check to see if an answer was previously selected
        if (currentStep.children('.active').length > 0) {
          var wasActive = currentStep.children('.active'),
          oldScoreValue = wasActive.attr('data-quizIndex'),
          oldScore = parseInt(oldScoreValue);
          // handle visual active state
          currentStep.children('.active').removeClass('active');
          $this.addClass('active');
          // handle the score calculation
          totalScore -= oldScoreValue;
          totalScore += answerScore;
          calcResults(totalScore);
        } else {
          // handle visual active state
          $this.addClass('active');
          // handle score calculation
          totalScore += answerScore;
          calcResults(totalScore);
          // handle current step
          updateStep(currentStep);
        }
      }
    });
  });

  // show current step/hide other steps
  function updateStep(currentStep) {
    if(currentStep.hasClass('current')){
      currentStep.removeClass('current');
      currentStep.next().addClass('current');
    }
  }

  // display scoring results
  function calcResults(totalScore) {
    // only update the results div if all questions have been answered
    if (quizSteps.find('.active').length == quizSteps.length){
      var resultsTitle = $('#results h1'),
      resultsDesc = $('#results .desc');

      // calc lowest possible score
      var lowestScoreArray = $('#quizzie .low-value').map(function() {
        return $(this).attr('data-quizIndex');
      });
      var minScore = 0;
      for (var i = 0; i < lowestScoreArray.length; i++) {
        minScore += lowestScoreArray[i] << 0;
      }
      // calculate highest possible score
      var highestScoreArray = $('#quizzie .high-value').map(function() {
        return $(this).attr('data-quizIndex');
      });
      var maxScore = 0;
      for (var i = 0; i < highestScoreArray.length; i++) {
        maxScore += highestScoreArray[i] << 0;
      }
      // calc range, number of possible results, and intervals between results
      var range = maxScore - minScore,
      numResults = resultOptions.length,
      interval = range / (numResults - 1),
      increment = '',
      n = 0; //increment index
      // incrementally increase the possible score, starting at the minScore, until totalScore falls into range. then match that increment index (number of times it took to get totalScore into range) and return the corresponding index results from resultOptions object
      while (n < numResults) {
        increment = minScore + (interval * n);
        if (totalScore <= increment) {
          // populate results
          resultsTitle.replaceWith("<h1>" + resultOptions[n].title + "</h1>");
          resultsDesc.replaceWith("<p class='desc'>" + resultOptions[n].desc + "</p>");
          return;
        } else {
          n++;
        }
      }
    }
  }



});
