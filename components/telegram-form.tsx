import axios from 'axios';
import { useForm } from 'react-hook-form';
import { TelegramResponse } from '../interfaces/TelegramRes';
import { TextField, Button, Snackbar, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';

type FormData = {
  name: string;
  email: string;
  message: string;
};

type Props = {};

export default function TelegramForm({}: Props) {
  const [open, setOpen] = useState({
    snackbarState: false,
    buttonState: false,
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const handleClose = (e: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      setOpen({
        snackbarState: false,
        buttonState: true,
      });
      return;
    }
    setOpen({
      snackbarState: false,
      buttonState: true,
    });
  };

  const action = (
    <IconButton
      size='small'
      aria-label='close'
      color='inherit'
      onClick={handleClose}
    >
      <CloseIcon fontSize='small' />
    </IconButton>
  );

  const onSubmit = async (data: FormData) => {
    const body: string = `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`;
    const telegramUrl: string = `https://api.telegram.org/bot${
      process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN
    }/sendMessage?chat_id=${
      process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID
    }&text=${encodeURIComponent(body)}`;

    try {
      const response = await axios.get<TelegramResponse>(telegramUrl);
      console.log('Message sent successfully!', response.data.result);

      setOpen({
        snackbarState: true,
        buttonState: true,
      });
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <form
      className='flex flex-col gap-4 md:m-auto xl:max-w-[30vw] lg:max-w-[40vw] md:max-w-[50vw] mx-[8%]'
      onSubmit={handleSubmit(onSubmit)}
    >
      <TextField
        label='Name'
        variant='outlined'
        disabled={open.buttonState}
        {...register('name', {
          required: true,
        })}
      />
      <TextField
        label='Email'
        variant='outlined'
        disabled={open.buttonState}
        {...register('email', {
          required: true,
          pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        })}
        error={!!errors.email}
        helperText={errors.email ? 'Invalid email format' : ''}
      />
      <TextField
        label='Message'
        variant='outlined'
        multiline
        rows={4}
        disabled={open.buttonState}
        {...register('message')}
      />
      <Button variant='outlined' type='submit' disabled={open.buttonState}>
        {open.buttonState ? 'Message Sent' : 'Send'}
      </Button>
      <Snackbar
        open={open.snackbarState}
        autoHideDuration={6000}
        onClose={handleClose}
        message='Message sent'
        action={action}
      />
    </form>
  );
}
