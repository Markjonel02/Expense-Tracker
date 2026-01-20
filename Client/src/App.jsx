import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Text } from "@chakra-ui/react";

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/todos?_limit=5",
        );
        setData(response.data);
      } catch (error) {
        console.log("Error while fetching the data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Box p={5}>
      {data ? (
        <Text whiteSpace="pre-wrap">{JSON.stringify(data, null, 2)}</Text>
      ) : (
        "Loading..."
      )}
    </Box>
  );
};

export default App;
