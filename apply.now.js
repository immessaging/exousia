const stepInfo = document.getElementById("stepInfo");
const navLeft = document.getElementById("navLeft");
const navRight = document.getElementById("navRight");
const form = document.getElementById("adForm");
const formSteps = ["one", "two", "three", "four" , "five", "six"];

let currentStep = 0;

function updateStepVisibility() {
  formSteps.forEach((step) => {
    document.getElementById(step).style.display = "none";
  });

  document.getElementById(formSteps[currentStep]).style.display = "block";
  stepInfo.textContent = `Step ${currentStep + 1} of ${formSteps.length}`;
  navLeft.style.display = currentStep === 0 ? "none" : "block";
  navRight.style.display =
  currentStep === formSteps.length - 1 ? "none" : "block";
}

document.addEventListener("DOMContentLoaded", () => {
  navLeft.style.display = "none";
  updateStepVisibility();
  navRight.addEventListener("click", () => {
    if (currentStep < formSteps.length - 1) {
      currentStep++;
      updateStepVisibility();
    }
  });

  navLeft.addEventListener("click", () => {
    if (currentStep > 0) {
      currentStep--;
      updateStepVisibility();
    }
  });
});

