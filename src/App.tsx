import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./page/home/HomePage";
import ExplorePage from "./page/explore/ExplorePage";
import Layout from "./Layout";
import NotificationsPage from "./page/notifications/NotificationsPage";
import MessagesPage from "./page/messages/MessagesPage";
import TimeLineSetting from "./page/home/TimeLineSetting";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { path: "home", Component: HomePage },
      { path: "explore", Component: ExplorePage },
      { path: "notifications", Component: NotificationsPage },
      { path: "messages", Component: MessagesPage },
    ],
  },
  {
    path:"/home/pinned/edit",
    Component: TimeLineSetting
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
