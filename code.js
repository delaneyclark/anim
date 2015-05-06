$(document).ready(function(){
	$("#door").click(function(){ 
		$("#doorway").toggleClass("show");
	})

	$("#ball").click(function(){ 
		$("#bball").toggleClass("show");
	})

	$("#window").click(function(){ 
		$("#win").toggleClass("show");
	})
})