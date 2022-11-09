const form = document.travelForm;

form.addEventListener("submit",function(event){
    event.preventDefault()
    const fName = form.firstName.value
    form.firstName.value = ""

    const lName = form.lastName.value;
    form.lastName.value = ""

    const age = form.age.value;
    form.age.value = ""

    const gender = form.gender.value

    const city = form.city.value

    const checkedInputs = []
    for(let i =0; i < form.diet.length; i++){
        if(form.diet[i].checked){
        checkedInputs.push(form.diet[i].value)
    }
}

    alert(`
    First Name:${fName}
    Last Name:${lName}
    Age:${age}
    Gender:${gender}
    Location:${city}
    Dietary Restrictions:${checkedInputs}`)

});
