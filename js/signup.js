(function () {
  "use strict";
  window.addEventListener(
    "load",
    function () {
      var forms = document.getElementsByClassName("needs-validation");
      var validation = Array.prototype.filter.call(forms, function (form) {
        form.addEventListener(
          "submit",
          function (event) {
            event.preventDefault();
            event.stopPropagation();
            if (form.checkValidity() === false) {
              form.classList.add("was-validated");
            } else {
              const nome = document.getElementsByName("nome")[0].value;
              const email = document.getElementsByName("email")[0].value;
              const telefone = document.getElementsByName("telefone")[0].value;
              const data = document.getElementsByName("data")[0].value;

              localStorage.setItem(
                "cadastro",
                JSON.stringify({ nome, email, telefone, data })
              );
            }
          },
          false
        );
      });
    },
    false
  );
})();
