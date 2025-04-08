document.getElementById("cadastroForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const nome = document.getElementById("nome").value;
    document.getElementById("mensagem").innerHTML = `
        <div class="alert alert-success">
            Obrigado, <strong>${nome}</strong>! Seu agendamento foi registrado com sucesso.
        </div>
    `;
});

function scrollLeft(id) {
    const container = document.getElementById(id);
    container.scrollBy({ left: -220, behavior: 'smooth' });
}

function scrollRight(id) {
    const container = document.getElementById(id);
    container.scrollBy({ left: 220, behavior: 'smooth' });
}
