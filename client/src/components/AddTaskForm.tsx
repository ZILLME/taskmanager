import React, { useState } from 'react';
import { createTask } from '../api/tasks';

const AddTaskForm: React.FC = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [deadline, setDeadline] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await createTask({ title, description, deadline });
        setTitle('');
        setDescription('');
        setDeadline('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <input
                type="date"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
            />
            <button type="submit">Add Task</button>
        </form>
    );
};

export default AddTaskForm;
