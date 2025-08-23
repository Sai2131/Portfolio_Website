import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

export function ProjectCard({Title, Desc, Img, Page}) {

  const navigate = useNavigate();

  return (
    <Card style={{ width: '18rem' }} className='blur bg-dark text-light'>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{Title}</Card.Title>
        <Card.Text>
            {Desc}
        </Card.Text>
        <Button variant="primary" onClick={() => navigate(Page)}>More Info</Button>
      </Card.Body>
    </Card>
  );
}
