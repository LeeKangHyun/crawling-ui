import React from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

import SignInContainer from '~/containers/SignIn';

import { SignWrap } from '~/pages/styled';

const SignIn = () => {
  const { t } = useTranslation();
  return (
    <SignWrap>
      <Helmet>
        <title>{t('title.signIn')} - Crawling-ui</title>
      </Helmet>

      <SignInContainer />
    </SignWrap>
  );
};

export default SignIn;
