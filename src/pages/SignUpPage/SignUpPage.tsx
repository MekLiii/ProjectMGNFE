import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { IDataSubmit } from "./types";
import { useQuery } from "react-query";
import { SignUp } from "./Apis";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link to="#" replace>Your Website</Link> {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function SignUpPage() {
  const {
    handleSubmit,
    control,
    formState: { errors },
    watch,
  } = useForm<IDataSubmit>();
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<IDataSubmit> = () => {
    refetch();
  };
  const {
    data = {},
    isLoading,
    error,
    refetch,
    isSuccess,
  } = useQuery("signUp", () => SignUp(watch()), {
    enabled: false,
    retry: false,
    onSuccess: (data) => {
      navigate("/", { state: { message: data } });
    },
  });

  return (
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
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box
          component="form"
          noValidate
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(onSubmit)();
          }}
          sx={{ mt: 3 }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Controller
                name="userName"
                control={control}
                rules={{
                  required: "Name is required",
                  pattern: {
                    value: /^[a-zA-Z0-9]+$/i,
                    message: "Invalid name",
                  },
                }}
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    {...field}
                    label="user name"
                    variant="outlined"
                    fullWidth
                    autoFocus
                    error={!!errors.email}
                    helperText={error ? error.message : null}
                    margin="normal"
                    
                  />
                )}
              />
              <Controller
                name="email"
                control={control}
                rules={{
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "Invalid email address",
                  },
                }}
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    {...field}
                    label="Email"
                    variant="outlined"
                    fullWidth
                    autoFocus
                    error={!!errors.email}
                    helperText={error ? error.message : null}
                    margin="normal" // Add a margin to create a gap
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="password"
                control={control}
                rules={{
                  required: "Password is required",
                }}
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
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link to="/" replace>Already have an account? Sign in</Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 5 }} />
    </Container>
  );
}
