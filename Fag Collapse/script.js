const questions = [
  { info: "Why should't we trust atoms?", why: "They make up eventhing." },
  { info: "What do you call someone with no body and no nose?", why: "Nobody knows." },
  { info: "What is: 1 + 1?", why: "Depends on who are you asking." },
]

const insert = document.getElementById("insert")
let list = ``

questions.forEach((question, index) => {
  list += `
  <div class="box">
    <div class="info">
        <div>${question.info}</div>     
        <div class="collpase">
            <i class="fa-solid fa-chevron-down default"></i>
            <i class="fa-regular fa-circle-xmark close"></i>
        </div>
    </div>
    <small>${question.why}</small>
  </div>`
})

insert.innerHTML = list

const btns = document.getElementsByClassName("collpase")

Array.from(btns).forEach((item, index) => {
  item.addEventListener("click", () => {
    const smallInfo = document.getElementsByTagName("small")
    const _display = smallInfo[index].style.display == "block" ? "none" : "block"
    const box = item.closest(".box")

    box.classList.toggle("active")
    // item.firstChild.style.display = _display == 'block' ? "block" : "none"
    // item.lastChild.style.display = _display == 'block' ? "none" : "block"
    smallInfo[index].style.display = _display
  })
})
