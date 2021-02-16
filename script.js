const profiles = 
[
{ 
    photo: "/images/image-tanya.jpg", 
    info: "I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future.",
    name: 'Tanya Sinclair',
    profession:'UX Engineer'
},

{
    photo: "/images/image-john.jpg", 
    info: "If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.",
    name: 'John Tarkpor',
    profession:'Junior Front-end Developerr'
}
]

const photoInDOM = document.querySelector('.photo')
const infoInDOM = document.querySelector('.informations')
const nameInDOM = document.querySelector('.name')
const professionInDOM = document.querySelector('.profession')

const buttonPrevious = document.querySelector('.prev')
const buttonNext = document.querySelector('.next')


nameInDOM.innerHTML = profiles[0].name
professionInDOM.innerHTML = profiles[0].profession
photoInDOM.src = profiles[0].photo
infoInDOM.innerHTML = profiles[0].info


buttonNext.addEventListener('click', () => {
    const currentArray = profiles.find(element => element)
    console.log(currentArray)

    nameInDOM.innerHTML = profiles[+1].name
    professionInDOM.innerHTML = profiles[+1].profession
    photoInDOM.src = profiles[+1].photo
    infoInDOM.innerHTML = profiles[+1].info
})
buttonPrevious.addEventListener('click', () => {
    const currentArray = profiles.find(element => element)
    console.log(currentArray)

    nameInDOM.innerHTML = profiles[0].name
    professionInDOM.innerHTML = profiles[0].profession
    photoInDOM.src = profiles[0].photo
    infoInDOM.innerHTML = profiles[0].info
})