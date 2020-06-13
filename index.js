document.querySelectorAll('.player-avatar-selection')
.forEach(element => {
    element.addEventListener('click', e => {
        e.preventDefault()
        openAvatarSelection(e.target.id)
    })
})

document.querySelectorAll('.avatar-chose-image')
    .forEach(element => {
    element.addEventListener('click', (e) => {
        e.preventDefault()
        document.querySelector(`#${modalId}`).src = e.target.src
        modalClose()
    })
})

const configGame = () => {
    localStorage.setItem('player1_name', document.querySelector("#player1_name").value)
    localStorage.setItem('player2_name', document.querySelector("#player2_name").value)
    localStorage.setItem('player1_avatar', document.querySelector("#player1_avatar").src)
    localStorage.setItem('player2_avatar', document.querySelector("#player2_avatar").src)
    if(!verifyGameItens()) {
        alert('Ainda faltam informações para dar inicio ao jogo!')

    } else {
        gameStart = true
        setTimeout(window.location.href = 'game.html', 500)
    }
    
}


const openAvatarSelection = id => {
    openModal(id)
}

const openModal = id => {
    document.querySelector('.modal').style.display = 'flex'
    document.querySelector('.modal').id = id
    document.querySelector('.modal').classList.add('animate__fadeIn')
    document.querySelector('.modal').classList.remove('animate__fadeOut')
    document.querySelector('.modal').classList.remove('hidden')
    modalId = document.querySelector('.modal').id
}

const modalClose = () => {
    document.querySelector('.modal').classList.remove('animate__fadeIn')
    document.querySelector('.modal').classList.add('animate__fadeOut')
    setTimeout(() => document.querySelector('.modal').classList.add('hidden'),500)
} 

const verifyGameItens = () => {
    if( localStorage.getItem('player1_name') == '' ||
        localStorage.getItem('player2_name') == '' ||
        localStorage.getItem('player1_avatar').includes('user.png') ||
        localStorage.getItem('player2_avatar'.includes('.user.png'))) return false
    return true
}

// ICONE PESSOA Icons made by <a href="https://www.flaticon.com/authors/becris" title="Becris">Becris</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>