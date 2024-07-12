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
      toyContainer.style.display = "none"
    }
  })
  Toys() // Modified code
})

// Modified code
// Global JSON URL
const toysUrl = "http://localhost:3000/toys"

function Toys() {

  fetch(toysUrl)
    .then(response => response.json())
    .then((toys) => toys.forEach(loadToys))
    .catch((error) => console.log(error))

 function loadToys(toy) {
    // Create Elements and Attributes
    const toyCard = document.createElement('div')
    toyCard.setAttribute('id', `toy ${toy.id}`)
    toyCard.setAttribute('class', 'toy-card card')

    const toyName = document.createElement('h2')
    toyName.setAttribute('class', 'toy-name h2')
    toyName.textContent = toy.name

    const toyImage = document.createElement('img')
    toyImage.setAttribute('class', 'toy-img toy-avatar img')
    toyImage.src = toy.image

    const toyLikes = document.createElement('p')
    toyLikes.setAttribute('class', 'toy-likes p')
    toyLikes.innerText = toy.likes

    const toyLikeButton = document.createElement('button')
    toyLikeButton.setAttribute('id', `${toy.id}`)
    toyLikeButton.setAttribute('class', 'toy-like-button button')
    toyLikeButton.textContent = "Like"

    // Append Elements to container
    const toyCollection = document.getElementById("toy-collection")
    toyCollection.appendChild(toyCard)
    toyCard.appendChild(toyName)
    toyCard.appendChild(toyImage)
    toyCard.appendChild(toyLikes)
    toyCard.appendChild(toyLikeButton)

    // Event Listeners
    toyLikeButton.addEventListener('click', () => likeToys(toy.id))
    // toyLikeButton.addEventListener('click', () => postToys(toy.id))
  }

  // PATCH Toy Card likes via 'add-toy-form' element
  function likeToys(toyId) {
    console.log(`Like button clicked for toy with id ${toyId}`)
  }

  // POST Toy Card via 'add-toy-form' element
  function postToys () {
    const addToyForm = document.querySelector(".add-toy-form")
    addToyForm.addEventListener("submit", addToy)

    function addToy(event) {
      event.preventDefault()
      const name = addToyForm.querySelector("input[name='name']").value
      const img = addToyForm.querySelector("input[name='image']").value
      const headers = {
        method: "POST",
        headers:
        {
          "Content-Type": "application/json",
          Accept: "application/json"
        },

        body: JSON.stringify({
          name: event.target[0].value,
          image: event.target[1].value,
          likes: 0,
        })
      }

      fetch(toysUrl, headers)
        .then(response => response.json())
        .then((toys) => toys.forEach(newToy))
        .catch((error) => console.log(error))

        function newToy () {
          console.log("Hello World!")
        }
    }
  }

  // Return internal functions
  postToys()
}