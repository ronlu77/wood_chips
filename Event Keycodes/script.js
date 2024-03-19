const keywords = ["key", "keyCode", "code"]
const defaultInfo = document.querySelector(".defaultinfo")
const container = document.getElementsByClassName("container")[0] // 类数组

window.addEventListener("keyup", (event) => {
  const length = container.childNodes.length || 0
  if (length >= 3) container.innerHTML = ""

  defaultInfo.style.display = "none"
  keywords.forEach((text) => {
    const str = `event.${text}`
    const _dom = document.createElement("div")
    const title = document.createTextNode(str)
    const content = document.createElement("div")

    content.classList.add("pattern")
    content.innerHTML = event[text]

    _dom.className = "item"
    _dom.appendChild(title)
    _dom.appendChild(content)
    container.appendChild(_dom)
  })
})
