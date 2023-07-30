import React, { useState, use } from 'react'
import Drawer from '@mui/material/Drawer'
import Button from '@mui/material/Button'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import { StyledBox, StyledListItemText } from '@ThemedMUI'
import MenuIcon from '@mui/icons-material/Menu'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import { useTheme } from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { toggleNavbar } from '@/redux/Slicers/Navbar'
import { Link, useNavigate } from 'react-router-dom'

export default function Nav () {
  const {
    font: { color }
  } = useTheme()
  const { isNavbarOpen } = useSelector((state: any) => state.navbar)
  const dispatch = useDispatch()
  const projects = useSelector((state: any) => state.projects)
  const navigate = useNavigate()
  console.log(projects)
  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return
      }
      dispatch(toggleNavbar())
    }

  const list = () => (
    <StyledBox
      sx={{ width: 250 }}
      role='presentation'
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem
          key={'Main page'}
          disablePadding
          onClick={() => {
            navigate(`/main`)
          }}
        >
          <ListItemButton>
            {/* <ListItemIcon> */}
            {/* <InboxIcon style={{ color: color }} /> */}
            {/* </ListItemIcon> */}
            <StyledListItemText primary={'Main page'} />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        {projects.map((item, index) => (
          <ListItem
            key={item.id}
            disablePadding
            onClick={() => {
              navigate(`/project/${item.id}`)
            }}
          >
            <ListItemButton>
              <ListItemIcon>
                <InboxIcon style={{ color: color }} />
              </ListItemIcon>
              <StyledListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <ListItem>
        <Link
          to={{
            pathname: '/addProject',
            replace: true
          }}
        >
          <Button variant='contained' color='primary'>
            Create new project
          </Button>
        </Link>
      </ListItem>
    </StyledBox>
  )

  return (
    <>
      <Button onClick={toggleDrawer(true)}>
        <MenuIcon
          sx={{
            // width: '2rem',
            // backgroundColor:"Red",
            fontSize: '2rem'
          }}
        />
      </Button>
      <Drawer anchor={'left'} open={isNavbarOpen} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </>
  )
}
