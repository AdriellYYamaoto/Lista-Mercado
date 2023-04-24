var hortifruti = [];
var padaria = [];
var talho = [];
var congelados = [];
var laticinios = [];
var essencial = [];
var limpeza = [];
var outros = [];

function onload(){
    slide ();
    makeOnlyFirstFieldAvailable();    
}

function slide (){
    document.getElementById("radio1").checked = true;

    setInterval(function () {
        let count=0;
        
        if (count > 8) {
            count = 1;
        }
        document.getElementById("radio" + count).checked = true;
        count++;
    }, 2000);
}


function makeOnlyFirstFieldAvailable() {
    const itens = document.querySelectorAll(`div.radio input[type=radio]`);

    for (item of itens) {
        item.disabled = true;
    }
    document.getElementById('nome-item').disabled = true;
    document.getElementById('btn-add').disabled = true;
    document.getElementById('btn-remover').disabled = true;
}

function makeAllFieldAvailable() {
    const itens = document.querySelectorAll(`div.radio input[type=radio]`);

    for (item of itens) {
        item.disabled = false;
    }
    document.getElementById('nome-item').disabled = false;
    document.getElementById('btn-add').disabled = false;
    document.getElementById('btn-remover').disabled = false;
}

function inpItemReply() {
    let addItem = document.getElementById("inp-item").value;

    if (addItem == 'sim' || addItem == 'Sim' || addItem == 'SIM') {
        makeAllFieldAvailable();
    }
}

function addItem() {
    let nameItem = document.getElementById("nome-item").value;
    let opRadioElement = document.querySelector('input[name="categorias"]:checked');

    if (opRadioElement == null) {
        alert("É preciso selecionar uma categoria");
        return;
    }

    let opRadio = opRadioElement.value;

    switch (opRadio) {

        case "hortifruti":
            hortifruti.push(nameItem);
            break;

        case "padaria":
            padaria.push(nameItem);
            break;

        case "talho":
            talho.push(nameItem);
            break;

        case "congelados":
            congelados.push(nameItem);
            break;

        case "laticinios":
            laticinios.push(nameItem);
            break;

        case "essencial":
            essencial.push(nameItem);
            break;

        case "limpeza":
            limpeza.push(nameItem);
            break;

        case "outros":
            outros.push(nameItem);
            break;
    }
    list();
}

function list() {
    var elementHtmlHortifruti = document.getElementById('hortifrutiList')
    var InputHtmlHortifruti = "Hortifruti: " + hortifruti;
    elementHtmlHortifruti.innerHTML = InputHtmlHortifruti;

    var elementHtmlPadaria = document.getElementById('padariaList')
    var InputHtmlPadaria = "Padaria: " + padaria;
    elementHtmlPadaria.innerHTML = InputHtmlPadaria;

    var elementHtmlTalho = document.getElementById('talhoList')
    var InputHtmlTalho = "Talho: " + talho;
    elementHtmlTalho.innerHTML = InputHtmlTalho;

    var elementHtmlCongelados = document.getElementById('congeladosList')
    var InputHtmlCongelados = "Congelados: " + congelados;
    elementHtmlCongelados.innerHTML = InputHtmlCongelados;

    var elementHtmlLaticinios = document.getElementById('laticiniosList')
    var InputHtmlLaticinios = "Laticinios: " + laticinios;
    elementHtmlLaticinios.innerHTML = InputHtmlLaticinios;

    var elementHtmlEssencial = document.getElementById('essencialList')
    var InputHtmlEssencial = "Essencial: " + essencial;
    elementHtmlEssencial.innerHTML = InputHtmlEssencial;

    var elementHtmlLimpeza = document.getElementById('limpezaList')
    var InputHtmlLimpeza = "Limpeza: " + limpeza;
    elementHtmlLimpeza.innerHTML = InputHtmlLimpeza;

    var elementHtmlOutros = document.getElementById('outrosList')
    var InputHtmlOutros = "Outros: " + outros;
    elementHtmlOutros.innerHTML = InputHtmlOutros;
}

function removeFromArray(itemToRemove, arrayList) {
    // Corpo do laço de repetição
    for (var i = 0; i < arrayList.length; i++) {
        if (itemToRemove == arrayList[i]) {
            alert('item removido ' + arrayList[i]);
            arrayList.splice(i, 1);
        }
    }
}

function remover() {
    let item = prompt("Qual item você quer excluir ?");
    removeFromArray(item, hortifruti);
    removeFromArray(item, padaria);
    removeFromArray(item, talho);
    removeFromArray(item, congelados);
    removeFromArray(item, laticinios);
    removeFromArray(item, essencial);
    removeFromArray(item, limpeza);
    removeFromArray(item, outros);
    list();
}

