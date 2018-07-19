import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import App, { Container } from 'next/app';
import React from 'react';
import Head from '../components/head';
import Header from '../components/header';

class Layout extends React.Component {
  private render() {
    const {children} = this.props;
    return (
      <div className="layout">
        <Header />
        {children}
      </div>
    );
  }
}

// tslint:disable-next-line:max-classes-per-file
export default class MyApp extends App {
  private render() {
    const {Component, pageProps} = this.props;
    return (
      <div>
        <Head />
        <Container>
          <Layout>
            <Component {...pageProps} />
          </Layout>
          <style jsx global>{bootstrap}</style>
        </Container>
      </div>
    );
  }
}
