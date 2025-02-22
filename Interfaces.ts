
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

export interface modifyTaskParams {
    option : "Details" | "Edit" | "Delete" | undefined;
    setOption : (value : "Details" | "Edit" | "Delete" | undefined) => void;
    selectedTask : UserTask | undefined;
    setSelectedTask : (value : UserTask | undefined) => void;
    setDisplayMoreOptions : (value : boolean) => void;
}

export interface TaskModel {
    Title: string | undefined;
    Description: string | undefined;
    Deadline: string | undefined;
    Category: string | undefined;
    Status: boolean | undefined;
}