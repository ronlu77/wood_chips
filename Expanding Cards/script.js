window.onload =function(){
    const items = document.querySelectorAll('.cards-continer')
    // Array.from 将伪数组转化成数组
    Array.from(items).forEach(item => {
        item.addEventListener('click',()=>{
            removeItemClass()
            item.classList.add('active')
        })
    })

    function removeItemClass(){
        Array.from(items).forEach(item => {
            item.classList.remove('active')
        })
    }
}