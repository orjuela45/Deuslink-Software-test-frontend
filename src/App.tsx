import { useEffect, useState } from "react"
import { Layout } from "./components/layout/Layout"
import { Nabvar } from "./components/navbar/Nabvar"
import { WeeklyPinned } from "./components/weeklyPinned/WeeklyPinned"
import { Today } from "./components/today/Today"
import { Notices } from "./components/notices/Notices"
import { UserContext, TaskContext } from './context';
import { TaskService } from './helpers/httpRequest';
import { UserInterface } from "./interfaces"
import './index.css'

const taskService = new TaskService()
const user: UserInterface = {
  name: "Miguel Orjuela"
}

export const App = () => {

  const [tasks, setTasks] = useState([])

  const getTasks = async() => {
    const {data} = await taskService.getAllTasks()
    setTasks(data)
  }

  useEffect(() => {
    getTasks()
  }, [])
  

  return (
    <UserContext.Provider value={user}>
      <Nabvar />
      <Layout>
        <TaskContext.Provider value={tasks}>
          <div className="row justify-content-center">
            <div className="col-4 bg-success">
              <WeeklyPinned />
            </div>
            <div className="col-4 bg-primary">
              <Today />
            </div>
            <div className="col-4 bg-danger">
              <Notices />
            </div>
          </div>
        </TaskContext.Provider>
      </Layout>
    </UserContext.Provider>
  )
}
