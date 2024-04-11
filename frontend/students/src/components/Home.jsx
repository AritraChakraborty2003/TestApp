import { useState, useEffect } from "react";
import axios from "axios";
const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.urtechguru.online/")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="to display">
      <h1>
        {data.name +
          " his age is - " +
          data.age +
          " his marks is - " +
          data.marks}
      </h1>
    </div>
  );
};
export default Home;
