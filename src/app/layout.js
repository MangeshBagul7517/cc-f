// app/layout.js
import Header from '../app/components/layouts/Header';
import Footer from '../app/components/layouts/Footer';
import Head from 'next/head';
import './globals.scss';
import ToastNotification from './components/comman/messages/ToastNotification';
import '../../public/assets/icon/code-creator-image.jpg'

export const metadata = {
  title: "Code Creador",  // Global title
  description: "Your Tech Innovation Partner",  // Global description
  icons: {
    icon: "/assets/icon/cc.png",  // Path to your favicon
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>My Website - Default Title</title>
        <meta name="description" content="Default description for my website." />
      </Head>
      <body className="antialiased bg-background text-foreground flex flex-col min-h-screen">
        <Header />
        <div aria-live="polite">
          <ToastNotification />
        </div>
        <main className="flex-grow min-h-[calc(100vh-240px)]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
