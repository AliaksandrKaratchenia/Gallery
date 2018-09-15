import React from 'react';
import { connect } from 'react-redux';

class NewsContainer extends React.Component {
	render() {
		return (
			<div>
				News for {this.props.authReducer.user.userName}
			</div>
		);
	}
}

const News = connect((state) => state)(NewsContainer);

export default News;
