import './globals.css';
import { Nunito } from 'next/font/google';
import Navbar from './components/navbar/Navbar';
import ClientOnly from './components/ClientOnly';
import RegisterModal from './components/modals/RegisterModal';
import ToasterProvider from './providers/ToasterProvider';
import LoginModal from './components/modals/LoginModal';
import getCurrentUser from './actions/getCurrentUser';
import Providers from './providers/Providers';

const nunito = Nunito({ subsets: ['latin'] });

export const metadata = {
  title: 'Travel',
  description: 'Travel app',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const currentUser = await getCurrentUser();

  return (
    <html>
      <body className={nunito.className}>
        <ClientOnly>
          <Providers>
            <ToasterProvider />
            <RegisterModal />
            <LoginModal />
            <Navbar currentUser={currentUser} />
          </Providers>
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
