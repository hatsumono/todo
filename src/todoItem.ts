export class TodoItem{
   /* public id:number;
    public task: string;
    public complete: boolean = false;*/

   /* constructor(public id:number, task: string,
                        complete:boolean = false){
                            this.id = id;
                            this.task = task;
                            this.complete = complete;
                        }*/
    constructor(public id:number, 
                public task: string,
                public complete:boolean = false){
                        }

   /* public printDetails():void{
        console.log(`{this.id\t${this.task}
        ${this.complete? "\t(complete)":  ""}`);
    }*/

    printDetails():void{
        console.log(`{this.id\t${this.task}
        ${this.complete? "\t(complete)":  ""}`);
    }
}