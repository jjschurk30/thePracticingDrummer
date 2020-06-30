import React from 'react';
import ReactDOM from 'react-dom';
import '../App.css';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';
import Content from '../components/Content';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




function BlogPage(props) {
return (
   <div>
   <Content>
<Hero title = {props.title} />

<div  className = "intro">



    <h2>Meditate</h2>

    <p class="post">Drums are a lifelong pursuit that I don’t believe can be mastered, but for some reason that
        doesn’t discourage me
        from practicing. I find practicing to be just another form of meditation and I’m trying to approach my sessions
        this way. This week I’ve been experimenting with a few different concepts.</p>


    <h2>1. Center</h2>

    <p class="post">Where is my center of gravity? While sitting, I focus on my contact with the throne. I feel the
        weight of my body
        pressing down on the seat and don’t have to put any on my feet. I can lift both legs and not topple over. My
        back
        is straight and I’m not leaning forward or backward to gain my balance.</p>

    <h2>2. Breathe</h2>

    <p class="post">My breathing is steady and natural. I avoid holding my breath and focus on breathing into my
        belly.
        I’m actually focusing on my <Link to = "https://en.wikipedia.org/wiki/Dantian">dantian</Link>.
        I find mental imagery to be very useful in achieving a meditative-like state.</p>

    <h2>3. Listen</h2>

    <p class="post">I focus on the sound of the instrument. Starting with the cymbals, I play long notes leaving a
        lot of space
        between hits. The first few times I’ll listen to the cymbal fully decay into silence. I increase the tempo
        and rhythmic density as I progress. From cymbals, I’ll move to the toms listening intently.
        How resonant are the drums? How long do they ring? Next, I’ll add the bass and finally the snare. At this point
        every drum and cymbal is included but listening to the individual sounds is the most important concept. I try my
        best to not get caught up in technique or over-thinking. My mind silences when I’m listening.</p>


</div>













</Content>

 </div>


);
}

export default BlogPage;