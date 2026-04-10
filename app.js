document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.action-button');
    if (button) {
        button.addEventListener('click', () => {
            alert('我是土豆，是马铃薯，是洋芋粑，是薯条...我千变万化，我无处不在，你想什么样，我是什么样');
        });
    }
});
