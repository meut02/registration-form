function savetoserver(event){
    event.preventDefault();
    const Name=event.target.name.value
    const Email=event.target.email.value
    const Contact=event.target.contact.value
    
    const obj={
        Name,
        Email,
        Contact
    }
    axios.post('https://crudcrud.com/api/ddc12ad9e62f42aca625c59d11fe5345/appointmentdata',obj)
    .then((response)=> {
        showuseronscreen(response.data)
        console.log(response)
    })
    .catch((err)=>{
        console.log(err)
    })
   // showuseronscreen(obj)
}

window.addEventListener('DOMContentLoaded',(()=>{
axios.get('https://crudcrud.com/api/ddc12ad9e62f42aca625c59d11fe5345/appointmentdata')
.then((response)=>{
for(var i=0;i<response.data.length;i++)
{
    showuseronscreen(response.data[i])
}
}
)
.catch((err)=>{
    console.log(err)
})}))

function showuseronscreen(obj){
    const parentelement=document.getElementById('users')
    const childelement=document.createElement('li')
    childelement.textContent=obj.Name+ '|' + obj.Email +  '|' +obj.Contact
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
        axios.delete(`https://crudcrud.com/api/ddc12ad9e62f42aca625c59d11fe5345/appointmentdata/${obj._id}`)
        .then((response)=> {
            console.log(response)
        })
        .catch((err)=>{
            console.log(err)
        })
        parentelement.removeChild(childelement)
    }

    editbtn.onclick=()=>{
        localStorage.removeItem(obj.Email)
        parentelement.removeChild(childelement)
        document.getElementById('name').value=obj.Name
        document.getElementById('email').value=obj.Email
        document.getElementById('contact').value=obj.Contact
    }
    childelement.appendChild(deletebtn)
    childelement.appendChild(editbtn)

    parentelement.appendChild(childelement)

}