let data = [
    {
        url: "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/4a864049-816a-479e-8736-51740e8b724b.jpg",
        question: "Which ocean lies on the east coast of the USA?",
        choice: ["Eastern", "Pacific", "Indian", "Atlantic"],
        answer: "Atlantic"
    },
    {
        url: "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/4d101ba1-9275-4fb5-ba2c-5606e6c0274e.jpg",
        question: "Which is the worlds highest mountain?",
        choice: ["K2", "Makalu", "Mount Everest", "Kilimanjaro"],
        answer: "Mount Everest"
    },
    {
        url: "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/07121a24-b34b-4711-9bfa-5287163e65ce.jpg",
        question: "Which of these cities is not in Europe?",
        choice: ["Prague", "Moscow", "Barcelona", "Reykjavik"],
        answer: "Moscow"
    },
    {
        url: "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/467a486b-be3a-4183-90ed-dd6867d5852d.jpg",
        question: "True or False: Iceland is covered in ice.",
        choice: [true, false],
        answer: false
    },
    {
        url: "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/ecf8af7b-8541-4572-b63b-ee7d7f9fc4cc.jpg",
        question: "The United Kingdom is comprised of how many countries?",
        choice: [1, 2, 3, 4],
        answer: 4
    },
    {
        url: "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/ecf8af7b-8541-4572-b63b-ee7d7f9fc4cc.jpg",
        question: "Which of the following countries do not border France?",
        choice: ["Germany", "Netherlands", "Spain", "Italy"],
        answer: "Netherlands"
    },
    {
        url: "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/6e99b817-7be7-4f8a-9146-3f602ac81fad.jpg",
        question: "Which U.S. state is the Grand Canyon located in?",
        choice: ["Wyoming", "Arizona", "New Mexico", "Nevada"],
        answer: "Arizona"
    },
    {
        url: "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/866f119d-e5e2-45ca-846c-b6d10a59d1e4.jpg",
        question: "Which is the smallest country, measured by total land area?",
        choice: ["Maldives", "Monaco", "Vatican"],
        answer: "Vatican"
    },
    {
        url: "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/13efaf72-d695-4f65-b043-2b805b6a88eb.jpg",
        question: "Which is the longest river in the world?",
        choice: ["Amazon River", "Congo River", "Yellow River", "Nile River"],
        answer: "Nile River"
    },
    {
        url: "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/1226f177-dc1a-4142-8875-bdaa177717d7.jpg",
        question: "Which is the largest body of water?",
        choice: ["Indian Ocean", "Pacific Ocean", "Atlantic Ocean", "Nile River"],
        answer: "Pacific Ocean"
    }
]

let score = 0

// create html
data.forEach(e => {
    // add a container for each question
    let div = document.createElement('div')
    document.body.appendChild(div)
    // create elements from data
    let img = document.createElement('img')
    img.setAttribute('src', e.url)
    let question = document.createElement('p')
    question.textContent = e.question
    let ul = document.createElement('ul')
    let answer = String(e.answer)
    e.choice.forEach(e => {
        let li = document.createElement('li')
        li.textContent = e
        li.classList.add('button')
        ul.appendChild(li)
        ul.addEventListener('click', function clickEvent(event) {
            this.removeEventListener('click', clickEvent, false)
            // check for right answer and give color feedback
            if (event.target.textContent == answer) {
                event.target.style.backgroundColor = 'darkgreen'
                score += 1
            }
            else { // mark right answer if answered wrong
                event.target.style.backgroundColor = 'darkred'
                for (e of ul.getElementsByTagName('li')) {
                    if (e.textContent == answer) {
                        e.style.textDecoration = 'underline'
                    }
                    e.classList.remove('button')
                    e.classList.add('button-inactive')
                }
            } // style all other li elements inactive
            for (e of ul.getElementsByTagName('li')) {
                if (e.textContent != answer) {
                    e.classList.remove('button')
                    e.classList.add('button-inactive')
                }
            }
            event.target.style.color = '#fff'
        })
    })
    // append elements to html
    div.append(img, question, ul)
});

// add classes to elements
document.getElementsByTagName('')

// add play again link
let playAgain = document.createElement('a')
playAgain.setAttribute('href', 'index.html')
playAgain.textContent = 'Play again'
playAgain.classList.add('button')
document.body.appendChild(playAgain)

// add site title
let title = document.createElement('h1')
title.textContent = 'Play a quiz'
document.body.prepend(title)