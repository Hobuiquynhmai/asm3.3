document.addEventListener("DOMContentLoaded", () => {
  const submitEmailButton = document.getElementById("submit-email");
  const emailInput = document.getElementById("email");
  const emailError = document.getElementById("email-error");
  const personalInfoContainer = document.getElementById(
    "personal-info-container"
  );
  const personalInfoForm = document.getElementById("personal-info-form");

  submitEmailButton.addEventListener("click", () => {
    const emailValue = emailInput.value;
    const regex =
      /^(([^<>()\[\]\\.;:\s@"]+(\.[^<>()\[\]\\.;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!regex.test(emailValue)) {
      emailError.textContent = "Please enter a valid email address.";
    } else {
      emailError.textContent = "";
      personalInfoForm.classList.add("d-none");
      personalInfoContainer.classList.remove("d-none");
    }
  });

  document.querySelectorAll(".view-more").forEach((button) => {
    button.addEventListener("click", () => {
      const sectionContent = button.previousElementSibling;
      const skillContents = sectionContent.querySelectorAll(".skill-content");
      if (sectionContent.classList.contains("d-none")) {
        sectionContent.classList.remove("d-none");
        button.textContent = "View Less";
        skillContents.forEach((skill) => skill.classList.remove("d-none"));
      } else {
        sectionContent.classList.add("d-none");
        button.textContent = "View More";
        skillContents.forEach((skill) => skill.classList.add("d-none"));
      }
    });
  });
});
