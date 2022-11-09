// Used parseInt() because it was concat the numbers together like a string and not adding it like integers
const form = document.mathOpps

form.addEventListener('submit', function(event){
    event.preventDefault()

    const additionNum1 = parseInt(form.addNum1.value)
    const additionNum2 = parseInt(form.addNum2.value)

    form.addNum1.value = ""
    form.addNum2.value = ""

    const subtract1 = parseInt(form.subtractNum1.value)
    const subtract2 = parseInt(form.subtractNum2.value)

    form.subtractNum1.value = ""
    form.subtractNum2.value = ""

    const multiply1 = parseInt(form.multiplyNum1.value)
    const multiply2 = parseInt(form.multiplyNum2.value)

    form.multiplyNum1.value = ""
    form.multiplyNum2.value = ""

    const divAdd = document.createElement('div')
    divAdd.textContent = additionNum1 + additionNum2
    document.getElementsByTagName("section")[0].appendChild(divAdd)

    const divSub = document.createElement('div')
    divSub.textContent = subtract1 - subtract2
    document.getElementsByTagName("section")[0].appendChild(divSub)

    const divMultiply = document.createElement('div')
    divMultiply.textContent = multiply1 * multiply2
    document.getElementsByTagName("section")[0].appendChild(divMultiply)

});

// Need to figure out how to delete the other submit events when there not being called.