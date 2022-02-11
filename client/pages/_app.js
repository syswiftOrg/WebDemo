import '@material-ui/core';
import '../globalStyle.css';
import Navbar from '../component/navbar';
import buildClient from '../api/build-client';
import Head from 'next/head';

const global = ({Component, pageProps, currentUser}) =>{
    return (
    <div>     
        <Head>
            <title>Web Demo</title>
            <link rel="shortcut icon" href='/logo.png'/>
            <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
            />
            <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            />
        </Head>
        <Navbar currentUser={currentUser}/>
        <Component {...pageProps} />
    </div>
    );
}

global.getInitialProps = async (appContext) => {
    const { data } = await buildClient(appContext.ctx).get('api/auth/currentuser');

    let pageProps;
    if(appContext.Component.getInitialProps) {
        pageProps = await appContext.Component.getInitialProps(appContext.ctx);
    }

    return {pageProps, ...data};
};

export default global;