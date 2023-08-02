function Calcular() {
  let frutas1 = document.querySelector('#ifrutas1')
  let geral = frutas1.value
  
  
  //Pegando o valor do select e passando para o input text
  //preço da fruta = geral
 document.getElementById('ires1').value = geral
 //console.log(geral)

  //Obtem o valor do input
  let quantidade = document.getElementById('iqtd4')
  let valorInput = quantidade.value 
  //console.log(valorInput) 
   

  let total = geral * valorInput
  //console.log(total)

  // Exibe o valor calculado no input de resultado
  let resultadoInput = document.getElementById('ires3');
  resultadoInput.value = total;
   
}

Calcular()



