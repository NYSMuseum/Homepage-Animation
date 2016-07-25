/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
       // insert code to be run when the composition is fully loaded here
       
		var stage;

		var currentSlide, oldSlide, slideDraggable, isDevice, interactionDown, interactionUp, interactionOver, interactionMove;

		//store references to all the image symbols we create
		var slideSymbolArray = [];

		//store references to all the page button symbols we create
		var pageButtonSymbolsArray = [];


		//this is the main container symbol (and a variable to store its symbol element) that will hold all the images
		var mainContainerSymbol, sliderHolder, mainContainerWidth;

		//this is the page button container symbol that will hold all the page buttons
		var pageButtonContainer, pageButtonContainerElement, pageButtonContainerWidth;


		//variables that store the stage's width and height. These will be set in init() once the document has loaded everything
		var stageWidth, stageHeight;


		//id of the current image being displayed
		var currentImageId;

		//the current page button 
		var currentPageButton, oldPageButton;


		//the back and next arrows (these are DIV groups on the timeline NOT symbols)
		var backArrow, nextArrow;

		//******************* CHANGES THESE VALUES*********************************************************************************
		                                                                                                                           //*

		//create a variable that will store the URLS for any nested buttons (google.com would be assigned to a btn in the first slider etc)
		var SLIDER_BTN_URLS = ['http://www.google.com', 'http://www.codecanyon.net/user/chrisgannon', 'http://chrisgannon.wordpress.com', 'http://gannon.tv' ];

		//space between the page buttons
		var PAGE_BUTTON_SPACER = 5;

		//the ease you want for the slide - here are some examples
		//SLIDE_EASE = Power.easeOut;
		//SLIDE_EASE = Elastic.easeOut;
		SLIDE_EASE = Back.easeOut.config(0.61);

		//this will automatically progress to the next slide 
		var AUTO_SLIDE = true;

		//the interval for AUTO_SLIDE in secs
		var AUTO_SLIDE_INTERVAL = 8;

		//set NUM_SLIDES - you will need to ensure there are 4 slides in in the library called SlideSymbol0, SlideSymbol1, SlideSymbol2, SlideSymbol3 etc (zero based)
		var NUM_SLIDES = 4;

		//the amount of deceleration of the slides when thrown - default is 1000 - larger values decelerate more quickly
		var THROW_RESISTANCE = 8000;

		//the amount of overbounce the slides have when dragged - larger values means
		var EDGE_RESISTANCE = 0.61;


		//******************* CHANGES THESE VALUES*********************************************************************************




         //YepNope is a built-in utility that loads scripts. It has a 'complete' event that fires when all the scripts are loaded.
         //Here the 'init' function fires once Greensock's library has loaded 
         yepnope(

            {

            nope:[

		//***Instructions on working with this file locally***
		//If you are working locally add these files in the "scripts tabs"
		//Click the + sign and select "add js from disk
		//add /JS/devloader.js

		//then, UNcomment this line

	//	"http://www.nysm.nysed.gov/sites/all/themes/nysm/homepageanimation/js/ThrowPropsPlugin.min.js"

		//and comment this one
      "/sites/all/themes/nysm/homepageanimation/js/ThrowPropsPlugin.min.js"

      //Please remember to delete the added script declaration and undo comment when putting this on production!!!

            ] ,

            complete: init

            }
         )



         function init (){



            isDevice = (/android|webos|iphone|ipad|ipod|blackberry/i.test(navigator.userAgent.toLowerCase()));              


            if(isDevice) {

              interactionUp = "touchend";
              interactionDown = "touchstart";
              interactionOver = interactionDown;
              interactionMove = 'touchmove';

            } else {

              interactionUp = "mouseup";
              interactionDown = "mousedown";
              interactionOver = "mouseover";
              interactionMove = 'mousemove';

            };

            stage = $("#Stage");

            //this is the way you refer to the stage in Edge Animate
            stageWidth = stage.width();
            stageHeight = stage.height();

            currentSlide = 0;
            oldSlide = -1;

         	//references to back and next arrows
            backArrow = sym.$("backArrow");
            nextArrow = sym.$("nextArrow");

            //reference to the DIV on the stage that will contain all the slider symbols
            sliderHolder = sym.$("sliderHolder");


            createSlides();
            createPageButtons();
            enableUI();

         }

         function createSlides(){


            for(var i = 0; i < NUM_SLIDES; i++){

              var tempSymbol = sym.createChildSymbol("SlideSymbol" + i, sliderHolder);
              var tempElement = tempSymbol.getSymbolElement();

              //if there's a button called btn in the slide...
              if(tempSymbol.$('btn')){              		
              	//...add a click URL to it	
	            tempSymbol.$('btn').bind(interactionUp, {id:i}, clickNestedBtn);	
              }

              TweenMax.set(tempElement, {css:{
                position:'absolute',
                x:stageWidth * i
              }});

              slideSymbolArray.push(tempSymbol);
            }


            mainContainerWidth = sliderHolder[0].scrollWidth;
            sliderHolder[0].style.width = mainContainerWidth + 'px';

            slideDraggable = Draggable.create(sliderHolder, {

                bounds:{maxX:0, minX:(-mainContainerWidth)+ stageWidth},
                type:'x',
                //the minimum duration it will be thrown for
                minDuration:0.6,
                //the maximum duration it will be thrown for
                maxDuration:1,
                //if you want a normal cursor (rather than the dragging cursor) enable this
                cursor:'arrow',
                throwProps:true,
                edgeResistance:EDGE_RESISTANCE,
                throwResistance:THROW_RESISTANCE,
                onDrag:onSlideDragUpdate,
                onDragStart:disableUI, 
                //can you drag nested links? True means you can         
                dragClickables:false,
                onThrowUpdate:onSlideDragUpdate,
                onThrowComplete:onSlideThrowComplete,
                //change your ease by editing SLIDE_EASE - there are some other examples at the top of this page
                ease:SLIDE_EASE,
                zIndexBoost:false, 
                snap:function(endValue){

                  return Math.round(endValue/stageWidth) * stageWidth
                }
            }

              )//end Draggable

            //this will only work if AUTO_SLIDE is true
            doAutoNext();



        }

        function clickNestedBtn (e){

        	var id = e.data.id;

        	location.href = SLIDER_BTN_URLS[id];
        }

        function disableUI(){

			TweenMax.killDelayedCallsTo(doNext);        	
        	nextArrow.unbind(interactionUp);
        	backArrow.unbind(interactionUp);

        }

        function enableUI(){

            nextArrow.bind(interactionUp, {direction:'next'}, doNext);
            backArrow.bind(interactionUp, {direction:'back'}, doNext);

        }

        function onSlideDragUpdate(){


          //console.log(this)
        }

      function onSlideThrowComplete(e){  



            var slideId = -Math.round((sliderHolder[0]._gsTransform.x)/stageWidth );

            if( slideId == currentSlide && oldSlide != -1){

              //console.log("DON'T ANIMATE");

            } else {

              //tell the old slide to go back to the start
              oldSlide = currentSlide;
              slideSymbolArray[oldSlide].stop(0);

              currentSlide = slideId;
              slideSymbolArray[currentSlide].play(0);

              setPageButtonSelected({data:{id:slideId}});
            }

            //regardless, enableUI()
            enableUI();

            doAutoNext();

      }
         function createPageButtons(){


            //var buttonHolder = $("<div>");
            pageButtonContainer = sym.createChildSymbol("PageButtonContainerSymbol", stage);
            pageButtonContainerElement = pageButtonContainer.getSymbolElement();

            for(var i = 0; i < NUM_SLIDES; i++){

              //create page button symbol and add them to the container
              var pageButton = sym.createChildSymbol("PageButtonSymbol", pageButtonContainerElement);

              var pageButtonElement = pageButton.getSymbolElement();

              //
              pageButtonSymbolsArray.push(pageButton);

              pageButtonElement.bind(interactionUp, {id:i}, clickPageBtn);

               //set the cursor pointer - Edge Animate's cursor pointer setting can be unreliable
              //TweenMax.set(pageButtonElement, {css:{'cursor':'pointer'}});

              //lay them out
              TweenMax.set(pageButtonElement, {css:{
                position:"absolute", 
                alpha:0.5, 
                x:(pageButtonElement.width() + PAGE_BUTTON_SPACER) * i,
              }});


            }


            //update the width of pageButtonContainer to reflect all the new buttons inside it
            pageButtonContainerWidth = pageButtonContainerElement[0].scrollWidth;
            pageButtonContainerElement.css('width', pageButtonContainerWidth + 'px');

            //position the pageButtonContainer in the centre
            TweenMax.set(pageButtonContainerElement, {css:{
              x:(stageWidth/2) - (pageButtonContainerElement.width()/2),
              y:stageHeight - (pageButtonContainerElement.height()*1.4)
            }});


            currentPageButton = pageButtonSymbolsArray[currentSlide].getSymbolElement();
            currentPageButton.trigger(interactionUp);

         }

         function clickPageBtn (e){

			     TweenMax.killDelayedCallsTo(doNext);

            setPageButtonSelected(e);

            var pageButtonId = e.data.id;


            var slideId = -Math.round((sliderHolder[0]._gsTransform.x)/stageWidth );

            TweenMax.to(sliderHolder, 0.8, {css:{
              x:-(pageButtonId * stageWidth)
            }, ease:SLIDE_EASE,
            onComplete:onSlideThrowComplete,
            onCompleteScope:slideDraggable[0]
          });


         }

         function setPageButtonSelected(e){

            //console.log("setPageButtonSelected")
            var pageButtonId = e.data.id;
            oldPageButton = currentPageButton;

            TweenMax.set(oldPageButton, {css:{
              alpha:0.5
            }});

            currentPageButton = pageButtonSymbolsArray[pageButtonId].getSymbolElement();

            TweenMax.set(currentPageButton, {css:{
              alpha:1
            }});


         }

         function doAutoNext(){

         	 if(AUTO_SLIDE)	{

            	TweenMax.delayedCall(AUTO_SLIDE_INTERVAL, doNext, [{data:{direction:'next'}}] );
            }


         }

         function doNext (e){


          var direction = e.data.direction;

          var destSlideId;

         	//console.log(direction);

         	switch (direction){

         		case "next":

		         	destSlideId = ((currentSlide+1) == NUM_SLIDES) ? 0 : currentSlide+1;
		         	clickPageBtn({ data:{id:destSlideId}});

         		break;
         		default:

         			//console.log("default: " + (currentSlide-1));
		         	destSlideId = ((currentSlide-1) < 0) ? NUM_SLIDES-1 : currentSlide-1;
		         	clickPageBtn({ data:{id:destSlideId}});

         	}


         }


      });
      //Edge binding end



   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'Holder'
   (function(symbolName) {   
   
   })("MainContainerSymbol");
   //Edge symbol end:'MainContainerSymbol'

   //=========================================================
   
   //Edge symbol: 'PageBtn'
   (function(symbolName) {   
   
   })("PageButtonSymbol");
   //Edge symbol end:'PageButtonSymbol'

   //=========================================================
   
   //Edge symbol: 'PageBtnContainer'
   (function(symbolName) {   
   
   })("PageButtonContainerSymbol");
   //Edge symbol end:'PageButtonContainerSymbol'

   //=========================================================
   
   //Edge symbol: 'SlideSymbol2'
   (function(symbolName) {   
   
  

      Symbol.bindElementAction(compId, symbolName, "${Rectangle4}", "click", function(sym, e) {
         // insert code for mouse click here
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute)
         window.open("exhibitions/st-pauls-chapel-place-refuge", "_self");
         

      });
      //Edge binding end

   })("SlideSymbol2");
   //Edge symbol end:'SlideSymbol2'

   //=========================================================
   
   //Edge symbol: 'SlideSymbol3'
   (function(symbolName) {   
   
   })("SlideSymbol34");
   //Edge symbol end:'SlideSymbol34'

   //=========================================================
   
   //Edge symbol: 'SlideSymbol3_1'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Rectangle7}", "click", function(sym, e) {
         // insert code for mouse click here
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute)
         window.open("exhibitions/represent-contemporary-native-american-art", "_self");
         

      });
      //Edge binding end

      })("SlideSymbol3");
   //Edge symbol end:'SlideSymbol3'

   //=========================================================
   
   //Edge symbol: 'SlideSymbol1_1'
   (function(symbolName) {   
   
      

      Symbol.bindElementAction(compId, symbolName, "${Rectangle}", "click", function(sym, e) {
         // insert code for mouse click here
         window.open("exhibitions/best-suny-student-art-exhibition-2016", "_self");

      });
      //Edge binding end

      })("SlideSymbol0");
   //Edge symbol end:'SlideSymbol0'

   //=========================================================
   
   //Edge symbol: 'SlideSymbol0_1'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Rectangle5}", "click", function(sym, e) {
         // insert code for mouse click here
         
         // Navigate to a new URL in the current window
         // (replace "_self" with appropriate target attribute)
         window.open("exhibitions/imaging-american-west-selections-metropolitan-museum-art", "_self");

      });
         //Edge binding end

         })("SlideSymbol1");
   //Edge symbol end:'SlideSymbol1'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-351832807");