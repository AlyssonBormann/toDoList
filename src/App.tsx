import { useState } from "react";

import styles from "./App.module.scss";
import { Header } from "./components/Header";
import { TaskList } from "./components/TaskList";
import { TaskSubmitForm, TaskTypes } from "./components/TaskSubmitForm";

export function App() {
  const [tasks, setTasks] = useState<TaskTypes[]>([]);

  return (
    <>
      <Header />
      <div className={styles.container}>
        <TaskSubmitForm tasks={tasks} setTasks={setTasks} />
        <TaskList tasks={tasks} setTasks={setTasks} />
      </div>
    </>

  )
}