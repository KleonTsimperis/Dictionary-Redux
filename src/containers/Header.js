import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { addDictionary } from '../actions/actions';
import { connect } from 'react-redux';
import { styles } from './styles/header';

const NavBar = props => {
  const {classes} = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default" className="appBar">
        <Toolbar className={classes.container}>
          <Typography variant="title" color="inherit" className={classes.title}>
            Dictionary Management App
          </Typography>
          <Button variant="contained" color="primary" className={classes.button} onClick={props.addDictionary}>
            Add Dictionary
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
  addDictionary: PropTypes.func
}

export default connect(null,{addDictionary})(withStyles(styles)(NavBar));
