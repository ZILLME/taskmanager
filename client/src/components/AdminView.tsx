import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Task {
  _id: string;
  title: string;
  description: string;
  date: string;
}

const AdminView: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get('http://localhost:5000/tasks');
        setTasks(response.data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchTasks();
  }, []);

  if (loading) return <p>Loading tasks...</p>;

  return (
    <div>
      <h1>Admin View: All Tasks</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            <strong>{task.title}</strong> - {task.description} (Due: {new Date(task.date).toLocaleDateString()})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminView;
