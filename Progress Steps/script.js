window.onload = function () {
    let currentIndex = 1  // 纪录当前所处位置index
    let btn_pre = document.querySelector('#btn-pre');
    let btn_next = document.querySelector('#btn-next');
    let stepsItem = document.querySelectorAll('.steps-item')
    let progress = document.getElementById('progress');

    btn_pre.addEventListener('click', function () {
        currentIndex--
        (currentIndex < 1) && (currentIndex = 1)
        update()
    })

    btn_next.addEventListener('click', function () {
        currentIndex++
        if (currentIndex > stepsItem.length) { // 设置next标签为disabled
            currentIndex = stepsItem.length
        }
        update()
    })

    function update() {
        stepsItem.forEach((item, index) => {
            if (index < currentIndex) {
                item.classList.add('active')
            } else {
                item.classList.remove('active')
            }
        })

        const actives = document.querySelectorAll('.active')
        
        progress.style.width = (actives.length - 1) / (stepsItem.length - 1)*100 + "%"
        if(currentIndex === 1){
            btn_pre.disabled = true
        }else if (currentIndex === stepsItem.length){
            btn_next.disabled = true
        }else{
            btn_next.disabled = false
            btn_pre.disabled = false
        }
    }

}