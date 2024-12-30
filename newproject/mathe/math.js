const btn1 = document.getElementById("btn");
const result1 = document.getElementById("result");

function inputfun(){
    const name1 = parseFloat(document.getElementById("input1").value) || 0;
    const name2 = parseFloat(document.getElementById("input2").value) || 0;
    const name3 = parseFloat(document.getElementById("input3").value) || 0;
    const name4 = parseFloat(document.getElementById("input4").value) || 0;
    const name5 = parseFloat(document.getElementById("input5").value) || 0;
    let sum = (name1) + (name2) + (name3) + (name4) + (name5);
    let total = ((sum /5) * 100).toFixed(2);
    result1.innerHTML = `sum:${sum} precentege:${total} `;
    let input1 = false, input2 = false, input3 = false, input4 = false, input5 = false;

    if (name1 === "" || isNaN(name1) || (name1 <= 0)) {
        document.getElementById("error").innerHTML = `please provide a valid marks`;
      } else {
        document.getElementById("error").innerHTML = ``;
        input1 = true;
      }
    
      if (name2 === "" || isNaN(name2) || (name2 <= 0)) {
        document.getElementById("error").innerHTML = `please provide a valid marks`;
    
      } else {
        document.getElementById("error").innerHTML = ``;
        input2 = true;
      }

      if (name3 === "" || isNaN(name3) || (name3 <= 0)) {
        document.getElementById("-error").innerHTML = `please provide a valid marks`;
      } else {
        document.getElementById("error").innerHTML = ``;
        input3 = true;
      }
    
      if (name4=== "" || isNaN(name5) || (name5 <= 0)) {
        document.getElementById("error").innerHTML = `please provide a valid marks`;
    
      } else {
        document.getElementById("error").innerHTML = ``;
         input4 = true;
      }

if(name5 === "" || isNaN(name5) || (name5 <= 0)){
    document.getElementById("error").innerHTML = "please provide a valid marks"
}else {
    document.getElementById("error").innerHTML = ``;
    input5 = true
}






}
btn1.addEventListener("click", () => {
    inputfun();
})
