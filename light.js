const btn = document.getElementById('addButton');
const inputText = document.getElementById('inputText');
const toDoContainer = document.getElementById('toDoContainer');

btn.addEventListener('click', function(){
if(inputText.value == ''){
    alert('Please Input Valid Text');
}
else{
  let toDoList = document.createElement('li');
    toDoContainer.appendChild(toDoList);
    toDoList.innerHTML = `${inputText.value} <i class="fa-solid fa-trash"></i>`;
    inputText.value = '';

toDoList.querySelector('i').addEventListener('click',function(){
  toDoContainer.removeChild(toDoList);
})



  }
})