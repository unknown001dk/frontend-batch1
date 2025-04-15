// document.getElementById("name").innerHTML = "Hashstart academy";

// document.getElementById("para").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, consectetur, ex facere beatae dolorum perferendis modi nisi impedit earum rerum, quibusdam voluptate. Culpa porro dolore libero inventore officia hic minima!"

// document.getElementsByClassName("heading")[0].innerHTML = "Hashstart academy";
// document.getElementsByClassName("heading")[1].innerHTML = "Hashstart";

// document.getElementsByTagName("h1")[0].innerHTML = "Hashstart academy";

// document.getElementsByTagName("div")[0].innerHTML = "First div"
// document.getElementsByTagName("div")[1].innerHTML = "Second div"
// let body = document.body;
// let newElement = document.createElement("h1");

// newElement.innerHTML = "Hashstart academy";

// body.appendChild(newElement);

// let newPara = document.createElement("p");
// newPara.innerHTML = "This is paragraph!";
// body.appendChild(newPara);

// let body = document.body;

// let newHeading = document.createElement("h1");
// newHeading.innerHTML = "Hashstart academy";
// newHeading.setAttribute("id", "heading");
// newHeading.setAttribute("class", "class1")
// body.appendChild(newHeading);

// let newDiv = document.createElement("div");

// newDiv.innerHTML = `<h1>Hello this is first heading</h1>
// <h1>Heading 2 </h1>
// <p>this ia Paragraph</p>
// `

// // newDiv.innerText = "<h1>Heading 2 </h1>"

// body.appendChild(newDiv);

// to-do list app
function addTask() {
  let taskInput = document.getElementById("taskInput").value;
  
  let newTask = document.createElement("li");
  newTask.innerText = taskInput;

  document.getElementById("taskList").appendChild(newTask);

  document.getElementById("taskInput").value = ""; 
}
