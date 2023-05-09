import { TaskContext } from "../../context";
import { CardAdd } from "../cards/CardAdd";
import { CardInformation } from "../cards/CardInformation"
import { useContext, useState } from 'react';

export const WeeklyPinned = () => {

  const [pinned, setPinned] = useState(true)
  const tasks = useContext(TaskContext)

  const taskPinned = tasks.filter(task => {
    if (pinned){
      return task.pinned
    }
    return true
  })

  const handleClickViewAll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault()
    setPinned(!pinned)
  }

  return (
    <div style={{maxHeight: "75vh"}}>
      <div className="row justify-content-between">
        <h3 className="ff-regular col-auto">{pinned ? 'Weekly Pinned': 'All tasks'}</h3>
        <a href="" className="text-decoration-none col-auto" onClick={handleClickViewAll}>{pinned ? 'View all': 'View Pinned'}</a>
      </div>
      <div className="mt-3 justify-content-center overflow-auto" style={{maxHeight: "40vh"}}>
        {
          taskPinned.map(task => {
            return (
              <CardInformation task={task} key={task._id} />
            )
          })
        }
      </div>
      <div className="my-1">
        <CardAdd pinned={pinned} />
      </div>
      <div className=" my-3">
      </div>
    </div>
  )
}
