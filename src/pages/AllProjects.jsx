import React, { Component } from 'react';
import PropTypes from "prop-types";
import Icofont from 'react-icofont';
import { MDBContainer, MDBRow } from "mdbreact";
import $ from 'jquery';

//Import Components
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

class Projects extends Component {
  constructor() {
    super();
    this.state = {
      currentPage: 1,
      itemsPerPage: 6,
      upperPageBound: 3,
      lowerPageBound: 0,
      isPrevBtnActive: 'disabled',
      isNextBtnActive: '',
      pageBound: 3
    };
    this.handleClick = this.handleClick.bind(this);
    this.btnDecrementClick = this.btnDecrementClick.bind(this);
    this.btnIncrementClick = this.btnIncrementClick.bind(this);
    this.btnNextClick = this.btnNextClick.bind(this);
    this.btnPrevClick = this.btnPrevClick.bind(this);
    this.setPrevAndNextBtnClass = this.setPrevAndNextBtnClass.bind(this);
  }

  componentDidUpdate() {
    $("ul li.active").removeClass('active');
    $('ul li#'+this.state.currentPage).addClass('active');
  }

  handleClick(event) {
    let listid = Number(event.target.id);
    this.setState({
      currentPage: listid
    });
    $("ul li.active").removeClass('active');
    $('ul li#'+listid).addClass('active');
    this.setPrevAndNextBtnClass(listid);
  }
  setPrevAndNextBtnClass(listid) {
    let totalPage = Math.ceil(this.props.projectsData.length / this.state.itemsPerPage);
    this.setState({isNextBtnActive: 'disabled'});
    this.setState({isPrevBtnActive: 'disabled'});
    if(totalPage === listid && totalPage > 1){
        this.setState({isPrevBtnActive: ''});
    }
    else if(listid === 1 && totalPage > 1){
        this.setState({isNextBtnActive: ''});
    }
    else if(totalPage > 1){
        this.setState({isNextBtnActive: ''});
        this.setState({isPrevBtnActive: ''});
    }
  }
  btnIncrementClick() {
    this.setState({upperPageBound: this.state.upperPageBound + this.state.pageBound});
    this.setState({lowerPageBound: this.state.lowerPageBound + this.state.pageBound});
    let listid = this.state.upperPageBound + 1;
    this.setState({ currentPage: listid});
    this.setPrevAndNextBtnClass(listid);
  }
  btnDecrementClick() {
    this.setState({upperPageBound: this.state.upperPageBound - this.state.pageBound});
    this.setState({lowerPageBound: this.state.lowerPageBound - this.state.pageBound});
    let listid = this.state.upperPageBound - this.state.pageBound;
    this.setState({ currentPage: listid});
    this.setPrevAndNextBtnClass(listid);
  }
  btnPrevClick() {
    if((this.state.currentPage -1)%this.state.pageBound === 0 ){
        this.setState({upperPageBound: this.state.upperPageBound - this.state.pageBound});
        this.setState({lowerPageBound: this.state.lowerPageBound - this.state.pageBound});
    }
    let listid = this.state.currentPage - 1;
    this.setState({ currentPage : listid});
    this.setPrevAndNextBtnClass(listid);
  }
  btnNextClick() {
    if((this.state.currentPage +1) > this.state.upperPageBound ){
        this.setState({upperPageBound: this.state.upperPageBound + this.state.pageBound});
        this.setState({lowerPageBound: this.state.lowerPageBound + this.state.pageBound});
    }
    let listid = this.state.currentPage + 1;
    this.setState({ currentPage : listid});
    this.setPrevAndNextBtnClass(listid);
  }

  render() {
    const { currentPage, itemsPerPage,upperPageBound,lowerPageBound,isPrevBtnActive,isNextBtnActive } = this.state;

    // Logic for displaying current items
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = this.props.projectsData.slice(indexOfFirstItem, indexOfLastItem);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(this.props.projectsData.length / itemsPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      if(number === 1 && currentPage === 1){
        return(
          <li key={number} id={number} className='active'>
            <span id={number} onClick={this.handleClick}>{number}</span>
          </li>
        )
      }
      else if((number < upperPageBound + 1) && number > lowerPageBound){
        return(
          <li key={number} id={number}>
            <span id={number} onClick={this.handleClick}>{number}</span>
          </li>
        )
      }
    });

    let pageIncrementBtn = null;
    if(pageNumbers.length > upperPageBound){
      pageIncrementBtn = <li className=''><span onClick={this.btnIncrementClick}> &hellip; </span></li>
    }
    let pageDecrementBtn = null;
    if(lowerPageBound >= 1){
      pageDecrementBtn = <li className=''><span onClick={this.btnDecrementClick}> &hellip; </span></li>
    }
    let renderPrevBtn = null;
    if(isPrevBtnActive === 'disabled') {
      renderPrevBtn = <li className={isPrevBtnActive}><span id="btnPrev"> <Icofont icon="icofont-simple-left" /> Prev </span></li>
    }
    else{
      renderPrevBtn = <li className={isPrevBtnActive}><span id="btnPrev" onClick={this.btnPrevClick}> <Icofont icon="icofont-simple-left" /> Prev </span></li>
    }
    let renderNextBtn = null;
    if(isNextBtnActive === 'disabled') {
      renderNextBtn = <li className={isNextBtnActive}><span id="btnNext"> Next <Icofont icon="icofont-simple-right" /></span></li>
    }
    else{
      renderNextBtn = <li className={isNextBtnActive}><span id="btnNext" onClick={this.btnNextClick}> Next <Icofont icon="icofont-simple-right" /></span></li>
    }


    return (
        <React.Fragment>

        {/*NavBar: src/components/NavBer.jsx */}
        <NavBar />

        <div className="bread-cumbs-area bread-cumbs-bg">
            <div className="diplay-table">
                <div className="display-table-cell">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7">
                              <h1>{this.props.Title}</h1>
                              <p>{this.props.Content}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <section id="blog" className="our-blog main-blog">
            <div className="container">
                <div className="row">
                    {
                      <MDBContainer>
                      <div className="mdb-lightbox no-margin">
                          <MDBRow>
                            {currentItems.map((smallImage) => {
                              return (
                                <div className="col-md-6 col-lg-4">
                                    <div className="work-details detail-bg">
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
                  </MDBContainer>
                    }
                    <div className="col-lg-12 pagination-area text-center">
                      <ul className="pagination">
                        {renderPrevBtn}
                        {pageDecrementBtn}
                        {renderPageNumbers}
                        {pageIncrementBtn}
                        {renderNextBtn}
                      </ul>
                    </div>
                </div>
            </div>
        </section>

        {/*Footer: src/components/Footer.jsx */}
        <Footer />

        </React.Fragment>
    );
  }
}
//Props Types
Projects.propTypes = {
    Title: PropTypes.string,
    Content: PropTypes.string,
    projectsData: PropTypes.array
};

//Default Props
Projects.defaultProps = {
    Title: "Our Portfolios",
    Content: "See our work. Each project is taken care by expert website analyst to ensure quality.",
    projectsData: [
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
    ]
};

export default Projects;
