import { useState } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const respsonse = axios.get("https://jsonplaceholder.typicode.com/todos/1");
    if (!respsonse) {
      console.log("error white Fetching the Data");
    }
    return await setData(data.json());
  };

  return <Box>App</Box>;
};

export default App;
