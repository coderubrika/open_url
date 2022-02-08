(()=>{


// const vars = {}


window.onload = async () => {
    if (navigator.serviceWorker) {
        try {
            await navigator.serviceWorker.register('sw.js')
        }
        catch (e) {
            console.log(e);
        }

    }
}

// window.addEventListener('beforeinstallprompt', event => {
//     event.preventDefault()
//     vars['beforeinstallprompt'] = event
// })

const buttonOpen = document.querySelector('button#open')
// const buttonInstall = document.querySelector('button#install')


const textarea = document.querySelector('textarea')

textarea.value = localStorage.getItem('URL_OPENER__content')

textarea.oninput = ({target}) => {
    localStorage.setItem('URL_OPENER__content', target.value)
}

buttonOpen.onclick = ()=> {
    const text = textarea.value
    const links = text.split('\n')

    links
        .filter(link => link !== '')
        .forEach( link => {
            window.open(link, '_blank')
        })
}

// buttonInstall.onclick = async ()=> {
//     vars['beforeinstallprompt'].prompt()
// }

})()