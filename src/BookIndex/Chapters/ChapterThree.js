import React from 'react';
import Hero from '../../components/Hero';
import Content from '../../components/Content';
import Image from 'react-bootstrap/Image';
import NumOne from '../../images/ChapterThreeImages/ch3num_1.png';
import NumTwo from '../../images/ChapterThreeImages/ch3num_2.png';
import NumberOne from '../../images/ChapterThreeImages/number_1.png';
import NumberTwo from '../../images/ChapterThreeImages/number_2.png';
import NumberThree from '../../images/ChapterThreeImages/number_3.png';




function ChapterThree(props) {

return (

<div>
<Content>
   <Hero title = {props.title} />


        <h1 class = "chapterNumber">Chapter Three</h1>

        <h2 class = "chapterNumber">Building Drum Beats</h2>

    <p class = "post">This chapter will give us the basic building blocks to create <b>drum beats</b>. Drum beats are
        what drummers use the vast majority of the time while playing with a band. I refer to drum beats as ‘home base’.
        We are allowed to leave ‘home base’ and play fills, solos or cadences but we always return home. This is
        where we’ll  hangout the most so get comfortable playing <b>drum beats</b> for long periods of time. This first
        example is sometimes referred to as a <b>2-Beat</b>. It is very simple in concept but in practice it can be tricky.
        Count out loud, <b>‘1-2-1-2’</b>, as you play the beat. Counting <b>out loud</b> will help you
        <b>tremendously</b> in the long run so <b>do it</b>.
        </p>

    <h2 class = "chapterNumber">2-Beat</h2>

<Image src={NumOne} class = "NumOne" fluid />


    <p class = "post">This next example is <b>the most important drum beat</b> of the 20th century… and maybe even the 21st?
        I commonly call it the <b>‘Basic Rock Beat’</b> because it is the foundation of rock ‘n’ roll music. But you will hear
        this beat in many other genres of music. Pop, R ‘n’ B, Funk, Country, Metal, Hip-Hop, etc.
        This is ‘home base’ for a lot of music that you’ll hear and play. Make this your ‘go-to’ drum beat for awhile.
        <b>MEMORIZE IT!</b>
    </p>
        <h2 class = "chapterNumber">Basic Rock Beat</h2>


<Image src={NumTwo} class = "NumTwo"  fluid />



        <h2 class = "chapterNumber">Ride Cymbal</h2>

    <p class = "post">Moving your right hand over to the <b>ride cymbal</b> your arms end up in an open position.</p>

    <p class = "post">Use the tip of the stick to play the ride. If you accidentally hit the cymbal with the shoulder of the stick it can create a really loud
        ‘gong’ sound. This sound can be useful when playing music but for the beginner drum beats use the tip of the
            stick.</p>

    <p class = "post">Most of the exercises in this book can be played on the hi-hat as well as the ride. Practice all drum
        beats on both.</p>

    <p class = "post">Here is the notation for the <b>ride cymbal</b>:</p>


<Image src={NumberOne} class = "chapterThreeNumOne"  fluid />



    <p class = "post">This is what the <b>2-Beat</b> and the <b>Basic Rock Beat</b> look like when played on the ride cymbal:</p>


<Image src={NumberTwo} class = "chapterThreeNumTwo"   fluid />


<Image src={NumberThree} class = "chapterThreeNumThree"  fluid />












</Content>
</div>
)

}

export default ChapterThree;



