import { RouterProvider, createBrowserRouter, Navigate, Outlet, ScrollRestoration } from "react-router";
import { HelmetProvider } from "react-helmet-async";
import { LanguageProvider } from "./LanguageContext";
import { NetSpaceAcademy } from "./NetSpaceAcademy";

function RootLayout() {
  return (
    <LanguageProvider>
      <ScrollRestoration />
      <Outlet />
    </LanguageProvider>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <NetSpaceAcademy /> },
      { path: "netspace-academy", element: <Navigate to="/" replace /> },
    ],
  },
]);

export default function App() {
  return (
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  );
}
