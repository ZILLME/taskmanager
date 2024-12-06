import React, { useEffect } from 'react';
import { fetchTasks } from '../api/tasks';

const Dashboard: React.FC = () => {
    useEffect(() => {
        const loadTasks = async () => {
            const tasks = await fetchTasks();
            console.log(tasks);
        };
        loadTasks();
    }, []);

    return <div>Dashboard</div>;
};

export default Dashboard;
