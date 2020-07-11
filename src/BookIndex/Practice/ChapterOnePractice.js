import React from 'react';
import Hero from '../../components/Hero';
import Content from '../../components/Content';
import Image from 'react-bootstrap/Image';
import One from '../../images/ChapterOneImages/exercise_one.png';
import Two from '../../images/ChapterOneImages/exercise_two.png';
import Three from '../../images/ChapterOneImages/exercise_three.png';
import Four from '../../images/ChapterOneImages/exercise_four.png';
import Five from '../../images/ChapterOneImages/exercise_five.png';






function ChapterOnePractice(props) {

return (

<div>
<Content>
   <Hero title = {props.title} />


<h1 class = "chapterNumber">Chapter One Practice</h1>

<p class="post">Practice the following five exercises. Be sure to count out loud for the first few times through
    each. Notice the back and forth between the bass drum and snare drum. This is referred to as
    “call and response”. The bass drum plays, or “calls”, and the snare drum “responds”.</p>

<Image src={One} class = "One" fluid/>

<Image src={Two} class = "Two" fluid/>

<Image src={Three} class = "Three" fluid/>

<Image src={Four} class = "Four" fluid/>

<Image src={Five} class = "Five"  fluid/>







</Content>
</div>
)

}

export default ChapterOnePractice;



