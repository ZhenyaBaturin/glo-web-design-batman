// он выполняет работу только тогда когда дерево загружено
$(document).ready(function () {
    let tabsItem = $('.tabs-item');
    tabsItem.on('click', function (event) {
        // отменяет дейтвие ссылкиб которе перемещает в начале страницы
        event.preventDefault();
        // при нажатии определяюся хрев нажемаего обекта
        let activeContent = $(this).attr('href');
        // отключение вызибла класса
        $('.visible').toggleClass('visible');
        // после будет присваиваться класс визибл
        $(activeContent).toggleClass('visible');
        $('.tabs-item-active').toggleClass('tabs-item-active')
        // присваивание класса всем этим объектам
        $(this).toggleClass('tabs-item-active');
    })
});