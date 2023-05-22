function calci(){
    let input1 = document.querySelector("#id1").value;
    let input2 = document.querySelector("#id2").value;
  
    let result = parseInt(input1) + parseInt(input2);
  
    alert("First number : " + input1 + " Second number :  " + input2 + " Sum =" + result);
  }