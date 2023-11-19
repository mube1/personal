




function changeMode() { 

    document.body.classList.toggle("dark-mode");
    
    let val= document.getElementById('mode').innerText;

    if (val.slice(-2)==='on'){
        document.getElementById('mode').innerText='Dark : off';

    }
    else{
        document.getElementById('mode').innerText='Dark : on';
    }
    

 }


function openPage(pageName,elmnt,color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;
  }