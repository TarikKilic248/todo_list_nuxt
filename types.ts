export interface Todo{
  userId: number
  id: number
  title: any
  completed: boolean
  todo: string
}

export interface User{
  id: number
  name: string
  picture: string
}

export interface UserWithTodo extends User{
  todos: Todo[]
}