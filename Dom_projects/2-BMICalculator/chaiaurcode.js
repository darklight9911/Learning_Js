const form = document.querySelector('form')
form.addEventListener('submit',function(e){
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results =document.querySelector('#results');
  //console.log(height,weight);
  if(height === 0 || isNaN(height)){
    results.innerHTML = "invalid height";
  }
  else if(weight === 0 || isNaN(weight)){
    results.innerHTML = "invalid weight";
  }
  else{
    const bmi = (weight/((height*height)/10000)).toFixed(1);
    if(bmi < 18.6){
        results.innerHTML =`Under Weight: ${bmi}`;
    }
    if(bmi >= 18.6 && bmi <= 24.9){
      results.innerHTML =`NormaL Weight: ${bmi}`;
    }
      if(bmi >= 24.9){
    results.innerHTML = `OVER Weight: ${bmi}`;
    }
  }
})