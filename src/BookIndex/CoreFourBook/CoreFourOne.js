import React from 'react';
import Hero from '../../components/Hero';
import Content from '../../components/Content';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import CoreA from '../../images/CoreFourOneImages/The_Core_Four_A.png';
import CoreB from '../../images/CoreFourOneImages/The_Core_Four_B.png';
import CoreC from '../../images/CoreFourOneImages/The_Core_Four_C.png';
import CoreD from '../../images/CoreFourOneImages/The_Core_Four_D.png';
import Sixteenth from '../../images/CoreFourOneImages/16th.png';
import SixteenthA from '../../images/CoreFourOneImages/16th_A.png';
import SixteenthB from '../../images/CoreFourOneImages/16th_B.png';
import SixteenthC from '../../images/CoreFourOneImages/16th_C.png';
import SixteenthD from '../../images/CoreFourOneImages/16th_D.png';
import Eighth from '../../images/CoreFourOneImages/8th.png';
import EighthA from '../../images/CoreFourOneImages/8th_A.png';
import EighthB from '../../images/CoreFourOneImages/8th_B.png';
import EighthC from '../../images/CoreFourOneImages/8th_C.png';
import EighthD from '../../images/CoreFourOneImages/8th_D.png';
import TwoHand from '../../images/CoreFourOneImages/Two_Hand.png';
import TwoHandA from '../../images/CoreFourOneImages/Two_Hand_A.png';
import TwoHandB from '../../images/CoreFourOneImages/Two_Hand_B.png';
import TwoHandC from '../../images/CoreFourOneImages/Two_Hand_C.png';
import TwoHandD from '../../images/CoreFourOneImages/Two_Hand_D.png';
import Quarter from '../../images/CoreFourOneImages/Quarter.png';
import QuarterA from '../../images/CoreFourOneImages/Quarter_A.png';
import QuarterB from '../../images/CoreFourOneImages/Quarter_B.png';
import QuarterC from '../../images/CoreFourOneImages/Quarter_C.png';
import QuarterD from '../../images/CoreFourOneImages/Quarter_D.png';








function ChapterOne(props) {

return (

<div>
<Content>
   <Hero title = {props.title} />


  <h1 class = "chapterNumber">The Core Four: Chapter One</h1>


    <p class="post">There are four basic drum beats that I refer to as <b>The Core Four</b>. These four drum beats can be
     heard in numerous popular songs and many different styles of music. By combining these beats and the following
     concepts together you’ll be able to create a lot of different patterns and play basic songs.</p>



    <p class="post">Starting in the time signature of 2/4, The Core Four are as follows:</p>

    <p class="post">A) 1 Bass Drum, 1 Snare Drum</p>

    <p class="post">B) 1 Bass Drum, 2 Snare Drums</p>

    <p class="post">C) 2 Bass Drums, 1 Snare Drum</p>

    <p class="post">D) 2 Bass Drums, 2 Snare Drums</p>


<Image src={CoreA} class = "staff" fluid />

<Image src={CoreB} class = "staff" fluid />

<Image src={CoreC} class = "staff" fluid />

<Image src={CoreD} class = "staff" fluid />

 <h1 class = "chapterNumber">The Hi-Hat</h1>

    <p class="post">The rhythm of the hi-hat is going to determine the general ‘feel’ of the music. The following
        hi-hat rhythms will be played with each of The Core Four.</p>

    <p class="post">-8th Notes</p>
    <p class="post">-16th Notes w/One Hand</p>
    <p class="post">-16th Notes w/Two Hands</p>
    <p class="post">-Quarter Notes</p>

    <p class="post">As you practice, try to hear what type of song that particular beat would fit into. They will work
    many different genres and styles of music. Listen closely to as much music as possible. You’ll most likely start
    to hear some elements of these beats.</p>

 <h1 class = "chapterNumber">8th Notes</h1>

    <p class="post"><b>COUNT OUT LOUD!</b> When first learning these beats, count them out loud. Counting out loud and being
    able to vocalize rhythms is an invaluable skill to have. I highly recommend practicing it.</p>

    <Image src={Eighth} class = "staff" fluid />

    <Image src={EighthA} class = "staff" fluid />

    <Image src={EighthB} class = "staff" fluid />

    <Image src={EighthC} class = "staff" fluid />

    <Image src={EighthD} class = "staff" fluid />

    <h1 class = "chapterNumber">16th Notes</h1>

    <h3 class = "chapterNumber">w/One Hand</h3>

    <p class="post">These beats are commonly refered to as Half-Time. They give the impression that the music is
        moving slower, or at <b>half</b> the speed. The right hand will now play 16th notes on the hi-hat instead of 8th notes.
         Make sure you start at a slow tempo and count out loud.</p>

             <Image src={Sixteenth} class = "staff" fluid />

             <Image src={SixteenthA} class = "staff" fluid />

             <Image src={SixteenthB} class = "staff" fluid />

             <Image src={SixteenthC} class = "staff" fluid />

             <Image src={SixteenthD} class = "staff" fluid />

   <h1 class = "chapterNumber">16th Notes</h1>

    <h3 class = "chapterNumber">w/Two Hands</h3>

        <p class="post">To play faster 16th note beats you can use both hands on the hi-hat. Use a single stroke
                sticking(R L R L). The right hand will come off the hi-hat to hit the snare on count 2. No hi-hat will be
                played with the snare.</p>


             <Image src={TwoHand} class = "staff" fluid />

             <Image src={TwoHandA} class = "staff" fluid />

             <Image src={TwoHandB} class = "staff" fluid />

             <Image src={TwoHandC} class = "staff" fluid />

             <Image src={TwoHandD} class = "staff" fluid />


         <h1 class = "chapterNumber">Quarter Notes</h1>

        <p class="post">Finally, we’ll play quarter notes on hi-hat with each of The Core Four. Some new coordination
                will be required for these beats. The snare and bass will be playing fast rhythms while the hi-hat stays slow.
                Be careful to not let your hi-hat following the faster rhythms!</p>

                <Image src={Quarter} class = "staff" fluid />

                <Image src={QuarterA} class = "staff" fluid />

                <Image src={QuarterB} class = "staff" fluid />

                <Image src={QuarterC} class = "staff" fluid />

                <Image src={QuarterD} class = "staff" fluid />

</Content>

</div>
)

}

export default ChapterOne;



