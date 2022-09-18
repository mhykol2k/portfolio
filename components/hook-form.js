import { useForm } from 'react-hook-form'
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Box
} from '@chakra-ui/react'

export default function HookForm() {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm()

  function onSubmit(values) {
    return new Promise((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2))
        resolve()
      }, 3000), reset();
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl my='1' isInvalid={errors.name}>
        <FormLabel htmlFor='name'>Full Name</FormLabel>
        <Input
          id='name'
          placeholder='Name'
          {...register('name', {
            required: 'This is required',
            minLength: { value: 4, message: 'Minimum length should be 4' },
          })}
        />
        <FormErrorMessage>
          {errors.name && errors.name.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl my='1' isInvalid={errors.email}>
        <FormLabel htmlFor='email'>Email Address</FormLabel>
        <Input
          id='email'
          placeholder='Email Address'
          {...register('email', {
            required: 'Email Address is required.',
            pattern: {
              value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: 'Please enter a valid email',
          },
          })}
          />
          <FormErrorMessage>
          {errors.email && errors.email.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl my='1' isInvalid={errors.tel}>
        <FormLabel htmlFor='tel'>Phone Number</FormLabel>
        <Input
          id='tel'
          placeholder='Phone Number'
          {...register('tel', {
            required: 'Please enter a valid phone number.',
            minLength: 1, message: 'Minumum Length is 6 Digits.',
            maxLength: 99, message: 'Maximum Length is 12 Digits.',
            pattern: {
              value: /[0-9]{4}/,
              message: 'Please enter a valid phone number',
          },
          })}
          />
          <FormErrorMessage>
          {errors.tel && errors.tel.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl my='1' isInvalid={errors.text}>
        <FormLabel htmlFor='text'>Notes</FormLabel>
        <Input
          id='text'
          placeholder='Enter Text Here...'
          {...register('text', {
            maxLength: { value: 140, message: 'Maximum length should be 140' },
          })}
        />
        <FormErrorMessage>
          {errors.text && errors.text.message}
        </FormErrorMessage>
      </FormControl>
      <Box align="center">
        <br></br>
      <Button my={1} colorScheme='teal' isLoading={isSubmitting} type='submit'>
        Submit
      </Button>
      </Box>
    </form>
  )
}