import { TaskProvider } from './context/TaskContext'
import FormTask from './components/FormTask'
import Kanban from './components/Kanban'


function App() {
  return (
    <TaskProvider>
      <div style={{ maxWidth: '900px', magin: '0 auto', padding: '40px' }}>
        <h1 style={{ textAlign: 'center' }}>Mini-Trello StartDev Edition!</h1>
        <FormTask />
        <Kanban />
      </div>
    </TaskProvider>
  )
}

export default App
