import { Container } from './MainPage.styled'
import { Button, Grid } from '@material-ui/core'
import { Link, useNavigate } from 'react-router-dom'
import { useQuery } from 'react-query'
import { getProjectList } from './apis'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProject } from '@/redux/Slicers/Projects'
import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'

const MainPage = () => {
  const dispatch = useDispatch()
  const projects = useSelector((state: any) => state.projects)
  const { nameid } = useSelector((state: any) => state.auth.user)
  const { data, isLoading, refetch, isFetching } = useQuery(
    'projectList',
    () => getProjectList(nameid),
    {
      retry: false,
      enabled: false,
      onSuccess: data => {
        dispatch(addProject(data.data))
      }
    }
  )
  useEffect(() => {
    if (projects.length === 0) {
      refetch()
    }
  }, [])
  console.log({ isFetching })
  if (isFetching) return <div>Loading...</div>
  return (
    <Container>
      {data?.data.length === 0 && (
        <>
          <h3>Choose a project</h3>
          <span onClick={() => null}>Open menu</span>
          <span>or</span>
          <Link to='/addProject'>
            <Button variant='contained' color='primary'>
              Create new project
            </Button>
          </Link>
        </>
      )}
      {data?.data.length > 0 && (
        <Grid
          container
          spacing={3}
          style={{
            maxWidth: '60%'
          }}
        >
          {data?.data.map((project: any) => (
            <Grid item xs={12} sm={6} md={4} key={project.id}>
              <Link
                to={`/project/${project.id}`}
                style={{
                  textDecoration: 'none'
                }}
              >
                <Item>{project.name}</Item>
              </Link>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  )
}
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary
}))

export default MainPage
