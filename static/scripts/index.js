var slider = document.getElementById("slider-list"),
	children = slider.getElementsByTagName("li").length,
	x = 0,
	delay = 5000,
	speed, timeout;
function slide(change){
	change = change || 1;
	x ++;
	if(x >= children)x = 0;
	slider.style.transform = "translateX(-"+x*100+"vw)";
	clearTimeout(timeout);
	timeout = setTimeout(slide, delay);
}
timeout = setTimeout(slide, delay);