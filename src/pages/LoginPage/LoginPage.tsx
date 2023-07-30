import { useEffect, useLayoutEffect, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import {
  TextField,
  Typography,
  Box,
  Container,
  Avatar,
  FormControlLabel,
  Checkbox,
  Grid
} from '@mui/material'
import { LoadingButton } from '@mui/lab'
import { useDispatch, useSelector } from 'react-redux'
import { SubmitHandler } from 'react-hook-form'
import { Login } from './Apis'
import { useQuery } from 'react-query'
import { login as LoginRedux } from '@/redux/Slicers/Auth'
import jwtDecode from 'jwt-decode'
import { IDataSubmit, IDecodeToken } from './types'
import { useNavigate, Link } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import { LoginFromStorage } from './utils/LoginFromStorage'

const LoginPage = () => {
  const [loading, setLoading] = useState(false)
  const {
    handleSubmit,
    control,
    formState: { errors },
    watch
  } = useForm<IDataSubmit>()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const onSubmit: SubmitHandler<IDataSubmit> = () => {
    refetch()
  }
  const {
    data: { data } = {},
    isLoading,
    error,
    refetch,
    isSuccess
  } = useQuery('login', () => Login(watch()), {
    enabled: false,
    retry: false
  })
  useLayoutEffect(() => {
    setLoading(true)
  }, [])
  useEffect(() => {
    const payload = LoginFromStorage()
    if (payload) {
      console.log({ payload })
      dispatch(LoginRedux(payload))
      navigate('/project', {
        replace: true
      })
    }
    setLoading(false)
  }, [])

  useEffect(() => {
    if (data && isSuccess) {
      const decodeToken = jwtDecode(data.token) as IDecodeToken
      const payLoad = {
        token: data.token,
        nameid: parseInt(decodeToken.nameid),
        email: decodeToken.email,
        Guid: decodeToken.Guid
      }
      navigate('/project', {
        replace: true
      })
      dispatch(LoginRedux(payLoad))
    }
  }, [data])
  if (loading) return <div>Loading...</div>
  return (
    <>
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5' className='whiteText'>
            Sign in
          </Typography>
          <Box
            component='form'
            onSubmit={e => {
              e.preventDefault()
              handleSubmit(onSubmit)()
            }}
            noValidate
            sx={{ mt: 1 }}
          >
            <Controller
              name='email'
              control={control}
              rules={{
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: 'Invalid email address'
                }
              }}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  label='Email'
                  variant='outlined'
                  fullWidth
                  autoFocus
                  error={!!errors.email}
                  helperText={error ? error.message : null}
                  margin='normal' // Add a margin to create a gap
                />
              )}
            />
            <Controller
              name='password'
              control={control}
              rules={{
                required: 'Password is required'
              }}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  label='Password'
                  type='password'
                  variant='outlined'
                  fullWidth
                  error={error ? true : false}
                  margin='normal'
                />
              )}
            />
            <FormControlLabel
              control={<Checkbox value='remember' color='primary' />}
              label='Remember me'
              className='whiteText muiCheckbox'
            />
            <LoadingButton
              type='submit'
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2 }}
              loading={isLoading}
              className='muiButton'
            >
              Sign In
            </LoadingButton>
            <Grid container>
              <Grid item xs>
                <Link to='#' replace>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to={'/signUp'} replace>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </>
  )
}

function Copyright (props: any) {
  return (
    <Typography
      variant='body2'
      color='text.secondary'
      align='center'
      {...props}
      className='whiteText'
    >
      {'Copyright © '}
      <Link to='#' replace>
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

export default LoginPage
