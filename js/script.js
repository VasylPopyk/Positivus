const headerMenu = document.querySelector('.header_menu')
const headerMenuButton = document.querySelector('.header_burger')
const body = document.body
headerMenuButton.addEventListener('click', () => {
    headerMenuButton.classList.toggle('active')
    headerMenu.classList.toggle('active')
    body.classList.toggle('locked')
})

document.querySelectorAll('.process_content_item_button').forEach(button => {
    button.addEventListener('click', function() {
        const parent = this.closest('.process_content_item'); // Батьківський елемент
        const allItems = document.querySelectorAll('.process_content_item');

        // Якщо натиснутий елемент вже активний, знімаємо клас active і завершуємо функцію
        if (parent.classList.contains('active')) {
            parent.classList.remove('active');
            return;
        }

        // Забираємо клас active у всіх інших елементів
        allItems.forEach(item => item.classList.remove('active'));

        // Додаємо клас active до поточного елемента
        parent.classList.add('active');
    });
});

//team
const showContentButton = document.querySelector('.more')
const closeContentButton = document.querySelector('.close')
const moreContent = document.querySelector('.team_items_content')

showContentButton.addEventListener('click', () => {
    moreContent.classList.add('active')
    body.classList.add('locked')
})

closeContentButton.addEventListener('click', () => {
    moreContent.classList.remove('active')
    body.classList.remove('locked')
})