import { TaskInterface } from "../interfaces";

export type ModalContextType = {
  show: Boolean,
  handleClose: () => void,
  handleShow: (task: TaskInterface|null) => void,
  task: TaskInterface|null
}

export type TaskContextType = {
  tasks: TaskInterface[],
  getTasks: () => void
}