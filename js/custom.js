$(document).ready(function(){
    $('.input-sm').keypress(function(e){
      if(e.keyCode==13)
      $('.btn').click();
    });
});

