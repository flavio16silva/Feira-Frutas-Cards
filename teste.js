function Calcular() {
  // Selecionar o elemento de seleção de frutas:
  let Todasfrutas = document.getElementById('ifrutas1')
  //let selectedFruta = document.querySelector(`.fruta-preco[data-preco="${selectedValue}"]`)

   //Selecionando o valor do select: preço da fruta = geral
   let selectedValue = Todasfrutas.value

   // Atualizar o valor do input com o preço:
  document.getElementById('ires1').value = selectedValue

  //Obtem o valor do input  
  let quantidade = document.getElementById('iqtd4')
  let valorInput = quantidade.value 

   // Pegar o valor atualizado do input de preço (ires1)
   let precoValue = parseFloat(selectedValue); // Converter para número

   let total = precoValue * valorInput

   //Exibe o valor calculado no input de resultado
  let resultadoInput = document.getElementById('ires3')
  resultadoInput.value = total
   
}

Calcular()