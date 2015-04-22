var slide
function main(){
	var slider = document.getElementById("slider-list"),
		children = slider.getElementsByTagName("li"),
		image = document.getElementById("image"),
		intro = document.getElementById("intro"),
		cell = document.getElementById("intro-table-image-cell"),
		description = $("#slider-description"),
		button = $("#slider-description-button"),
		buttonText = $("#slider-description-button-text"),
		descriptionTexts = [
			description.html(),
			"Powered Rails is open source and constantly expanding. You can help development by forking the project on GitHub and suggesting changes!",
			"PR also has a vibrant community of developers. Join us, noob.",
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
			"This is obviously filler text, I have no idea what to put here.",
			"Try displaying this page without JavaScript!"
		],
		buttonTexts = [
			buttonText.html(),
			"Visit our GitHub",
			"Join the community",
			"Lorem ipsum",
			"More filler text",
			"Slick resizing buttons"
		],
		x = 0,
		delay = 5000,
		before, after, speed, timeout, classList, $circle, circles = [];

	$("#slider-list").children().each(
		function(index){
			classList = 'slider-circle clickable';
			if(index === 0)classList = 'slider-circle selected';
			$circle = $("<li class='"+classList+"'></li>");
			circles.push($circle);
			$("#slider-circles").append($circle)
		}
	);

	$(".slider-circle").click(
		function(e){
			slide($(this).index(), "absolute");
		}
	);

	$("#slider").mouseover(
		function(){
			$(".slider-button.left").css("left", 0);
			$(".slider-button.right").css("right", 0);
		}
	);

	$("#slider").mouseleave(
		function(){
			$(".slider-button.left").css("left", "-192px");
			$(".slider-button.right").css("right", "-192px");
		}
	);
	button.css("width", buttonText.css("width"));

	slide = function(change, type){
		buttonText.animate({opacity: 0}, 500, function(){
			button.css("width", "");
			buttonText.html(buttonTexts[x]);
			button.css("width", buttonText.css("width"));
			buttonText.animate({opacity: 1}, 1000);
		});
		description.animate({opacity: 0}, 500, function(){
			description.html(descriptionTexts[x]);
			description.animate({opacity: 1}, 1000);
		});
		if(change === undefined)change = 1;
		type = type || "relative";
		circles[x].attr("class", "slider-circle clickable");
		if(type === "relative")x += change;
		else if(type === "absolute")x = change;
		if(x < 0)x = children.length-1;
		if(x >= children.length)x = 0;
		circles[x].attr("class", "slider-circle selected");
		slider.style.transform = "translateX(-"+x*100+"vw)";
		clearTimeout(timeout);
		timeout = setTimeout(slide, delay);
	}
	timeout = setTimeout(slide, delay);

	onresize = resize = function(){
		cell.style.borderRight = "32px solid transparent";
		image.style.width = 0;
		image.style.width = getComputedStyle(intro).getPropertyValue("height");
	}

	resize();
}

$(main);