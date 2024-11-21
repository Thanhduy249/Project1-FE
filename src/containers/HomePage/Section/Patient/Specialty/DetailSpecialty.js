import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import './DetailSpecialty.scss';
import HomeHeader from '../../../HomeHeader';
import DoctorSchedule from '../Doctor/DoctorSchedule';
import DoctorExtraInfor from '../Doctor/DoctorExtraInfor';
import ProfileDoctor from '../Doctor/ProfileDoctor';
import moment from 'moment';
import { LANGUAGES } from '../../../../../utils';
import _, { times } from 'lodash';



class DetailSpecialty extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arrDoctorId: [11, 73, 74]
        }
    }

    async componentDidMount() {
    }

    async componentDidUpdate(prevProps, prevState, snapshot) {
    }

    // renderTimeBooking = (dataTime) => {
    //     let { language } = this.props;
    //     let time = language === LANGUAGES.VI ? dataTime.timeTypeData.valueVi : dataTime.timeTypeData.valueEn;

    //     if (dataTime && !_.isEmpty(dataTime)) {

    //         let date = language === LANGUAGES.VI ?
    //             moment.unix(+dataTime.date / 1000).format('dddd - DD/MM/YYYY')
    //             :
    //             moment.unix(+dataTime.date / 1000).format('ddd - MM/DD/YYYY')
    //         return (
    //             <>
    //                 <div>{time} - {date}</div>
    //                 {/* <div>Miễn phí đặt</div> */}
    //             </>
    //         )
    //     }
    //     return <></>
    // }

    render() {
        let { arrDoctorId } = this.state;
        return (
            <div className='detail-specialty-container'>
                <HomeHeader />
                <div className='detail-specialty-body'>
                    <div className='description-specialty'>

                    </div>
                    {arrDoctorId && arrDoctorId.length > 0 &&
                        arrDoctorId.map((item, index) => {
                            return (
                                <div className='each-doctor'>
                                    <div className='dt-content-left'>
                                        <div className='profile-doctor'>
                                            <ProfileDoctor
                                                doctorId={item}
                                                isShowDescriptionDoctor={true}
                                            />
                                        </div>
                                    </div>
                                    <div className='dt-content-right'>
                                        <div className='doctor-schedule'>
                                            <DoctorSchedule
                                                doctorIdFromParent={item}
                                            />
                                        </div>
                                        <div className='doctor-extra-infor'>
                                            <DoctorExtraInfor
                                                doctorIdFromParent={item}
                                            />
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                </div>

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {

    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailSpecialty);
