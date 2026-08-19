const loyodeahma = document.querySelector("#values")

const storage = localStorage.getItem("complaints") ?? "[]"

const complaint = JSON.parse(storage)
console.log(complaint)
function createHTML(complaint) {
    const data = complaint.map((complaint) => `
        <div class="complaint-row">
          <article>${complaint.id}</article>
          <article>${complaint.name}</article>
          <article>${complaint.topic}</article>
          <article>${complaint.urgency}</article>
          <article>${complaint.description}</article>
          <article>${complaint.date}</article>
          <article>${complaint.status}</article>
        </div>`
    ).join("")

    loyodeahma.innerHTML = data
}

createHTML(complaint)