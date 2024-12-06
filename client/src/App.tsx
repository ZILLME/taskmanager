import React from 'react';
import AddTaskForm from './components/AddTaskForm';

const App: React.FC = () => {
    return (
        <div>
            <h1>AI Task Manager</h1>
            <AddTaskForm />
        </div>
    );
};

export default App;
