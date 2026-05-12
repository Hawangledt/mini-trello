import { createContext, useEffect, useState } from "react"

export const TaskContext = createContext();

export function TaskProvider({ children }) {
    const [tasks, setTasks] = useState(() => {
        const saved = localStorage.getItem('kanban_tasks')
        return saved ? JSON.parse(saved) : []
    })

    useEffect(() => {
        localStorage.setItem('kanban_tasks', JSON.stringify(tasks))
    }, [tasks])

    const addTask = (title) => {
        const newTask = {
            id: Date.now(),
            title,
            status: 'doing' // Inicia na coluna de não iniciado
        }
        setTasks([...tasks, newTask])
    }

    const moveTask = (id) => {
        // movimentar uma tarefa
        return []
    }

    const deleteTask = (id) => {
        // excluir uma tarefa
        return []
    }

    return (
        <TaskContext.Provider value={{ tasks, addTask, moveTask, deleteTask }}>
            {children}
        </TaskContext.Provider>
    )
}


