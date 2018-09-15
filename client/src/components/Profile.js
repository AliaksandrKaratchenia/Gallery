import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    userName: state.userName
}



export class Profile extends React.Component {

    render() {
        return ( 
            <div > Hello Profile</div>
        );
    }
}

export default connect(
    mapStateToProps,
   null
)(Profile)