document.addEventListener("DOMContentLoaded", () => {
    const steps = document.querySelectorAll(".form-step");
    const nextBtns = document.querySelectorAll(".next-btn");
    const prevBtns = document.querySelectorAll(".prev-btn");
    const form = document.getElementById("adForm");

    let currentStep = 0;

    const updateSteps = () => {
        steps.forEach((step, index) => {
            step.classList.toggle("active", index === currentStep);
        });
    };

    nextBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            currentStep = Math.min(currentStep + 1, steps.length - 1);
            updateSteps();
        });
    });

    prevBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            currentStep = Math.max(currentStep - 1, 0);
            updateSteps();
        });
    });

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        alert("Form submitted successfully!");
    });

    // Enable state and LGA based on country selection
    const countrySelect = document.getElementById("country-select");
    const stateSelect = document.getElementById("state-select");
    const lgaSelect = document.getElementById("lga-select");

    countrySelect.addEventListener("change", () => {
        if (countrySelect.value) {
            stateSelect.disabled = false;
            lgaSelect.disabled = false;
        } else {
            stateSelect.disabled = true;
            lgaSelect.disabled = true;
        }
    });

    updateSteps();
});
