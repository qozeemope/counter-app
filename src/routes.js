import Home from "./components/Home";
import Counter from "./components/Counter";
import Layout from "./components/Layout";
import About from "./components/About";
import ErrorPage from "./components/ErrorPage";
import NotFound from "./components/NotFound";

const AppRoutes = [
  {
    id: 1,
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },

  {
    id: 2,
    path: "/counter",
    element: (
      <Layout>
        <Counter />
      </Layout>
    ),
  },

  {
    id: 3,
    path: "/about",
    element: (
      <Layout>
        <About />
      </Layout>
    ),
  },

  {
    id: 4,
    path: "/error",
    element: <ErrorPage />,
  },
  {
    id: 5,
    path: "*",
    element: <NotFound />,
  },
];

export default AppRoutes;
