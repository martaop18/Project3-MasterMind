
const storeColors = () => {
  const pickedColors = [];
  colorInputs.forEach(input => {
    pickedColors.push(input.value);
  });
  localStorage.setItem("pickedColors", JSON.stringify(pickedColors));
};







  

