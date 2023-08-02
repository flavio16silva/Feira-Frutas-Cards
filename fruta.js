function Calcular() {
  let frutas1 = document.querySelector('#ifrutas1')
  let optionValue = frutas1.options[frutas1.selectedIndex]
  let quantidade = document.getElementById('iqtd4')
  let geral = optionValue.value
  // console.log(value);
  
  //Pegando o valor do select e passando para o input text
  //preço da fruta = geral
 document.getElementById('ires1').value = geral
    console.log(geral)
   

  let total = geral * quantidade
  console.log(total)
   
}

//Calcular()



