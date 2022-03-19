let parentli = document.querySelector('li').parentNode;

 function addTask() {
  let newTask = document.getElementById('input').value;
  let newLi = document.createElement('li');
  newLi.textContent = newTask;
  newLi.setAttribute("class","item");
  //newLi.setAttribute("onclick","removeTask()");
  parentli.appendChild(newLi);
  document.getElementById('input').value= "";

}

const onClick = (event) => {
  let itemToRemove = event.srcElement.textContent;
  let items = document.getElementsByClassName('item')

  //window.confirm("Do you want to remove this item?");

  for(let i = 0; i < items.length; i++){
    let item = items[i].textContent;

    if(itemToRemove === item){
      console.log(item + " removed");
      parentli.removeChild(items[i]);
      break;
    }
  }
}

window.addEventListener('click', onClick);

 // const removeTask = (event) {
 //   let items = document.getElementsByClassName('item');
 //   let taskToRemove = this.srcElement.textContent
 //
 //
 // }
