$(".game").hover(function() {
	$(this).toggleClass("col-6 col-9");
	$(this).siblings().toggleClass("col-6 col-3");
}, function() {
	$(this).toggleClass("col-6 col-9");
	$(this).siblings().toggleClass("col-6 col-3");
})
