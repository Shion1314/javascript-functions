const mySome = (arr, callback) => {
    for (let i = 0; i < arr.length; i++) {
      if (callback(arr[i], i, arr) === true) {
        return true;
      }
    }
    return false;
  };
  
  const input = document.getElementById("input");
  const output = document.getElementById("output");
  const button_1 = document.getElementById("button_1");
  const user = document.getElementById("User_input")
  button_1.addEventListener('click', () => {
  
    const result = mySome(input.value, (val) => val === user.value);
    output.value = result;
  });
  