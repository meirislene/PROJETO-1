document.getElementById('enviar').addEventListener('submit',function(event) {
    event.preventDefault();
    //evita o envio padrão do formulario

    //obter os valores dos campos de entrada
    let nome = document.getElementById('nome').value;
    let sobrenome = document.getElementById('sobrenome').value;
    let cidade = document.getElementById('cidade').value;
    let email = document.getElementById('email').value;

    let FormData = new FormData();
    FormData.append("email", email);

    //reqalizar ações com dedos

    console.log('nome:',nome);
    console.log('sobrenome:',sobrenome);
    console.log('cidade:',cidade);
    console.log('email:',email);

    //envia a requisição usando o metodo fethc

    fetch("https://formspree.io/f/xyyqgqek", {
        method: 'post',
        headers: {
            "accept": "aplication/json"
        },
        body: FormData
        
    })

    .then(function(response) {
        //trata a resposta da requisição
        if(response.ok){
            alert("formulário enviado com sucesso!")
        }
        else{
            alert("ocorreu um erro ao enviar o formulário.Por favor,tente novamente mais tarde")
        }
    }) 

    .catch(function(error) {
        alert("ocorreu um erro ao enviar o formulário. Por favor tente mais tarde")
    });

    
});