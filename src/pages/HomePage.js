import React from 'react';
import ReactDOM from 'react-dom';
import '../App.css';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';
import Content from '../components/Content';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Mike from '../images/HomeImages/mike.jpg';
import Image from 'react-bootstrap/Image';




function HomePage(props) {
return (
   <div>
   <Content>
<Hero title = {props.title} />

<div  className = "intro">


<img src={Mike} class = "mike" alt = {Mike}  />


    <p>Hello world. My name is Mike and welcome to <b>The Practicing Drummer</b>. This is my site dedicated to the study
        and practice of drumming, rhythm and music. I’ve been playing drums since the late 1990's and have been teaching
        private lessons since the early 2000’s. Throughout my teaching experience I’ve accumulated a lot of material and
        exercises for students to practice. I have decided to share this material with you through this website.</p>

    <p>This site is broken up into two basic sections:   <b class = "bookWord">Book</b> and
             <b class = "blogWord"> Blog</b></p>

         <Link to="/BlogPage"><b class = "bookLinkOne">Book</b></Link>
    <p>This is all of the material I provide to my weekly private students. It is in the same order and broken up into
        chapters. The chapters are not meant to represent weeks although it could be worked through in that way. Some
        students will progress quickly and some will take more time. That’s perfectly OK. You know yourself and your
        abilities best. Be honest with yourself about how well you’re grasping the material and move at a pace that
        challenges you, but is comfortable and feels right. Be sure to review past chapters occasionally.</p>

    <p>Private teachers and other drummers who have journeyed before you can help you along the way so seek them out.
        There are plenty of online resources to check out videos and other educational material as well. If you have a
        question feel free to send me a message and I’ll do my best to provide an answer. If you happen to live in
        St. Louis, I also teach private lessons so contact me if you’re interested. Have fun learning and practicing
        the art of drums!</p>


            <Link to="/BlogPage"><b class = "blogLinkOne">Blog</b></Link>


            <p>This is basically my open journal. For the past couple of years I’ve been on the road semi-regularly. In the
                blog I’ll post about tour life, some exercises I’ve been working on, some more advanced concepts that don’t
                necessarily fit into the book anywhere, or really anything I want.</p>

            <p>If you’re feeling good about your skills with the book then jump over to the blog for some more material. If
                you’re just curious about my happenings you will occasionally find a post there. Comments, questions and
                concerns are welcome so send me a message here.</p>

            <p>I’m currently not that active on social media, but you can find me on Instagram.</p>


</div>












</Content>

 </div>


);
}

export default HomePage;