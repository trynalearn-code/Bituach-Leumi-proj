const form = document.querySelector("#forms")
const nameInput = document.querySelector("#name")
const topicInput = document.querySelector("#topic")
const urgencyInput = document.querySelector("#urgency")
const descriptionInput = document.querySelector("#description")

let id = 0

form.addEventListener("submit", (e)=>{
    e.preventDefault()

    const name = nameInput.value.trim()
    const topic = topicInput.value.trim()
    const urgency = urgencyInput.value.trim()
    const description = descriptionInput.value.trim()

    const complaint = {
        id:id++,
        name,
        topic,
        urgency,
        description,
        date: new Date(),
        status:"pending"
    }

    const itemJson = localStorage.getItem("complaints") ?? "[]"
    const complaints = JSON.parse(itemJson)

    
})

