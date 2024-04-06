export interface Task {
    id: number,
    title: string,
    cat: string,
    completed: boolean
}
export class TaskAddDTO {
    constructor(
    public id: number = 0,
    public title: string = "",
    public cat: string = "",
    public completed: boolean = false
    ){}
}