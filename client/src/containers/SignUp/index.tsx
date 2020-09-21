import React from 'react';
import { useTranslation } from 'react-i18next';

import useSignUp from '~/hooks/Sign/useSignUp';

import { SignButton, SignForm, SignTitle, SignInput } from '~/components/Sign';

const SignUpContainer = () => {
  const { t } = useTranslation();
  const {
    state: { id, password },
    onSubmit,
    onChange,
  } = useSignUp();
  return (
    <SignForm onSubmit={onSubmit}>
      <SignTitle title={t('signUp.header')} />
      <SignInput type="text" placeholder="ID" name="id" value={id} onChange={onChange} />
      <SignInput type="password" placeholder="PASSWORD" name="password" value={password} onChange={onChange} />
      <SignButton type="submit" title={t('signUp.button')} />
    </SignForm>
  );
};

export default SignUpContainer;
