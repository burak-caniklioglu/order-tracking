import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loading from '../components/Loading';


const Accepted = lazy(() => import('../pages/Accepted'));
const CreateOrder = lazy(() => import('../pages/CreateOrder'));
const NotFound = lazy(() => import('../pages/NotFound'));

function Router() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Accepted />} exact />
        <Route path="/createOrder" element={<CreateOrder />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default Router;
