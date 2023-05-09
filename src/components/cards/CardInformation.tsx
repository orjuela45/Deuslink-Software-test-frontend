import moment from "moment";
import { ImageCard } from "./ImageCard";
import { TaskInterface } from '../../interfaces/';

export const CardInformation = ({task}: {task: TaskInterface}) => {
  
  const dateTask = task.date.slice(0, -1);
  const date = moment(dateTask.toString()).format('DD MMMM YYYY')
  let time = "- " + moment(dateTask.toString()).format('h:mm a')
  if (time == '- 12:00 am') time = ''

  return (
    <div className="card flex-row w-100 bg-white border-0 my-4 py-4">
      <div className="d-flex col-3 align-self-center justify-content-center">
        <ImageCard src={task.icon} />
      </div>
      <div className="col-8">
        <div className="card-body px-4">
          <div className="row justify-content-between">
            <span className="card-title h5 h4-sm col-auto">{task.title}</span>
            <span className="card-text ff-regular col-auto">{date} {time}</span>
          </div>
          {
            task.tags?.map(tag => {
              return (
                <span key={`${task._id}-${tag}`} className="badge rounded-pill bg-primary ff-regular px-4 m-1">{tag}</span>
              )
            })
          }
        </div>
      </div>
    </div>
  );
};
