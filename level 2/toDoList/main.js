// Making the input methods for the html page for the user to type in
const form = document.getElementById("toDo")
const div = document.createElement("div")
div.id = "container"
form.appendChild(div)


const title = document.createElement("h1")
title.textContent = "To Do List"
div.appendChild(title);
//title.className = 'toDoList'
title.id = "test"

const inputTitle = document.createElement("input")
div.appendChild(inputTitle)
inputTitle.className = "toDoList";
inputTitle.placeholder = "Title"

const inputDescription = document.createElement("input")
div.appendChild(inputDescription)
inputDescription.className = "toDoList"
inputDescription.placeholder = "Description"

const imgUrl = document.createElement("input")
div.appendChild(imgUrl)
imgUrl.className = "toDoList"
imgUrl.placeholder = "Image URL"

const price = document.createElement("input")
div.appendChild(price)
price.className = "toDoList"
price.placeholder = "Price"

const completedCheckbox = document.createElement("input")
completedCheckbox.setAttribute("type", "checkbox")
completedCheckbox.value = "Complete"
completedCheckbox.id = "box1"
div.appendChild(completedCheckbox)

const incompleteCheckbox = document.createElement("input")
incompleteCheckbox.setAttribute("type", "checkbox")
incompleteCheckbox.value = "Incomplete"
incompleteCheckbox.id = "box2"
div.appendChild(incompleteCheckbox)

// creating a text label to append to the check box
const label = document.createElement('label')
label.htmlFor = 'complete';
label.appendChild(document.createTextNode('Completed:'));
div.appendChild(label)
label.id = "completeLabel"

const label2 = document.createElement("label")
label2.htmlFor = "incomplete"
label2.appendChild(document.createTextNode("Incomplete:"))
div.appendChild(label2)
label2.id = "incompleteLabel"

const submitBtn1 = document.createElement("button")
submitBtn1.textContent = "Submit"
submitBtn1.className = "submit"
submitBtn1.setAttribute("type", "submit")
div.appendChild(submitBtn1)

// Clearing the list 
const clearList = () => {
   while (form.firstChild) {
      form.removeChild(form.firstChild)
   }
}


// Displaying my toDoList that is on postman onto the
const getTodo = () => {
   //clearList()

   axios.get("https://api.vschool.io/michael_gaynor/todo")
      .then(response => {
         for (let i = 0; i < response.data.length; i++) {

            const div = document.createElement("div")
            div.id = "create"
            form.appendChild(div)

            const h1 = document.createElement("h1")
            const h4 = document.createElement("h4")
            const priceH4 = document.createElement('h4')
            const img = document.createElement("img")
            const del = document.createElement("button")

            h1.textContent = response.data[i].title
            h4.textContent = response.data[i].description
            priceH4.textContent = response.data[i].price
            img.src = response.data[i].imgUrl
            del.textContent = "Delete"
            const id = response.data[i]._id

            div.appendChild(h1)
            div.appendChild(h4)
            div.appendChild(priceH4)
            div.appendChild(img)
            div.appendChild(del)

            const checkbox = document.createElement("input")
            checkbox.setAttribute("type", "checkbox")
            checkbox.name = "box"
            div.appendChild(checkbox)


            const label = document.createElement('label')
            label.htmlFor = 'complete';
            label.appendChild(document.createTextNode('Completed:'));
            div.appendChild(label)

            const priceLabel = document.createElement('label')
            priceLabel.htmlFor = 'Price';
            priceLabel.className = 'price'
            priceLabel.appendChild(document.createTextNode('Price:'));
            div.appendChild(priceLabel)

            const checkbox2 = document.createElement("input")
            checkbox2.setAttribute("type","checkbox")
            //checkbox2.value = "Incomplete"
            checkbox2.name = "box"
            div.appendChild(checkbox2)

            const label2 = document.createElement("label")
            label2.htmlFor = "incomplete"
            label2.appendChild(document.createTextNode("Incomplete:")) 
            div.appendChild(label2)

            if (response.data[i].completed == true) {
               h1.style.setProperty("text-decoration", "line-through")
               h4.style.setProperty("text-decoration", "line-through")
               checkbox.checked = true
            }
            const complete = {
               completed: true
            }
            const incomplete = {
               completed: false
            }

            checkbox.addEventListener("change", (e) => {
               e.preventDefault()
               if (checkbox.checked == true) {
                  axios.put(`https://api.vschool.io/michael_gaynor/todo/${id}`, complete)
                     .then(response => getTodo(response))
                     .catch(error => console.log(error))
               } else {
                  axios.put(`https://api.vschool.io/michael_gaynor/todo/${id}`, incomplete)
                     .then(response => getTodo(response))
                     .catch(error => console.log(error))
               }

            })

            del.addEventListener("click", (event) => {
               console.dir(event.target)
               axios.delete(`https://api.vschool.io/michael_gaynor/todo/${id}`)
                  .then(response => {
                     form.removeChild(div)
                  })
                  .catch(error => console.log(error))

            })

         }
      })
      .catch(error => console.log(error))

}

getTodo()

// This is the POST request thats puts the submitted data into the API

const postToDo = () => {
   form.addEventListener("submit", (event) => {
      event.preventDefault()

      const newTodo = {
         title: inputTitle.value,
         description: inputDescription.value,
         imgUrl: imgUrl.value,
         price: price.value,

      }

      axios.post("https://api.vschool.io/michael_gaynor/todo", newTodo)

   })


}
postToDo();





   //     "completed": true,
   //     "_id": "6350b83f18d1a05bceae826a",
   //     "title": "Study VSchool level 2 CourseWork",
   //     "description": "Completing all of my required tasks before the assessment",
   //     "price": 0,
   //     "sessionId": "michael_gaynor",
   //     "__v": 0,
   //     "imgUrl": "https://images.unsplash.com/photo-1593698054469-2bb6fdf4b512?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c3R1ZHlpbmclMjB3aXRoJTIwbGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
   // },
   // {
   //     "completed": false,
   //     "_id": "6350bc8118d1a05bceae826b",
   //     "title": "Pay Bills",
   //     "description": "Rent, Light Bill, Car Insurance",
   //     "price": 1250,
   //     "imgUrl": "https://images.unsplash.com/photo-1554768804-4300c5b7bb72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJpbGxzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
   //     "sessionId": "michael_gaynor",
   //     "__v": 0
   // },
   // {
   //     "completed": true,
   //     "_id": "6350bdfe18d1a05bceae826c",
   //     "title": "Workout",
   //     "description": "It's Leg Day Baby !!!",
   //     "price": 0,
   //     "imgUrl": "https://images.unsplash.com/photo-1646656130703-8f95eed6a79b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8c3F1YXQlMjByYWNrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
   //     "sessionId": "michael_gaynor",
   //     "__v": 0
   // },