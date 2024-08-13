import { React, useState, useEffect } from "react";

const UserData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const dataFatch = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const result = await response.json();
        setData(result);
        setLoading(false);
        console.log(loading);
      } catch (error) {
        console.log("error fetching data:", error);
        setLoading(false);
      }
    };
    dataFatch();
  }, []);
  return (
    <div>
      <h1>useEffect Example:</h1>
      <br />
      <div>
        <table>
          <tbody>
            <tr>
              <th>User Id</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
            {data.map((singleObt) => (
              <tr key={singleObt.id}>
                <td>{singleObt.userId}</td>
                <td>{singleObt.title}</td>
                <td>{singleObt.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserData;
