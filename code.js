$(document).ready(function(){
	$("#door").click(function(){ 
		$("#doorway").toggleClass("show");
		$("#bball").toggleClass("hide");
		$("#win").toggleClass("hide")
	})

	$("#ball").click(function(){ 
		$("#doorway").toggleClass("hide");
		$("#bball").toggleClass("show");
		$("#win").toggleClass("hide")
	})

	$("#window").click(function(){ 
		$("#doorway").toggleClass("hide");
		$("#bball").toggleClass("hide");
		$("#win").toggleClass("show")
	})
})