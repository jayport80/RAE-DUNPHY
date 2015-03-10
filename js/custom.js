var WSC = false;
$(document).ready(function() {
	$.ajax({
		url:'/wholesale-products/',
		success: function(data) {
  			WSC = true;
  
			if (WSC == true) {
				wholesaleMe(); 
			}
 
		}, statusCode: {
			403: function() {
				WSC = false;
			}
	 
		}
	
	});   

	$('.modalPage').click(function() {
		$.iModal({
			type: 'ajax',
			url: $(this).attr('href'), 
			title: $(this).attr('title'),  
			width: 620,
			height: 300, 
			onShow: function() {
				//$('body').removeClass('modalClose');
			},
			onClose: function() {
				$('#ModalContainer').remove();	
			}
		});
		return false;
	});
	cconfile();
});
$(document).ajaxComplete(function() {
 cconfile();
});

function wholesaleMe() {
	console.log('Wholesale Customer')
	$('.shipInfo').attr('href', '/wholesale-shipping-information/');


};
function cconfile() {
	$('#provider_list label:contains("Bank Deposit")').text('Charge my credit card on file after order');
}



