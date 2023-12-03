import "../componentcss/AboutUs.css"
import Accordion from 'react-bootstrap/Accordion';
import AccordionItem from 'react-bootstrap/AccordionItem';
import AccordionBody from 'react-bootstrap/AccordionBody';
import AccordionButton from 'react-bootstrap/AccordionButton';
import AccordionCollapse from 'react-bootstrap/AccordionCollapse';

function AboutUs() {
    return (
        <>
    <div style={{backgroundColor: "#03261D", padding: 1}}> 
      <div style={{margin: 100}}>  
      <h1 style={{color: 'white'}}>About Us</h1>  
    <Accordion>
      <Accordion.Item eventKey="0" className='AItem' >
        <Accordion.Header >Project Lead</Accordion.Header>
        <Accordion.Body className='ABody'>
        <img src={require('./assets/Connor.PNG')} />
        <h3>Connor Handley</h3>
        <h5>
        I was responsible for managing all the higher level architecture. This includes managing weekly meetings, mapping crucial milestones and ensuring completion for deadlines. 
        By handling our organization I was able to create standards to ensure stellar documentation, and create both visually and critically interesting reports. 
        </h5>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1" className='AItem'>
        <Accordion.Header>Back End Developers</Accordion.Header>
        <Accordion.Body className='ABody'>
        <img src={require('./assets/Colesmith.png')} />
        <img src={require('./assets/JohnPaul.png')} />
        <h3>Cole Smith, John Paul</h3>
          <h5>
          We decided what the most appropriate algorithms, technologies, and systems are used for creating the AI model. While developing the
           AI we handled all documentation of the process. We worked hand in hand with the front end team to help deploy the AI model.
          </h5>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2" className='AItem'>
        <Accordion.Header>Front End Devlopers</Accordion.Header>
        <Accordion.Body className='ABody'>
        <img src={require('./assets/Eric.PNG')} />
        <img src={require('./assets/Paul.png')} />
        <h3>Eric Tsai, Paul Russell</h3>       
        <h5>
        We helped design, implement, and bring to life the AI model. We decided on what technologies
         to use for the front end. We also decided the best way to host the website and worked with the back-end team to help implement their AI into an API.
          </h5>
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>
      </div>
    </div>  
        </>
    );
}
export default AboutUs;