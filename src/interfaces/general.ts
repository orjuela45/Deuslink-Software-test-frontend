import { ReactNode } from "react";
import { TaskInterface } from ".";

export interface LayoutPropsInterface{
  children?: ReactNode
}

export interface ModalContextInterface{
  show: Boolean,
  handleClose: () => void,
  handleShow: () => void,
  currentTask: TaskInterface
}