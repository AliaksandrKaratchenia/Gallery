import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = (theme) => ({
	button: {
		marginLeft:-10
	},
	input: {
		display: 'none'
	}
});

const LinkBtn = ({ to, label, ...props }) => {
	const { classes } = props;
	return (
		<Button component={Link} to={to} className={classes.button}>
			{label}
		</Button>
	);
};

LinkBtn.propTypes = {
	to: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired
};

export default withStyles(styles)(LinkBtn);
