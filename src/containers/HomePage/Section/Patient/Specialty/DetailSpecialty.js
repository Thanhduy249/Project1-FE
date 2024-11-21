import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import './DetailSpecialty.scss';
import HomeHeader from '../../../HomeHeader';

class DetailSpecialty extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    async componentDidMount() {
    }

    async componentDidUpdate(prevProps, prevState, snapshot) {
    }

    render() {
        return (
            <>
                <HomeHeader />
                <div>Thanh Duy SPECIALTY</div>
            </>
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
