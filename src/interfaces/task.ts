export interface TaskInterface{
  _id: string,
  title: string,
  description?: string,
  tags?: string[],
  date: String,
  pinned: boolean
  icon?: string 
}