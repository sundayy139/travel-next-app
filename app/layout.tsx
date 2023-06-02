import './globals.css';
import { Nunito } from 'next/font/google';
import Navbar from './components/navbar/Navbar';
import ClientOnly from './components/ClientOnly';
import RegisterModal from './components/modals/RegisterModal';
import ToasterProvider from './providers/ToasterProvider';
import LoginModal from './components/modals/LoginModal';
import getCurrentUser from './actions/getCurrentUser';
import Providers from './providers/Providers';
import RentModal from './components/modals/RentModal';

const nunito = Nunito({ subsets: ['latin'] });

export const metadata = {
  title: 'Travel',
  description: 'Travel app',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const currentUser = await getCurrentUser();

  return (
    <html>
      <body className={`${nunito.className} dark:bg-dark-primary`}>
        <ClientOnly>
          <Providers>
            <ToasterProvider />
            <RegisterModal />
            <LoginModal />
            <RentModal />
            <Navbar currentUser={currentUser} />
          </Providers>
        </ClientOnly>
        <div className="pt-28 pb-20">{children}</div>
      </body>
    </html>
  );
}
