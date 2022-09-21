import React from 'react';
import './Tasks.css';
import {CgClose, CgInfo} from 'react-icons/cg';
const Task = ({ task, handleTaskClick, handleTaskDelete}) => {
    return(
        <div className='task-container'
        style={task.completed ? {borderLeft:'7px solid mediumaquamarine'}: {} }>
            <div className='task-title' onClick={() => handleTaskClick(task.id)}>
                {task.title}
            </div>
            <dir className={'buttons-container'}>
                <button className='remove-task' onClick={() => handleTaskDelete(task.id)}>
                    <CgClose />
                </button>
                <button className='details-task'>
                    <CgInfo />
                </button>
            </dir>
        </div>
        
    )
}
 
export default Task;