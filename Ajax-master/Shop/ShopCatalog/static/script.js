// Ожидание загрузки страницы
$(document).ready(function(){
    // Находим все элементы класса checkbox и задаём им действие click
    $('.checkbox').click(function(){
        // ajax запрос
        $.ajax({
            // Адрес по которому отправляется запрос
            url : $('.url_get').val(),
            // Запрос с типом get
            type : 'get',
            // Данные, которые отправляются с запросом
            data : {category : $(this).val()},
            // Функция, срабатывающая при выполнении запроса
            success : function(response){
                // Очистка класса container
                $('.container').empty()
                // Перебор отфильтрованного транспорта и отображение на странице
                for (const index in response.filtered_transport){
                    // Строение страницы 
                    let newTransport = `<div>
                    <p>${ response.filtered_transport[index].name }</p>
                    <p>${ response.filtered_transport[index].price }$</p>
                    <img src="media/${ response.filtered_transport[index].image }" style="max-height: 400px">
                    </div>
                    <hr>
                    <br><br>`
                    // Вставка элемента newTransport в класс container
                    $(".container").append(newTransport)
                }
            }
        })
    })
})