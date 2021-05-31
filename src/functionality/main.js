let container = []

// MAKE ONE question
const makeMultiplicationQuestion = (multiplicand, multiplier, index) => {
    let question = `${multiplicand} x ${multiplier} = `;
    let answer = multiplicand * multiplier;
    return {
        question,
        answer,
        index
    }
}

const makeAdditionQuestion = (first, second, index) => {
    let question = `${first} + ${second} = `;
    let answer = first + second;
    return {
        question,
        answer,
        index
    }
}

const makeSubtractionQuestion = (minuend, subtrahend, index) => {
    let question = `${minuend} - ${subtrahend} = `;
    let answer = minuend - subtrahend;
    return {
        question,
        answer,
        index
    }
}

const makeDivisionQuestion = (dividend, divisor, index) => {
    let question = `${dividend} / ${divisor} = `;
    let answer = dividend / divisor;
    return {
        question,
        answer,
        index
    }
}

let functions = ['mult', 'divide', 'add', 'sub']

const twentySameRandomQuestions = (lowest, highest, operator) => {
    let range = highest - lowest
    for(let i = 0; i < 20; i++){
        let randomFirst = Math.floor(Math.random() * range ) + lowest
        let randomSecond = Math.floor(Math.random() * 12) + 1

        switch(operator){
            case 'mult':
                container.push(makeMultiplicationQuestion(randomFirst, randomSecond, i))
                break
            case 'division':
                container.push(makeDivisionQuestion(randomFirst, randomSecond, i))
                break
            case 'add':
                container.push(makeAdditionQuestion(randomFirst, randomSecond, i))
                break
            case 'sub':
                container.push(makeSubtractionQuestion(randomFirst, randomSecond, i))
                break
        }

        // container.push(makeMultiplicationQuestion(randomFirst, randomSecond, i))
    }
}

const tenSameRandomQuestions = (lowest, highest, operator) => {
    let range = highest - lowest
    for(let i = 0; i < 10; i++){
        let randomFirst = Math.floor(Math.random() * range ) + lowest
        let randomSecond = Math.floor(Math.random() * 12) + 1

        switch(operator){
            case 'mult':
                container.push(makeMultiplicationQuestion(randomFirst, randomSecond, i))
                break
            case 'division':
                container.push(makeDivisionQuestion(randomFirst, randomSecond, i))
                break
            case 'add':
                container.push(makeAdditionQuestion(randomFirst, randomSecond, i))
                break
            case 'sub':
                container.push(makeSubtractionQuestion(randomFirst, randomSecond, i))
                break
        }
        // container.push(makeMultiplicationQuestion(randomFirst, randomSecond, i))
    }
}





let makeQuestionDisplay = (question) => {
    let container = document.createElement("div")
    let head = document.createElement("h3")
    let input = document.createElement("input")

    // container.innerText = question.question
    head.innerText = question.question
    container.setAttribute("class", "question-display")
    input.setAttribute("type", "text")
    container.appendChild(head)
    container.appendChild(input)

    return container
}

let target = document.getElementById("questions")

// THIS GETS CALLED IN EVENT LISTENER IN HTML WHICH IS CREATED IN APPEND TO DOM
const assess = () => {
    console.log('Finished!!!')

    let count = 0;
    let correctAnswers = 0;
    let score = 0
    let theirAnswers = document.getElementsByClassName("question-display")
    let hold = []
    let answers = container.map(template => template.answer)
    console.log(theirAnswers)



    for(let i = 0; i < theirAnswers.length;i++){
        let value = theirAnswers[i].lastChild.value

        // ERRORS DISABLED FOR DEVELOPMENT
        if(value == ""){
            document.getElementById("error").style.display = "block"
            console.log(hold)
            return
        }
        hold.push(value)
    }

    for(let i = 0; i < theirAnswers.length;i++){
        if(theirAnswers[i].lastChild.value == answers[i]){
            correctAnswers++;
            count++
        } else {
            count++
        }
    }

    // if(){}
    console.log(correctAnswers / count * 100 + "here")

    console.log(answers)
    console.log(hold)

    let results = document.getElementById('results')
    results.style.display = 'block'
    results.innerText = `Your score is ${correctAnswers / count * 100}`
}

// CREATE DOM FOR QUESTIONS AND SUBMIT BUTTON AND PUSH TO TARGET
let appendToDom = (array) => {
    array.map(question => {
        target.appendChild(makeQuestionDisplay(question))
    })
    let checkAnswerBtn = document.createElement("button")
    let container = document.createElement("div")
    container.setAttribute("class", "question-display2")
    checkAnswerBtn.setAttribute("id", "submitBtn")
    checkAnswerBtn.addEventListener('click', assess)
    checkAnswerBtn.innerText = "submit"
    container.appendChild(checkAnswerBtn)
    target.appendChild(container)
}