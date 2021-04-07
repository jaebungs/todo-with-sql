const url = 'http://localhost:4000/'

const addTodo = async (input) => {
     // 'https://todo-server-to-learn-sql.herokuapp.com'
     let addedTodo;

     await fetch(url, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: input.title,
            description: input.description
        })
    })
    .then((res)=>res.json())
    .then((data)=>{
        addedTodo = data;
    })
    .catch((err)=>console.log(err))
    return addedTodo
}

const deleteTodo = async (id) => {
    await fetch('http://localhost:4000/delete', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
}

const updateTodo = async (todo) => {
    await fetch('http://localhost:4000/update', {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: todo.id,
            title: todo.title,
            description: todo.description
        })
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
}

export { addTodo, deleteTodo, updateTodo };