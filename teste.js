function Calcular() {
  // Selecionar o elemento de seleção de frutas:
  let Todasfrutas = document.getElementById('ifrutas1')
  //let geral = frutas1.value
  console.log(Todasfrutas)  
  
  //Selecionando o valor do select: preço da fruta = geral
  let selectedValue = Todasfrutas.value
 //document.getElementById('ires1').value = geral
 console.log(selectedValue)  

  // Atualizar o valor do input com o preço:
  document.getElementById('ires1').value = selectedValue

  //Obtem o valor do input  
  let quantidade = document.getElementById('iqtd4')
  let valorInput = quantidade.value 

  // Pegar o valor atualizado do input de preço (ires1)
  let precoValue = parseFloat(selectedValue); // Converter para número

  let total = precoValue * valorInput
  //console.log(total)

  //Exibe o valor calculado no input de resultado
  let resultadoInput = document.getElementById('ires3')
  resultadoInput.value = total
 

 // Selecionar o elemento <span> correspondente à fruta selecionada:
  let selectedFruta = document.querySelector(`.fruta-preco[data-preco="${selectedValue}"]`)
  console.log(selectedFruta)

    // Pegar o valor dentro do <span>:
    //let precoValue = selectedFruta.getAttribute('data-preco')
    //console.log(precoValue)
    

    // Atualizar o valor do input com o preço:
    //document.getElementById('ires1').value = precoValue

    //Obtem o valor do input  
   // let quantidade = document.getElementById('iqtd4')
   // let valorInput = quantidade.value 

    //let total = precoValue * valorInput
    //console.log(total)

    //Exibe o valor calculado no input de resultado
       //let resultadoInput = document.getElementById('ires3')
       //resultadoInput.value = total

    // Adicionar um ouvinte de evento para chamar a função Calcular() sempre que a seleção de fruta mudar:
    //document.getElementById('ifrutas1').addEventListener('change', Calcular)
    Todasfrutas.addEventListener('change', Calcular)

  
  //console.log(valorInput) 
   

  
  //console.log(total)


   
}

Calcular()



