$(function(){

    $("#tipo-cadastro-pj").on("click", function(){
        $("#data-nasc").attr("disabled", true); // desabilita o campo data de nascimento
        $("[for='cpf-cnpj']").html("<b>CNPJ:</b>"); // altera o label cpf para cnpj
        $("#data-nasc").val(""); // limpa o valor de data de nascimento
        $("#data-nasc").parent().hide(); // oculta o campo de data de nascimento
    });

    $("#tipo-cadastro-pf").on("click", function(){
        $("#data-nasc").attr("disabled", false);// habilita o campo data de nascimento
        $("[for='cpf-cnpj']").html("<b>CPF:</b>");// altera o label cnpj para cpf
        $("#data-nasc").parent().show();// exibir o campo de data de nascimento
    });

    $("#btn-enviar").on("click", function(evento){
            if($("#senha-1").val() !== $("#senha-2").val()) { //verificar se as senhas coincidem
                evento.preventDefault(); //previne o envio dos dados ao clicar no botão
                alert("As senhas não coincidem"); //alerta quando as senhas não concidem
        }

        var cpfCnpj = $("#cpf-cnpj").val();

        if($("#tipo-cadastro-pf").is(":checked")) {
            if(cpfCnpj.length !== 11) {
                evento.preventDefault(); //previne o envio dos dados ao clicar no botão
                alert("O CPF digitado é inválido!"); //alerta quando a informação está incorreta
            }
        } else { 
            if(cpfCnpj.length !== 14) { // verificar tamanho do cnpj é igual 14
                evento.preventDefault(); //previne o envio dos dados ao clicar no botão
                alert("O CNPJ digitado é inválido!"); //alerta quando a informação está incorreta
        }}

    })
    
})