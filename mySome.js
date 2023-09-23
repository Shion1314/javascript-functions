const mySome=(arr,user) =>{
    for (let i = 0; i < arr.length; i++){
        if(arr[i]==user){
            return true;
        }
    }
    return false;

}

  const input = document.getElementById("input");
  const output = document.getElementById("output");
  const button_1 = document.getElementById("button_1");
  const user = document.getElementById("User_input")
  button_1.addEventListener('click', () => {
  
    const result = mySome(input.value, user.value);
    output.value = result;
  });
  