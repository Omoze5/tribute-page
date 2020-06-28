$(document).ready(function (){
    $(".toggle").click(function (){
       $(".main").toggle(200);
        $(".close").show();
        $(".toggle").hide();   
    });
    
   
  $(".close").click(function (){
       $(".main").slideToggle(200);
        $(".toggle").show();
        $(".close").hide();
           
    });
    
    
});


        

