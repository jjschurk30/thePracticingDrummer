import React from 'react';
import Hero from '../../components/Hero';
import Content from '../../components/Content';
import Image from 'react-bootstrap/Image';
import Quarter from '../../images/ChapterFourImages/quarter_Notes.png';
import EighthNote from '../../images/ChapterFourImages/eighth_Note.png';
import TwoConnect from '../../images/ChapterFourImages/2_Connect_8th.png';
import FourConnect from '../../images/ChapterFourImages/4_Connect_8th.png';
import EighthCount from '../../images/ChapterFourImages/8th_Count.png';
import QuarterEighth from '../../images/ChapterFourImages/quarter_8th.png';
import CoreOne from '../../images/ChapterFourImages/core_1.png';
import CoreTwo from '../../images/ChapterFourImages/core_2.png';
import CoreThree from '../../images/ChapterFourImages/core_3.png';
import CoreFour from '../../images/ChapterFourImages/core_4.png';





function ChapterFour(props) {

return (

<div>
<Content>
   <Hero title = {props.title} />



        <h1 class = "chapterNumber">Chapter Four</h1>

        <h2 class = "chapterNumber">Basics</h2>


    <p class = "post">
        So far in the book we’ve only dealt with reading <b>Quarter Notes</b>.
        </p>

<Image src={Quarter} class = "quarter"  fluid />


    <p class = "post">

        But we generally “feel” music in <b>8th Notes</b>. A single 8th Note has a black note head and one flag.
    </p>

<img src={EighthNote} class = "eighthNote"  />

    <p class = "post">


        When multiple 8th Notes are played consecutively, the flag can connect the notes together in groups of two or four.

    </p>


<img src={TwoConnect} class = "twoConnect"  />

<img src={FourConnect} class = "fourConnect"  />

    <p class = "post">

        8th Notes can also be connected in groups of 3, 5, 7 or really any number you want. But keep in mind that you should try to notate music in the easiest way to read possible.


    </p>



    <p class="post">8th Notes are played twice as fast as Quarter Notes and the count is: <b>‘1-an-2-an-3-an-4-an’.</b> Play the following example hand-to-hand(RLRL or LRLR) and count out loud.</p>

<Image src={EighthCount} class = "eighthCount"  fluid />

    <p class="post">Here is a two measure phrase of Quarter Notes followed by 8th Notes. Remember that 8th Notes are exactly twice as fast as Quarter Notes. Play hand-to-hand and count out loud.</p>

    <Image src={QuarterEighth} class = "quarterEighth" fluid />

    <p class = "post">

        The count can also be written as ‘1-and-2-and-3-and-4-and’, ‘1-&-2-&-3-&-4-&’ or ‘1 + 2 + 3 + 4 + ‘. In the big picture it doesn’t matter which count you use. The goal is to make what you play sound and feel good.
        <b>NOTE:</b> Drum notation is not universal or “written in stone”. Different drum books or educational materials may use a different notation. Be sure to check out the drum legend or key of any new drum method that you study.

    </p>

    <h2 class = "chapterNumber">Core Four</h2>


    <p class = "post">

        This chapter introduces four drum beats that I call <b>The Core Four</b>. These beats will be used over and
        over again throughout this book. Listen closely to the drums in the music that you listen to and you’ll most likely hear some form of these beats.
    </p>

    <p class = "post">

        You’ll notice that <b>The Core Four</b> are actually the same drum beats you learned in Chapter Three. The difference is they are now notated as 8th Notes instead of Quarter Notes. Count out loud,
    </p>

    <p class = "post">

        But we generally “feel” music in <b>8th Notes</b>. A single 8th Note has a black note head and one flag.
    </p>

    <p class = "post">This chapter will give us the basic building blocks to create <b>drum beats</b>. Drum beats are
        what drummers use the vast majority of the time while playing with a band. I refer to drum beats as ‘home base’.
        We are allowed to leave ‘home base’ and play fills, solos or cadences but we always return home. This is
        where we’ll  hangout the most so get comfortable playing <b>drum beats</b> for long periods of time. This first
        example is sometimes referred to as a <b>2-Beat</b>. It is very simple in concept but in practice it can be tricky.
        Count out loud, <b>‘1-2-1-2’</b>, as you play the beat. Counting <b>out loud</b> will help you
    <b>tremendously</b> in the long run so <b>do it</b>.</p>

        <Image src={CoreOne} class = "Core"  fluid />

            <Image src={CoreTwo} class = "Core" fluid />

                <Image src={CoreThree} class = "Core" fluid />

                    <Image src={CoreFour} class = "Core"  fluid />


    <p class = "post">
        As you grow more comfortable with The Core Four increase the tempo. You’ll hear them played from extremely slow to extremely fast. Make sure you’re ready to handle all of these beats at many different speeds.
    </p>











</Content>
</div>
)

}

export default ChapterFour;



