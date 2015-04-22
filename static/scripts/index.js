var slide
function main(){
	var slider = document.getElementById("slider-list"),
		children = slider.getElementsByTagName("li"),
		image = document.getElementById("image"),
		intro = document.getElementById("intro"),
		cell = document.getElementById("intro-table-image-cell"),
		description = document.getElementById("slider-description"),
		button = document.getElementById("slider-description-button"),
		x = 0,
		delay = 5000,
		speed, timeout, classList, $circle, circles = [];

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

	slide = function(change, type){
		// button.style.opacity = 0;
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
		cell.style.marginLeft = 0;
		image.style.width = 0;
		image.style.width = getComputedStyle(intro).getPropertyValue("height");
	}

	resize();
}

$(main);