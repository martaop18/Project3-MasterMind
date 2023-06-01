
const pickedColors = (colorInputId) => {
    let colorInput = document.getElementById(colorInputId)
      pickedColors.push(input.value);
    }
    pickedColors('colorPicker1');
    pickedColors('colorPicker2');
    pickedColors('colorPicker3');
    pickedColors('colorPicker4');
  
    sessionStorage.setItem("pickedColors", JSON.stringify(pickedColors));
  
