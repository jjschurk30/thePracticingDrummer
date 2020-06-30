import React from 'react';
import Hero from '../../components/Hero';
import Content from '../../components/Content';
// import { Link } from 'react-router-dom';




function ChapterTwoPractice(props) {

return (

<div>
<Content>
   <Hero title = {props.title} />


    <h1 class = "chapterNumber">Chapter Two Practice</h1>


    <p class="post">The following exercises focus on hi-hat coordination. The snare and bass drum will play
        simultaneously with the hi-hat. They must be played exactly at the same time. No flams! A <b>flam</b> is when
        one drum is hit slightly before another. They are really close together but do not hit at the same time.</p>


    <p class="post">-Repeat each exercise at least 16 times without stopping.</p>
    <p class="post">-Keep arms in crossed position(right hand on hi-hat, left hand on snare)</p>
    <p class="post"> -Avoid flams!</p>



    <p class="post">In the next exercises the hi-hat will continously play while the snare and bass only play on
        certain beats. Count out loud, “1-2-3-4”, with every hi-hat. Play the snare or bass with the correct hi-hat
        count.</p>




</Content>
</div>
)

}

export default ChapterTwoPractice;



