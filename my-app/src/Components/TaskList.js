import React from "react";
import { Task } from "./Task";

export const TaskList = () => {
    var listOfTasks = {firstTask:Task("sleep"), secondTask:Task("eat")};

    return (<p>{listOfTasks.firstTask} {listOfTasks.secondTask}</p>);
}