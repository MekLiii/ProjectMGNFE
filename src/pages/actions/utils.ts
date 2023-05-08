import { useEffect, useState } from "react";

type TTypeOfPath = "project" | "build";
const usePath = (
  typeOfPath: TTypeOfPath
): [string, React.Dispatch<React.SetStateAction<string>>] => {
  const [pathState, setPathState] = useState<string>("");
  const pathSplit = pathState.includes("/") ? pathState.split("/") : [];
  const projectName = pathSplit[pathSplit.length - 1];
  useEffect(() => {
    if (pathState) {
      localStorage.setItem(`${typeOfPath}-${projectName}`, pathState);
    }
  }, [pathState]);
  useEffect(() => {
    const pathFromLocalStorage = localStorage.getItem(
      `${typeOfPath}-${projectName}`
    );
    if (pathFromLocalStorage) {
      setPathState(pathFromLocalStorage);
    }
  }, []);
  return [pathState, setPathState];
};
export { usePath };
