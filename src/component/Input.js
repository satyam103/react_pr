import React from "react";

export default function Input(props) {
  
  // ========================listening input change ==============================
  const [newTask, setNewTask] = React.useState("");
  const handleChange = (e) => {
    setNewTask(e.target.value);
  };


  // ======================= lifting up data to parent =========================
  const handleEntry = (e) => {
    const date = new Date();
    const currTime = date.getHours() + ":" + date.getMinutes();
    if (newTask === "") {
      alert("Cannot enter empty task");
    } else {
      props.onAddData({ task: newTask, status: "Pending", time: currTime });
      setNewTask("");
    }
  };

  //  ============================ data entry ===============================
  // const handleSubmit = () => {
  //   props.data[1]((prev) => {
  //     const date = new Date();
  //     const currTime = date.getHours() + ":" + date.getMinutes();
  //     prev.push({ task: newTask, status: "Pending", time: currTime });
  //     return prev;
  //   });
  //   setNewTask("");
  // };

  return (
    <div className="container">
      <div className="hideBtn card col-sm-2 mt-4 mb-4">
        <button className="btn btn-secondary" onClick={props.onCancel}>
          Cancel
        </button>
      </div>

      <div className="input card bg-light">
        <div className="card-header text-body-light">
          <h4>New Entry</h4>
        </div>
        <div className="card-body">
          <label className="task col-sm-1">Task: </label>
          <input
            className="inputTask col-sm-6"
            type="text"
            value={newTask}
            onChange={handleChange}
          />
        </div>
        <div className="card-footer text-body-secondary">
          <button className="btn btn-primary" onClick={handleEntry}>
            Enter
          </button>
        </div>
      </div>
    </div>
  );
}
