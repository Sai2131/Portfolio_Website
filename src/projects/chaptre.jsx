import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import ChaptreHomepage from '../assets/ChaptreHomepage.png'
import Chaptre2 from '../assets/Chaptre-2.png'
import Chaptre3 from '../assets/Chaptre-3.png'

function Chaptre() {

  return ( 
      <Container className='text-light mt-5 mb-5'>
            <h1>Chaptre</h1>
            
            <Carousel className='mb-3 mt-3'>
            <Carousel.Item>
              <div className="carousel-image-container">
                <img src={ChaptreHomepage} alt="Homepage" />
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className="carousel-image-container">
                <img src={Chaptre2} alt="Homepage" />
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className="carousel-image-container">
                <img src={Chaptre3} alt="Homepage" />
              </div>
            </Carousel.Item>
          </Carousel>

            <p1>
              <b>Chaptre</b> is a collaborative website for authors and readers. The platform allows
              users to create profiles, write and publish books, and explore a library of stories.
              It was built as a group project, where my contributions focused on frontend development,
              API design, and the rating system on the backend.
              <br></br>
              <br></br>
              Features:
              <ul>
                <li>
                  <b>User Profiles:</b> Users can sign up, create a profile, upload a picture, and
                  customize their author page.
                </li>
                <li>
                  <b>Write & Publish:</b> Authors can write books using a rich text editor (Quill),
                  save drafts, publish chapters, and add cover titles and genre tags.
                </li>
                <li>
                  <b>Discover & Read:</b> Readers can browse published books, search by title, and
                  filter by genre tags. Includes a reading view for navigating chapters seamlessly.
                </li>
              </ul>
              My Contributions:
              <ul>
                <li>Developed key frontend components including the homepage and reading view.</li>
                <li>Designed and implemented API specifications to connect frontend and backend.</li>
                <li>Worked on backend logic for the book rating system.</li>
              </ul>
              The project was built collaboratively and showcases a full-stack web application
              integrating real-time writing, publishing, and reading features.
            </p1>
          
      
      </Container>
  )
}

export default Chaptre