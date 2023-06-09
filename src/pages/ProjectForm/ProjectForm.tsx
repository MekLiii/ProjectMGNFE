import { IProjectFormProps } from "./types";
import { useForm } from "react-hook-form";
import { Input, Button } from "@material-ui/core";
import { StyledForm, Title} from "./ProjectForm.styled";

function ProjectForm({ formState }: IProjectFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);
  return (
    <>
    <Title>Test</Title>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register("projectPath", { required: true })}
          placeholder="Project Path"
          style={{ color: "white" }}
        />
      </StyledForm>
    </>
  );
}

export default ProjectForm;
