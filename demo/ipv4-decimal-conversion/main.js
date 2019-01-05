document.addEventListener("DOMContentLoaded", () => {
  const $ = document.querySelector.bind(document);

  const inpIPv4 = $("#inp-ipv4");
  const alertIPv4 = $("#alert-ipv4");
  const btnIPv4 = $("#btn-ipv4");

  const inpDecimal = $("#inp-decimal");
  const alertDecimal = $("#alert-decimal");
  const btnDecimal = $("#btn-decimal");

  const hideAlert = (alertElm) => alertElm.classList.add("hide");
  const showAlert = (alertElm) => alertElm.classList.remove("hide");

  btnIPv4.addEventListener("click", () => {
    const ipv4 = inpIPv4.value;
    const decimal = convertIPv4toDecimal(ipv4);
    
    if (decimal === -1) {
      showAlert(alertIPv4);
    } else {
      hideAlert(alertIPv4);
      inpDecimal.value = decimal;
    }
  });

  btnDecimal.addEventListener("click", () => {
    const decimal = Number(inpDecimal.value);
    const ipv4 = convertDecimalToIPv4(decimal);
    
    if (ipv4 === "") {
      showAlert(alertDecimal);
    } else {
      hideAlert(alertDecimal);
      inpIPv4.value = ipv4;
    }
  });

  inpIPv4.addEventListener("input", () => {
    hideAlert(alertIPv4);
    inpDecimal.value = "";
  });

  inpDecimal.addEventListener("input", () => {
    hideAlert(alertDecimal);
    inpIPv4.value = "";
  });
});