import React from "react";

export default function Table(props) {

    //  =========================== lifting up ==========================
  const handleStatus = () => {
    return props.onChangeStatus(props.id)
  }
  return (
    <tr className="taskToo ">
      <td className="titleTask">{props.task}</td>
      <td className="title">{props.time}</td>
      <td className="title">
        {props.status === "Pending" ? (<button className="btn btn-outline-primary"
            id={props.id}
            onClick={handleStatus}
          >
            {props.status}
          </button>
        ) :(<p>{props.status}</p>)
        }
      </td>
    </tr>
  );
}
