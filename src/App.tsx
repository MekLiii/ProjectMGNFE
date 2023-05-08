import { useNavigate } from "react-router-dom";
import ActionsPage from "./pages/actions/ActionsPage";

function App() {
  const navigate = useNavigate();
  return <ActionsPage />;
}

export default App;
