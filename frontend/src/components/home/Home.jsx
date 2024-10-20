import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import EventsCard from "../EventsCard"
import SignUp from '../SignUp';

export default function Home(){
    const events = [
        {
            id: 1,
            eventsImg: "Image One",
            title: "ASOEBI PARTY BY ARIVLA",
            description: "Asoebi party by Arivla is a gathering of enthusiast and stakeholders in the Nigerian fashion and lifestyle space. You don’t want to miss it!",
            date: "03-10-2024",
            venue: "The podium",
            price: "Free",
            organizer: "Fifin"

        },
        {
            id: 2,
            eventsImg: "Image Two",
            title: "ASOEBI PARTY BY ARIVLA",
            description: "Asoebi party by Arivla is a gathering of enthusiast and stakeholders in the Nigerian fashion and lifestyle space. You don’t want to miss it!",
            date: "03-10-2024",
            venue: "The podium",
            price: "Free",
            organizer: "Fifin"

        }
    ]
    return(
        <>
    <section class="py-4 overflow-hidden">

<div class="container">
  <div class="row h-100">
    <div class="col-lg-7 mx-auto text-center mt-7 mb-5">
      <h5 class="fw-bold fs-3 fs-lg-5 lh-sm">Trending Events</h5>
    </div>
    <SignUp/>
    <Container>
     
      <Row>
        <Col> {events.map((evt)=>{
            return(
                <EventsCard evt={evt}/>
            )
        })}</Col>
        
      </Row>
    </Container>
  </div>
</div>

</section>
        </>
    )
}