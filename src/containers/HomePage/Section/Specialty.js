import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Specialty.scss';
import { FormattedMessage } from 'react-intl';
import Slider from 'react-slick';

class Specialty extends Component {

    render() {

        return (
            <div className='section-share section-specialty'>
                <div className='section-container'>
                    <div className='section-header'>
                        <span className='title-section'>Chuyên khoa phổ biến</span>
                        <button className='btn-section'>Xem thêm</button>
                    </div>
                    <div className='section-body'>
                        <Slider {...this.props.settings}>                          
                            <div className='section-customize'>
                                <div className='bg-image section-specialty-1'/>
                                <div >Cơ xương khớp</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-specialty-2'/>
                                <div>Nha khoa</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-specialty-3'/>
                                <div>Tai mũi họng</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-specialty-4'/>
                                <div>Tim mạch</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-specialty-5'/>
                                <div>Y học cổ truyền</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-specialty-6'/>
                                <div>Châm cứu</div>
                            </div>
                        </Slider>
                    </div>
                    
                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);
