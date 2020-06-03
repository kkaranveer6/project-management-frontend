import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './Task.css';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function Tasks(props) {

  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  function updateTitle(event){
    setTaskTitle(event.target.value);
  }

  function updateDescription(event){
    setTaskDescription(event.target.value);
  }

  const tasksList = props.taskTitle.map((task, index) => 
    {
        return(
          <Card className={classes.root}>
            <CardHeader
              action={
                <button onClick={() => props.deleteTask({task}, props.taskColumn)}>X</button>
              }
              title={task}
            />
            <CardActions disableSpacing>
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>Description:</Typography>
                <Typography paragraph>
                  {props.taskDescription[index]}
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
          );
      }
  );

return ( 
    <div>
      {tasksList}
      <input label='Title' type='text' placeholder="New Task Title" value={taskTitle} onChange={updateTitle}/>
      <textarea name="description" cols="30" rows="10" placeholder='New Task Description:' value={taskDescription} onInput={updateDescription}></textarea>
      <button onClick={() => {
        if(taskTitle !== '' && taskDescription !== ''){
          props.addTask(taskTitle, taskDescription, props.taskColumn)
          setTaskTitle('');
          setTaskDescription('');
        }
        }}>+</button>
    </div>
    );
}