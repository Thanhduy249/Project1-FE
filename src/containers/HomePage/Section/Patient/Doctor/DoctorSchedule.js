import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import './DoctorSchedule.scss';
import moment, { locale } from 'moment';
import localization from 'moment/locale/vi';
import { getScheduleDoctorByDate } from '../../../../../services/userService';
import { LANGUAGES } from '../../../../../utils';
import BookingModal from './Modal/BookingModal';


class DoctorSchedule extends Component {

    constructor(props) {
        super(props);
        this.state = {
            allDays: [],
            allAvailableTime: [],
            isOpenModalBooking: false,
            dataScheduleTimeModal: {}
        }
    }

    async componentDidMount() {
        let { language } = this.props;
        let allDays = this.getArrDays(language);
        this.setState({
            allDays: allDays,
        })

    }

    getArrDays = (language) => {
        let allDays = []
        for (let i = 0; i < 7; i++) {
            let object = {};
            if (language === LANGUAGES.VI) {
                object.label = moment(new Date()).add(i, 'days').format('dddd - DD/MM');
            } else {
                object.label = moment(new Date()).add(i, 'days').locale('en').format('ddd - DD/MM');
            }
            object.value = moment(new Date()).add(i, 'days').startOf('day').valueOf();
            allDays.push(object);
        }

        return allDays;
    }

    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.language !== prevProps.language) {
            let allDays = this.getArrDays(this.props.language);
            this.setState({
                allDays: allDays
            })
        }
        if (this.props.doctorIdFromParent !== prevProps.doctorIdFromParent) {
            let allDays = this.getArrDays(this.props.language);
            let res = await getScheduleDoctorByDate(this.props.doctorIdFromParent, allDays[0].value);
            this.setState({
                allAvailableTime: res.data ? res.data : []
            })
        }
    }

    handleOnChangeSelect = async (event) => {
        if (this.props.doctorIdFromParent && this.props.doctorIdFromParent !== -1) {
            let doctorId = this.props.doctorIdFromParent;
            let date = event.target.value
            let res = await getScheduleDoctorByDate(doctorId, date);

            if (res && res.errCode === 0) {
                this.setState({
                    allAvailableTime: res.data ? res.data : []
                })
            }
        }

    }

    handleClickScheduleTime = (time) => {
        this.setState({
            dataScheduleTimeModal: time,
            isOpenModalBooking: true
        })
    }

    closeBookingModal = () => {
        this.setState({
            isOpenModalBooking: false
        })
    }

    render() {
        let { allDays, allAvailableTime, isOpenModalBooking, dataScheduleTimeModal } = this.state;
        let { language } = this.props;

        return (
            <>
                <div className='doctor-schedule-container'>
                    <div className='all-schedule'>
                        <select onChange={(event) => this.handleOnChangeSelect(event)}>
                            {allDays && allDays.length > 0 &&
                                allDays.map((item, index) => {
                                    return (
                                        <option
                                            value={item.value}
                                            key={index}
                                        >
                                            {item.label}
                                        </option>
                                    )
                                })}
                        </select>
                    </div>
                    <div className='all-available-time'>
                        <div className='text-calendar'>
                            <i className='fas fa-calendar-alt'><span>Lịch Khám Bệnh</span></i>
                        </div>
                        <div className='time-content'>
                            {allAvailableTime && allAvailableTime.length > 0 ?
                                allAvailableTime.map((item, index) => {
                                    let timeDisplay = language === LANGUAGES.VI ?
                                        item.timeTypeData.valueVi : item.timeTypeData.valueEn;
                                    return (
                                        <button
                                            key={index}
                                            className={language === LANGUAGES.VI ? 'btn-vie' : 'btn-en'}
                                            onClick={() => this.handleClickScheduleTime(item)}
                                        >
                                            {timeDisplay}
                                        </button>
                                    )
                                })

                                :
                                <div className='no-schedule'>Bác sĩ không có lịch trong thời gian này! Vui lòng chọn thời gian khác!</div>
                            }
                        </div>
                    </div>
                </div>

                <BookingModal
                    isOpenModal={isOpenModalBooking}
                    closeBookingModal={this.closeBookingModal}
                    dataTime={dataScheduleTimeModal}
                />
            </>
        );

    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language,

    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DoctorSchedule);