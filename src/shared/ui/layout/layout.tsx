import { type FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer, Header } from '@/shared/ui';

export const Layout: FC = () => {
  return (
    <section className="flex min-h-screen flex-col">
      <Header />
      <main className="grow">
        <Outlet />
      </main>
      <Footer />
    </section>
  );
};
