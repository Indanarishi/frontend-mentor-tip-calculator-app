const billInput = document.getElementById('bill')
const peopleInput = document.getElementById('people')
const tipOptionInput = document.getElementById('tip-input')
const tipAmount = document.getElementById('tip-amount')
const tipTotal = document.getElementById('tip-total')
const tipOptions = document.querySelectorAll('.tip-option')
const btnReset = document.querySelector('.reset-btn')

let inputBill
let inputPeople
let inputTip

function countAmount() {
    // console.log(inputBill, inputPeople, inputTip)
    if (inputBill && inputPeople && inputTip) {
        let amount = (inputBill * inputTip / 100) / inputPeople
        let total = amount + (inputBill / inputPeople)
        tipAmount.innerHTML = '$' + amount.toFixed(2)
        tipTotal.innerHTML = '$' + total.toFixed(2)
        btnReset.style.opacity = '1'
        btnReset.disabled = false
    }
}

function removeActive() {
    tipOptions.forEach(tip => {
        tip.classList.remove('active')
    })
}

btnReset.addEventListener('click', () => {
    billInput.value = ''
    inputBill = 0
    peopleInput.value = ''
    inputPeople = 0
    tipOptionInput.value = ''
    inputTip = 0
    removeActive()
    tipTotal.innerText = '$0.00'
    tipAmount.innerText = '$0.00'
    btnReset.disabled = true
    btnReset.style.opacity = '0.2'
})

tipOptions.forEach((tip, index) => {
    tip.addEventListener('click', () => {
        optionInput = +tipOptionInput
        if (optionInput !== null) {
            tipOptionInput.value = ''
        }

        removeActive()
        tip.classList.add('active')
        
        if (index === 0) {
            inputTip = 5
        } else if (index === 1) {
            inputTip = 10
        } else if (index === 2) {
            inputTip = 15
        } else if (index === 3) {
            inputTip = 25
        } else {
            inputTip = 50
        }
        countAmount()
    })
})

tipOptionInput.addEventListener('click', () => {
    removeActive()
})

tipOptionInput.addEventListener('input', e => {
    if (e.target.value > 100) {
        e.target.value = ''
    }
    inputTip = +e.target.value
    countAmount()
})

billInput.addEventListener('input', e => {
    let inputValue = +e.target.value
    if (inputValue === 0) {
        document.querySelector('.tip-bill-error').style.display = 'block'
        billInput.style.outline = '1px #d35353 solid'
    } else {
        document.querySelector('.tip-bill-error').style.display = 'none'
        billInput.style.outline = 'none'
        inputBill = e.target.value
        countAmount()
    }
})

peopleInput.addEventListener('input', e => {
    let inputValue = +e.target.value
    if (inputValue === 0) {
        document.querySelector('.tip-people-error').style.display = 'block'
        peopleInput.style.border = '1px #d35353 solid'
    } else {
        document.querySelector('.tip-people-error').style.display = 'none'
        peopleInput.style.border = 'none'
        inputPeople = e.target.value
        countAmount()
    }
})
