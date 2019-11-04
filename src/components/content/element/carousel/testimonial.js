import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import OwlCarousel from 'react-owl-carousel2';

const options = {
    items: 1,
    dots: false,
    nav: true,
    navText: ['<span class="i la la-long-arrow-left"></span>', '<span class="i la la-long-arrow-right"></span>'],
    navElement: 'button'
};

class Testimonial extends Component {
    render() {
        const { testimonial } = this.props;
        return (
            <Fragment>
                <OwlCarousel options={options} className="testimonial-carousel owl-carousel" >
                    {
                        Object.values(testimonial).slice(0, 4).map((value, key) => {
                            const { img, title, location } = value;
                            return (                       
                                <div className="carousel-single" key={key}>
                                    <div className="author-thumb">
                                        <img src={img} alt="" height="90" className="rounded-circle" />
                                    </div>
                                    <div className="author-info">
                                        <h4>{title}</h4>
                                        <span>中西區</span>
                                    </div>
                                    <p className="author-comment">非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常非常好！</p>
                                </div>                  
                            )
                        })
                    }
                </OwlCarousel>
            </Fragment>
        )
    }
}
const mapStateToProps =  (state) => {
    return {
        testimonial : state.testimonial
    }
}
export default connect(mapStateToProps)(Testimonial)
