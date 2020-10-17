import React from "react";
import { useSector } from "../context";
import Box from "../layouts/Box";
import Stack from "../layouts/Stack";

export default function Question({ text }) {
  const sector = useSector();
  return (
    <Stack justify="center">
      <Box>{text}</Box>
    </Stack>
  );
}
