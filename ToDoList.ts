import { Task } from "./Task"

class ToDoList {
    constructor(
        private tasks: Task[]
    ) {}
  
    /**
     * Updates task in the list to be completed.
     */
    finishTask(name: string): void {
        for (let task of this.tasks) {
            if (task.getName() === name) {
                task.finishTask();
            }
        }
    }
  
    /**
     * Adds a task to the end of the to-do list
     */
    addTask(task: Task): void {
        this.tasks.push(task);
    }
  
    /**
     * Returns the tasks in the to-do list as a string
     */
    toString(): string {
        return this.tasks.join("\n|");
    }
}
