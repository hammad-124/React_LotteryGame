import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';




export default function TodoList(){
    let [todos ,setTodos] = useState([{task :"sample-task",id:uuidv4(),isDone :false}]);
    let [newTodo,setnewTodo] = useState("");

    let AddnewTodo= () =>{
        setTodos((prevValue) => {
            return [...prevValue,{task :newTodo,id:uuidv4(),isDone :false}]
        })
    }

    let updatedValue =(event)=>{
         setnewTodo(event.target.value);
    }

    let deleteTask =(id)=>{
       setTodos(todos.filter((todo)=>todo.id != id));
       
    }
    let UppercaseAll =()=>{
       setTodos((preValue)=> preValue.map((todo)=>{
            return {
                ...todo,task : todo.task.toUpperCase()
            }
        }))
    }
    let UppercaseOne =(id) =>{
        setTodos((preValue)=> preValue.map((todo)=>{
            if(todo.id === id){
                return {
                    ...todo,task : todo.task.toUpperCase()
                }
            }else{
                return todo;
            }
            
        }))
    }

    let MarkAsDone=(id) =>{
        setTodos((preValue)=> preValue.map((todo)=>{
            if(todo.id === id){
                return {
                    ...todo,isDone : true
                }
            }else{
                return todo;
            }
            
        }))
    }

   

    return(
        <div>

        <input placeholder="Enter a Task to Add" value={newTodo} onChange={updatedValue}/>
        <br />
        <button onClick={AddnewTodo}> Add Task</button>
        <hr />
        <h4>Todo Tasks</h4>
        <ul>
            {
                todos.map((todo)=>{
                    return <li
                     key={todo.id}>
                        <span style={todo.isDone? {textDecorationLine:"line-through"} :{}}>{todo.task}</span>
                        <button onClick={()=>deleteTask(todo.id)}>Delete</button>
                        <button onClick={()=>UppercaseOne(todo.id)}>Uppercase</button>
                        <button onClick={()=>MarkAsDone(todo.id)}>Done</button>
                        </li>
                })

            }
        </ul>
        <button onClick={UppercaseAll}>UpperCaseAll</button>
    
        </div>
    )
}