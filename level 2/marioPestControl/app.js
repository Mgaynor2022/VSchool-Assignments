const form = document.marioForm
form.addEventListener("submit",(event) =>{
    event.preventDefault()
    const goombas = parseInt(form.goombas.value)
    form.goombas.value = ""

    const bob = parseInt(form.bob.value)
    form.bob.value = ""
    
    const cheep = parseInt(form.cheep.value)
    form.cheep.value = ""

    const totalBaddies = goombas + bob + cheep
    const totalCoins = (5 * goombas)+ (7 * bob) + (11 * cheep)

    alert(
        `Total Baddies:${totalBaddies}
        Total Coins:${totalCoins}`);
    
});