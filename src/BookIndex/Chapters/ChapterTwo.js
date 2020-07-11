import React from 'react';
import Hero from '../../components/Hero';
import Content from '../../components/Content';
//import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import Hat from '../../images/ChapterTwoImages/Hi-Hat.png';
import NumberOne from '../../images/ChapterTwoImages/number_1.png';
import  NumberTwo  from '../../images/ChapterTwoImages/number_2.png';
import  NumberThree  from '../../images/ChapterTwoImages/number_3.png';


function ChapterTwo(props) {

return (

<div>
<Content>
   <Hero title = {props.title} />


     <h1 class = "chapterNumber">Chapter Two</h1>

     <h2 class = "chapterNumber">The Hi-Hat</h2>


     <p class="post">For beginner drum beats the hi-hat will remain in the <b>closed position</b>.</p>

     <p class="post">The left foot will push down on the pedal and keep the two cymbals clasped together.</p>

     <p class="post">For most players, the hi-hat will be played with the right hand.</p>

     <p class="post">The left hand plays the snare drum and the arms will form a <b>cross position</b>.</p>

     <p class="post">The hi-hat is notated on the top of the staff with an <b>‘X’</b>.</p>

<img src={Hat} class = "hiHat"  />

     <p class="post">In the following exercise the hi-hat and snare drum will be hit simultaneously. Play for 1 minute
         without stopping. Be sure to count out loud, “1-2-3-4”, as you play.</p>

<Image src={NumberOne} class = "hiHatAndSnare"  fluid />

     <p class="post">Next, the hi-hat and bass drum will be played together. Repeat for 1 minute and count, “1-2-3-4”,
         out loud.</p>

<Image src={NumberTwo} class = "hiHatAndBass"  fluid />

     <p class="post">Finally, play 1 measure of bass drums followed by 1 measure of snare drums. This creates a 2
         measure long <b>“phrase”</b>. Repeat for 1 minute and count, “1-2-3-4”, out loud.</p>


<Image src={NumberThree} class = "phrase"  fluid />




</Content>
</div>
)

}

export default ChapterTwo;










