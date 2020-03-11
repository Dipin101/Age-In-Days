//alert('Hello')    
//console.log('Hello')
//Challenge 1: Your age in Days 

function ageInDays(){
    var birthYear = prompt('What year were you born ... My friend?')
    var d = new Date() 
    var currentYear = d.getFullYear()
    console.log(currentYear)
    var ageDays = (currentYear-birthYear) * 365
    var h1 = document.createElement('h1')
    var textAnswer =  document.createTextNode('You are '+ ageDays+ ' days old.')
    h1.setAttribute('id', 'ageInDays')
    h1.appendChild(textAnswer)
    document.getElementById('flex-box-result').appendChild(h1)
    console.log(ageDays)
}

function reset(){
    document.getElementById('ageInDays').remove()
}