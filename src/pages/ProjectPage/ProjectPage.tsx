
import { Container } from "./ProjectPage.styled";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const ProjectPage = () => {
 
  return (
    <Container>
      <h3>Choose a project</h3>
      <span onClick={() => null}>Open menu</span>
      <span>or</span>
      <Link to="addProject">
        <Button variant="contained" color="primary">
          Create new project
        </Button>
      </Link>
    </Container>
  );
};

export default ProjectPage;
