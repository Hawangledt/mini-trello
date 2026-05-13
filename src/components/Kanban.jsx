import { useContext } from "react"
import { TaskContext } from "../context/TaskContext"


function Card({ task }) {
    const { moveTask, deleteTask } = useContext(TaskContext)

    return (
        <div style={{
            border: '1px solid #ccc',
            padding: '10px',
            margin: '10px 0',
            backgroundColor: 'rgb(182, 137, 212)',
            borderRadius: '4px'
        }}>
            <p>{task.title}</p>
            {task.status !== 'done' && (
                <button onClick={() => moveTask(task.id)}>Proximo</button>
            )}
            <button onClick={() => deleteTask(task.id)} style={{ marginLeft: '5px' }}>Excluir</button>
        </div>
    )
}


function Column({ title, status }) {
    const { tasks } = useContext(TaskContext)
    const filteredTasks = tasks.filter(t => t.status === status)

    
    const columnColor = {
        'todo': '#f3e99f',
        'doing': '#a7fafe',
        'done': '#b6ecba'
    }

    return (
        <div style={{
            flex: 1,
            backgroundColor: columnColor[status],
            padding: '15px',
            margin: '0 10px',
            borderRadius: '8px',
            minHeight: '400px'
        }}>
            <h3 style={{ textAlign: 'center'}}>
                {title}
                ({filteredTasks.length})
            </h3>
            {filteredTasks.map(t => <Card key={t.id} task={t}/>)}
        </div>
    )
}

export default function Kanban() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '20px'
        }}>
            <Column title="Não iniciado" status="todo" />
            <Column title="Em andamento" status="doing" />
            <Column title="Concluído" status="done" />
        </div>
    )
}