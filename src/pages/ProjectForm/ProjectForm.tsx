import { IProjectFormProps } from "./types";
import { useForm } from "react-hook-form";
import { Input, Button } from "@material-ui/core";
import { StyledForm, Title} from "./ProjectForm.styled";

function ProjectForm({ state }: IProjectFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);
  return (
    <>
    <h3>Test</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register("projectPath", { required: true })}
          placeholder="Project Path"
          style={{ color: "white" }}
        />
      </form>
    </>
  );
}

export default ProjectForm;
