import { useRouter } from 'next/router';

import { useForm } from 'react-hook-form';
import type {
  SubmitHandler,
} from 'react-hook-form';

import { Input } from '@dashboard/Input';
import { Button } from '@dashboard/Button';

import styles from './LoginForm.module.scss';

function LoginForm() {
  const { push } = useRouter();

  const {
    register,
    handleSubmit,
    formState: {
      errors,
      isDirty,
      isValid,
    },
  } = useForm<ValuesType>({ mode: 'onChange' });

  const onSubmit: SubmitHandler<ValuesType> = async (values) => {
    const response = await fetch(
      '/api/login',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(
          {
            username: values.username,
            password: values.password,
          }
        ),
      }
    );

    if (response.ok) {
      push('/dashboard');
    }
  };

  return (
    <form className={styles.block} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.field}>
        <Input
          type="text"
          placeholder="Логин"
          {...register('username', { required: true })}
        />
      </div>
      <div className={styles.field}>
        <Input
          type="password"
          placeholder="Пароль"
          {...register('password', { required: true })}
        />
      </div>
      <Button
        text="Вход"
        behavior="fill"
        isDisabled={!isValid}
        onClick={handleSubmit(onSubmit)}
      />
    </form>
  );
}

type ValuesType = {
  username: string;
  password: string;
};

export {
  LoginForm,
};
