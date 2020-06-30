import React from 'react';
import Content from '../components/Content';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function BookPage(props)  {


        return (
<div>
<Content>


          <Hero title = {props.title} />

          <Hero subTitle = {props.subTitle}  />



  <h3>Chapters</h3>

      <ul>


          <li><Link to="/ChapterOne">Chapter One</Link></li>
          <li><Link to="/ChapterTwo">Chapter Two</Link></li>
          <li><Link to="/ChapterThree">Chapter Three</Link></li>
          <li><Link to="/ChapterFour">Chapter Four</Link></li>
      </ul>

          <h3>Practice</h3>
          <ul>
              <li><Link to="/ChapterOnePractice">Chapter One Practice</Link></li>
              <li><Link to="/ChapterTwoPractice">Chapter Two Practice</Link></li>
              <li><Link to="/ChapterThreePractice">Chapter Three Practice</Link></li>
              <li><Link to="/ChapterFourPractice">Chapter Ten Practice</Link></li>
              </ul>
  </Content>
</div>






                   )}




export default BookPage;
