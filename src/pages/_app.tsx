import { AppProps } from 'next/app';
import { Toaster } from 'react-hot-toast';

import '@/styles/globals.css';

import Layout from '@/components/layout/Layout';

import { ProfileProvider } from '@/context/ProfileContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ProfileProvider>
      <Layout>
        <Component {...pageProps} />
        <Toaster />
      </Layout>
    </ProfileProvider>
  );
}

export default MyApp;
