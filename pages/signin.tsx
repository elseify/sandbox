import { useRouter } from 'next/router';

import { useForm } from 'react-hook-form';
import type { SubmitHandler } from 'react-hook-form';

import { Page } from '@chunks/page';
import { Brand } from '@chunks/brand';
import { Input } from '@chunks/dashboard/input';
import { Button } from '@chunks/dashboard/button';

import styles from './signin.module.scss';

export default function Signin() {
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
      '/api/signin',
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
      push('/');
    }
  };

  return (
    <Page className={styles['page']} pageKey="signin">
      <div className="page-layer">
        <div className="layer-item">
          <Brand />
        </div>
        <form className="layer-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-field">
            <Input
              type="text"
              placeholder="Логин"
              {...register('username', { required: true })}
            />
          </div>
          <div className="form-field">
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
      </div>
    </Page>
  );
}

type ValuesType = {
  username: string;
  password: string;
};
