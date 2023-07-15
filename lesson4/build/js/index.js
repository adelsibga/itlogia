const menuButton = document.querySelector('.js-check-menu')
const menuSection = document.querySelector('.js-menu')
const orderSections = document.querySelector('#order')

menuButton.onclick = () => {
    menuSection.scrollIntoView({
        behavior: 'smooth'
    })
}

let links = document.querySelectorAll('[data-link]')
for (let i = 0; i < links.length; i++) {
    links[i].onclick = () => {
        document.getElementById(links[i].getAttribute('data-link')).scrollIntoView({behavior: 'smooth'})
    }
}

let buttons = document.querySelectorAll('.js-product-button')
for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = () => {
        orderSections.scrollIntoView({behavior: 'smooth'})
    }
}

const input = document.querySelectorAll('input')

const formInputButton = document.getElementById('order-action')

formInputButton.onclick = () => {
    let hasError = false

    input.forEach((e) => {
        if (!e.value) {
            e.parentElement.style.background = 'red'
            hasError = true
        }
        else {
            e.parentElement.style.background = ''
        }
    })

    if (!hasError) {
        input.forEach((e) => {
            e.value = ''
        })
        setTimeout(() => {
            alert('Спасибо за заказ! Мы скоро свяжемся с вами!')
        }, 100)
    }
}

const currency = document.querySelector('.js-currency')
let prices = document.querySelectorAll('.js-product-price')

currency.onclick = (e) => {
    let currentCurrency = e.target.innerText
    let newCurrency = '$'
    let coeff = 1

    if (currentCurrency === '$') {
        newCurrency = '₽'
        coeff = 80
    }
    else if (currentCurrency === '₽') {
        newCurrency = 'BYN'
        coeff = 3
    }
    else if (currentCurrency === 'BYN') {
        newCurrency = '€'
        coeff = 0.9
    }
    else if (currentCurrency === '€') {
        newCurrency = '¥'
        coeff = 6.9
    }

    e.target.innerText = newCurrency

    for (let i = 0; i <= prices.length; i++) {
        prices[i].innerText = +(prices[i].getAttribute('data-base-price') * coeff).toFixed(1) + ' ' + newCurrency
    }
}