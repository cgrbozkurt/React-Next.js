import { useLocation, useParams } from 'react-router-dom';

const Details = () => {
  const { id } = useParams();
  const location = useLocation();
  const product = location.state || {};

  return (
    <div>
      <h1>{id}-{product.title}</h1>
      
    </div>
  );
};

export default Details;