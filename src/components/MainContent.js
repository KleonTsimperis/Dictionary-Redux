import React from 'react';
import Grid from '@material-ui/core/Grid';
import Table from './Table';
import ModalHandler from '../assets/ModalHandler';
import DictionariesList from './DictionariesList';
import DictionariesDisplay from './DictionariesDisplay';

const MainContent = () =>
    <Grid container justify="center" alignItems="flex-start">
      <Grid item xs={12} md={3} >
        <Table />
        <ModalHandler />
      </Grid>
      <Grid item xs={12} md={5}>
        <DictionariesDisplay />
      </Grid>
      <Grid item xs={12} md={4}>
        <DictionariesList />
      </Grid>
    </Grid>;

export default MainContent;
