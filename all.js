$(document).ready(function(){
				//Examples of how to assign the Colorbox event to elements
				$(".group1").colorbox({rel:'group1'});     //¹w³]¬° Elastic Transition
				$(".group2").colorbox({rel:'group2', transition:"fade", width:"75%", height:"75%"});
				$(".group3").colorbox({rel:'group3', transition:"none", width:"75%", height:"75%"});
				$(".group4").colorbox({rel:'group4', slideshow:true});
			});