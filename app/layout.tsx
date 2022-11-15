import '../styles/globals.css';
import RootStyleRegistry from './RootStyleRegistry';
import Footer from './(layout)/Footer';
import Header from './(layout)/Header';
import Sidebar from './(layout)/Sidebar';
import ReactQueryWrapper from './ReactQueryWrapper';

type Props = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: Props) => (
  <html>
    <head>
      <title>Preface</title>
    </head>
    <body>
      <ReactQueryWrapper>
        <RootStyleRegistry>
          <div className="flex w-full h-screen">
            <Sidebar />
            <div className="flex flex-col bg-gray w-full ">
              <Header />
              <div className="flex-1">{children}</div>
              <Footer />
            </div>
          </div>
        </RootStyleRegistry>
      </ReactQueryWrapper>
    </body>
  </html>
);

export default RootLayout;
