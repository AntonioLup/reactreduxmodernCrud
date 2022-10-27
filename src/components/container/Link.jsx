import React from "react";
import { useSelector } from "react-redux";
import { pending } from "../../context/useSlice";

function Link() {
  const name = useSelector((state) => state.user.userInfo.name);
  const pending = useSelector((state) => state.pending);
  //   const email = useSelector((state) => state.user.email);
  return (
    <div>
      <ul style={{ listStyle: "none", display: "flex", gap: "15px" }}>
        <li> {name || "user"}</li>
        <li> </li>
        <li>is {pending ? "Conected" : "Desconencted"}</li>
      </ul>
    </div>
  );
}
export default Link;
