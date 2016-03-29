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