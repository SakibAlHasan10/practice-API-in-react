const getToCard = () =>{
    const getCardToLs = localStorage.getItem('card')
    if(getCardToLs){
        return JSON.parse(getCardToLs)
    }
    return []
}

const satToCard = (card) =>{
    const saveString = JSON.stringify(card)
    localStorage.setItem('card', saveString)

}


const saveToCard = id =>{
const card = getToCard()
    card.push(id)
    satToCard(card)
}

export {saveToCard, getToCard}