import * as React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Two() {
  const navigate = useNavigate();
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  React.useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };
  console.log('Two renders');
  return (
    <div>
      <p>{windowWidth}</p>
      <button onClick={() => navigate('/one')}>Go</button>
    </div>
  );
}
