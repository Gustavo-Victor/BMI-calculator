//pegar campos
var btn_calcular = window.document.getElementById('btnCalcular'); 
var massa = window.document.getElementById("massa");
var altura = window.document.getElementById("altura");
var imc_campo = window.document.getElementById('imc')
var status_campo = window.document.getElementById('status')
var mensagem = "";

//criar evento 
btn_calcular.addEventListener("click", calculaImc);

//função pra calcular imc
function calculaImc(){
    //window.alert("Clicou");
    if(validaCampo(massa, altura)){
        //transformar em número e calcular imc
        let massa_valor = Number(massa.value)
        let altura_valor = Number(altura.value)
        let imc = massa_valor / (altura_valor ** 2);        
        let status_v;

        //verificar imc e calcular status
        if(imc < 0){
            status_v = "Desconhecido";
        }else if(imc < 18.5){
            status_v = "Abaixo do peso";
        }else if(imc < 25){
            status_v = "Peso normal";
        }else if(imc < 30){
            status_v = "Sobrepeso";
        }else if(imc < 35){
            status_v = "Obesidade nível 1";
        }else if(imc < 40){
            status_v = "Obesidade nível 2";
        }else{
            status_v = "Obesidade nível 3 ou mórbida";
        }
        //formatar e exibir resultados
        imc = imc.toFixed(2).replace(".", ",")
        imc_campo.value = `${imc}`;
        status_campo.value = `${status_v}`;
    

    }else{
        //exibir mensagem de erro
        window.alert(mensagem);
    }   
}

//função pra validar campos
function validaCampo(m ,a){
    //transformar em número
    if(m.value == '' || a.value == ''){
        mensagem = 'Preencha todos os campos';
        return false;
    }else if(m.value < 0 || a.value < 0){
        mensagem = 'Campo não podem ter valores negativos';
        return false;
    }else{
        return true;
    }
}

