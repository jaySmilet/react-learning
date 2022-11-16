import * as React from 'react';
import { useNavigate } from 'react-router-dom';

export default function One() {
  const navigate = useNavigate();
  const [resourceType, setResourceType] = React.useState('posts');
  const [items, setItems] = React.useState([]);
  React.useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [resourceType]);
  console.log('One renders');
  return (
    <div>
      <button onClick={() => setResourceType('posts')}>posts</button>
      <button onClick={() => setResourceType('users')}>users</button>
      <button onClick={() => setResourceType('comments')}>comments</button>
      <button onClick={() => navigate('/two')}>Go</button>
      <p>{resourceType}</p>
      {items.map((item, index) => {
        return <pre key={index}>{JSON.stringify(item)}</pre>;
      })}
    </div>
  );
}
