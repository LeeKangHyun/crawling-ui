import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    body: string;
    text: string;
    linkColor: string;
    footerColor: string;
    signBack: string;
    inputBack: string;
    titleColor: string;
    placeholder: string;
    topGradient: string;
    dashBoard: {
      titleBackGroundColor: string;
      titleColor: string;
      defaultContentBackGroundColor: string;
      defaultContentFontColor: string;
    };
  }
}
