import { Carousel } from 'react-bootstrap';
import img1 from "../../public/assets/random.jpg";
import img2 from "../../public/assets/class.jpg";

const HeaderSlider  = () => {
    return (
    <Carousel interval={null}>
    <Carousel.Item>
    <img
      className="d-block w-100"
      src={img1}
      alt="Children gathered and engaged"
    />
    <Carousel.Caption>
      <h1>Welcome To Kaits Kare</h1>
      <span className="btn btn-outline-light">Learn More</span>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img2}
      alt="Child playing and smiling"
    />

    <Carousel.Caption>
      <h1>Looking For A Daycare?</h1>
      <span className="btn btn-outline-light">Contact Us</span>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
)}

export default HeaderSlider