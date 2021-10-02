$('#pass').click(function(){
$(this).toggleClass('fa-eye-slash');
var x=$('#inp').attr('type');
if(x=='password'){
$('#inp').attr('type','text') ;  
}  
else
$('#inp').attr('type','password') ;
}) 