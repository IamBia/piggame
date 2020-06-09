function configGame() {
    localStorage.setItem('player1_name', document.querySelector("#player1_name").value)
    localStorage.setItem('player2_name', document.querySelector("#player2_name").value)
    localStorage.setItem('player1_avatar', document.querySelector("#player1_avatar").src)
    localStorage.setItem('player2_avatar', document.querySelector("#player2_avatar").src)

    console.log(localStorage)
    gameStart = true
    setTimeout(window.location.href = 'game.html', 500)
}

document.querySelectorAll('.player-avatar-selection')
.forEach(element => {
    element.addEventListener('click', e => {
        console.log('a')
        e.preventDefault()
        openAvatarSelection(e.target.id)
        console.log(e.target.id)
    })
})

function openAvatarSelection(id) {
    console.log(`Abrindo o modal para o id ${id}`)
    openModal(id)
}

document.querySelectorAll('.avatar-chose-image')
    .forEach(element => {
    element.addEventListener('click', (e) => {
        e.preventDefault()
        document.querySelector(`#${modalId}`).src = e.target.src
        modalClose()
    })
})

function openModal(id) {
    console.log("mostrando modal")
    document.querySelector('.modal').style.display = 'flex'
    document.querySelector('.modal').id = id
    document.querySelector('.modal').classList.add('animate__fadeIn')
    document.querySelector('.modal').classList.remove('animate__fadeOut')
    document.querySelector('.modal').classList.remove('hidden')
    modalId = document.querySelector('.modal').id
    console.log(modalId)
}

function modalClose() {
    console.log('escondendo modal')
    document.querySelector('.modal').classList.remove('animate__fadeIn')
    document.querySelector('.modal').classList.add('hidden')
    document.querySelector('.modal').classList.add('animate__fadeOut')
    
} 