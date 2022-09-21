import React from 'react';
import { useState } from 'react';
import './AddTask.css'
import Button from './Button';

const AddTask = ({handleTaskAddition}) => {
    const [inputData, setInputData] = useState('');
    
    const handleInputChange = (e) => {
        setInputData(e.target.value);
    };

    const handleAddTaskClick = () => {
        handleTaskAddition(inputData)
        setInputData("")
    };

    return (
        <div className='addTask-container'>
            <input onChange={handleInputChange}
                value={inputData}
                type="text"
                className='addTask-input' 
            />
            <div className="button-container">
                <Button onClick={handleAddTaskClick}>Adicionar</Button>
            </div>
        </div>
     );
}
 
export default AddTask;