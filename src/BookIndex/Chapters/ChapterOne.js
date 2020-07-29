import React from 'react';
import Hero from '../../components/Hero';
import Content from '../../components/Content';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Staff from '../../images/ChapterOneImages/staff.png';
import Clef from '../../images/ChapterOneImages/percussion_clef.png';
import Bass from '../../images/ChapterOneImages/bass_snare.png';
import Barline from '../../images/ChapterOneImages/barline.png';
import Measure from '../../images/ChapterOneImages/measure.png';
import Time from '../../images/ChapterOneImages/time_signature.png';
import Quarter from '../../images/ChapterOneImages/quarter_note.png';
import Four from '../../images/ChapterOneImages/four_four.png';
import QuarterRest from '../../images/ChapterOneImages/quarter_rest.png';
import FourRest from '../../images/ChapterOneImages/four_four_rests.png';
import Repeat from '../../images/ChapterOneImages/repeat.png';
import FourMeasure from '../../images/ChapterOneImages/four_measures.png';







function ChapterOne(props) {

return (

<div>
<Content>
   <Hero title = {props.title} />


  <h1 class = "chapterNumber">Chapter One</h1>

    <h2 class = "chapterNumber">Basics</h2>

    <p class="post">This is a <b>Staff</b>. It has 5 lines and 4 spaces.</p>

<Image src={Staff} class = "staff" alt = {Staff} fluid />

    <p class="post">This is a <b>Percussion Clef</b>. It is placed at the beginning of a piece of music to let the
        reader know a non-pitched percussion instrument, such as a drum set, is being used.</p>

<img src={Clef} class = "clef" alt = {Clef} />

    <p class="post">Each space of the staff represents a different drum. The first space from the bottom is the
        <b> Bass Drum</b>. The third space from the bottom is the <b>Snare Drum</b>.</p>

<img src={Bass} class = "bass" alt = {Bass} fluid />

    <p class="post">This is a <b>Barline</b>. It is used to divide the music and make it easier to read.</p>

<img src={Barline} class = "barline" alt = {Barline}  />

        <p class="post">The space between the barline is called a <b>Measure</b>.</p>

<Image src={Measure} class = "measure" alt = {Measure} fluid />

        <p class="post">This is a <b>Time Signature</b>. It is placed at the beginning of a piece of music to let
            the reader know how beats are in each measure. This time signature is <b>4/4</b>.
            It is pronounced <b>Four Four</b>.</p>

<img src={Time} class = "time" alt = {Time} />

        <p class="post">This is a <b>Quarter Note</b>. It means play the drum.</p>

<img src={Quarter} class = "quarter" alt = {Quarter} />

    <p class="post">In 4/4 there are four quarter notes per measure. The following example plays four bass drums in
        the first measure and four snare drums in the second measure.</p>

<Image src={Four} class = "four" alt = {Four} fluid />

        <p class="post">This is a <b>Quarter Rest</b>. It means don’t play.</p>

<img src={QuarterRest} class = "quarterRest" alt = {QuarterRest} />

    <p class="post">The following example plays a bass drum on beat 1 and a snare drum on beat 3. Beats 2 & 4 are
        quarter rests so nothing is played and they are silent.</p>

<Image src={FourRest} class = "fourRest" alt = {FourRest} fluid />

        <p class="post">This is a <b>Repeat Sign</b>. It means go back to the beginning and play again without
            stopping.</p>

<img src={Repeat} class = "repeat" alt = {Repeat} />

    <p class="post">The following example puts it all together. It’s four measures long and repeats itself.</p>

<Image src={FourMeasure} class = "fourMeasure" alt = {FourMeasure} fluid/>



    <Button variant="contained" className = "previous" color="primary" href = "/BookPage">
      Table of Contents
    </Button>


    <Button className = "next"  variant="contained" color="primary" href = "/ChapterOnePractice">
      Chapter One Practice
    </Button>
</Content>

</div>
)

}

export default ChapterOne;



