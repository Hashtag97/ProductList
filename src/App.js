import Projects from './projects';
import Reports from "./reports";
import ListTask from "./listTask"
import Task from "./task"

import data from "./data/data.js";

import _ from "lodash";

import React, { createContext, useEffect, useState } from "react";

import './App.css';

export const DataContext = createContext({});

const App = () => {
  const [state,  setState] = useState('projects')
  const [projectID, setProjectID] = useState()
  const [projectName, setProjectName] = useState()
  const [userID, setUserID] = useState()
  const [taskID, setTaskID] = useState()
  const [loading, setLoading] = useState(true)
  const session = data[0].tasks[0].assignee

  const setterState = (str) => {
    setState(str)
  } 
  const getProjects = () => {
    return(_.map(data, (project) => _.pick(project, ["id", "name"])))
  }
  const getProjectById = (id) => {
    const { tasks, ...project } = _.find(data, { id })
    const usersInProjects = {
        ...project,
        users: _.map(tasks, "assignee"),
    }
    return(usersInProjects)
  }
  const getTasksByUserId = (projectId, userId) => {
    const { tasks } = _.find(data, { id: projectId })
    const partialTasks = _.filter(tasks, { assignee: { id: userId } })
    return(partialTasks)
  } 
  const getTaskById = (projectId,taskId) => {
    const { tasks } = _.find(data, { id: projectId })
    return(_.find(tasks, { id: taskId }))
  }

    return (
      <DataContext.Provider
        value={{
          session,
          projectName,
          projectID,
          loading,
          setterState,
          setProjectID,
          setUserID,
          setTaskID,
          setProjectName,
          setLoading
        }}
      >
        <div className="h-screen px-5 z-0">
        {    state === 'projects' ? (
            <>
            <Projects event={getProjects()}/>
            </>
          ): state === 'reports' ? (
            <>
            <Reports event={getProjectById(projectID)}/>
            </>
          ): state === 'listTask' ? (
            <>
            <ListTask event={getTasksByUserId(projectID,userID)}/>
            </>
          ): state === 'task' ? (
            <>
            <Task event={getTaskById(projectID,taskID)}/>
            </>
          ):(<></>)
        }
        </div>
      </DataContext.Provider>
    );
}

export default App;

