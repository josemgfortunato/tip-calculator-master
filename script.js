const payoutEl = document.querySelector("#payout")
const peopleEl = document.querySelector("#people")
const fiveEl = document.querySelector("#five")
const tenEl = document.querySelector("#ten")
const fifteenEl = document.querySelector("#fifteen")
const twentyFiveEl = document.querySelector("#twenty-five")
const fiftyEl = document.querySelector("#fifty")
const customEl = document.querySelector("custom")
const amountEl = document.querySelector("#amount")
const totalEl = document.querySelector("#total")
const resetEl = document.querySelector("#reset")

fiveEl.addEventListener('click', splitter)
// tenEl.addEventListener('click', splitter)
// fifteenEl.addEventListener('click', splitter)
// twentyFiveEl.addEventListener('click', splitter)
// fiftyEl.addEventListener('click', splitter)

function splitter(p) {
    const percentage = (Number(payoutEl.value) / 20)
    const tip = (Number(payoutEl.value) + percentage).toFixed(2)
    const total = (tip / Number(peopleEl.value).toFixed(2))
    amountEl.innerText = `$ ${tip}`
    totalEl.innerText = `$ ${total}`
    p.preventDefault()
}
