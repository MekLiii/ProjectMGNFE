import { useGlobalContext } from "@components/Context/Context";
import { Container } from "./ProjectPage.styled";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const ProjectPage = () => {
  const {
    dispatchers: { toggleMenu },
  } = useGlobalContext();
  return (
    <Container>
      <h3>Choose a project</h3>
      <span onClick={toggleMenu}>Open menu</span>
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
