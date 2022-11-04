import Home from "./components/Home";
import Counter from "./components/Counter";
import Layout from "./components/Layout";
import About from "./components/About";

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
];

export default AppRoutes;
