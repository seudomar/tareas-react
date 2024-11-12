import { createContext, useState, useEffect } from "react";
import {tasks as data} from "../data/tasks"

export const TaskContext = createContext()

export function TaskContextProvider(props) {
    const [tasks, setTasks] = useState([]);

    function createTask(task){
        setTasks([...tasks,{
            id: tasks.length,
            title: task.title,
            description: task.description
        }])
    }

    function eliminarTask(taskid){
        console.log(taskid)
        setTasks(tasks.filter(task => task.id !== taskid))
    }

     
    useEffect(() => {
        setTasks(data)
        
    }, []
    );

    

    return(
        <TaskContext.Provider value={{
            tasks,
            createTask,
            eliminarTask
        }}>
            {props.children}
        </TaskContext.Provider>
    );
}