import React, { useState } from "react";
import { Box, Button } from "@chakra-ui/react";

const App = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <Box p={5}>
      <Button onClick={handleClick}>Count: {count}</Button>
    </Box>
  );
};

export default App;
