const form = document.getElementById("form1")
const creditCard = document.getElementById("credit-card")
const ccDate = document.getElementById("cc-date")
const amount = document.getElementById("amount")
const firstName = document.getElementById("first-name")
const lastName = document.getElementById("last-name")
const city = document.getElementById("city")
const postalCode = document.getElementById("postal-code")
const visa = document.getElementById("visa")
const masterCard = document.getElementById("master-card")
const amex = document.getElementById("amex")
const cardTypesContainer = document.getElementById("card-types-container")
const state = document.getElementById("state")
const error = document.getElementById('error')

form.addEventListener('submit', (e) => {
    let messages = []
    if (creditCard.value === "" || creditCard.value.length < 16) {
        messages.push("Your card must be at least 16 digits")
        creditCard.style.borderColor = "red"
        error.style.display = "flex"
    }
    if (ccDate.value === "" || ccDate.value.length < 5) {
        messages.push("Your date must include day and month in format dd/mm")
        ccDate.style.borderColor = "red"
        error.style.display = "flex"
    }
    if (amount.value === "") {
        messages.push("Amount must not be empty")
        amount.style.borderColor = "red"
        error.style.display = "flex"
    }
    if (firstName.value === "") {
        messages.push("Please provide your name")
        firstName.style.borderColor = "red"
        error.style.display = "flex"
    }
    if (lastName.value === "") {
        messages.push("Provide your last name")
        lastName.style.borderColor = "red"
        error.style.display = "flex"
    }
    if (city.value === "") {
        messages.push("Please provide your city")
        city.style.borderColor = "red"
        error.style.display = "flex"
    }
    if (postalCode.value === "") {
        messages.push("Provide your zip code")
        postalCode.style.borderColor = "red"
        error.style.display = "flex"
    }
    if (visa.checked === false && masterCard.checked === false && amex.checked === false) {
        messages.push("Select the brand of your card")
        cardTypesContainer.setAttribute("class", "col-4 bg-danger rounded text-light")
        error.style.display = "flex"
    }
    if (state.value === "Choose...") {
        messages.push("Must select a state")
        state.style.borderColor = "red"
        error.style.display = "flex"
    }
    
    if (messages.length > 0) {
        e.preventDefault();
        //error.textContent = messages.join(', ')
        error.innerHTML = messages.join(', ')
    }
})