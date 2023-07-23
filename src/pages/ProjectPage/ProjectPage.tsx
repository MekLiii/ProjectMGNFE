import { Container } from "./ProjectPage.styled";
import { Button } from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { getProjectList } from "./apis";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProject } from "@/redux/Slicers/Projects";

const ProjectPage = () => {
  const dispatch = useDispatch();
  const projects = useSelector((state: any) => state.projects);
  const { data, isLoading, refetch } = useQuery(
    "projectList",
    () => getProjectList(2),
    {
      retry: false,
      enabled: false,
    }
  );
  useEffect(() => {
    if (projects === null) {
      refetch();
    }
  }, []);
  useEffect(() => {
    console.log(data);
    if (data?.data) {
      dispatch(addProject(data.data));
    }
  }, [data]);

  if (isLoading) return <div>Loading...</div>;
  console.log(projects);
  return (
    <Container>
      {projects.length === 0 && (
        <>
          <h3>Choose a project</h3>
          <span onClick={() => null}>Open menu</span>
          <span>or</span>
          <Link to="/addProject">
            <Button variant="contained" color="primary">
              Create new project
            </Button>
          </Link>
        </>
      )}
    </Container>
  );
};

export default ProjectPage;
