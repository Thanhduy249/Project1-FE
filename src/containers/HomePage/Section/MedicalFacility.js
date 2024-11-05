import React, { Component } from 'react';
import { connect } from 'react-redux';
import './MedicalFacility.scss';
import { FormattedMessage } from 'react-intl';
import Slider from 'react-slick';

class MedicalFacility extends Component {

    render() {

        return (
            <div className='section-share section-medical-facility'>
                <div className='section-container'>
                    <div className='section-header'>
                        <span className='title-section'>Cơ sở y tế nổi bật</span>
                        <button className='btn-section'>Xem thêm</button>
                    </div>
                    <div className='section-body'>
                        <Slider {...this.props.settings}>                          
                            <div className='section-customize'>
                                <div className='bg-image section-medical-facility-1'/>
                                <div>Hệ thống y tế Thu Cúc</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-medical-facility-2'/>
                                <div>Bệnh viện đa khoa Phương Đông</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-medical-facility-3'/>
                                <div>Bệnh viện Việt Đức</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-medical-facility-4'/>
                                <div>Hệ thống ý tế Diag</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-medical-facility-5'/>
                                <div>Hệ thống y tế EXSON</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-medical-facility-6'/>
                                <div>Bệnh viện đa khoa An Việt</div>
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
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MedicalFacility);
