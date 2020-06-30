import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';
import HomePage from './pages/HomePage';
import BookPage from './pages/BookPage';
import BlogPage from './pages/BlogPage';


import ChapterOne from './BookIndex/Chapters/ChapterOne';
import ChapterTwo from './BookIndex/Chapters/ChapterTwo';
import ChapterThree from './BookIndex/Chapters/ChapterThree';
import ChapterFour from './BookIndex/Chapters/ChapterFour';

import ChapterOnePractice from './BookIndex/Practice/ChapterOnePractice';
import ChapterTwoPractice from './BookIndex/Practice/ChapterTwoPractice';
import ChapterThreePractice from './BookIndex/Practice/ChapterThreePractice';
import ChapterFourPractice from './BookIndex/Practice/ChapterFourPractice'

class App extends React.Component {
constructor(props) {
super(props);
this.state = {
title: 'The Practicing Drummer',
headerLinks: [
{ title: 'Home', path: '/' },
{ title: 'Book', path: '/book' },
{ title: 'Blog', path: '/blog' },
],

home: {
title: 'The Practicing Drummer',
},

book: {
title: 'The Practicing Drummer',
subTitle: 'Table of Contents',
},

blog: {
title: 'Blog'
},


}
}

render() {

return(
<Router>


<Container className = "p-0" fluid = {true} >




<h1 className="navTitle"><Link className = "blogLink" to = "/BlogPage" >Blog
     &bull;<Link className = "mainLink" to="/">The Practicing Drummer
    &bull;<Link className = "bookLink" to="/BookPage">Book</Link></Link></Link></h1>








<Route path = "/" exact render = {() => <HomePage title = {this.state.home.title}
subTitle = {this.state.home.subTitle} />} text = {this.state.home.text} />

<Route path = "/BookPage" render = {() => <BookPage title = {this.state.book.title}
subTitle = {this.state.book.subTitle} />} />

<Route path = "/BlogPage" render = {() => <BlogPage title = {this.state.blog.title} />} />

</Container>



<Route path="/ChapterOne" component={ChapterOne} />

<Route path="/ChapterTwo" component={ChapterTwo} />

<Route path="/ChapterThree" component={ChapterThree} />

<Route path="/ChapterFour" component={ChapterFour} />

<Route path="/ChapterOnePractice" component={ChapterOnePractice} />

<Route path="/ChapterTwoPractice" component={ChapterTwoPractice} />

<Route path="/ChapterThreePractice" component={ChapterThreePractice} />

<Route path="/ChapterFourPractice" component={ChapterFourPractice} />


</Router>


);
}
}
export default App;
