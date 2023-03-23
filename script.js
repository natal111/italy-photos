function bigview(curr_img) {
      var foto = document.querySelectorAll(".galerija img");
      for (let i = 0; i < foto.length; i++) {
        foto[i].style.width = "auto";
        foto[i].style.height = "100%";
        foto[i].parentNode.style.height = "90px";
      }

      document.getElementsByClassName("view")[0].innerHTML =
        curr_img.parentNode.innerHTML;
      document.getElementById("info").value = curr_img.getAttribute("alt");

      var bigfoto = document.getElementsByClassName("view")[0].childNodes[1];

      document.getElementById("issaugoti").onclick = function () {
        curr_img.setAttribute("alt", document.getElementById("info").value);
        bigfoto.alt = document.getElementById("info").value;
      };
      document.getElementById("trinti").onclick = function () {
        curr_img.parentNode.parentNode.removeChild(curr_img.parentNode);
        /*curr_img.remove(curr_img);*/
        document.getElementsByClassName("view")[0].removeChild(bigfoto);
        document.getElementById("info").value = "";
      };
    }

    function spalva() {
      var radio = document.querySelectorAll("input[type=radio]");
      var hf;
      for (let i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
          hf = radio[i].value;
        }
      }
      var sp = document.querySelector("input[type=color]");
      objekt = document.getElementById(hf);
      objekt.style.backgroundColor = sp.value;
    }

    function aprasymas(msg) {
      let chbox = document.getElementById("check");
      if (chbox.checked) {
        tip = document.getElementsByClassName("tip");
        tip.style = document.getElementsByClassName("tip").style;
        for (i = 1; i < tip.length; i++) {
          if (msg) {
            tip[i].innerHTML = msg;
            document.getElementsByClassName("tip").innerHTML = msg;
            tip[i].style.display = "block";
          } else {
            tip[i].style.display = "none";
          }
        }
      }
    }

    document.onmousemove = moveTip;

    function moveTip(e) {
      tip = document.getElementsByClassName("tip");
      //tip.style = document.getElementsByClassName("tip").style;
      w = 250;
      x = e.pageX;
      y = e.pageY;
      for (i = 1; i < tip.length; i++) {
        if (x + w + 10 < document.body.clientWidth) {
          tip[i].style.left = x + "px";
        } else {
          tip[i].style.left = x - w + "px";
        }
        tip[i].style.top = y + 20 + "px";
      }
    }

    function pritaikyti() {
      var inputai = document.getElementsByClassName("size");

      var plotis = Number(inputai[0].value);
      var aukstis = Number(inputai[1].value);

      var foto = document.querySelectorAll(".galerija img");
      for (let i = 0; i < foto.length; i++) {
        foto[i].style.width = plotis + "px";
        foto[i].style.height = aukstis + "px";
        foto[i].parentNode.style.height = "auto";
      }
    }