import { createContext } from "react";
import { TaskInterface } from "../interfaces/task";

export const TaskContext = createContext<TaskInterface[]>([]);