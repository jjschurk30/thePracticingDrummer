import React from 'react';
import Hero from '../../components/Hero';
import Content from '../../components/Content';
import Image from 'react-bootstrap/Image';
import FloorTom from '../../images/ChapterSixImages/floor_tom.png';
import FloorTomOne from '../../images/ChapterSixImages/floor_tom_1.png';
import FloorTomTwo from '../../images/ChapterSixImages/floor_tom_2.png';
import FloorTomThree from '../../images/ChapterSixImages/floor_tom_3.png';
import FloorTomFour from '../../images/ChapterSixImages/floor_tom_4.png';
import FloorTomFive from '../../images/ChapterSixImages/floor_tom_5.png';
import FloorTomSix from '../../images/ChapterSixImages/floor_tom_6.png';
import FloorTomSeven from '../../images/ChapterSixImages/floor_tom_7.png';
import FloorTomEight from '../../images/ChapterSixImages/floor_tom_8.png';
import FloorTomEightNote from '../../images/ChapterSixImages/floor_tom_8th_note.png';
import FloorTomBasicBeat from '../../images/ChapterSixImages/floor_tom_basic_beat.png';


function ChapterSix(props) {

return (

<div>
<Content>
   <Hero title = {props.title} />



        <h1 class = "chapterNumber">Chapter Six</h1>

        <h2 class = "chapterNumber">Floor Tom</h2>


<p class = "post">The <b>floor tom</b> is notated on the second space from the bottom
</p>

<img src={FloorTom} class = "clef"/>


<p class = "post">
Practice the same eight drum beats on the <b>ride cymbal</b> as well. Play each <b>4 times</b> and go onto the next one
<b> without stopping</b>.
</p>

<Image src={FloorTomEightNote}  fluid />


<p class = "post">
Now use the floor tom with a basic rock beat.
</p>

<Image src={FloorTomBasicBeat}  fluid />

<p class = "post">
Practice the eight combination beats using the floor tom. Play each <b>4 times</b> and go onto the next one <b>without
stopping</b>.
</p>

<Image src={FloorTomOne}  fluid />

<Image src={FloorTomTwo}  fluid />

<Image src={FloorTomThree}  fluid />

<Image src={FloorTomFour}  fluid />

<Image src={FloorTomFive}  fluid />

<Image src={FloorTomSix}  fluid />

<Image src={FloorTomSeven}  fluid />

<Image src={FloorTomEight}  fluid />



</Content>
</div>
)

}

export default ChapterSix;



