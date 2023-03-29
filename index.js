const weightInput = document.getElementById("weightInput");
const heightInput = document.getElementById("heightInput");
const calculateBtn = document.getElementById("calculateBtn");
const resultDiv = document.getElementById("result");

function calculateBMI() {
  const weight = parseFloat(weightInput.value);
  const height = parseFloat(heightInput.value);
  const bmi = weight / (height * height);
  console.log(bmi)
  resultDiv.innerHTML = `Your BMI is: ${bmi.toFixed(4)}`;
}

calculateBtn.addEventListener("click", calculateBMI);
