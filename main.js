$(document).ready(function(){
    $('#button').on('click', function(e) {
        e.preventDefault();

        const usernameButton = $('#github-nick').val();
        const endpoint = `https://api.github.com/users/${usernameButton}`;
        
        const nome = $('#name');
        const username = $('#username');
        const imagem = $('#avatar');
        const repos = $('#repos');
        const seguidores = $('#seguidores');
        const seguindo = $('#seguindo'); 
        
        if ($('#github-nick').val().length == 0) {
            alert('Digite um nome')
            throw new Error ("Digite um username");
        }
        else {
            fetch(endpoint)
            .then(function(resposta) {
                    return resposta.json()
                })
                .then(function(json) {
                    nome.text(json.name);
                    username.text(json.login);
                    repos.text(json.public_repos);
                    seguidores.text(json.followers);
                    seguindo.text(json.following);
                    avatar.src = json.avatar_url;
                    link.href = json.html_url;
                })
                .catch(function(erro) {
                    alert('Ocorreu um erro ao buscar o repositório, tente novamente.')
                })
                .finally(function() {
                    console.log('Tudo ok.')
                })
        }

    })

    
})

/*document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('button').addEventListener('click', function(e){
        e.preventDefault();

        const usernameButton = document.getElementById('github-nick').value;
        const endpoint = `https://api.github.com/users/${usernameButton}`

        const nome = document.querySelector('#name');
        const avatar = document.querySelector('#avatar');
        const username = document.querySelector('#username');
        const repos = document.querySelector('#repos');
        const seguidores = document.querySelector('#seguidores');
        const seguindo = document.querySelector('#seguindo');
        const link = document.querySelector('#link');

        if (document.getElementById('github-nick').value.length == 0) {
            alert('Digite um nome')
            throw new Error ("Digite um username");
        }else {
            fetch(endpoint)
                .then(function(resposta) {
                    return resposta.json()
    
                    console.log(resposta)
                })
                .then(function(json) {
                    nome.innerText = json.name;
                    username.innerText = json.login;
                    repos.innerText = json.public_repos;
                    seguidores.innerText = json.followers;
                    seguindo.innerText = json.following;
                    avatar.src = json.avatar_url;
                    link.href = json.html_url;
                })
                .catch(function(erro) {
                    alert('Ocorreu um erro ao buscar o repositório, tente novamente.')
                })
                .finally(function() {
                    console.log('Tudo ok.')
                })
        }
    })
})*/