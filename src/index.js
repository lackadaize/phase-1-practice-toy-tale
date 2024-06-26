//Original code
let addToy = false

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn")
  const toyFormContainer = document.querySelector(".container")
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy
    if (addToy) {
      toyFormContainer.style.display = "block"
    } else {
      toyFormContainer.style.display = "none"
    }
  })
  Toys() // Modified code
})

// Modified code
// Initial Get Request
function Toys () {
  const toysUrl = "http://localhost:3000/toys"
  
  fetch(toysUrl)
    .then(response => response.json())
    .then((toys) => toys.forEach(loadToys))
    .catch((error) => console.log(error))
}
// HTML Elements, Content, and Attributes
function loadToys (toys) {
  console.log(toys)
  const toyCard = document.createElement('div')
  toyCard.setAttribute('id',`toy ${toys.id}`)
  toyCard.setAttribute('class', 'toy-card card')

  const toyName = document.createElement('h2')
  toyName.setAttribute('class', 'toy-name h2')

  const toyImage = document.createElement('img')
  toyImage.setAttribute('class', 'toy-img img')
  toyImage.src = toys.image;

  const toyLikes = document.createElement('p')
  toyLikes.setAttribute('class', 'toy-likes p')
  toyLikes.innerText = toys.likes

  const toyLikeButton = document.createElement('button')
  toyLikeButton.setAttribute('id',`${toys.id}`)
  toyLikeButton.setAttribute('class', 'toy-like-button button')
  toyLikeButton.textContent = "Like"

// Append Elements to container
const toyCollection = document.getElementById("toy-collection");
toyCollection.appendChild(toyCard)
toyCard.appendChild(toyName)
toyCard.appendChild(toyImage)
toyCard.appendChild(toyLikes)
toyCard.appendChild(toyLikeButton)
}

//