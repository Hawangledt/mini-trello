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
            status: 'todo' // Inicia na coluna de não iniciado
        }
        setTasks([...tasks, newTask])
    }

    const moveTask = (id) => {
        // movimentar uma tarefa
        /*
            todo -> Não iniciado
            doing -> Em andamento
            done -> Concluído 
        */
        setTasks(prev => prev.map(task => {
            if (task.id === id) {
                if (task.status === "todo") return { ...task, status: "doing" }
                if (task.status === "doing") return { ...task, status: "done" }
            }
            return task
        }))
    }

    const deleteTask = (id) => {
        // excluir uma tarefa
        setTasks( prev => prev.filter(task => task.id !== id ))
    }

    return (
        <TaskContext.Provider value={{ tasks, addTask, moveTask, deleteTask }}>
            {children}
        </TaskContext.Provider>
    )
}


