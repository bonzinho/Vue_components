var app = new Vue({
    el: "#app",
    data: {
        title: "Teste vue.js (listagem)",
        bills: [
            {date_due: '20/08/2016', name: 'Conta da luz', value: 25.99, done:1},
            {date_due: '21/08/2016', name: 'Conta da água', value: 30.00, done:1},
            {date_due: '22/08/2016', name: 'Conta de telefone', value: 45, done:1},
            {date_due: '23/08/2016', name: 'Emprestimo do carro', value: 150.45, done:1},
            {date_due: '24/08/2016', name: 'Emrpestimo da casa', value: 250.58, done:1},
            {date_due: '25/08/2016', name: 'Gasolina', value: 45.22, done:1},
            {date_due: '26/08/2016', name: 'Créditos', value: 500.20, done:1}
        ]       
    },
    computed: {
        status: function(){
            var count = 0;
            for(var i in this.bills){
                if(!this.bills[i].done){
                    count++;
                }
            }
            return !count?"Nenhuma conta a pagar":"Existem "+ count + " a serem pagas";  // se nao houver contas a pagar escrevve a primeira setring se exitirem escreve a segunda
        }
    }
})