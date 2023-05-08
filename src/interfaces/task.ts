export interface TaskInterface{
  _id: string,
  title: string,
  description?: string,
  tags?: string[],
  date: Date,
  pinned: boolean
  icon?: string 
}