import App, { Container } from 'next/app';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import Router from 'next/router';
import Navbar from '../components/Navbar';
import theme from '../static/cssTheme';
import CssBaseline from '@material-ui/core/CssBaseline';

const GlobalStyle = createGlobalStyle`

body, html{
  font-family: ${(props) => props.theme.textFont};
  max-width: 100vw;
}
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
a {
  color: ${(props) => props.theme.color.black};
    :visited {
      color:  ${(props) => props.theme.color.black};
    }
    text-decoration: none;
}

`;

export default class MyApp extends App {
  // static async getInitialProps({ Component, ctx, ctx: { req, res } }) {
  //   let pageProps = {};
  //   if (Component.getInitialProps) {
  //     pageProps = await Component.getInitialProps(ctx);
  //   }
  //   return { pageProps: { ...pageProps } };
  //

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <ThemeProvider theme={theme}>
          <GlobalStyle theme={theme} />
          <Navbar />
          <Component {...pageProps} />
        </ThemeProvider>
      </Container>
    );
  }
}
