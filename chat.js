let listaMensagens = [];

function adicionarMensagem(apelido, mensagem) {
    const novaMensagem = {
        apelido,
        mensagem
    };

    listaMensagens.push(novaMensagem);
    console.log(listaMensagens);
    atualizarHTML();
}

function formatarMensagens() {
    return listaMensagens.map(mensagem => {
        return `
            <div class="chat-message">
                <span class="chat-message-apelido">${mensagem.apelido}</span>
                <span class="chat-message-item">${mensagem.mensagem}</span>
            </div>
        `;
    }).join('');
}

function atualizarHTML() {
    const chatMessages = document.getElementById('chat-messages');
    chatMessages.innerHTML = formatarMensagens(); 
}

function commitMessageClickHandler() {
    const messageInput = document.getElementById('message-input'); 
    const apelido = 'Você';
    const mensagemText = messageInput.value.trim(); 

    if (mensagemText) { 
        adicionarMensagem(apelido, mensagemText);
        messageInput.value = ''; 
        messageInput.focus(); 
    }
}

document.addEventListener('DOMContentLoaded', function() { 
    const messageCommit = document.getElementById('message-commit');
    messageCommit.addEventListener('click', commitMessageClickHandler);

    const messageInput = document.getElementById('message-input'); 
    messageInput.addEventListener('keydown', function(event) { 
        if (event.key === 'Enter') { 
            commitMessageClickHandler();
        }
    });
});