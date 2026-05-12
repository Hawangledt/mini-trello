import { useContext, useState } from "react"
import { TaskContext } from "../context/TaskContext";

export default function FormTask() {
    const [title, setTitle] = useState('');
    const { addTask } = useContext(TaskContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!title.trim()) return;
        addTask(title)
        setTitle('')
    }


    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: '30px' }}>
            <input
                type="text"
                value={title}
                onChange={e => setTitle(e.target.value)}
                placeholder="Nova tarefa ..."
                style={{ padding: '10px', width: '250px' }}
            />
            <button type='submit'
                style={{
                    padding: '10px 20px',
                    marginLeft: '10px',
                    cursor: 'pointer'
                }}
            >
                Adicionar
            </button>
        </form>
    )
}