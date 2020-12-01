(function () {
  "use strict";
  window.addEventListener(
    "load",
    function () {
      var forms = document.getElementsByClassName("needs-validation");
      document.getElementById("mensagem").innerHTML = ``;
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

              if (email.includes("@upf.br")) {
                localStorage.setItem(
                  "cadastro",
                  JSON.stringify({ nome, email, telefone, data })
                );
                alert("Cadastro realizado com sucesso");
                this.submit();
              } else {
                const detectarNavegador = () => {
                  var sBrowser,
                    sUsrAg = navigator.userAgent;

                  if (sUsrAg.indexOf("Chrome") > -1) {
                    sBrowser = "../assets/img/chrome.png";
                  } else if (sUsrAg.indexOf("Safari") > -1) {
                    sBrowser = "../assets/img/safar.png";
                  } else if (sUsrAg.indexOf("Opera") > -1) {
                    sBrowser = "../assets/img/opera.png";
                  } else if (sUsrAg.indexOf("Firefox") > -1) {
                    sBrowser = "../assets/img/firefox.png";
                  } else if (sUsrAg.indexOf("MSIE") > -1) {
                    sBrowser = "../assets/img/edge.png";
                  }

                  return sBrowser;
                };
                document.getElementById("mensagem").innerHTML = `
                <div class="alert alert-danger" role="alert">
                  <img src="${detectarNavegador()}" height="50px" />
                  Você não tem um e-mail da UPF
                </div>`;
              }
            }
          },
          false
        );
      });
    },
    false
  );
})();
