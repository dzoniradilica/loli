const inflationCalculator = () => {
    let inflationRate = document.querySelector('#inflationRate').value
    let money = document.querySelector('#money') .value  
    let years = document.querySelector('#years').value

    years = parseFloat(years)
    money = parseFloat(money)
    inflationRate = parseFloat(inflationRate)

    let worth = money + (money * (inflationRate / 100))

    for(let i = 1;i < years;i++) {
        worth += worth * (inflationRate / 100)
    }

    worth = worth.toFixed(2)

    let newElement = document.createElement('div')
    newElement.className = 'new-value'
    newElement.innerText = `Danasnjih ${money}$ vrijedi isto kao ${worth}$ za ${years} godina`
    document.querySelector('.container').appendChild(newElement)
    
}