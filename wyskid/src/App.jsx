import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import RootLayout from "./components/RootLayout";
import Chapters from "./pages/Chapters";
import Quiz from "./pages/Quiz";

const router = createBrowserRouter([
  {
    path: "/game",
    element: <RootLayout />,
    children: [
      { path: "/game", element: <Chapters /> },
      { path: "/game/quiz", element: <Quiz /> },
      {
        path: "/game/leaderboard",
        element: <h1>This will be the leader board</h1>,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
