import '../styles/globals.css';
import RootStyleRegistry from './RootStyleRegistry';
import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>Preface</title>
      </head>
      <body>
        <RootStyleRegistry>
          <div className="flex w-full h-screen">
            <Sidebar />
            <div className="bg-gray w-full">
              <Header />
              {children}
              <Footer />
            </div>
          </div>
        </RootStyleRegistry>
      </body>
    </html>
  );
}
