import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from 'react';

const App = () => {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: "Doctor Appoinment",
        day: "May 15th at 2:30pm",
        reminder: true
    },
    {
        id: 2,
        text: "Meeting at School",
        day: "May 18th at 11:00am",
        reminder: true

    },
    {
        id: 3,
        text: "Food Shopping",
        day: "May 19th at 5:30pm",
        reminder: true
    }
])

//Delete task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

//Toggle Reminder


  return (
    <div className='container'>
      <Header />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask}/> : 'No tasks to show'}
    </div>
  );
}

export default App;
