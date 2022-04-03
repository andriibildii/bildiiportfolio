// ===== Вешаем событие на каждый символ текста ===== //

const text = document.querySelector('.text');

text.innerHTML = text.textContent.replace(/\S/g, '<span>$&</span>');

// ===== Делигация события на родительский блок ===== //

text.addEventListener('mouseover', function(event) {
    if (event.target.tagName != 'SPAN') return;
    event.target.classList.add('activeText');
});
