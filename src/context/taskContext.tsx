import { createContext } from "react";
import { TaskContextType } from "../types/context";

export const TaskContext = createContext<TaskContextType>({
  tasks: [],
  getTasks: () => {}
});