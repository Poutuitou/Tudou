document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.action-button');
    if (button) {
        button.addEventListener('click', () => {
            alert('我是土豆，千变万化，你想什么样，我就是什么样');
        });
    }
});