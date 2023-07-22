import React, { useState, use } from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import { StyledBox, StyledListItemText } from "@ThemedMUI";
import MenuIcon from "@mui/icons-material/Menu";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import { useTheme } from "styled-components";

export default function Nav() {
  const {
    font: { color },
  } = useTheme();

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      console.log({ open });
      toggleMenu(open);
    };
  const moceedProject = [
    {
      name: "Project 1",
      id: 1,
      description: "This is project 1",
    },
  ];

  const list = () => (
    <StyledBox
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {["Projects"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <InboxIcon style={{ color: color }} />
              </ListItemIcon>
              <StyledListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {moceedProject.map((item, index) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <InboxIcon style={{ color: color }} />
              </ListItemIcon>
              <StyledListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </StyledBox>
  );

  return (
    <>
      <Button onClick={toggleDrawer(true)}>
        <MenuIcon />
      </Button>
      <Drawer
        anchor={"left"}
        open={false}
        onClose={toggleDrawer(false)}
      >
        {list()}
      </Drawer>
    </>
  );
}
