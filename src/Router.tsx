import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { History } from './pages/History'
import { DefaultLayout } from './layouts/DefaultLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Route>

      {/* EXEMPLO de como se criaria e usaria layouts diferentes localhost:3000/admin/products */}
      {/* <Route path="/admin" element={<AdminLayout />}>
        <Route path="/products" element={<Products />} />
      </Route> */}
    </Routes>
  )
}

// OUTRA FORMA DE CRIAR LAYOUTS

// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import { Home } from '../pages/Home';
// import { History } from '../pages/History';
// import { DefaultLayout } from '../layouts/DefaultLayout';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <DefaultLayout />,
//     children: [
//       {
//         path: '/',
//         element: <Home />,
//       },
//       {
//         path: '/history',
//         element: <History />,
//       },
//     ],
//   },
// ]);

// export function Router() {
//   return <RouterProvider router={router} />;
// }
