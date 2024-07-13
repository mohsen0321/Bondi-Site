function toggleIcon() {
    var button = document.getElementById('toggleButton');
    if (button.classList.contains('fa-bars')) {
        button.classList.remove('fa-bars');
        button.classList.add('fa-xmark');
    } else {
        button.classList.remove('fa-xmark');
        button.classList.add('fa-bars');
    }
}

let span = document.querySelector(".up");


window.onscroll = function(){
    if(this.scrollY >= 300){
        span.classList.add("show")
    }else{
        span.classList.remove("show")
    }
}

span.onclick = function(){

    window.scrollTo({
        top:0,
        behavior:"smooth",
    })
}








/////////////////////////////////////



    
