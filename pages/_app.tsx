import { AppProps } from 'next/app'
import { Inter } from 'next/font/google'

import clsx from 'clsx'

import '../styles/globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={clsx(inter.variable, 'font-sans')}>
      <Component {...pageProps} />
    </main>
  )
}
// pages/register.tsx
import RegisterComponent from '..lib/makeswift/RegisterComponent';

const RegisterPage: React.FC = () => {
  return (
    <div>
      <h1>Register Page</h1>
      <RegisterComponent />
    </div>
  );
};

export default RegisterPage;


export default MyApp
