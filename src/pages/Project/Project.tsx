import { useParams } from 'react-router-dom'
import { Typography, Container } from '@mui/material'
import Cssbaseline from '@mui/material/CssBaseline'
import { Box } from '@material-ui/core'
import { Settings } from '@mui/icons-material'

const Project = () => {
  const params = useParams()
  console.log(params)
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
          Sign in
          <Settings
            sx={theme => ({
              fontSize: '2rem',
              color: theme.palette.primary.main,
              cursor: 'pointer'
            })}
          />
        </Typography>
      </Box>
      <h1>{params.id}</h1>
    </Container>
  )
}
export default Project
