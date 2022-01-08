$(document).ready(function() {
	$('#tabAll').on('click',function(){
	  $('#tabAll').parent().addClass('active');  
	    $('.tab-pane').addClass('active in');  
	  $('[data-toggle="tab"]').parent().removeClass('active');
	});
});