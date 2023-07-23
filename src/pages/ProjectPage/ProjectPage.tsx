import { Container } from "./ProjectPage.styled";
import { Button } from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { getProjectList } from "./apis";

const ProjectPage = () => {
  const { data, isLoading } = useQuery("projectList", () => getProjectList(2), {
    retry: false,
  });
  console.log(data);
  return (
    <Container>
      <h3>Choose a project</h3>
      <span onClick={() => null}>Open menu</span>
      <span>or</span>
      <Link to="/addProject">
        <Button variant="contained" color="primary">
          Create new project
        </Button>
      </Link>
    </Container>
  );
};

export default ProjectPage;
