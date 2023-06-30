/* Arquivo java para trocar a cor da tabela e utilizar o AJAX para Exercicio 5*/

/* TROCAR A COR USANDO A SUBSTUIÇÃO DE CLASSES*/ 
function trocaCor(cor) {
    var corSelecionada = document.querySelector('.portlet.box');
    corSelecionada.classList.remove(corSelecionada.classList.item(2));
    corSelecionada.classList.add(cor);
}

/* JAVASCRIPT + AJAX*/ 

function consultarDados(tipo) {
    $.ajax({
      url: 'DataRequest.php',
      method: 'POST',
      dataType: 'json',
      data: { tipo: tipo },
      success: function(response) {
        
        $('#titulosTabela').empty();
        $('#dadosTabela').empty();

        if(tipo === 'clientes'){

        var tittle = $('<tr>');
        tittle.append($('<th>').text('Código'));
        tittle.append($('<th>').text('Nome'));
        tittle.append($('<th>').text('CPF'));
        tittle.append($('<th>').text('Endereço'));
        tittle.append($('<th>').text('Telefone'));
        tittle.append($('<th>').text('E-mail'));
        $('#titulosTabela').append(tittle);

        $.each(response, function(index, data) {
          var row = $('<tr>');
          row.append($('<td>').text(index+1));
          row.append($('<td>').text(data.nome));
          row.append($('<td>').text(data.cpf));
          row.append($('<td>').text(data.endereco));
          row.append($('<td>').text(data.telefone));
          row.append($('<td>').text(data.email));        
          $('#dadosTabela').append(row);
        });
        }else if(tipo === 'fornecedores'){

        var tittle = $('<tr>');
        tittle.append($('<th>').text('Código'));
        tittle.append($('<th>').text('Nome'));
        tittle.append($('<th>').text('CPF'));
        tittle.append($('<th>').text('Cidade'));
        tittle.append($('<th>').text('Email'));
        $('#titulosTabela').append(tittle);
        
            $.each(response, function(index, data) {
                var row = $('<tr>');
                row.append($('<td>').text(index+1));
                row.append($('<td>').text(data.nome));
                row.append($('<td>').text(data.cpf));
                row.append($('<td>').text(data.cidade));
                row.append($('<td>').text(data.email));       
                $('#dadosTabela').append(row);
              });
        }
        else {

        var tittle = $('<tr>');
        tittle.append($('<th>').text('Código'));
        tittle.append($('<th>').text('Nome'));
        tittle.append($('<th>').text('CPF'));
        tittle.append($('<th>').text('Endereço'));
        tittle.append($('<th>').text('Telefone'));
        tittle.append($('<th>').text('Usuário'));
        $('#titulosTabela').append(tittle);

            $.each(response, function(index, data) {
                var row = $('<tr>');
                row.append($('<td>').text(index+1));
                row.append($('<td>').text(data.nome));
                row.append($('<td>').text(data.cpf));
                row.append($('<td>').text(data.endereco));
                row.append($('<td>').text(data.telefone));
                row.append($('<td>').text(data.usuario));       
                $('#dadosTabela').append(row);
              });

        }
      },
      error: function() {
        alert('Ocorreu um erro ao obter os dados.');
      }
    });
}

$('#visualizarFornecedores').click(function(event){
    event.preventDefault();
    consultarDados('fornecedores');
});
$('#visualizarCliente').click(function(event){
    event.preventDefault();
    consultarDados('clientes');
});
$('#visualizarUsuarios').click(function(event){
    event.preventDefault();
    consultarDados('usuarios');
});