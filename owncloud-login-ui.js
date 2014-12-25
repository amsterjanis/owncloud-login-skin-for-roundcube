var id_user = 'rcmloginuser';
var id_pass = 'rcmloginpwd';

$(function() {
	$input_user = $('#' + id_user);
	$input_pass = $('#' + id_pass);
	$label_user = $('label[for=' + id_user + ']');
	$label_pass = $('label[for=' + id_pass + ']');
	
	$input_user.attr('placeholder', $label_user.html());
	$input_pass.attr('placeholder', $label_pass.html());
});