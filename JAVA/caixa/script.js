    let total = 0;

    function adicionarItem() {
      const select = document.getElementById("produto");
      const produtoInfo = select.value;
      const quantidade = parseInt(document.getElementById("quantidade").value);

      if (!produtoInfo || isNaN(quantidade) || quantidade < 1) {
        alert("Preencha todos os campos corretamente.");
        return;
      }

      const [nomeProduto, valorStr] = produtoInfo.split("|");
      const valor = parseFloat(valorStr);
      const subtotal = valor * quantidade;
      total += subtotal;

      const item = document.createElement("li");
      item.textContent = `${nomeProduto} x ${quantidade} = R$${subtotal.toFixed(2)}`;
      document.getElementById("listarItens").appendChild(item);

      document.getElementById("total").textContent = total.toFixed(2);
      document.getElementById("mensagemBrinde").textContent = "";
    }

    function calcularTroco() {
      const valorPago = parseFloat(document.getElementById("valorPago").value);

      if (isNaN(valorPago)) {
        alert("Informe o valor pago.");
        return;
      }

      if (valorPago < total) {
        alert("Valor pago é menor que o total da compra.");
        return;
      }

      const troco = valorPago - total;
      document.getElementById("troco").textContent = troco.toFixed(2);

      if (total > 150) {
        document.getElementById("mensagemBrinde").textContent =
          "🎁 Parabéns! Você ganhou um brinde surpresa!";
      }
    }

    function limparTudo() {
      total = 0;
      document.getElementById("listarItens").innerHTML = "";
      document.getElementById("total").textContent = "0.00";
      document.getElementById("troco").textContent = "0.00";
      document.getElementById("valorPago").value = "";
      document.getElementById("produto").selectedIndex = 0;
      document.getElementById("quantidade").value = 1;
      document.getElementById("mensagemBrinde").textContent = "";
    }