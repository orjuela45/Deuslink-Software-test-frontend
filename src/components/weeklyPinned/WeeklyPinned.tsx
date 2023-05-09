import { TaskContext } from "../../context";
import { CardInformation } from "../cards/CardInformation"
import { useContext } from 'react';

export const WeeklyPinned = () => {
  const tasks = useContext(TaskContext)

  const taskPinned = tasks.filter(task => task.pinned)

  return (
    <div style={{minHeight: "75vh"}}>
      <div className="row justify-content-between">
        <h3 className="ff-regular col-auto">Weekly Pinned</h3>
        <a href="" className="text-decoration-none col-auto">View all</a>
      </div>
      <div className="h-50 my-3 justify-content-center">
        {
          taskPinned.map(task => {
            return (
              <CardInformation task={task} key={task._id} />
            )
          })
        }
      </div>
      <div className=" bg-danger my-3">
      </div>
    </div>
  )
}
