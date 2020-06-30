import React from 'react';
import Hero from '../../components/Hero';
import Content from '../../components/Content';
// import { Link } from 'react-router-dom';




function ChapterFourPractice(props) {

return (

<div>
<Content>
   <Hero title = {props.title} />


                <h1 class = "chapterNumber">Chapter Four Practice</h1>

                <p class="post">
                    - Practice <b>The Core Four</b> drum beats for 5 practice sessions.
                </p>
                <p class="post">- Pick three different tempos to focus on. A slow, medium and fast.

                </p>

                <p class="post"> - Repeat each exercise for a minimum of 16 times before moving onto the next.</p>

                <p class="post"> - Count out loud to gain a deeper understanding of reading music and playing these beats: ‘1-an-2-an-3-an-4-an’</p>

<h2 class = "chapterNumber">On the Hi-Hat</h2>



                <h2 class = "chapterNumber">On the Ride</h2>

                <p class="post">  - Don’t forget to practice The Core Four on the ride cymbal as well!</p>

                <p class="post"> - Use the tip of the drumstick. Not the shoulder.</p>

                <p class="post">  - Practice in the same way as the hi-hat exercises.</p>








</Content>
</div>
)

}

export default ChapterFourPractice;



