import React from "react";
import "../../App.css";
import ToDoList from "../ToDoList";
import Input from "../Input";

export default function Routing() {
  const [toDoList, setToDoList] = React.useState([
    { task: "Go to Office", status: "Completed" },
    { task: "Complete the assignment", status: "Pending" },
    { task: "Submit report", status: "Pending" },
    { task: "Meeting with manager", status: "Pending" },
  ]);

  const [isAcitve, setIsActive] = React.useState(false);

  
  
  //   ============================ Input ===============================
  // let newTask = "";
  // const handleChange = (e) => {
  //   newTask = e.target.value;
  // };
  // const handleSubmit = () => {
  //   const date = new Date();
  //   const currTime = date.getHours() + ":" + date.getMinutes();
  //   setToDoList((prev) => {
  //     prev.push({ task: newTask, status: "Pending", time: currTime });
  //     return prev;
  //   });
  //   document.querySelector("input").value = "";
  // };

  //   =========================== render input div ============================
  const handleClick = (e) => {
    setIsActive(!isAcitve);
  };

  //  ============================ Add todo data ============================
  const addToDoData = (todo) => {
    setToDoList((prev) => {
      return [...prev, todo];
    });
    setIsActive(!isAcitve);
  };

  return (
    <div className="App">
      <div className="container mt-5">
        {isAcitve && <Input onAddData={addToDoData} onCancel={handleClick} />}
        {!isAcitve && (
          <div className="hideBtn card col-sm-2 mt-4 mb-4">
            <button className="btn btn-secondary" onClick={handleClick}>
              Add new task
            </button>
          </div>
        )}
      </div>
      <div className="container mt-5 d-flex justify-content-center">
        <ToDoList data={toDoList}  />
      </div>
    </div>
  );
}
