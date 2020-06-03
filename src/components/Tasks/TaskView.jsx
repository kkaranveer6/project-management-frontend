import React, {useState} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Sidebar from '../Sidebar/Sidebar';
import Tasks from './Tasks';

import './TaskView.css';

export default function TaskView(props){
  const [tasks, setTasks] = useState([
    {
      title: ['task 1: Avaliable', 'another task'],
      description: ['task 1 description', 'another task description'],
      column: 'Avaliable'
    },
    {
      title: ['task 2: Assigned'],
      description: ['task 2 description'],
      column: 'Assigned'
    },
    {
      title: ['task 3: In Progress'],
      description: ['task 3 description'],
      column: 'In Progress'
    },
    {
      title: ['task 4: Completed'],
      description: ['task 4 description'],
      column: 'Completed'
    }
  ]);

  const [columnName, setColumnName] = useState('');
  // const [width, setWidth] = useState('100%');

  var listColumns = tasks.map((task, index) => {
    return(
    <Card variant='outlined' className="columns" key={index}>
        <CardContent>
          <Typography variant='subtitle1'>
            <div>
              {task.column}
            </div>
          </Typography>
          <button onClick={() => {deleteColumn({task})}}>X</button>
        </CardContent>
        <Divider/>
        <Tasks 
          taskTitle = {task.title} 
          taskDescription = {task.description} 
          taskColumn = {task.column}
          addTask = {addTask}
          deleteTask = {deleteTask}
        />
    </Card>
    );
  }
  );

  function newColumnName(event){
    setColumnName(event.target.value);
  }

  function addColumn(){ 
    if(columnName !== ''){
      setTasks(tasks.concat({
        title: [''],
        description: [''],
        column: columnName
      }));
      setColumnName('');
    }
  }

  function deleteColumn(task){
    setTasks(tasks.filter(tasks => tasks.column  !== task.task.column));
  }
  
  function addTask(title, description, columnName){
    var index = tasks.findIndex(x => x.column === columnName);
    const newTask = [...tasks];
    newTask[index].title.push(title);
    newTask[index].description.push(description);
    setTasks(newTask);
  }

  function deleteTask(title, columnName){
    const newTasks = [...tasks];
    var indexColumn = tasks.findIndex(x => x.column === columnName);
    const taskTitleList = tasks.map(taskList => taskList.title)[indexColumn];
    var task = taskTitleList.filter(task => task === title.task);
    for(var i=0; i < taskTitleList.length; i++){
      if(taskTitleList[i] === task[0]){
        var taskIndex = i;
      }
    }
    newTasks[indexColumn].title.splice(taskIndex, 1)
    newTasks[indexColumn].description.splice(taskIndex, 1)
    setTasks(newTasks);
  }

  return(
      <Sidebar routeChange={props.routeChange} content={
        <div className="columns-header">
          { listColumns }
          <div>
            <input onInput={newColumnName} className='new-column-input' type="text" value={columnName} placeholder="Enter Column Name: "/>
            <button className="new-column-button" onClick={addColumn}>+</button>
          </div>
        </div>
      }/>
  );
}

