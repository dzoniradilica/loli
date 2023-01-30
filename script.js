let recenica = document.querySelector('#recenica')
recenica.remove()

let noviEl = document.createElement('div')
noviEl.classList = 'novi-element'
noviEl.innerHTML = '<hr> Pozzz'

let body = document.querySelector('body')
body.appendChild(noviEl)

console.log(noviEl)