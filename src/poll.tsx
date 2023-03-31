import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import PollOption from "./PollOption";

// Properties for the poll option button
interface Properties {
  border: string;
  color: string;
  children?: React.ReactNode;
  height: string;
  onClick: () => void;
  radius: string;
  width: string;
}

function populatePoll() {
  const optionAmount = 4;
  for (let i = 0; i < optionAmount; i += 1) {}
}

// Poll component
const Poll: React.FC<Properties> = ({
  border,
  color,
  children,
  height,
  radius,
  width
}) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid></Grid>
    </Box>
  );
};

export default Poll;
