import { HttpClient } from "../Services/httpClients";

export class TaskService{
  private baseURL: string = 'https://deuslink-software-test-backend-production.up.railway.app/api/tasks/'
  constructor (private http: HttpClient = new HttpClient() ){}

  getAllTasks = async () =>{
    const response = await this.http.get(this.baseURL);
    return response
  }
  
}