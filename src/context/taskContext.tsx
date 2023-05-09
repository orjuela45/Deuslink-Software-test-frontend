import { createContext } from "react";
import { TaskInterface } from "../interfaces/";

export const TaskContext = createContext<TaskInterface[]>([]);