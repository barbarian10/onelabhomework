import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './page/Home';
import EnhancedTable from './page/Table';
import ButtonAppBar from './page/Header';
import { Outlet } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <ButtonAppBar />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/table",
        element: <EnhancedTable />
      },
    
    ]
  },
])
function App() {
  return (
    <div className="App">
      <RouterProvider router={router}>
        <Outlet />
      </RouterProvider>
    </div>
  );
}

export default App;
