import Box from "@mui/material/Box";
import styled from "styled-components";
import ListItemText from "@mui/material/ListItemText";

import { SvgIconProps } from "@material-ui/core";

const StyledBox = styled(Box)`
  background-color: ${({ theme }) => theme.colors.lightGray};
  height: 100%;
`;
const StyledListItemText = styled(ListItemText)`
  color: ${({ theme }) => theme.font.color};
`;



export { StyledBox, StyledListItemText };
