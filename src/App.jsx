import TaskForm from "./components/task/TaskForm";
import TaskList from "./components/task/TaskList";

function App() {
  

    return(
        <main className="bg-zinc-900 h-screen">
            <div className="container mx-auto">

            <TaskForm/>
            <TaskList/>
            </div>
            
        
        </main>
        
    )
}

export default App;