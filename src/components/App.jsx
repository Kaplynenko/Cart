import React,{Component} from 'react';
// import PropTypes from 'prop-types'
import ToDoList from './toDoList'
class App extends Component{
  state={
    todos:[{id:'id-1',text:'Вивчити основи React',completed:false},
    {id:'id-2',text:'Розібратися с React Router',completed:false},
    {id:'id-3',text:'Пережити Redux',completed:false},]
  }
  
  
  render(){
   const {todos} = this.state 
    return(
<>
<h1>hello</h1>
<ToDoList todos={todos}/>


</>
    )
  }
}

 export default App;

