import React from "react";

export default function Login() {
  const [login, setLogin] = React.useState({
    name: "",
    password: "",
    statusEm: true,
    statusPass: false,
  });
  const [message, setmessage] = React.useState("");

  const checkName = () => {
    if (login.name.length > 0) {
      const nm = login.name.split(" ");
      nm.forEach((ele) => {
        const s = ele[0].toUpperCase();
        if (s !== ele[0]) {
          setLogin((prev) => {
            setmessage("Invalid Format");
            return { ...prev, statusEm: false };
          });
        } 
        else {
          setLogin((prev) => {
            setmessage("");
            return { ...prev, statusEm: true };
          });
        }
      });
    }
  };
  const checkPassword = () => {
    const pass = login.password;
    if (pass.length >= 8 && pass.length <= 15) {
      setLogin((prev) => {
        return { ...prev, statusPass: true };
      });
    }
  };
  const handleName = (e) => {
    setLogin((prev) => {
      return { ...prev, name: e.target.value };
    });
    checkName();
    console.log(login.name,login.statusEm)
  };
  const handlePassword = (e) => {
    setLogin((prev) => {
      return { ...prev, password: e.target.value };
    });
    checkPassword();
  };
  const handleLogin = (e) => {
    e.preventDefault();
    checkName();
    checkPassword();
    console.log(login)
    if (login.statusEm && login.statusPass) {
      console.log("Valid");
    } else {
        alert("Password length should between 8 to 15");
    }
    console.log(login)
  };


  return (
    <div className="container">
      <div className="card mt-5 p-3">
        <form>
          <div className="mb-3 ">
            <label htmlFor="exampleInputName1" className="form-label">
              Name
            </label>
            <input
              type="name"
              className="form-control"
              id="exampleInputName1"
              aria-describedby="nameHelp"
              value={login.name}
              onChange={handleName}
            />
            <div id="nameHelp" className="form-text red">
              {message}
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              value={login.password}
              required
              onChange={handlePassword}
            />
          </div>
          {/* <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div> */}
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleLogin}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
