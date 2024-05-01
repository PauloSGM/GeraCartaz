function gerar(){
    tipo = document.getElementById('itipoDeProduto');
    produto = document.getElementById('iNomeDoProduto');
    descrição = document.getElementById('idescricao');
    kilo = document.getElementById('kg');
    const valor = document.getElementById('iValorDoProduto');
    const Virgula = valor.value.indexOf(',');
    if (Virgula < 1){
      alert('Você não preencheu corretamente o formulário')
   }
    document.getElementById('tipoDeProduto').innerHTML = tipo.value;
    document.getElementById('NomeDoProduto').innerHTML = produto.value;
    document.getElementById('descricao').innerHTML = descrição.value;
    document.getElementById('centavos').innerHTML = valor.value.replace(',','').substring(Virgula);
    document.getElementById('Reais').innerHTML = valor.value.substring
    (0, Virgula);
    document.getElementById('peso').innerHTML = kilo.value;
    opcoes = document.getElementById('opcoes');
    switch (opcoes.value){
      case "a1":
        document.getElementById('promocao').innerHTML = "PROMOÇÃO"
        break;
      case "a2":
        document.getElementById('promocao').innerHTML = "OFERTA"
        promo = document.getElementById('promocao')
        promo.style.cssText = 'font-size: 65px; padding: -10 '
        break;
      case "b1":
        texto = document.getElementById("NomeDoProduto")
        texto.style.fontFamily = 'Rustico'
        break;
      case "b2":
        texto = document.getElementById("NomeDoProduto")
        texto.style.fontFamily = 'Anton, sans-serif'
        break;
      case "b3":
        texto = document.getElementById("NomeDoProduto")
        texto.style.fontFamily = 'Chelsea Market, cursive'
        break;
      case "b4":
        texto = document.getElementById("NomeDoProduto")
        texto.style.fontFamily = 'Courier Prime, monospace'
        break;
      case "b5":
        texto = document.getElementById("NomeDoProduto")
        texto.style.fontFamily = 'Barrio, monospace'
        break;
      case "b6":
        texto = document.getElementById("NomeDoProduto")
        texto.style.fontFamily = 'Trade Winds, cursive'
        break;
      case "b7":
        texto = document.getElementById("NomeDoProduto")
        texto.style.fontFamily = 'Caveat Brush, cursive'
        break;
      case "b8":
        texto = document.getElementById("NomeDoProduto")
        texto.style.fontFamily = 'Righteous, cursive'
        break;
      case "b9":
        document.getElementById("perscor").innerHTML = "<br><input onchange=mudarcor3() id=cor3 type=color>Cor da descrição! <br>"
        break;
      case "b10":
        document.getElementById("perscor").innerHTML = "<br><input onchange=mudarcor2() id=cor2 type=color>Cor do tipo de produto! <br>"
        break;  
      case "b11":
        document.getElementById("perscor").innerHTML = "<br><input onchange=mudarcor() id=cor type=color>Cor do nome do produto <br>"
        break;
      case "b12":
        document.getElementById("perscor").innerHTML = "<br><input onchange=mudarcor4() id=cor4 type=color>Cor do valor do produto <br>"
        break; 
      case "c1":
        base = document.getElementById("base")
        base.style.cssText = "border-Radius: 200px"
        break;
      case "c2":
        base = document.getElementById("base")
        base.style.cssText = "border-Radius: 0px"
        break;
      case "c3":
        base = document.getElementById("base")
        base.style.cssText = "border-Radius: 70px"
        break;
      case "c4":
        base = document.getElementById("base")
        placa = document.getElementById("placa")
        base.style.cssText = "border: solid 3px yellow;"
        placa.style.backgroundColor = "yellow"
        document.getElementById('promocao').innerHTML = "OFERTA"
        promo = document.getElementById('promocao')
        promo.style.fontSize = '65px';
        break;
      case "c5":
        base = document.getElementById("base")
        placa = document.getElementById("placa")
        base.style.cssText = "border: solid 3px red; border: solid 3px red;"
        placa.style.cssText = "background-color: whitei;"
        document.getElementById('promocao').innerHTML = "PROMOÇÃO"
        promo = document.getElementById('promocao')
        promo.style.fontSize = '65px';
        break;
    }
  }
  function mudarcor(){
      cor = document.getElementById("cor")
      texto = document.getElementById("NomeDoProduto")
      texto.style.color = cor.value
  }
  function mudarcor2(){
    cor = document.getElementById("cor2")
    texto = document.getElementById("tipoDeProduto")
    texto.style.color = cor.value
}
  function mudarcor3(){
    cor = document.getElementById("cor3")
    texto = document.getElementById("descricao")
    texto.style.color = cor.value
}
 function mudarcor4(){
    cor = document.getElementById("cor4")
    texto = document.querySelector(".preco")
    texto1 = document.getElementById("Reais")
    texto2 = document.getElementById("centavos")
    texto3 = document.getElementById("virgula")
    texto4 = document.getElementById("peso")
    texto.style.color = cor.value
    texto1.style.color = cor.value
    texto2.style.color = cor.value
    texto3.style.color = cor.value
    texto4.style.color = cor.value
}
  tamanho = '70'
  function cre(){
    tamanho = parseInt(tamanho) + parseInt('5')
    maior = parseInt(tamanho) + parseInt('5')
    teste = document.getElementById("NomeDoProduto");
    teste.style.fontSize = maior + 'px'
    }
  function dim(){
    tamanho = parseInt(tamanho) - parseInt('5')
    maior = parseInt(tamanho) - parseInt('5')
    teste = document.getElementById("NomeDoProduto");
    teste.style.fontSize = maior + 'px'
    }
  //Este código usa o método html2canvas para renderizar a div selecionada em um objeto Canvas e, em seguida, usa o método toDataURL() do objeto Canvas para obter uma representação da imagem em formato de dados de URL. Em seguida, ele cria um elemento de link temporário, configura o atributo download com o nome do arquivo de imagem que você deseja baixar e define o atributo href com a URL da imagem. Finalmente, ele adiciona o link ao corpo da página, clica nele para iniciar o download da imagem e, em seguida, remove o link temporário do DOM.
  function ae(){   
    html2canvas(document.querySelector("#placa")).then(canvas => {
    var link = document.createElement("a");
    document.body.appendChild(link);
    tipo = document.getElementById('itipoDeProduto');
    produto = document.getElementById('iNomeDoProduto');
    nomeFinal = tipo.value + " " + produto.value;
    link.download = nomeFinal;
    link.href = canvas.toDataURL();
    link.target = '_blank';
    link.click();
  });
 }

 function genPDF() {
  var dom = document.getElementById('placa');
  html2canvas(dom).then(function(canvas) {
      var img = canvas.toDataURL("image/png");
      var doc = new jsPDF();
      tipo = document.getElementById('itipoDeProduto');
      produto = document.getElementById('iNomeDoProduto');
      nomeFinal = tipo.value + " " + produto.value;
      doc.addImage(img, 50, 50);
      doc.save(nomeFinal);
      doc.setZoomMode(zoom);
  });
}
 
 
 

 
 
 
 
