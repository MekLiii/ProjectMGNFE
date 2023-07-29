import { Container } from './ProjectPage.styled'
import { Button } from '@material-ui/core'
import { Link, useNavigate } from 'react-router-dom'
import { useQuery } from 'react-query'
import { getProjectList } from './apis'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProject } from '@/redux/Slicers/Projects'

const ProjectPage = () => {
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
    </Container>
  )
}

export default ProjectPage
