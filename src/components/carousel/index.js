import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
} from "mdb-react-ui-kit";

import synopsis2021 from "../../asset/placement.jpg";
import synopsis2020 from "../../asset/placement2020.jpg";
import "./styles.scss";

const SynopsisCarousel = () => {
  return (
    <>
      <MDBCarousel showControls>
        <MDBCarouselInner>
          <MDBCarouselItem className="active">
            <MDBCarouselElement src={synopsis2021} alt="synopsis-2021" />
          </MDBCarouselItem>
          <MDBCarouselItem>
            <MDBCarouselElement src={synopsis2020} alt="synopsis-2020" />
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </>
  );
};

export default SynopsisCarousel;
