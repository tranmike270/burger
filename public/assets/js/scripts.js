$(function(){
    $("#newBurger").on("submit", function(event){
		event.preventDefault();

		var newBurger = {
			name : $("#newBurger [name=burgerName]").val().trim()
		};

		$.ajax('/newBurger',{
			type: "POST",
			data: newBurger
		}).then(
			function(){
				console.log('Added burger!');
				location.reload();
			}
		);
	});

	$(".burgerBTN").on("click", function(event){
		
		var id = $(this).data("burgerid");
		var status = $(this).data("burgerstatus");
		console.log(id);
		console.log(status);
		var toggle;
		if(status === "available"){
			toggle = 1;
		}else{
			toggle = 0;
		};
		
		var updatedBurger = {
			toggle : toggle
		};

		$.ajax("/update/" + id,{
			type: "PUT",
			data: updatedBurger
		}).then(
			function(){
				console.log("Updated ID" + id);
				location.reload();
			}
		);
	});
})