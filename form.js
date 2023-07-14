function savetoLocalStorage(event){
    event.preventDefault();
    const expenseamount=event.target.expenseamount.value
    const description=event.target.description.value
    const category=event.target.Category.value
    
    const obj={
        expenseamount,
        description,
        category
    }
    localStorage.setItem(obj.description,JSON.stringify(obj))
    showuseronscreen(obj)
}
function showuseronscreen(obj){
    const parentelement=document.getElementById('users')
    const childelement=document.createElement('li')
    childelement.textContent=obj.expenseamount+ '|' + obj.description +  '|' +obj.category
    const deletebtn=document.createElement('button')
    const editbtn=document.createElement('button')

    deletebtn.type='button'
    editbtn.type='button'
    deletebtn.textContent='delete'
    editbtn.textContent='edit'
    deletebtn.style.fontFamily='Arial, Helvetica, sans-serif'
    deletebtn.style.backgroundColor='red'
    deletebtn.style.padding='10px 20px'; 
    deletebtn.style.float='right'
    editbtn.style.backgroundColor='blue' 
    editbtn.style.padding='10px 20px'
    editbtn.style.float='right'
    deletebtn.onclick=()=>{
        localStorage.removeItem(obj.description)
        parentelement.removeChild(childelement)
    }

    editbtn.onclick=()=>{
        localStorage.removeItem(obj.description)
        parentelement.removeChild(childelement)
        document.getElementById('name').value=obj.expenseamount
        document.getElementById('description').value=obj.description
    }
    childelement.appendChild(deletebtn)
    childelement.appendChild(editbtn)

    parentelement.appendChild(childelement)

}