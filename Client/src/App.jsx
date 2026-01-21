import { useState, useEffect } from "react";
import { Box, Text } from "@chakra-ui/react";
import axios from "axios";
function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/todos?_limit=5",
        );
        if (!res) {
          console.log("no data found");
        }
        setData(res.data);
        console.log("you've fetched data successfully");
      } catch (error) {
        console.log("error fetching data", error);
      }
    };
    fetchData();
  }, []);

  return (
    <Box>
      This is the Fetched Data{" "}
      {data && data.length ? (
        <Text as="pre">{JSON.stringify(data, null, 2)}</Text>
      ) : (
        <Text>loading...</Text>
      )}
    </Box>
  );
}

export default App;
