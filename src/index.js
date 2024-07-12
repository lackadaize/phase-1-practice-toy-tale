// Original code
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
// Global JSON URL
const toysUrl = "http://localhost:3000/toys"

function Toys () {

  fetch(toysUrl)
    .then(response => response.json())
    .then((toys) => toys.forEach(loadToys))
    .catch((error) => console.log(error))

function loadToys (toys) {
// Create Elements and Attributes
  const toyCard = document.createElement('div')
  toyCard.setAttribute('id',`toy ${toys.id}`)
  toyCard.setAttribute('class', 'toy-card card')

  const toyName = document.createElement('h2')
  toyName.setAttribute('class', 'toy-name h2')
  toyName.textContent = toys.name

  const toyImage = document.createElement('img')
  toyImage.setAttribute('class', 'toy-img toy-avatar img')
  toyImage.src = toys.image

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

// POST Toy Card via 'add-toy-form' element
function postToys () {
  console.log("Hello World!")
}

// PATCH Toy Card likes via 'add-toy-form' element

function likeToys () {
  console.log("Hello World!")
}

// Return internal functions
loadToys    
postToys();
likeToys();
}