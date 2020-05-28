/**JQUERY**/
$(document).ready(function () {
	$('#compen').click(function(){
		$('#comps').show();
	});
	$('#record').click(function(){
		$("html, body").animate({scrollTop: 0}, 1000);
		$('form').each(function(){
			this.reset();
		});
	});
	$('#sel').change(function(){
		var selected = $(this).val();
		if(selected == 'other'){
			$('#others').show();
			$('#show2').hide();
		}
		else if(selected == 'legis'){
			$('#show2').hide();
		}
		else if(selected == 'fund'){
			$('#show2').hide();
		}
		else if(selected == 'both'){
			$('#show2').hide();
		}
		else{
			$('#show2').show();
		}
	});
	$('#test').change(function(){
		var selected = $(this).val();
		if(selected == 'State'){
			$('#show').hide();
		}
		else if(selected == 'Municipality'){
			$('#show').hide();
		}
		else if(selected == 'both'){
			$('#show').hide();
		}
		else{
			$('#show').show();
		}
	});
	$('#off').change(function(){
		var selected = $(this).val();
		if(selected == 'indv'){
			$('#show1').hide();
		}
		else if(selected == 'entity'){
			$('#show1').hide();
		}
		else{
			$('#show1').show();
		}
	});
	$('form').each(function(){
		$(this).validate({
			rules: {
				ans: {
					required: true
				},
				fname:{
					required: true
				},
				lname:{
					required: true
				},
				email:{
					required: true
				},
				tel:{
					required: true
				},
				spend:{
					required: true
				},
				on:{
					required: true
				},
				of:{
					required: true
				},
				to:{
					required: true
				},
				amount:{
					required: true
				},
				paidfrom:{
					required: true
				},
				payment:{
					required: true
				},
				pnum:{
					required: true
				},
				type:{
					required: true
				},

			}
		});
	});
	$('#submit').click(function(){
		$('form').each(function(){
			$(this).valid();
		});
	});
});

/**RESET BUTTON**/
var btn = document.getElementById("reset");

btn.onclick = function(){
	location.reload();
}