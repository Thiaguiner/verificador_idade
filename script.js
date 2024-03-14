function verificar() {
  let data = new Date();
  let ano = data.getFullYear();
  const fAno = document.querySelector("#txtano");
  const button = document.querySelector(".button");
  const res = document.querySelector(".res");

  if (fAno.value.length == 0 || fAno.value > ano) {
    alert("Verifique os dados e tente novamente");
  } else {
    let fsex = document.getElementsByName("radsex");
    let idade = ano - Number(fAno.value);
    let genero = "";
    let img = document.createElement("img");
    img.setAttribute("id", "foto");
    if (fsex[0].checked) {
      genero = "Homem";
      if (idade >= 0 && idade < 10) {
        //crianca
        img.setAttribute("src", "img/crianca-homem.jpeg");
      } else if (idade >= 10 && idade < 21) {
        //jovem
        img.setAttribute("src", "img/jovem-homem.webp");
      } else if (idade >= 21 && idade < 50) {
        //adulto
        img.setAttribute("src", "img/homem-adulto-2.jpeg");
      } else {
        //idoso
        img.setAttribute("src", "img/idoso.webp");
      }
    } else if (fsex[1].checked) {
      genero = "Mulher";
      if (idade >= 0 && idade < 10) {
        //crianca
        img.setAttribute("src", "img/crianca-mulher.webp");
      } else if (idade >= 10 && idade < 21) {
        //jovem
        img.setAttribute("src", "img/jovem-mulher.webp");
      } else if (idade >= 21 && idade < 50) {
        //adulto
        img.setAttribute("src", "img/mulher-adulta.jpeg");
      } else {
        //idoso
        img.setAttribute("src", "img/idosa.jpeg");
      }
    }
    res.innerHTML = `detectamos ${genero} com ${idade} anos`;
    res.appendChild(img);
    res.appendChild(img).style.position = center;
  }
}
