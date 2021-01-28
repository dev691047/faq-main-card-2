$(document).ready(function(){
    $("#flip").click(function(){
      $("#panel").slideToggle("slow");
      $("#d").slideUp("slow");
      $("#b").slideUp("slow");
      $("#h").slideUp("slow");
      $("#f").slideUp("slow");
    });
  });

  $(document).ready(function(){
    $("#a").click(function(){
      $("#b").slideToggle("slow")
      $("#panel").slideUp("slow");
      $("#d").slideUp("slow");
      $("#h").slideUp("slow");
      $("#f").slideUp("slow");
    });
  });
  $(document).ready(function(){
    $("#c").click(function(){
      $("#d").slideToggle("slow");
      $("#panel").slideUp("slow");
      $("#b").slideUp("slow");
      $("#h").slideUp("slow");
      $("#f").slideUp("slow");
    });
  });
  $(document).ready(function(){
    $("#e").click(function(){
      $("#f").slideToggle("slow");
      $("#panel").slideUp("slow");
      $("#b").slideUp("slow");
      $("#h").slideUp("slow");
      $("#d").slideUp("slow");
    });
  });
  $(document).ready(function(){
    $("#g").click(function(){
      $("#h").slideToggle("slow");
      $("#panel").slideUp("slow");
      $("#b").slideUp("slow");
      $("#d").slideUp("slow");
      $("#f").slideUp("slow");
    });
  });

  // function myFunction() {
  //   document.getElementById("mybtn").style.left="200px";
  // }
