const btns = document.querySelectorAll(".btn-sound-item")
const audio = document.createElement("audio")

audio.style.display = "none"
document.body.appendChild(audio)

btns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    audio.src = `Sounds/${btn.innerHTML}.mp3`
    audio.play()
  })
})
