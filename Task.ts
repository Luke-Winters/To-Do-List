class Task {
    constructor(
        private name: string,
        private date: string,
        private isFinished: boolean
    ) {}
  
    /**
     *  Returns the name of the task.
     */
    getName(): string {
        return this.name;
    }
  
    /**
     * Returns string representing the task.
     */
    toString(): string {
        if (this.isFinished) {
            return `'${this.name}' has been completed.`
        } else {
            return `'${this.name}' needs to be finished by ${this.date}.`; 
        }   
    }
  
    /**
     * Updates isFinished to true.
     */
    finishTask(): void {
        this.isFinished = true;
    }
}
