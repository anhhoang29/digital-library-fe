import React from 'react';
import { Grid, Theme, Typography } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import { createStyles, makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) =>
  createStyles({
    rating: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(4),
    },
  }),
);

const BookDetails = ({ book }) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      {book && (
        <Grid container direction="column">
          <Grid item>
            <Typography variant="h4" gutterBottom>
              {book.name}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h5" gutterBottom>
              {book.author ?? 'Unknown'}
            </Typography>
          </Grid>
          <Grid item>
            <Rating className={classes.rating} readOnly value={book.rating} />
          </Grid>
          <Grid item>
            <Typography variant="body1" align="justify">
              {book.overview}
            </Typography>
          </Grid>
        </Grid>
      )}
    </React.Fragment>
  );
};

export default BookDetails;
