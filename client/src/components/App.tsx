import React, { Suspense, useCallback } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';

import useDarkMode, { Theme, ToggleTheme } from '~/hooks/useDarkMode';
import useAuthUser from '~/hooks/useAuthUser';

import { ThemeProvider } from '~/lib/styled';
import { darkTheme, lightTheme } from '~/theme';

import i18n from '~/lang/i18n';

import { UnAuthRoutes, AuthRoutes } from './Routes';

import SideOption from './SideOption';
import Loading from './Loading';
import SideMenu from './SideMenu';
import TopGradient from './TopGradient/TopGradient';

import { GlobalStyled, PageTemplate, PageContent } from './styled';

const App = () => {
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const isAuth = useAuthUser();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  const Routes = useCallback(() => {
    return (isAuth ? AuthRoutes : UnAuthRoutes).map((route) => (
      <Route key={route.path} path={route.path} component={route.component} exact={route.exact} />
    ));
  }, [isAuth]);

  if (!componentMounted) {
    return <Loading />;
  }

  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider theme={themeMode}>
        <PageTemplate>
          <Suspense fallback={<Loading />}>
            <SideMenu isAuth={isAuth} />
            <PageContent>
              <TopGradient />
              <Switch>
                {Routes()}
                <Redirect to="/" />
              </Switch>
            </PageContent>
            <SideOption theme={theme as Theme} toggleTheme={toggleTheme as ToggleTheme} />
          </Suspense>
          <GlobalStyled />
        </PageTemplate>
      </ThemeProvider>
    </I18nextProvider>
  );
};

export default App;
