const $video=document.querySelector('#video')
const $play=document.querySelector('#play')
const $pausa=document.querySelector('#pausa')
const $backward=document.querySelector('#backward')
const $forward=document.querySelector('#forward')


$play.addEventListener ('click',handlePlay)
$pausa.addEventListener ('click',handlePlay)
$backward.addEventListener('click',handlePlay)
$forward.addEventListener('click',handlePlay)


function handlePlay(){
    $video.play()
    $play.hidden=true
    $play.hidden=false
    console.log('clic en reproducir')
}

function handlePause(){
    $video.pause()
    $pause.hidden=true
    $pause.hidden=false
    console.log('clic en pause')
}

function handleBackward(){
    $video.currentTime -=10
    console.log('Regresaste 10 sg')
}

function handleForward(){
    $video.currentTime +=10
    console.log('Adelantaste 10 sg')
}