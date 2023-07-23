import React from "react";
import { useForm, Controller } from "react-hook-form";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import {
  Typography,
  Box,
  Container,
  Avatar,
  FormControlLabel,
  Checkbox,
  Grid,
} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { Link } from "react-router-dom";
import { LoadingButton } from "@mui/lab";

interface IProjectForm {
  state: "ADD" | "EDIT";
}

const ProjectForm = ({ state }: IProjectForm) => {
  const {
    handleSubmit,
    control,
    setValue,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    // Handle form submission here
    console.log(data);
  };

  return (
    // <form onSubmit={handleSubmit(onSubmit)}>
    //   <Controller
    //     name="projectName"
    //     control={control}
    //     defaultValue=""
    //     rules={{ required: "Project Name is required" }}
    //     render={({ field, fieldState: { error } }) => (
    //       <TextField
    //         {...field}
    //         label="Project Name"
    //         fullWidth
    //         error={Boolean(errors.projectName)}
    //         helperText={error ? error.message : null}
    //       />
    //     )}
    //   />

 

    //   <input
    //     {...register("projectImage", { required: "Project Image is required" })}
    //     type="file"
    //     style={{ display: "none" }}
    //     id="projectImageInput"
    //     onChange={(e) => null}
    //   />
    //   <label htmlFor="projectImageInput">
    //     <Button
    //       variant="contained"
    //       component="span"
    //       startIcon={<CloudUploadIcon />}
    //     >
    //       Upload Project Image
    //     </Button>
    //   </label>
    //   {/* {errors.projectImage && (
    //     <p style={{ color: "red" }}>{errors.projectImage.message}</p>
    //   )} */}

    //   <Button type="submit" variant="contained" color="primary">
    //     Submit
    //   </Button>
    // </form>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5" className="whiteText">
          {state === "ADD" ? "Add Project" : "Edit Project"}
        </Typography>
        <Box
          component="form"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(onSubmit)();
          }}
          noValidate
          sx={{ mt: 1 }}
        >
          <Controller
            name="projectName"
            control={control}
            rules={{
              required: "Project name is required",
              pattern: {
                //no special characters and no spaces and no numbers
                value: /^[a-zA-Z0-9]+$/i,
                message: "Ivalid project name",
              },
            }}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                label="Project name"
                variant="outlined"
                fullWidth
                autoFocus
                error={!!errors.projectName}
                // helperText={error ? error.projectName : null}
                margin="normal" // Add a margin to create a gap
              />
            )}
          />
          {/* <Controller
            name="configurationId"
            control={control}
            // rules={{
            //   required: "Co is required",
            // }}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                error={error ? true : false}
                margin="normal"
              />
            )}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
            className="whiteText muiCheckbox"
          /> */}
          <LoadingButton
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            // loading={isLoading}
            loading={false}
            className="muiButton"
          >
            add
          </LoadingButton>
         
        </Box>
      </Box>
    </Container>
  );
};

export default ProjectForm;
