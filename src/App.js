import React, { Component } from 'react';
import Header from './Header';
import Banner from './Banner';
import Stories from './Stories';
import Footer from './Footer';
import './App.css';

const stories = [
  {
    img: './public/boss.jpg',
    title: 'How to be a Boss',
    desc: 'A guide for women on how to be a boss. Mansplained by Donald Trump.',
    authImg: './public/louisa.png',
    authName: 'Louisa',
    estTime: '2 min'
  },
  {
    img: './public/cat.jpg',
    title: 'Make Better Decisions',
    desc: 'Your cat sees everything and YES he\'s judging you!',
    authImg: './public/alternate.png',
    authName: 'Nathaniel',
    estTime: '10 min'
  },
  {
    img: './public/shoes.jpg',
    title: 'Walk a Mile in My Shoes',
    desc: 'One woman\'s quest to master badass activities while wearing whatever the F#*$ she wants.',
    authImg: './public/leta.png',
    authName: 'Leta',
    estTime: '8 min'
  },
  {
    img: './public/eyes.jpg',
    title: 'How to Land Your Dream Job',
    desc: 'Build your personal brand to stand out and get your dream job.',
    authImg: './public/pamela.png',
    authName: 'Pamela',
    estTime: '11 min'
  }
]

const stories2 = [
  {
    img: './public/heart.jpg',
    title: 'Heart',
    desc: 'A memoir of love, fashion, and friendship.',
    authImg: './public/louisa.png',
    authName: 'Louisa',
    estTime: '2 min'
  },
  {
    img: './public/drown.jpg',
    title: 'Shine On',
    desc: 'Keep your light buring bright.',
    authImg: './public/alternate.png',
    authName: 'Nathaniel',
    estTime: '10 min'
  },
  {
    img: './public/unicorn.jpg',
    title: 'Uniquely Yours',
    desc: 'A lonely Rhino\'s journey of self acceptance.',
    authImg: './public/leta.png',
    authName: 'Leta',
    estTime: '8 min'
  },
  {
    img: './public/watch.jpg',
    title: 'Time Travel',
    desc: 'The cautious persuit of time travel and the world of the future.',
    authImg: './public/pamela.png',
    authName: 'Pamela',
    estTime: '11 min'
  }
]

const App = () => {
  return (
    <div className='App'>
      <Header headerTitle="Be Extra" />
      <Banner/>
      <Stories  storiesTitle="Today's Top Stories"
                stories={stories} />
      <Stories  storiesTitle="Pop Culture"
                stories={stories2} />
      <Footer/>
    </div>
  );
}

export default App;
