document.addEventListener("DOMContentLoaded", () => {
  const firstName = document.querySelector("#firstname");
  const lastName = document.querySelector("#lastname");

  firstName.textContent = getURLVariable("firstname");
  lastName.textContent = getURLVariable("lastname");
});