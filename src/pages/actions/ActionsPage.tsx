import { useState } from "react";
import ActionBox from "@/components/ActionBox";
import runCommand from "@/utils/accesComandLane";
import { Input } from "@material-tailwind/react";
import { usePath } from "./utils";

const ActionsPage = () => {
  const [projectPath, setProjectPath] = usePath("project");
  const handleRunApp = () => {
    runCommand(`cd ${projectPath} && yarn start`);
  };
  const handleRunGithubGUI = () => {
    runCommand(`cd ${projectPath} && github .`);
  };
  return (
    <div className="w-full flex align-center justify-center items-center h-10 flex-col flex-1">
      <div className="w-9/12 flex flex-1 mt-5 justify-beetwen mt-10">
        <Input
          label="Project path"
          className="text-white w-1/2 flex justify-center"
          labelProps={{
            style: {
              color: "white",
            },
          }}
          value={projectPath}
          onChange={({ target: { value } }) => setProjectPath(value)}
        />
        <Input
          label="Build path"
          className="text-white w-1/2"
          width={200}
          labelProps={{
            style: {
              color: "white",
            },
          }}
        />
      </div>
      <div className="grid grid-cols-4 gap-4 w-full bg-white flex-1 w-11/12">
        <ActionBox title="Run" onclick={handleRunApp} />
        <ActionBox title="Open GH gui" onclick={handleRunGithubGUI} />
        <ActionBox title="" />
        <ActionBox title="" />
        <ActionBox title="" />
        <ActionBox title="" />
        <ActionBox title="" />
      </div>
    </div>
  );
};
export default ActionsPage;
