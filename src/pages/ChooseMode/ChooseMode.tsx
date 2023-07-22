import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { Get } from "@/API/axios";

const ChooseMode = () => {
    const test = async () => {
        const res = await Get("/Users");
        console.log(res);
    }
    const test2 = async () => {
      fetch("https://localhost:7012/api/Users")
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
  return (
    <div>
      <h1>Choose Mode</h1>
      <Link to="login">
        <Button variant="outlined" color="primary" onClick={test}>
          Offline Mode
        </Button>
      </Link>
      <Link to="login">
        <Button variant="contained" color="primary">
          Online Mode
        </Button>
      </Link>
    </div>
  );
};

export default ChooseMode;
