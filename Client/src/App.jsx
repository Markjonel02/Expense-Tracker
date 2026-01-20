import React, { useState } from "react";
import axios from "axios";
import { Box, Text } from "@chakra-ui/react";

const App = () => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos/1",
      );
      setData(response.data);
    } catch (error) {
      console.log("Error while fetching the data:", error);
    }
  };

  return (
    <Box p={5}>
      <Text mb={3}>Expense Tracker</Text>
      <button onClick={fetchData}>Fetch Todo</button>
      {data && (
        <Box mt={3}>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </Box>
      )}
    </Box>
  );
};

export default App;
