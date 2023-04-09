const input_degree = document.getElementsByClassName("temp")[0];
const form = document.getElementsByClassName("converter_form")[0];
const degree_picker = document.getElementsByClassName("picker_degree")[0];
const picker = document.getElementsByClassName("picker")[0];
const input_result = document.getElementsByClassName("result")[0];
form.addEventListener("submit", submitHandler);

//Form submission handler
function submitHandler(event) {
  event.preventDefault();
  if (degree_picker.value === "F") {
    const value = fTo(input_degree.value, picker.value);
    input_result.value = value;
  } else if (degree_picker.value === "C") {
    const value = cTo(input_degree.value, picker.value);
    input_result.value = value;
  } else if (degree_picker.value === "K") {
    const value = kTo(input_degree.value, picker.value);
    input_result.value = value;
  }
}

// For temperature converison based on units
function fTo(inputDegreeValue, conversionDegreeType) {
  let temperature = "";

  switch (conversionDegreeType) {
    case "F":
      temperature = +inputDegreeValue;
      break;
    case "C":
      temperature = eval((+inputDegreeValue - 32) * (5 / 9));
      break;
    case "K":
      temperature = eval((+inputDegreeValue + 459.67) * (5 / 9));
      break;
  }
  return temperature;
}
function cTo(inputDegreeValue, conversionDegreeType) {
  let temperature = "";

  switch (conversionDegreeType) {
    case "C":
      temperature = +inputDegreeValue;
      break;
    case "F":
      temperature = eval(+inputDegreeValue * (9 / 5) + 32);
      break;
    case "K":
      temperature = eval(+inputDegreeValue + 273);
      break;
  }

  return temperature;
}
function kTo(inputDegreeValue, conversionDegreeType) {
  let temperature = "";

  switch (conversionDegreeType) {
    case "K":
      temperature = +inputDegreeValue;
      break;
    case "F":
      temperature = eval((+inputDegreeValue - 273) * (9 / 5) + 32);
      break;
    case "C":
      temperature = eval(+inputDegreeValue - 273);
      break;
  }
  return temperature;
}
