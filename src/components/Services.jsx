import React, { Component } from 'react';
import Icofont from 'react-icofont';
import PropTypes from "prop-types";
import ScrollAnimation from 'react-animate-on-scroll';

class Services extends Component {
  render() {
      //Service loop start
      const servicedata = this.props.servicesData.map((service, index) => (
        <div className="col-md-6 col-lg-4 text-center" key={index}>
            <div className="service-item">
                <div className="glyph">
                  {service.icon ? (<Icofont icon={service.icon} />):(
                    <img src={service.Image}  alt="service" />
                  ) }

                </div>
                <h3>{service.heading}</h3>
                {/* {service.description.length > 150 ?
                  (
                    <p>
                      {`${service.description.substring(0, 120)}...`}
                    </p>
                  ) :
                  <p>{service.description}</p>
                } */}
                <p>{service.description}</p>
            </div>
        </div>
    ));
    //Service loop END
    return (
        <React.Fragment>
            <section id="services" className="services ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-center">
                            <ScrollAnimation animateIn="fadeInUp">
                                <div className="section-title">
                                    <h2>{this.props.sectionTitle}</h2>
                                    <p>{this.props.sectionDescription}</p>
                                    <span className="section-title-bg">{this.props.SectionbgTitle}</span>
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>
                    <div className="row">
                        {servicedata}
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
  }
}

//Props Types
Services.propTypes = {
    SectionbgTitle: PropTypes.string,
    sectionTitle: PropTypes.string,
    sectionDescription: PropTypes.string,
    servicesData: PropTypes.array
};

//Default Props
Services.defaultProps = {
    SectionbgTitle: "Services",
    sectionTitle: "Services We Provide",
    sectionDescription:
        "We believe in giving clear information about each of the services we provide, as well as the standards that we aim to achieve.",

    servicesData: [
        {
          Image: require("../assets/img/logos/angularjs.svg"),
          heading: "Angular",
          description:
              "Angular is an application design framework and development platform for creating efficient and sophisticated single-page apps. Angular is a TypeScript-based open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS."
        },
        {
            Image: require("../assets/img/logos/react.svg"),
            heading: "React",
            description:
                "React is an open-source front-end JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications."
        },
        {
          Image: require("../assets/img/logos/nodejs.svg"),
          heading: "Node.js",
          description:
              "Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser."
        },
        {
          icon: "icofont-laptop-alt",
          heading: "Express.js",
          description:
              "Express.js, or simply Express, is a back end web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js."
        },
        {
          Image: require("../assets/img/logos/mongodb.svg"),
          heading: "MongoDB",
          description:
              "MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas. MongoDB is developed by MongoDB Inc. and licensed under the Server Side Public License."
        },
        {
          Image: require("../assets/img/logos/django.svg"),
          heading: "Django",
          description:
              "Django is a Python-based free and open-source web framework that follows the model–template–views architectural pattern. It is maintained by the Django Software Foundation, an American independent organization established as a 501 non-profit."
        },
        {
          Image: require("../assets/img/logos/python.svg"),
          heading: "Python",
          description:
              "Python is an interpreted high-level general-purpose programming language. Python's design philosophy emphasizes code readability with its notable use of significant indentation."
        },
        {
          Image: require("../assets/img/logos/laravel.png"),
          heading: "Laravel",
          description:
              "Laravel is a free, open-source PHP web framework, created by Taylor Otwell and intended for the development of web applications following the model–view–controller architectural pattern and based on Symfony."
        },
        {
            icon: "icofont-brand-wordpress",
            heading: "WordPress",
            description:
                "Create a free website or easily build a blog on WordPress.com. Hundreds of free, customizable, mobile-ready designs and themes. Free hosting and support."
        },
        {
            icon: "icofont-brand-joomla",
            heading: "Joomla",
            description:
                "Joomla is an award-winning content management system (CMS), which enables you to build Web sites and powerful online applications have made Joomla the most popular Web site software available."
        },
        {
            Image: require("../assets/img/logos/magento.svg"),
            heading: "Magento",
            description:
                "Magento is the eCommerce software and platform trusted by the world's leading brands. Grow your online business with Magento."
        },
        {
            icon: "icofont-brand-drupal",
            heading: "Drupal",
            description:
                "Drupal is a free, open-source web development platform for online content and user communities. Drupal powers some of the busiest sites on the web, and can be adapted to virtually any visual design."
        },
        {
          Image: require("../assets/img/logos/cubes.png"),
          heading: "Custom Web Application Development",
          description:
              "The most important benefit of custom application development is that it is tailor-made by developers to your specifications in order to best serve your business’ needs."
        },
        {
          Image: require("../assets/img/logos/service.png"),
          heading: "Maintenance and Support",
          description:
              "Are you looking for Web Application Redevelopment, Website Redesigning, Project Maintenance and Support then you are at the right place."
        },
        {
          icon: "icofont-chart-growth",
          heading: "SEO",
          description:
              "Search engine optimization is the process of improving the quality and quantity of website traffic to a website or a web page from search engines. SEO targets unpaid traffic rather than direct traffic or paid traffic."
        },
    ]
};

export default Services;
