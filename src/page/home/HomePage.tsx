import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import SettingsIcon from '@mui/icons-material/Settings';
import { Posts } from '../../mock-data/data';
import PostItem from './PostItem';
import { useQuery } from '@tanstack/react-query';
import { Diversity1 } from '@mui/icons-material';

export default function HomePage() {
  console.log('>>>>>>.HomePage');

  const queryFn = async () => {
    const response = await fetch('http://localhost:3000/posts');

    if (!response.ok) {
      throw new Error('Network response error');
    }

    return response.json();
  };

  const query = useQuery({ queryKey: ['posts'], queryFn });
  console.log('>>>>>>>>>query');
  console.log(query);
  const { data, isFetching, isLoading, error } = query;

  if (isLoading) {
    return <div className="h-full w-full">isLoading=true loading for the first time</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <Header>
        <div className="flex w-full flex-row items-center">
          <div className="grow">X</div>
          <Link to="pinned/edit">
            <SettingsIcon />
          </Link>
        </div>
      </Header>

      {data?.map((post: (typeof Posts)[0]) => <PostItem key={post.id} post={post} />)}
    </div>
  );
}
