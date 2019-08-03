(function(){
    const button = document.getElementsByClassName("icon");
    
    const myMenu = () => {
      const menu = document.getElementById("myLinks"),
      close = document.getElementById("closeIcon"),
      open = document.getElementById("openIcon");
      
      if (menu.style.display === "block") {
        menu.style.display = "none";
        open.style.display = "block";
        close.style.display = "none";
        
        
        
      } else {
        menu.style.display = "block";
        open.style.display = "none";
        close.style.display = "block"
      }
    };
    
    button[0].addEventListener("click", myMenu );
    })();