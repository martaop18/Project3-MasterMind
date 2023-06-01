const storeColors = () => {
  const colorInputs = document.querySelectorAll('input[type="color"]');
  const arrayColores = Array.from(colorInputs).map(input => input.value);

  sessionStorage.setItem("arrayColores", JSON.stringify(arrayColores));

};

const colorSection = document.getElementById("colorSection");
colorSection.addEventListener("change", storeColors);





  

