async function savetoserver(event){
    event.preventDefault();
    const expenseamount=event.target.expenseamount.value
    const description=event.target.description.value
    const category=event.target.Category.value
    
    const obj={
        expenseamount,
        description,
        category
    }
    try{
        const response=await axios.post('http://localhost:5000/Expense/Add-expense',obj)
        showexpenseonscreen(response.data.newexpensedetails)
       console.log(response)
    }

    catch(err){
        console.log(err)

    }
}

async function refresh(){
try{
    const response= await axios.get('http://localhost:5000/Expense/Get-expense')

    for( const expense of response.data.allexpense){
        showexpenseonscreen(expense)
    }
}

catch(err){
    console.log(err);
}

}


function showexpenseonscreen(expense){
    const parentelement=document.getElementById('users')
    const childelement=document.createElement('li')
    childelement.textContent=expense.expenseamount+ '|' + expense.description +  '|' +expense.Category
    const deletebtn=document.createElement('button')
    const editbtn=document.createElement('button')

    
    
    deletebtn.textContent='delete'
    editbtn.textContent='edit'

    deletebtn.onclick=async()=>{
        try{
        await axios.delete(`http://localhost:5000/Expense/Delete-expense/${expense.id}`)
        console.log('expense deleted:',expense)
        }
        catch(err){
            console.log(err)
        }
        parentelement.removeChild(childelement)
    }

    editbtn.onclick=async()=>{
        await axios.put(`http://localhost:5000/Expense/Edit-expense/${expense.id}`)
        parentelement.removeChild(childelement)
        document.getElementById('name').value=expense.expenseamount
        document.getElementById('description').value=expense.description
        document.getElementById('Category').value=expense.Category
    }
    childelement.appendChild(deletebtn)
    childelement.appendChild(editbtn)

    parentelement.appendChild(childelement)

}

window.addEventListener('DOMContentLoaded',refresh)