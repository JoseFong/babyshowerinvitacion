const eventDate = new Date("2026-03-08T09:30:00")
//const eventDate = new Date("2026-01-30T09:30:00")

const eventTime = eventDate.getTime()

setInterval(() => {
  const now = new Date()
  const distance = eventTime - now.getTime()

  const countdown = document.getElementById("countdown")
  const todayMsg = document.getElementById("today")

  if (sameDay(now, eventDate)) {
    countdown.style.display = "none"
    todayMsg.style.display = "block"
    return
  }

  if (distance < 0) {
    countdown.style.display = "none"
    todayMsg.style.display = "none"
    return
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24))
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((distance % (1000 * 60)) / 1000)

  document.getElementById("days").textContent = days
  document.getElementById("hours").textContent = String(hours).padStart(2, "0")
  document.getElementById("minutes").textContent = String(minutes).padStart(2, "0")
  document.getElementById("seconds").textContent = String(seconds).padStart(2, "0")
}, 1000)


function sameDay(a, b) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  )
}


const endDiv = document.getElementById("end");
const offset = -400; // deja 100px visibles antes de bloquear scroll

window.addEventListener("scroll", () => {
  const scrollBottom = window.scrollY + window.innerHeight;
  const endTop = endDiv.offsetTop;

  if (scrollBottom >= endTop - offset) {
    // fijamos scroll para dejar ver un poco del div
    window.scrollTo(0, endTop - window.innerHeight - offset);
  }
});
