document.addEventListener('DOMContentLoaded', () => {
    const actionButton = document.querySelector('.action-button');
    if (actionButton) {
        actionButton.addEventListener('click', () => {
            alert('我是土豆，是马铃薯，是洋芋粑，是薯条...我千变万化，我无处不在，你想什么样，我是什么样');
        });
    }

    // 3D 背景位移
    const body = document.body;
    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth - 0.5; // -0.5 to 0.5
        const mouseY = e.clientY / window.innerHeight - 0.5; // -0.5 to 0.5

        const offsetX = -mouseX * 15; // Max 15px offset
        const offsetY = -mouseY * 15; // Max 15px offset

        body.style.backgroundPosition = `${50 + offsetX}% ${50 + offsetY}%`;
    });

    // 土豆 72 变交互
    const potatoButton = document.querySelector('.potato-button');
    const modalOverlay = document.getElementById('potato72-modal');
    const recipeGrid = modalOverlay.querySelector('.recipe-grid');
    const closeButton = modalOverlay.querySelector('.close-button');

    const potatoRecipes = [
        { name: "酸辣土豆丝", method: "切丝爆炒" },
        { name: "芝士焗薯泥", method: "烤箱烘焙" },
        { name: "脆皮洋芋粑", method: "煎炸蘸料" },
        { name: "红烧土豆块", method: "炖煮入味" },
        { name: "椒盐小土豆", method: "煮熟油炸" },
        { name: "土豆炖牛肉", method: "慢炖软烂" },
        { name: "干煸土豆片", method: "爆炒干香" },
        { name: "香煎土豆饼", method: "压泥香煎" },
        { name: "咖喱土豆", method: "咖喱汁煮" },
        { name: "蒜蓉土豆泥", method: "捣泥蒜香" },
        { name: "凉拌土豆丝", method: "焯水凉拌" },
        { name: "肉末土豆", method: "肉末同炒" },
        { name: "小炒土豆片", method: "切片快炒" },
        { name: "炸薯条", method: "油炸撒盐" },
        { name: "烤土豆", method: "烤箱全烤" },
        { name: "土豆沙拉", method: "沙拉酱拌" },
        { name: "土豆泥浓汤", method: "搅拌浓汤" },
        { name: "风琴土豆", method: "切片烘烤" },
        { name: "土豆披萨", method: "披萨底料" },
        { name: "土豆包子", method: "包子馅料" },
        { name: "土豆饺子", method: "饺子馅料" },
        { name: "土豆面包", method: "面包烘焙" },
        { name: "土豆糕", method: "蒸制切块" },
        { name: "土豆丸子", method: "搓圆油炸" },
        { name: "土豆盒子", method: "馅料煎制" },
        { name: "土豆烧排骨", method: "排骨同炖" },
        { name: "农家小炒肉土豆", method: "家常快炒" },
        { name: "狼牙土豆", method: "特制刀切" },
        { name: "怪味土豆", method: "多种调料" },
        { name: "孜然土豆", method: "孜然爆香" },
        { name: "香辣土豆", method: "辣椒炒制" },
        { name: "排骨炖土豆", method: "家常炖煮" },
        { name: "地三鲜", method: "茄子辣椒同炒" },
        { name: "翠玉土豆", method: "青椒同炒" },
        { name: "金沙土豆", method: "咸蛋黄炒" },
        { name: "黑椒土豆", method: "黑椒汁炒" },
        { name: "香草土豆", method: "香草调味" },
        { name: "土豆千层饼", method: "层层煎制" },
        { name: "土豆焖饭", method: "米饭同焖" },
        { name: "土豆疙瘩汤", method: "面疙瘩汤" },
        { name: "土豆泥馅饼", method: "馅饼烘烤" },
        { name: "土豆泥甜甜圈", method: "甜甜圈造型" },
        { name: "土豆泥蛋糕", method: "蛋糕烘焙" },
        { name: "土豆脆片", method: "薄片烘烤" },
        { name: "土豆泥卷饼", method: "卷饼馅料" },
        { name: "土豆泥披萨", method: "披萨底料" },
        { name: "土豆泥面包", method: "面包烘焙" },
        { name: "土豆泥华夫饼", method: "华夫饼制作" },
        { name: "土豆泥煎饺", method: "煎饺馅料" },
        { name: "土豆泥炸鸡", method: "炸鸡配料" },
        { name: "土豆泥春卷", method: "春卷馅料" },
        { name: "土豆泥可乐饼", method: "可乐饼制作" },
        { name: "土豆泥鸡蛋饼", method: "鸡蛋饼制作" },
        { name: "土豆泥蔬菜沙拉", method: "蔬菜沙拉配料" },
        { name: "土豆泥焗饭", method: "焗饭制作" },
        { name: "土豆泥泡芙", method: "泡芙制作" },
        { name: "土豆泥三明治", method: "三明治馅料" },
        { name: "土豆泥汉堡", method: "汉堡配料" },
        { name: "土豆泥热狗", method: "热狗配料" },
        { name: "土豆泥寿司", method: "寿司制作" },
        { name: "土豆泥手卷", method: "手卷制作" },
        { name: "土豆泥甜点", method: "甜点制作" },
        { name: "土豆泥冰淇淋", method: "冰淇淋制作" },
        { name: "土豆泥奶昔", method: "奶昔制作" },
        { name: "土豆泥布丁", method: "布丁制作" },
        { name: "土豆泥麻薯", method: "麻薯制作" },
        { name: "土豆泥汤圆", method: "汤圆馅料" },
        { name: "土豆泥月饼", method: "月饼馅料" },
        { name: "土豆泥青团", method: "青团馅料" },
        { name: "土豆泥粽子", method: "粽子馅料" },
        { name: "土豆泥年糕", method: "年糕制作" },
        { name: "土豆泥发糕", method: "发糕制作" },
        { name: "土豆泥面条", method: "面条制作" },
        { name: "土豆泥水饺", method: "水饺馅料" },
        { name: "土豆泥馄饨", method: "馄饨馅料" }
    ];

    function generateRecipeCards() {
        recipeGrid.innerHTML = ''; // Clear previous content
        potatoRecipes.forEach((recipe, index) => {
            const card = document.createElement('div');
            card.classList.add('recipe-card');
            card.innerHTML = `<h3>${index + 1}. ${recipe.name}</h3><p>${recipe.method}</p>`;
            recipeGrid.appendChild(card);
        });
    }

    if (potatoButton) {
        potatoButton.addEventListener('click', () => {
            modalOverlay.classList.add('active');
            generateRecipeCards(); // Generate recipes when modal opens
        });
    }

    if (closeButton) {
        closeButton.addEventListener('click', () => {
            modalOverlay.classList.remove('active');
        });
    }

    // Close modal when clicking outside content (on the overlay itself)
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            modalOverlay.classList.remove('active');
        }
    });
});
