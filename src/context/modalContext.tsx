import { createContext } from "react";
import { ModalContextType } from "../types/context";

export const ModalContext = createContext<ModalContextType>({
  show: false,
  handleClose: () => {},
  handleShow: () => {},
  task: {
    _id: '',
    title: '',
    description: '',
    tags: [],
    date: '',
    pinned: false,
    icon: '',
  }
})