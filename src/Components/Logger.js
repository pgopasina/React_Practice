import React from "react";

function Logger({ userdata }) {
  return (
    <>
      <h3>Logger</h3>

      <div>
        <table>
        <tbody>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
          {userdata.map((user, index) => (
            <tr key={index}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Logger;
