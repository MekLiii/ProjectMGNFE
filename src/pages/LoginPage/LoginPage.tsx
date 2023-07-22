import { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { Button, TextField, Typography, Link } from "@mui/material";
import { LoadingButton } from '@mui/lab';
import { useDispatch, useSelector } from "react-redux";
import { SubmitHandler } from "react-hook-form";
import { Login } from "./Apis";
import { useQuery } from "react-query";
import { login as LoginRedux } from "@/redux/Slicers/Auth";
import jwtDecode from "jwt-decode";
import { IDataSubmit, IDecodeToken } from "./types";
import { useNavigate } from "react-router-dom";


const LoginPage = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    watch,
  } = useForm<IDataSubmit>();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<IDataSubmit> = () => {
    refetch();
  };
  const {
    data: { data } = {},
    isLoading,
    error,
    refetch,
    isSuccess,
  } = useQuery("login", () => Login(watch()), {
    enabled: false,
    retry: false,
  });

  const state = useSelector((state: any) => state);
  console.log(state);
  useEffect(() => {
    if (data && isSuccess) {
      console.log(data);
      console.log(jwtDecode(data.token));
      const decodeToken = jwtDecode(data.token) as IDecodeToken;
      const payLoad = {
        token: data.token,
        nameid: parseInt(decodeToken.nameid),
        email: decodeToken.email,
        Guid: decodeToken.Guid,
      };
      navigate("/project");
      dispatch(LoginRedux(payLoad));
    }
  }, [data]);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(onSubmit)();
      }}
    >
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
            error={!!errors.email}
            helperText={error ? error.message : null}
            margin="normal" // Add a margin to create a gap
          />
        )}
      />

      <Controller
        name="password"
        control={control}
        rules={{
          required: "Password is required",
          //   minLength: {
          //     value: 10,
          //     message: "Password must be at least 6 characters long",
          //   },
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

      <LoadingButton type="submit" variant="contained" color="primary" fullWidth loading={isLoading}>
        Login
      </LoadingButton>

      <Typography variant="body2" align="center" style={{ marginTop: "1rem" }}>
        Don't have an account yet? <Link href="#">Register</Link>
      </Typography>
    </form>
  );
};

export default LoginPage;
