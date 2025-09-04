import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

export function ProjectCard({Title, Desc, Img, Page}) {

  const navigate = useNavigate();

  return (
    <Card style={{ width: '18rem' }} className='blur bg-dark text-light'>
      <div className="ratio ratio-1x1">
        <Card.Img 
          variant="top" 
          src={Img} 
          style={{ objectFit: "cover" }} 
        />
      </div>
<Card.Body className="d-flex flex-column">
    <Card.Title>{Title}</Card.Title>
    <Card.Text className="flex-grow-1">
      {Desc}
    </Card.Text>
    <Button 
      variant="primary" 
      onClick={() => navigate(Page)} 
      className="mt-auto"
    >
      More Info
    </Button>
  </Card.Body>
    </Card>
  );
}
