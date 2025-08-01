//generte a random color

const randomColor = () => {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {//6 characters for hex color
    color += hex[Math.floor(Math.random() * 16)];//0 to 16
    }
    return color;
};
let intervalId;
const startChangingColor = function(){
    if(!intervalId){//check if intervalId is null
        //if intervalId is null, then start the interval
        //if intervalId is not null, then do nothing
        //this prevents multiple intervals from being created
        console.log("Starting color change");
        document.body.style.backgroundColor = randomColor();
    intervalId = setInterval(changeBgcolor,1000);
    } 
    function changeBgcolor() {
        document.body.style.backgroundColor = randomColor();
    }
};
const stopChangingColor = function(){
    clearInterval(intervalId);
    intervalId = null;//flashing out the intervalId
}; 

document.querySelector('#start').addEventListener('click',startChangingColor);
document.querySelector('#stop').addEventListener('click',stopChangingColor);
