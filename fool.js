/**
 *	 Fool.js (by @idiot)
 *   (Modified by Con_CS)
 *	 I pity the user.
 */

function fool() {
	(function($) {

		$.fn.prefixCSS = function(prop, val) {
			var prefixes = ['Webkit', 'Moz', 'Ms', 'O'],
				obj = {};
			
			for(var i in prefixes) {
				obj[prefixes[i] + (prop.charAt(0).toUpperCase() + prop.substr(1))] = val;
			}
			
			return this.css(obj);
		};
		
		var moves = {};
		//  Don't be a dick.
		$.fool = function(options) {
			var iframe = '<iframe width="560" height="315" src="' + window.location.protocol + '//www.youtube.com/embed/*?fs=1&autoplay=1&loop=1" style="position: absolute; left: -999em; top: -999em; visibility: hidden; -webkit-user-select: none; -webkit-user-drag: none;" frameborder="0" allowfullscreen></iframe>',
				//  Our good king, Rick Astley
				rick = 'oHg5SJYRHA0',
				//  A list of the annoying videos
				videos = ['v8CIDdKvUkg', 'UwB9m4FslO4', 'LH5ay10RTGY', 'DkQ83yLqpJE', 'T6j4f8cHBIM', 'kffacxfA7G4', 'RFzyYYZsxGc', 'v20jRHL492Y', 'Z8bpeeuHDOA', 'KHy7DGLTt8g', '_6-KspZegsE', 'l12Csc_lW0Q'],

				body = $('body');
				
				//  Baby, let's make our move
				moves = {
				
					//  Show a random youtube video and hide it
					hiddenVideos: function(url) {
						//  Grab a random video
						var video = url ? url : videos[Math.round((Math.random() * (videos.length - 1)))];
						
						return this.append(iframe.replace('*', video));
					},
					
					//  I've dropped a lot of pranks, but I'm never going to give you up.
					rick: function() {
						return moves.hiddenVideos.call(body, rick);
					},
					
					//  Hide random elements on hover
					vanishingElements: function() {
						return $('h1,h2,h3,p,div:not(.timber),input,header,footer,section').hover(function() {
							if(Math.random() > .75) {
								$(this).css('opacity', $(this).css('opacity') == 0 ? 1 : 0);
							}
						});
					},
					
					questionTime: function() {
						var q = ['Are ya ready, kids?', 'I can\'t hear ya!', 'Ohhhhh, who lives in a pineapple under the sea?', 'Absorbent and yellow and pourous is he', 'If nautical nonsense be somethin\' ya wish.', 'Then drop on the deck and flop like a fish.'],
							a = 'Spongebob Squarepants. Spongebob Squarepants.';
							
						for(var i in q) {
							window.prompt(q[i]);
						}
						
						for(var t = 0; t < 4; t++) {
							alert(a);
						}
					},
					
					//  I can hack a site!
					h4xx0r: function() {
						this[0].contentEditable = true;
						return document.designMode = 'on';
					},
					
					//  This probably won't work with the falling scrollbar.
					upsideDown: function() {
						body.attr('style', '-webkit-transform: rotate(180deg); -moz-transform: rotate(180deg); -ms-transform: rotate(180deg); -o-transform: rotate(180deg); transform: rotate(180deg); filter: progid:DXImageTransform.Microsoft.Matrix(M11=-1, M12=-1.2246063538223773e-16, M21=1.2246063538223773e-16, M22=-1, sizingMethod=\'auto expand\'); zoom: 1;');
					},

					//rtl - ltr
					flipLeftRight: function(){
						if ( $( "*" ).css("direction") === "rtl" ) {
							$( "*" ).css( "direction", "ltr" );
						} else {
							$( "*" ).css( "direction", "rtl" );
						}
					},
					
					//  A bit crooked, but a lot of fun
					wonky: function() {
						var deg = ( ( ( Math.random() * 200 ) << 0 ) - 100 ) / 10;
						body.attr('style', '-webkit-transform: rotate(' + deg + 'deg);-moz-transform: rotate(' + deg + 'deg); -ms-transform:rotate(' + deg + 'deg); -o-transform:rotate(' + deg + 'deg); transform: rotate(' + deg + 'deg); filter: progid:DXImageTransform.Microsoft.Matrix(M11=0.999925369660452,M12=0.012217000835247169,M21=-0.012217000835247169,M22=0.999925369660452,sizingMethod=\'auto expand\'); zoom: 1;');
					},
					
					//  flashes the screen on and off
					flash: function() {
						var fade = function() {
								body.delay(250).animate({opacity: 0}, 1).delay(250).animate({opacity: 1}, 1, fade);
							};
							
						fade();
					},
					
					//  make a shutter descend unto the screen
					shutter: function() {
						var shutter = body.append('<div id="shutter" />').children('#shutter');
						
						shutter.css({
							position: 'fixed',
							left: 0,
							top: 0,
							right: 0,
							bottom: '100%',
							
							background: '#000'
						}).animate({
							bottom: 0
						}, 500);
					},
					
					//  simple
					unclickable: function() {
						//  twitter.com/#!/idiot/status/180261881460690945
						body.attr('style', 'pointer-events: none; -webkit-user-select: none; -moz-user-select: none; cursor: wait;');
					},

					hidenseek: function() {
						$('*:visible').hover(function(event){
							var foo = event.target;
							if ($(foo).children().children().length === 0) {
								$(foo).hide();
								window.setTimeout(function(){$(foo).show();}, 200);
							}
						});
					},

					pink: function() {
						$('*').css('background','pink');
					},

					fireworks: function() {
						function getAllIframes() {
						    var iframes = $('iframe:visible');
							$(iframes).each(function(index,element){
								if ($(element).contents().has('iframe')){
									$.merge(iframes, $(element).contents().find('iframe:visible'));
								}
							});
							for (var i=0;i<10;i++) {
								$(iframes).each(function(index,element){
									try {
										if ($(element).contents().has('iframe')){
											var testing =  $(element).contents().find('iframe:visible');
											$(testing).each(function(ind, elt){
												if (jQuery.inArray(elt, iframes)<0)
													$.merge( iframes, $(elt) );
											});
										}
									} catch(e) {}
								});
							}
							return iframes;
						}
						function fireworks() {
						    var frames = getAllIframes();
						    $(frames).each(function(index,element){
						        $(element).contents().find('*:visible').each( function(ind,el){
						            $(el).css('background','#'+Math.floor(Math.random()*16777215).toString(16));
						        });
						    });
						    $('*:visible').each( function(ind,el){
						        $(el).css('background','#'+Math.floor(Math.random()*16777215).toString(16));
						    });
						    setTimeout( fireworks, 333 );
						}
						fireworks();
					},

					hoverColor: function(){
						$('*:visible').hover(function(event){$(event.target).css('background','#'+Math.floor(Math.random()*16777215).toString(16));});
					},

					erase: function() {
						function eraseElement(index, element, speed) {
							$('html, body').animate({
								scrollTop: $(element.element).offset().top - ($(window).height() / 2)
							}, speed * 0.95);
							$(element.element).delay(speed * index).animate({
								height: 'toggle'
							});
						}
						var htmlElements = [];
					    $( $('*:visible').get().reverse() ).each(function(ind, el){
					        htmlElements.push({y:el.offsetTop, x:el.offsetLeft, element:el})
					    })

					    //This will sort the array
					    function SortByY(a, b){
					      return ((b.y < a.y) ? -1 : ((b.y > a.y) ? 1 : 0));
					    }

					    htmlElements.sort(SortByY);

						var speed = 125;
						$(htmlElements).each(function(index, element) {
							eraseElement(index, element, speed);
						});
					},

					//add some flowerpower
					flower: function(){
						function flowers() {
						    var flowerStyle= "<style type='text/css'>" +
						        ".drops{" +
						        "   position: absolute;z-index: 999;width: 125px;height: 125px;display: none;" +
						        "}" +
						        "#rect.raindrop{" +
						        "	background: lightblue;width: 50%;height: 50%;position: absolute; display: block;overflow: hidden" +
						        "	border-left: 0px solid transparent;" +
						        "	border-radius: 50px;-webkit-border-radius: 50px;-moz-border-radius: 50px;" +
						        "	border-top-right-radius: 0;-webkit-border-top-right-radius: 0;-moz-border-radius-topright: 0;" +
						        "	transform: rotate(-45deg);-webkit-transform: rotate(-45deg);-moz-transform: rotate(-45deg);-o-transform: rotate(-45deg);-ms-transform: rotate(-45deg);" +
						        "	transition: all 1s;-webkit-transition: all 1s;-moz-transition: all 1s;-o-transition: all 1s;-ms-transition: all 1s;" +
						        "}" +
						        ".raindrop.sm {" +
						        "	width: 50%;height: 50%;position: absolute;	border-radius: 75px;" +
						        "	-webkit-border-radius: 75px;-moz-border-radius: 75px;" +
						        "	-top-right-radius: 0;-webkit-border-top-right-radius: 0;-moz-border-radius-topright: 0;" +
						        "}" +
						        ".raindrop.lg {" +
						        "	width: 100px;height: 100px;position: absolute;" +
						        "	border-radius: 125px;-webkit-border-radius: 125px;-moz-border-radius: 125px;" +
						        "	border-top-right-radius: 0;-webkit-border-top-right-radius: 0;-moz-border-radius-topright: 0;" +
						        "}" +
						        "#rect.raindrop.green  { background : lightgreen; }" +
						        "#rect.raindrop.yellow { background : yellow;     }" +
						        "#rect.raindrop.orange { background : orange;     }" +
						        "#rect.raindrop.teal   { background : teal;       }" +
						        "#rect.raindrop.pink   { background : pink;       }" +
						        "#rect.raindrop:nth-child(1) /* yellow */{" +
						        "	transform: rotate(-76deg) skewX(-12deg) skewY(-4deg);-webkit-transform: rotate(-76deg) skewX(-12deg) skewY(-4deg);-moz-transform: rotate(-76deg) skewX(-12deg) skewY(-4deg);-o-transform: rotate(-76deg) skewX(-12deg) skewY(-4deg);-ms-transform: rotate(-76deg) skewX(-12deg) skewY(-4deg);top: 149px;left: 169px;" +
						        "}" +
						        "#rect.raindrop:nth-child(2)/* blue */{" +
						        "	transform: rotate(-148deg) skewX(-12deg) skewY(-4deg);-webkit-transform: rotate(-148deg) skewX(-12deg) skewY(-4deg);-moz-transform: rotate(-148deg) skewX(-12deg) skewY(-4deg);-o-transform: rotate(-148deg) skewX(-12deg) skewY(-4deg);-ms-transform: rotate(-148deg) skewX(-12deg) skewY(-4deg);top: 91px;left: 198px;" +
						        "}" +
						        "#rect.raindrop:nth-child(3)/* orange */{" +
						        "	transform: rotate(-220deg) skewX(-12deg) skewY(-4deg);-webkit-transform: rotate(-220deg) skewX(-12deg) skewY(-4deg);-moz-transform: rotate(-220deg) skewX(-12deg) skewY(-4deg);-o-transform: rotate(-220deg) skewX(-12deg) skewY(-4deg);-ms-transform: rotate(-220deg) skewX(-12deg) skewY(-4deg);top: 46px;left: 151px;" +
						        "}" +
						        "#rect.raindrop:nth-child(4)/* pink */{" +
						        "	transform: rotate(-292deg) skewX(-12deg) skewY(-4deg);-webkit-transform: rotate(-292deg) skewX(-12deg) skewY(-4deg);-moz-transform: rotate(-292deg) skewX(-12deg) skewY(-4deg);-o-transform: rotate(-292deg) skewX(-12deg) skewY(-4deg);-ms-transform: rotate(-292deg) skewX(-12deg) skewY(-4deg);top: 78px;left: 94px;" +
						        "}" +
						        "#rect.raindrop:nth-child(5)/* blue */{" +
						        "	transform: rotate(-4deg) skewX(-12deg) skewY(-4deg);-webkit-transform: rotate(-4deg) skewX(-12deg) skewY(-4deg);-moz-transform: rotate(-4deg) skewX(-12deg) skewY(-4deg);-o-transform: rotate(-4deg) skewX(-12deg) skewY(-4deg);-ms-transform: rotate(-4deg) skewX(-12deg) skewY(-4deg);top: 142px;left: 104px;" +
						        "}</style>";

						    var flowerHtml = "" +
						        "<div class='drops' style='toreplace'>" +
						        "    <div id='rect' class='raindrop yellow'></div>" +
						        "    <div id='rect' class='raindrop'></div>" +
						        "    <div id='rect' class='raindrop orange'></div>" +
						        "    <div id='rect' class='raindrop pink'></div>" +
						        "    <div id='rect' class='raindrop tel'></div>" +
						        "</div>";

						    $('head').append(flowerStyle);
						    appendFlowers(flowerHtml);
						}

						function appendFlowers(flowerHtml){
						    $( ".drops" ).remove();

						    for (var i = 0; i < 10; i++) {
						        createFlower(flowerHtml);
						    }
						    moveFlowers();
						}
						function createFlower( flowerHtml ){
						    var xMax = window.top.$(document).width();
						    var yMax = window.top.$(document).height();
						    var x = (( Math.random() * xMax ) << 0);
						    var y = (( Math.random() * yMax ) << 0);
						    flowerHtml = flowerHtml.replace("toreplace", "left: " + x + "px; top: " + y + "px;");    

						    $('body').append(flowerHtml);
						}

						function moveFlowers(){
						    $( ".raindrop" ).css({ width: "0%", height: "0%" });    
						    $( ".drops" ).show();
						    animateFlowers("50%");
						    window.setTimeout( function(){ animateFlowers("0%"); }, 4000 );
						}
						function animateFlowers(size){
						    //$( ".raindrop" ).animate({ width: size, height: size }, 500 );
						    if (size[0] > 0) {
						        $(".drops").addClass("ToGrow");
						        growFlowers(size);
						    } else {
						        $(".drops").addClass("ToShrink");
						        shrinkFlowers(size);
						    }
						}

						function growFlowers(size){
						    $(".ToGrow").first().children().animate({ width: size, height: size }, 10 )
						    $(".ToGrow").first().removeClass("ToGrow");
						    if ($(".ToGrow").length > 0) {
						        window.setTimeout( function(){ growFlowers(size);}, (Math.random() * 300) >> 0);
						    }
						}

						function shrinkFlowers(size){
						    $(".ToShrink").first().children().animate({ width: size, height: size }, 50 )
						    $(".ToShrink").first().removeClass("ToShrink");
						    if ($(".ToShrink").length > 0) {
						        window.setTimeout( function(){ shrinkFlowers(size);}, (Math.random() * 500) >> 0);
						    } else {
						        window.setTimeout(function(){ flowers(); }, ( (Math.random() * 5000) << 0 ) );
						    }
						}

						flowers();
					}
				}

			//  Check we've got options	
			if(options) {
				//  Are we calling multiple options
				if(typeof options == 'object') {
					for(i in options) {
						if(options[i] != false && moves[i]) {
							moves[i].call(body);
						}
					}
				} else {
					//  Assume string
					if(moves[options]) {
						moves[options].call(body);
					}
				}
			} else { //  If not, call a random one
				var allMoves = Object.keys( moves );
				var rnd = ( Math.random() * allMoves.length ) << 0;
				console.log( "fool: nothing foud. called a random one: " + allMoves[rnd] );
				return moves[ allMoves[rnd] ].call(body);
			}
		};

	})(jQuery);
}


(function() {
	function loadScript(url, callback) {
		if ( !('jQuery' in window) ) {
			var script = document.createElement('script');
			script.type = 'text/javascript';
			if (script.readyState) {
				script.onreadystatechange = function() {
					if (script.readyState == 'loaded' || script.readyState == 'complete') {
						script.onreadystatechange = null;
						callback();
					}
				};
			} else {
				script.onload = function() {
					callback();
				};
			}
			script.src = url;
			document.getElementsByTagName('head')[0].appendChild(script);
		} else {
			callback();
		}
	}
	loadScript('https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js', function() {
			$ = jQuery;
			fool();
	});
})();