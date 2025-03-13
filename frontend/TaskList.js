import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        const response = await axios.get('http://localhost:5000/tasks');
        setTasks(response.data);
    };

    return (
        <div>
            <h1>Lista de Tarefas</h1>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>{task.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;