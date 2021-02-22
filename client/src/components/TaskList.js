import React, { Fragment, useEffect, useState } from 'react';
import { MdDelete } from "react-icons/md";

const TaskList = () => {

    const [tasks, setTasks] = useState([]);

    const deleteTask = async id  => {
        try {
            const deleteTask = await fetch(`http://localhost:5000/tasks/${id}`, {
                method: "DELETE"
            });

            setTasks(tasks.filter(task => task.task_id !== id))
        } catch (err) {
            console.error(err.message)
        }
    }

    const getTasks = async() => {
        try {

            const response = await fetch("http://localhost:5000/tasks");
            const jsonData = await response.json();

            setTasks(jsonData);

        } catch (err) {
            console.error(err.message);
        }
    }

    useEffect(() => {
        getTasks();
    }, []);
    return <Fragment>
        {""}
        <table class="table">
 
  {tasks.map(task => (
      <tr key={task.task_id}>
          <td class="image">{task.description}</td>
          <td class="image"><button class="button" onClick={()=> deleteTask(task.task_id)}><MdDelete/></button></td>
      </tr>
  ))}
</table>
    </Fragment>
};

export default TaskList;
