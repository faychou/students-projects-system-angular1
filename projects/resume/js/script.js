// * * * * * * 回到顶部 * * * * * * 
window.onscroll = function () { 
  var myTop = document.documentElement.scrollTop || document.body.scrollTop; 
  var topDiv = document.getElementById( "top_div" );
  var nav = document.getElementById("nav");
  var navBar =  document.getElementById("nav_bar");
  if( myTop >= 300 ) { 
    topDiv.style.display = "inline"; 
    nav.style.position = "fixed";
    nav.style.top = 0;
    nav.style.left = 0;
    navBar.style.position = "fixed";
    navBar.style.top = 0;
    navBar.style.right = 0;
  } else { 
    topDiv.style.display = "none"; 
    nav.style.position = "static";
    navBar.style.position = "static";
  } 
} 




