var rIndex,
table = document.getElementById("table");




function checkEmptyInput()
{
var isEmpty = false,
    nome = document.getElementById("nome").value,
    email = document.getElementById("email").value,
    valor_pago = document.getElementById("valor_pago").value,
    selecionado = document.getElementById("selecionado").value;
   

if(nome === ""){//por aqui eu impeço que seja adicionado valores vazios
    alert("O nome não pode ser vazio!");
    isEmpty = true;
}
else if(email === ""){
    alert("o email não pode ser vazio");
    isEmpty = true;
}
else if(valor_pago === ""){
    alert("O valor não pode ser vazio");
    isEmpty = true;
}
else if(selecionado ==="" || selecionado===null){
    alert("A instituição não pode ser vazio");
    isEmpty = true;
}
return isEmpty;
}

// adicionar linha
function addHtmlTableRow()
{
// pegar a tabela pelo id
// criar nova linha e celulas
// pegar o valor pelo input text
// setar os valores na linha das celulas
if(!checkEmptyInput()){
var newRow = table.insertRow(table.length),
    cell1 = newRow.insertCell(0),
    cell2 = newRow.insertCell(1),
    cell3 = newRow.insertCell(2),
    cell4 = newRow.insertCell(3),
    nome = document.getElementById("nome").value,
    email = document.getElementById("email").value,
    valor_pago = document.getElementById("valor_pago").value;
    selecionado = document.getElementById("selecionado").value;

cell1.innerHTML = nome;
cell2.innerHTML = email;
cell3.innerHTML = valor_pago;
cell4.innerHTML= selecionado;

selectedRowToInput();
}
}


function selectedRowToInput()
{

for(var i = 1; i < table.rows.length; i++)
{
    table.rows[i].onclick = function()
    {
      // get the seected row index
      rIndex = this.rowIndex;
      document.getElementById("nome").value = this.cells[0].innerHTML;
      document.getElementById("email").value = this.cells[1].innerHTML;
      document.getElementById("valor_pago").value = this.cells[2].innerHTML;
      document.getElementById("#selecionado").value=this.cell[3].innerHTML;
    };
}
}
selectedRowToInput();//selecionar a linha pelo input

function editHtmlTbleSelectedRow()//função para editar
{


    if(!checkEmptyInput()){
        var newRow = table.insertRow(table.length),
            cell1 = newRow.insertCell(0),
            cell2 = newRow.insertCell(1),
            cell3 = newRow.insertCell(2),
            cell4 = newRow.insertCell(3),
            nome = document.getElementById("nome").value,
            email = document.getElementById("email").value,
            valor_pago = document.getElementById("valor_pago").value;
            selecionado = document.getElementById("selecionado").value;
        
        cell1.innerHTML = nome;
        cell2.innerHTML = email;
        cell3.innerHTML = valor_pago;
        cell4.innerHTML= selecionado;
nome = document.getElementById("nome").value,
email = document.getElementById("email").value,
valor_pago = document.getElementById("valor_pago").value;
selecionado = document.getElementById("selecionado").value;

if(!checkEmptyInput()){
table.rows[rIndex].cells[0].innerHTML = nome;
table.rows[rIndex].cells[1].innerHTML = email;
table.rows[rIndex].cells[2].innerHTML = valor_pago;
table.rows[rIndex].cells[3].innerHTML = selecionado;
}
}

function removeSelectedRow()//deletar a linha
{
    var resposta = confirm("Desejar deletar essa linha?")//confirmação de dados 
        if(resposta ==true){//se aceitar resposta recebe true e entra no if
   
    table.deleteRow(rIndex);
    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("valor_pago").value = "";
    document.getElementById("selecionado").value = "";
                 //D E L E T A N D O
    }else
    {//caso negue a confirmação, nada é alterado!
         }
}

function SubmitData(){//função para enviar dados e checar se estão vazios
    var resposta = confirm("Desejar realmente enviar os dados?")//confirmação de dados 
        if(resposta ==true){//se aceitar resposta recebe true e entra no if

        alert("Dados enviados com sucesso, nenhuma celula está vazia");
     }else{

     }


    }