import moment from "moment";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { TaskInterface } from "../../interfaces";
import { useContext, useState, useEffect } from 'react';
import { ModalContext, TaskContext } from "../../context";
import { useForm } from "../../hooks/useForm";
import { TaskService } from "../../helpers/httpRequest";

const taskService = new TaskService();

export const ModalShowTask = ({ task }: { task: TaskInterface}) => {
  const [update, setUpdate] = useState(false)
  const { show, handleClose } = useContext(ModalContext);
  const { getTasks } = useContext(TaskContext);
  
  const {onInputChange, onResetForm, formState, setFormState} = useForm<TaskInterface>({
    _id: '',
    title: '',
    description: '',
    tags: ["personal"],
    date: moment(new Date).format('YYYY-MM-DDTHH:mm:ss'),
    pinned: false,
    icon: '',
  });

  const validations = () =>{
    if (formState.title.trim() == '') return alert("The title cant be null")
    if (formState.date.trim() == '') return alert("The date cant be null")
    return true
  }
  
  const onFormSubmit = async(event: any) => {
    event.preventDefault();
    validations()
    const payload: TaskInterface = {
      ...formState
    }
    let status = 401; 
    let msg = ""; 
    if (payload._id !== ''){
      status = (await taskService.createTask(payload)).status
      msg = 'Task Updated'
    }else{
      status = (await taskService.updateTask(payload._id,payload)).status
      msg = 'Task deleted'
    }
    if(status !== 200) return alert("Something wrong")
    getTasks()
    alert(msg)
    onResetForm()
    handleClose()
  }
  
  const handleDeleteTask = async(id: string) => {
    const {status} = await taskService.deleteTask(id)
    if(status !== 200) return alert("Something wrong")
    getTasks()
    alert("Task delete")
    handleClose()
  }

  useEffect(() => {
    setUpdate(false)
    setFormState({
      _id: '',
      title: '',
      description: '',
      tags: ["personal"],
      date: moment(new Date).format('YYYY-MM-DDTHH:mm:ss'),
      pinned: false,
      icon: '',
    })
  }, [show])  
  
  useEffect(() => {
    if (update){
      task.date = moment(task.date.toString()).format('YYYY-MM-DDTHH:mm:ss');
      setFormState(task)
    }
  }, [update])

  if (task && !update) { //agregar or edit aqui
    return (
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className="text-end">{task.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="row">
          <div className="col-8">
            <p>
              Date: <span className="ff-regular">{moment(task.date.toString()).format('DD MMMM YYYY - h:mm a')}</span>
            </p>
            {task.description && (
              <p>
                Description:{" "}
                <span className="ff-regular">{task.description}</span>
              </p>
            )}
            {task.tags?.map((tag) => {
              return (
                <div key={`${task._id}-${tag}`}>
                  <span>Tags</span>
                  <span className="badge rounded-pill bg-primary ff-regular px-4 m-1">
                    {tag}
                  </span>
                </div>
              );
            })}
            { task.pinned &&
              <p>
                WeeklyPinned
              </p>
            }
          </div>
          <div className="col-4">
            <img src={task.icon ?? '/taskIcon.png'} alt="" width={"80%"}/>
          </div>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="success" onClick={()=>setUpdate(true)}>Update</Button>
        <Button variant="danger" onClick={()=> handleDeleteTask(task._id)}>Delete</Button>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  } else {
    return (
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className="text-end">{update ? 'Update task' : 'Add new task'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={onFormSubmit}>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              placeholder="Title"
              className="form-control my-2"
              name="title"
              value={formState.title}
              onChange={onInputChange}
            />
            <label htmlFor="description">Description</label>
            <input
              type="text"
              placeholder="description"
              className="form-control my-2"
              name="description"
              value={formState.description}
              onChange={onInputChange}
            />
            <label htmlFor="date">Date</label>
            <input
              type="datetime-local"
              placeholder="Date"
              className="form-control my-2"
              name="date"
              value={formState.date}
              onChange={onInputChange}
            />
            <label htmlFor="icon">Icon</label>
            <input
              type="text"
              placeholder="url of icon"
              className="form-control my-2"
              name="icon"
              value={formState.icon}
              onChange={onInputChange}
            />
            <div className="form-check">
              <input className="form-check-input" type="checkbox" name="pinned" checked={formState.pinned} onChange={onInputChange}/>
              <label className="form-check-label" htmlFor="pinned" >
                Weekly pinned?
              </label>
            </div>
            
            <button type="submit" className="btn btn-primary mt-2">
              {update ? "Update" : "Create"}
            </button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="default" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
};
