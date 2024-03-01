import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './page/home/HomePage';
import ExplorePage from './page/explore/ExplorePage';
import Layout from './Layout';
import NotificationsPage from './page/notifications/NotificationsPage';
import MessagesPage from './page/messages/MessagesPage';
import TimeLineSetting from './page/home/TimeLineSetting';
import PlaygoundPage from './page/playground/PlaygoundPage';
import PlaygoundDetail from './page/playground/PlaygoundDetail';
import { RegisterPage } from './page/register/RegisterPage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { path: 'home', Component: HomePage },
      { path: 'explore', Component: ExplorePage },
      { path: 'notifications', Component: NotificationsPage },
      { path: 'messages', Component: MessagesPage },
      { path: 'playground', Component: PlaygoundPage },
      { path: 'playground/:api', Component: PlaygoundDetail },
    ],
  },
  {
    path: '/home/pinned/edit',
    Component: TimeLineSetting,
  },
  {
    path: '/register',
    Component: RegisterPage,
  },
]);

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
