import {useEffect} from "react";
import {Link, useParams,useLocation} from 'react-router-dom'
import { Typography, Container } from '@mui/material'
import Cssbaseline from '@mui/material/CssBaseline'
import { Box } from '@material-ui/core'
import { Settings } from '@mui/icons-material'
import {useQuery} from "react-query";
import {getProject} from "./Api";

const Project = () => {
  const {id} = useParams<{id:string}>()
    const {pathname} = useLocation();
  console.log(pathname)
    const {data,isFetching,refetch} = useQuery("getProjectById",() => getProject(id),{
        enabled:false
    })
    useEffect(() => {
        refetch();
    }, []);
  return (
    <Container
      sx={{
        maxWidth: '90% !important',
        height: '90vh'
      }}
    >
      <Cssbaseline />
      <Box>
        <Typography
          component='h1'
          variant='h5'
          className='whiteText'
          sx={{
            borderBottom: '1px solid',
            fontSize: '3rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
            {data?.data?.name}
         <Link to={`${pathname}/settings`} >
             <Settings
                 sx={theme => ({
                     fontSize: '2rem',
                     color: theme.palette.primary.main,
                     cursor: 'pointer'
                 })}
             />
         </Link>
        </Typography>
      </Box>
      <h1>{data?.data?.configurationId || "No configuration"}</h1>
    </Container>
  )
}
export default Project
