import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import Slider from 'react-slick';

class HandBook extends Component {

    render() {

        return (
            <div className='section-share section-handbook'>
                <div className='section-container'>
                    <div className='section-header'>
                        <span className='title-section'>Cẩm nang</span>
                        <button className='btn-section'>Xem thêm</button>
                    </div>
                    <div className='section-body'>
                        <Slider {...this.props.settings}>                          
                            <div className='section-customize'>
                                <div className='bg-image section-handbook'/>
                                <div>Cẩm nang sức khỏe</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-handbook'/>
                                <div> Cẩm nang tâm lý</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-handbook'/>
                                <div>Tư vấn tâm lý</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-handbook'/>
                                <div>Thực phẩm tốt cho sức khỏe</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-handbook'/>
                                <div>Phòng tránh bệnh</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-handbook'/>
                                <div>Phòng tránh nguy cơ đột quỵ</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(HandBook);
