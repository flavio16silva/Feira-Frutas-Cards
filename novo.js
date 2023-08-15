function atualizarPreco() {
  let selectedFruta = document.getElementById('ifrutas1').value
  let spanElement = document.querySelector(`.fruta-preco[data-fruta="${selectedFruta}"]`)

  if (spanElement) {
    let precoValue = spanElement.getAttribute('data-preco') 
    document.getElementById('ires1').value = precoValue
  } else {
    document.getElementById('ires1').value = ""
  }
}

function calcular() {
  let precoInput = parseFloat(document.getElementById('ires1').value)
  let quantidadeInput = parseFloat(document.getElementById('iqtd4').value)

  if (!isNaN(precoInput) && !isNaN(quantidadeInput)) {
    let total = precoInput * quantidadeInput
    document.getElementById('ires3').value = total.toFixed(2) 
 } else {
    document.getElementById('ires3').value = ""
 }
}
