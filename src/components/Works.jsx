import React, { Component } from "react";
import Icofont from "react-icofont";
import PropTypes from "prop-types";
import ScrollAnimation from "react-animate-on-scroll";
import { MDBContainer, MDBRow } from "mdbreact";
import Lightbox from "react-image-lightbox";
import { Link } from 'react-router-dom';

const images = [
    require("../assets/img/work/app-ilovejapanschool.png"),
    require("../assets/img/work/airbook.jpg"),
    require("../assets/img/work/allminds2.jpg"),
    require("../assets/img/work/ilovejapanese.jpg"),
    require("../assets/img/work/freadee.jpg"),
    require("../assets/img/work/jungle-collective.jpg"),
    require("../assets/img/work/gbsan.jpg"),
    require("../assets/img/work/liberex.jpg"),
    require("../assets/img/work/koobits.jpg"),
    require("../assets/img/work/warapsty.jpg"),
    require("../assets/img/work/goodEreader.jpg"),
    require("../assets/img/work/accommodationagent-min.png"),
    require("../assets/img/work/amc.jpg"),
    require("../assets/img/work/arise.jpg"),
    require("../assets/img/work/artsmobia.jpg"),
    require("../assets/img/work/ilovejapanese.jpg"),
    require("../assets/img/work/bilfolda.jpg"),
    require("../assets/img/work/blackdiamondequipment-co-za-min.png"),
    require("../assets/img/work/bottle-buhle-brand.jpg"),
    require("../assets/img/work/buyfresh-co-za-min.png"),
    require("../assets/img/work/cabfoods-co-za-min.png"),
    require("../assets/img/work/Clim-ZA.jpg"),
    require("../assets/img/work/demo2-netwisedemo2-co-za-min.png"),
    require("../assets/img/work/dilpasandlibas-min.png")
  ];

  const smallImages = [
    require("../assets/img/work/app-ilovejapanschool.png"),
    require("../assets/img/work/airbook.jpg"),
    require("../assets/img/work/ilovejapanese.jpg"),
    require("../assets/img/work/freadee.jpg"),
    require("../assets/img/work/jungle-collective.jpg"),
    require("../assets/img/work/liberex.jpg")
  ];

class Works extends Component {
    constructor(props) {
        super(props);

        this.state = {
          photoIndex: 0,
          isOpen: false
        };
      }

    render() {
        const { photoIndex, isOpen } = this.state;
        return (
            <React.Fragment>
                <section id="works" className="our-works ptb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2 text-center">
                                <ScrollAnimation animateIn="fadeInUp">
                                    <div className="section-title">
                                        <h2>{this.props.sectionTitle}</h2>
                                        <p>{this.props.sectionDescription}</p>
                                        <span className="section-title-bg">
                                            {this.props.SectionbgTitle}
                                        </span>
                                    </div>
                                </ScrollAnimation>
                            </div>
                        </div>
                    </div>

                    <MDBContainer>
                        <div className="mdb-lightbox no-margin">
                            <MDBRow>
                              {smallImages.map((smallImage) => {
                                console.log("smallImage", smallImage);
                                return (
                                  <div className="col-md-6 col-lg-4">
                                      <div className="work-details">
                                        <figure className="set-img">
                                          <img
                                          src={smallImage}
                                          alt="Gallery"
                                          className="img-fluid"
                                          />
                                          <div className="box-content">

                                            <ul className="icon">
                                                <li>
                                                    <span
                                                        href= "ll"
                                                        onClick={() => this.setState({ photoIndex: 0, isOpen: true })}
                                                        className="popup-btn">
                                                        <Icofont icon="icofont-search-2"/>
                                                    </span>
                                                </li>
                                            </ul>
                                          </div>
                                        </figure>
                                      </div>
                                  </div>
                                )
                              })}
                            </MDBRow>
                        </div>
                        {isOpen && (
                        <Lightbox
                            mainSrc={images[photoIndex]}
                            nextSrc={images[(photoIndex + 1) % images.length]}
                            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                            imageTitle={photoIndex + 1 + "/" + images.length}
                            onCloseRequest={() => this.setState({ isOpen: false })}
                            onMovePrevRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + images.length - 1) % images.length
                            })
                            }
                            onMoveNextRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + 1) % images.length
                            })
                            }
                        />
                        )}
                    </MDBContainer>
                    <div className="col-lg-12 col-md-12 all-post">
                      <div className="center-wrap">
                        <Link to="/projects" className="btn-a">
                            <div className="button project-btn">
                                View All Portfolios <Icofont icon="icofont-long-arrow-right" />
                                <div className="mask"></div>
                            </div>
                        </Link>
                      </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}
//Props Types
Works.propTypes = {
    SectionbgTitle: PropTypes.string,
    sectionTitle: PropTypes.string,
    sectionDescription: PropTypes.string,
};

//Default Props
Works.defaultProps = {
    SectionbgTitle: "Portfolios",
    sectionTitle: "Our Portfolios",
    sectionDescription:
        "Our portfolio comprises our projects with all services we provide.",
};

export default Works;
