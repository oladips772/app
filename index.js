/** @format */
const loadingImage = document.getElementById("loadingImage");
const fetchBtn = document.getElementById("fetchBtn");
const todoContainer = document.getElementById("todoContainer");

// const getTodos = async () => {
//   loadingImage.style.display = "block";
//   let todos;
//   await fetch("https://dummyjson.com/todos")
//     .then((res) => res.json())
//     .then((res) => (todos = res?.todos));
//   console.log(todos);
//   return todos;
// };

const getTodos = async () => {
  try {
    await fetch("https://dummyjson.com/todos")
      .then((res) => res.json())
      .then((res) => (todos = res?.todos));
    console.log(todos);
  } catch (error) {
    console.log(error);
  }
};

getTodos();

const createTodos = async () => {
  const newTodos = await getTodos();
  loadingImage.style.display = "none";
  newTodos.forEach((item) => {
    const h3 = document.createElement("h3");
    h3.innerText = item?.todo;
    todoContainer.appendChild(h3);
  });
};

// fetchBtn.addEventListener("click", createTodos);

const student = {
  name: "korede",
  class: "bia",
};

// console.log(student.name)

class MathHelper {
  addNumbers(num1, num2) {
    return num1 + num2;
  }
  subtractNumbers(num1, num2) {
    return num1 - num2;
  }
}

const newMathHelper = new MathHelper();
console.log(newMathHelper.subtractNumbers(20, 10));
