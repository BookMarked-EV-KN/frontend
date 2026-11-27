import { createBrowserRouter, RouterProvider } from 'react-router'
import './App.css'
import HomePage from './pages/HomePage'
import AdminBooksPage from './pages/admin/AdminBooksPage'
import AdminReviewsPage from './pages/admin/AdminReviewsPage'
import BookDetailsPage from './pages/BookDetailsPage'
import NotFoundPage from './pages/NotFoundPage'
import Layout from './layouts/Layout'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "admin/books", element: <AdminBooksPage /> },
      { path: "admin/reviews", element: <AdminReviewsPage /> },
      { path: "bookdetails", element: <BookDetailsPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />
}

export default App
