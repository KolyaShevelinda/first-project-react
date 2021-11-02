import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  span: {
    textIndent: '10px'
  },
  button: {
    margin: theme.spacing.unit,
  },
}));

const LoadingButton = (props) => {
  const classes = useStyles();
  const { loading, ...other } = props;

  if (loading) {
    return (
      <Button className={classes.button} {...other}>
        <CircularProgress size={18} style={{ 'color': 'white',
                                             'marginRight': '10px'}} />
        <span>{props.children}</span>
      </Button>
    );
  } else {
    return (
      <Button className={classes.button} {...other} />
    );
  }
}

LoadingButton.defaultProps = {
  loading: false,
};

LoadingButton.propTypes = {
  loading: PropTypes.bool,
};

export default LoadingButton;
