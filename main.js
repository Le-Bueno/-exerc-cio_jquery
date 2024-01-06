$(document).ready(function () {
    $('#mostrar-formulario').click(function () {
        $('#formulario').slideDown();
    });

    $('#botao-cancelar').click(function () {
        $('#formulario').slideUp();
    });

    $('#meu-formulario').on('submit', function (e) {
        e.preventDefault();

        const nomeTarefa = $('#texto-novo').val().trim();

        if (nomeTarefa !== '') {
            const novaTarefa = $('<li>' + nomeTarefa + '</li>');

            novaTarefa.click(function () {
                $(this).toggleClass('completed');
            });

            $('#tarefas').append(novaTarefa);
            $('#texto-novo').val('');
            $('#formulario').slideUp();
        }
    });
});
