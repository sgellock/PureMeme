chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	
  if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		console.log("About to purify things for you...");
		// ----------------------------------------------------------

    // using jQuery
    var $evilDiv        = $('#topcol23');
    var $goodDiv        = $('#topcol1');
    var $inlineEvilDivs = $('.itc1 .rsp');  // inline recent sponsor posts

    if($evilDiv.length && $goodDiv.length) {
      $evilDiv.fadeOut(function() {
        $goodDiv.animate({width: "100%"});
      });
    }

    if($inlineEvilDivs.length) {
        $inlineEvilDivs.hide();
    }
    


    // // if you don't want to use jQuery
    // var evilDiv = document.getElementById("topcol23");
    // if(evilDiv) {
    //    evilDiv.style.display = "none";
    // }

    // var goodDiv = document.getElementById("topcol1");
    // if(goodDiv) {
    //    goodDiv.style.width = "100%";
    // }

    // var inlineEvilDivs = document.getElementByClassName("itc1 rsp");
    // if(inlineEvilDivs) {
    //    inlineEvilDivs.style.display = "none";
    // }


	}}, 10);
});

