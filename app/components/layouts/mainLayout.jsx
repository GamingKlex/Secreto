import { Outlet } from 'react-router';
import Footer from '../footer';
import Header from '../header';

export default function MainLayout() {
  return (
    <div className="text-base antialiased">
      <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
        <Header />

        <div className="flex-1">
          <Outlet />
        </div>

        <Footer />
      </div>
    </div>
  );
}
