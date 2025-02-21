
export interface NavBarToolTips {
    createTask : boolean;
    home : boolean;
    myTask : boolean;
    documentation : boolean;
    setting : boolean;
    logOut : boolean;
}

export interface UserTask {
    Id : string;
    Title : string;
    Description : string;
    Category : string;
    Deadline : Date;
    Status : boolean;
}