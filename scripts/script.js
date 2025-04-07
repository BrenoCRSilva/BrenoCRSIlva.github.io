document.getElementById("cadastroForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const nome = document.getElementById("nome").value;
    document.getElementById("mensagem").innerHTML = `
        <div class="alert alert-success">
            Obrigado, <strong>${nome}</strong>! Seu agendamento foi registrado com sucesso.
        </div>
    `;
});
