// SESSION STORAGE-SETTING COLORS

const storeColors = () => {
  const colorInputs = document.querySelectorAll('input[type="color"]');
  const arrayColors = Array.from(colorInputs).map((input) => input.value);

  sessionStorage.setItem("arrayColors", JSON.stringify(arrayColors));
};

const colorSection = document.getElementById("colorSection");
colorSection.addEventListener("change", storeColors);
