import './App.css';
import Form from './Components/Form'
import TodoList from './Components/TodoList'
import {useState, useEffect} from 'react'



function App() {

  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([])



  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);



  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter((todo) => todo.completed === true ))
        break;
        case 'uncompleted':
          setFilteredTodos(todos.filter((todo) => todo.completed === false ))
        break;
        default:
          setFilteredTodos(todos);

    }
  }

  const saveLocalTodos = () => {
    if(localStorage.getItem('todos') === null ){
      localStorage.setItem('todos', JSON.stringify([]))
    } else{
      localStorage.setItem('todos', JSON.stringify(todos))
    }
  }
 



  return (
    <div className="App">
      <header>
        <h1>Azi Todo List</h1>
      </header>
      <Form setInputText={setInputText} todos={todos} setTodos={setTodos} inputText={inputText}
      setStatus={setStatus}
      />
      <TodoList setTodos={setTodos} todos={todos} filteredTodos={filteredTodos} />
    </div>
    
  );
  
}

export default App;
