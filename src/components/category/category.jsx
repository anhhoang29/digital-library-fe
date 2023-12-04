import { Theme } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/styles';
import { NextPage } from 'next';
import React from 'react';
import { firebaseConfig } from '../../firebase/config';
import useFirebaseAuth from '../../pages/hooks/useFirebaseAuth';
import CateItem from './cateItem';
import ICate from './ICate';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    body: {
      marginTop: '1.5rem',
      display: 'flex',
      justifyContent: 'space-around',
      flexWrap: 'wrap',
      alignContent: 'flex-start',
    },
    cateWrapper: {
      width: '90%',
      minHeight: '100vh',
      margin: '40px auto',
    },
  }),
);

const cateList = [
  {
    cateImg: 'http://tiny.cc/k0s0hz',
    cateName: 'Tiểu thuyết',
    bookCounts: 12,
  },
  // ... (your other categories)
];

const Category = ({ pathname }) => {
  const [user, handleLogin, handleLogout] = useFirebaseAuth(firebaseConfig);
  const classes = useStyles();

  const renderCateList = cateList.map((cate, i) => {
    return (
      <CateItem
        key={i}
        cateImg={cate.cateImg}
        cateName={cate.cateName}
        bookCounts={cate.bookCounts}
      ></CateItem>
    );
  });

  return (
    <div className={classes.cateWrapper}>
      <h1>Thể loại sách:</h1>
      <div className={classes.body}>{renderCateList}</div>
    </div>
  );
};

Category.getInitialProps = async (ctx) => {
  const pathname = ctx.pathname ? ctx.pathname : '/';
  return { pathname };
};

export default Category;
