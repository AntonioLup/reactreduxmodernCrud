import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../context/ApiCall";
import { remove, update } from "../../context/useSlice";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { userInfo, pending, error } = useSelector((state) => state.user);
  const emailRedux = useSelector((state) => state.user.userInfo.email);
  const nameRedux = useSelector((state) => state.user.userInfo.name);
  const dispatch = useDispatch();

  const handleUpdate = (e) => {
    e.preventDefault();
    updateUser({ name, email }, dispatch);
    const currentData = dispatch(update({ name, email }));
    localStorage.setItem("user", JSON.stringify(currentData));
  };

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(remove());
    localStorage.removeItem("user");
  };
  return (
    <div>
      <form style={{ margin: "1rem" }}>
        <div>
          <label htmlFor="name">Name:</label>
        </div>
        <input
          style={{
            marginBottom: "0.5rem",
            border: "none",
            borderRadius: "4px",
            padding: "0.3rem",
            borderBottom: "1px solid",
          }}
          onChange={(e) => setName(e.target.value)}
          type="text"
          id="name"
          placeholder={userInfo.name}
          name="name"
        />
        <div>
          <label htmlFor="email">Email:</label>
        </div>
        <input
          style={{
            marginBottom: "1.5rem",
            border: "none",
            borderRadius: "4px",
            padding: "0.3rem",
            borderBottom: "1px solid",
          }}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          id="email"
          placeholder={userInfo.email}
          name="email"
        />
        <div>
          <label htmlFor="Password">Password:</label>
        </div>
        <input
          style={{
            marginBottom: "0.5rem",
            border: "none",
            borderRadius: "4px",
            padding: "0.3rem",
            borderBottom: "1px solid",
          }}
          type="current-password"
          id="Password"
          placeholder="Put your Password..."
          name="name"
        />
        <div style={{ margin: "1rem", display: "flex", gap: "15px" }}>
          <button>Submit</button>
          <button disabled={pending} onClick={handleUpdate}>
            Update
          </button>
          {error && <span>something went wrong</span>}
          {pending === false && <span>Success!</span>}
          <button onClick={handleDelete}>Delete</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
