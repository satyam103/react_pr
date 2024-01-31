import React from "react";
import "./todolist.css";
import Table from "./Table";

export default function ToDoList(props) {

  // ============================= states ===================================
  const [data, setData] = React.useState([]);
  const [active, setActive] = React.useState("toDoList");

  //  =========================== lifting up ==========================
  // const handleChange = (wert) => {
  //   props.onChangeData(props.data[wert]);
  // };

  //  ======================== change Status =============================
  const changeStatus = (wert) => {
    data[wert].status = "Completed";
    setData((prev) => {
      return active === "toDoList"
        ? [...prev]
        : props.data.filter((ele) => ele.status === active);
    });
  };

  //  ======================= handle button =========================
  const handleClick = (e) => {
    if (e.target.htmlFor === "Pending") {
      setActive("Pending");
      setData((prev) =>
        props.data.filter((ele, i) => {
          return ele.status === "Pending";
        })
      );
    } else if (e.target.htmlFor === "Completed") {
      setActive("Completed");
      setData((prev) => props.data.filter((ele) => ele.status === "Completed"));
    }
    if (e.target.htmlFor === "toDoList") {
      setActive("toDoList");
      setData(props.data);
    }
  };

  // ========================rendering useEffect =================================
  React.useEffect(() => {
    if (active=== "Pending") {
      setData((prev) => props.data.filter((ele, i) => ele.status === "Pending"));
    } else if (active === "Completed") {
      setData((prev) => props.data.filter((ele) => ele.status === "Completed"));
    } else if (active === "toDoList") {
      setData(props.data);
    }
  });
  return (
    <div className="card col-8">
      <div className="card-header">
        <div className="col-4">
          <div
            className="btn-group"
            role="group"
            aria-label="Basic radio toggle button group"
          >
            <input
              type="radio"
              className="btn-check"
              name="btnradio"
              autoComplete="off"
              id="toDoList"
              defaultChecked
            />
            <label
              className="btn btn-outline-primary"
              htmlFor="toDoList"
              onClick={handleClick}
            >
              All Task
            </label>

            <input
              type="radio"
              className="btn-check"
              name="btnradio"
              id="Completed"
              autoComplete="off"
            />
            <label
              className="btn btn-outline-primary"
              htmlFor="Completed"
              onClick={handleClick}
            >
              Completed
            </label>

            <input
              type="radio"
              className="btn-check"
              name="btnradio"
              id="Pending"
              autoComplete="off"
            />
            <label
              className="btn btn-outline-primary"
              name="pending"
              htmlFor="Pending"
              onClick={handleClick}
            >
              Pending
            </label>
          </div>
        </div>
      </div>
      <div className="card-body"></div>
      <div className="mt-2" id="pending">
        <div className="card ">
          <div className="card-header header">
            <h4>Task</h4>
            <h4>Time</h4>
            <h4>Status</h4>
          </div>
          <table className="card-body ">
            {data.map((key, index) => {
              return (
                <Table
                  task={key.task}
                  id={index}
                  time={key.time}
                  status={key.status}
                  onChangeStatus={changeStatus}
                />);
            })}
          </table>
        </div>
      </div>
    </div>
    // </div>
  );
}
