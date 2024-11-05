import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import Slider from 'react-slick';


class HomeFooter extends Component {

    render() {

        return (
            <div className='home-footer'>
                <p> &copy; 2024 Duy Thanh. More information.
                    <a target='blank' href='https://www.facebook.com/'> &#8594; Click Here &#8592;</a></p>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
