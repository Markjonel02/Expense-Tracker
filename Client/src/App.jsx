import { useState } from "react";
import { Box, Button } from "@chakra-ui/react";
const App = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((count) => count + 1);
  };
  return (
    <Box>
      <Button onClick={handleClick}>count{count}</Button>
    </Box>
  );
};

export default App;
