import React from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

import SignUpContainer from '~/containers/SignUp';

import { SignWrap } from '~/pages/styled';

const SignUp = () => {
  const { t } = useTranslation();
  return (
    <SignWrap>
      <Helmet>
        <title>{t('title.signUp')} - Crawling-ui</title>
      </Helmet>

      <SignUpContainer />
    </SignWrap>
  );
};

export default SignUp;
