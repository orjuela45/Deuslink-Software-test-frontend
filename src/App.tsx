import { useEffect, useState } from "react"
import { Layout } from "./components/layout/Layout"
import { Nabvar } from "./components/navbar/Nabvar"
import { WeeklyPinned } from "./components/weeklyPinned/WeeklyPinned"
import { Today } from "./components/today/Today"
import { Notices } from "./components/notices/Notices"
import { UserContext, TaskContext, ModalContext } from './context';
import { TaskService } from './helpers/httpRequest';
import { UserInterface } from "./interfaces"
import './index.css'
import { TaskInterface } from './interfaces/task';

const taskService = new TaskService()
const user: UserInterface = {
  name: "Miguel Orjuela"
}

export const App = () => {

  const [tasks, setTasks] = useState([])
  const [currentTask, setCurrentTask] = useState(null)
  const [show, setShow] = useState(false);

  const getTasks = async() => {
    const {data} = await taskService.getAllTasks()
    setTasks(data)
  }

  const handleClose = () => setShow(false);
  const handleShow = (task: TaskInterface) => {
    setShow(true);
    setCurrentTask(task);
  };

  useEffect(() => {
    getTasks()
  }, [])
  

  return (
    <UserContext.Provider value={user}>
      <ModalContext.Provider value={{show, handleClose, handleShow, currentTask}} >
        <Nabvar />
        <Layout>
          <TaskContext.Provider value={tasks}>
            <div className="row justify-content-between">
              <div className="col-12 col-xl-4 pe-5">
                <WeeklyPinned />
              </div>
              <div className="col-12 col-xl-4 pe-5 bg-primary">
                <Today />
              </div>
              <div className="col-12 col-xl-4 pe-5 bg-danger">
                <Notices />
              </div>
            </div>
          </TaskContext.Provider>
        </Layout>
      </ModalContext.Provider>
    </UserContext.Provider>
  )
}
