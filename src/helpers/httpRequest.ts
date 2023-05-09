import { HttpClient } from "../Services/httpClients";
import { TaskInterface } from "../interfaces";

export class TaskService{
  private baseURL: string = 'https://deuslink-software-test-backend-production.up.railway.app/api/tasks/'
  constructor (private http: HttpClient = new HttpClient() ){}

  getAllTasks = async () =>{
    const response = await this.http.get(this.baseURL);
    return response
  }
  
  deleteTask = async (id:string) =>{
    const response = await this.http.delete(this.baseURL+id);
    return response
  }
  
  createTask = async (paylod: TaskInterface) =>{
    const response = await this.http.post(this.baseURL, paylod);
    return response
  }

  updateTask = async (id:string, paylod: TaskInterface) =>{
    const response = await this.http.put(this.baseURL+id, paylod);
    return response
  }
}