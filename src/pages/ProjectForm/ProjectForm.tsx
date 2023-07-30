import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button
} from '@mui/material'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import {
  Typography,
  Box,
  Container,
  Avatar,
  FormControlLabel,
  Checkbox,
  Grid
} from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import { useNavigate } from 'react-router-dom'
import { LoadingButton } from '@mui/lab'
import { createProject } from './Apis'
import { useSelector } from 'react-redux'
import { useQuery } from 'react-query'

interface IProjectForm {
  state: 'ADD' | 'EDIT'
}

const ProjectForm = ({ state }: IProjectForm) => {
  const {
    handleSubmit,
    control,
    setValue,
    register,
    watch,
    formState: { errors }
  } = useForm()
  const { nameid } = useSelector((state: any) => state.auth.user)
  const navigate = useNavigate()
  const onSubmit = () => refetch()

  const { isLoading, refetch } = useQuery(
    'createProject',
    () => createProject(watch(), nameid),
    {
      enabled: false,
      retry: false,
      onSuccess: () => {
        navigate('/main', {
          replace: true
        })
      }
    }
  )

  return (
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
        <Typography component='h1' variant='h5' className='whiteText'>
          {state === 'ADD' ? 'Add Project' : 'Edit Project'}
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
            name='projectName'
            control={control}
            rules={{
              required: 'Project name is required',
              pattern: {
                value: /^[a-zA-Z0-9]+$/i,
                message: 'Ivalid project name'
              }
            }}
            render={({ field, fieldState: { error } }) => (
              <TextField
                {...field}
                label='Project name'
                variant='outlined'
                fullWidth
                autoFocus
                error={!!errors.projectName}
                margin='normal'
              />
            )}
          />
          <LoadingButton
            type='submit'
            fullWidth
            variant='contained'
            sx={{ mt: 3, mb: 2 }}
            // loading={isLoading}
            loading={isLoading}
            className='muiButton'
          >
            add
          </LoadingButton>
        </Box>
      </Box>
    </Container>
  )
}

export default ProjectForm
