const payoutEl = document.querySelector("#payout");
const peopleEl = document.querySelector("#people");
const fiveEl = document.querySelector("#five");
const tenEl = document.querySelector("#ten");
const fifteenEl = document.querySelector("#fifteen");
const twentyFiveEl = document.querySelector("#twenty-five");
const fiftyEl = document.querySelector("#fifty");
const customEl = document.querySelector("custom")
const amountEl = document.querySelector("#amount");
const totalEl = document.querySelector("#total");
const resetEl = document.querySelector("#reset");

fiveEl.addEventListener('click', fiveCalc);
tenEl.addEventListener('click', tenCalc);
fifteenEl.addEventListener('click', fifteenCalc);
twentyFiveEl.addEventListener('click', twentyFiveCalc);
fiftyEl.addEventListener('click', fiftyCalc);
customEl.addEventListener('keypress', customCalc);

function fiveCalc(p) {
    const percentage = parseInt(payoutEl.value) / 20;
    const tip = percentage + parseInt(payoutEl.value);
    const people = parseInt(peopleEl.value);
    const total = parseInt(tip / people);
    amountEl.innerHTML = `$ ${tip}`;
    totalEl.innerHTML = `$ ${total}`;
    p.preventDefault();
}

function tenCalc(p) {
    const percentage = parseInt(payoutEl.value) / 10;
    const tip = percentage + parseInt(payoutEl.value);
    const people = parseInt(peopleEl.value);
    const total = parseInt(tip / people);
    amountEl.innerHTML = `$ ${tip}`;
    totalEl.innerHTML = `$ ${total}`;
    p.preventDefault();
}

function fifteenCalc(p) {
    const percentage = parseInt(payoutEl.value) / 6.66666667;
    const tip = percentage + parseInt(payoutEl.value);
    const people = parseInt(peopleEl.value);
    const total = parseInt(tip / people);
    amountEl.innerHTML = `$ ${tip}`;
    totalEl.innerHTML = `$ ${total}`;
    p.preventDefault();
}

function twentyFiveCalc(p) {
    const percentage = parseInt(payoutEl.value) / 4;
    const tip = percentage + parseInt(payoutEl.value);
    const people = parseInt(peopleEl.value);
    const total = parseInt(tip / people);
    amountEl.innerHTML = `$ ${tip}`;
    totalEl.innerHTML = `$ ${total}`;
    p.preventDefault();
}

function fiftyCalc(p) {
    const percentage = parseInt(payoutEl.value) / 2;
    const tip = percentage + parseInt(payoutEl.value);
    const people = parseInt(peopleEl.value);
    const total = parseInt(tip / people);
    amountEl.innerHTML = `$ ${tip}`;
    totalEl.innerHTML = `$ ${total}`;
    p.preventDefault();
}

function customCalc(p) {
    const payout = parseInt(payoutEl.value);
    const people = parseInt(peopleEl.value);
    const custom = parseInt(customEl.value);
    const customPercentage = (100 / custom);
    const percentage =  payout / customPercentage;
    const tip = percentage + payout;
    const total = tip / people;
    amountEl.innerHTML = `$ ${tip}`;
    totalEl.innerHTML = `$ ${total}`;

    const tecla = p.key;
    if (key === `Enter`) {
        document.querySelector("custom").keypress();
    }

    p.preventDefault();

    
}