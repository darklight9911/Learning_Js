const clock = document.querySelector('#clock');
setInterval(function(){
    const date = new Date();
    clock.innerHTML = date.toLocaleDateString();
},1000);