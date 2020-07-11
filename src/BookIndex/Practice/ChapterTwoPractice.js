import React from 'react';
import Hero from '../../components/Hero';
import Content from '../../components/Content';
import Image from 'react-bootstrap/Image';
import NumberOne from '../../images/ChapterTwoImages/number_1.png';
import  NumberTwo  from '../../images/ChapterTwoImages/number_2.png';
import  NumberThree  from '../../images/ChapterTwoImages/number_3.png';
import NumberFour from '../../images/ChapterTwoImages/number_4.png';
import  NumberFive  from '../../images/ChapterTwoImages/number_5.png';
import  NumberSix  from '../../images/ChapterTwoImages/number_6.png';
import NumberSeven from '../../images/ChapterTwoImages/number_7.png';
import  NumberEight  from '../../images/ChapterTwoImages/number_8.png';
import  NumberNine  from '../../images/ChapterTwoImages/number_9.png';
import NumberTen from '../../images/ChapterTwoImages/number_10.png';



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

<Image src={NumberOne} class = "hiHatAndSnare"  fluid />

<Image src={NumberTwo} class = "hiHatAndSnare"  fluid />

<Image src={NumberThree} class = "hiHatAndSnare"  fluid />

<Image src={NumberFour} class = "hiHatAndSnare"  fluid />

<Image src={NumberFive} class = "hiHatAndSnare"  fluid />

    <p class="post">In the next exercises the hi-hat will continously play while the snare and bass only play on
        certain beats. Count out loud, “1-2-3-4”, with every hi-hat. Play the snare or bass with the correct hi-hat
        count.</p>

<Image src={NumberSix} class = "hiHatAndSnare"  fluid />

<Image src={NumberSeven} class = "hiHatAndSnare"  fluid />

<Image src={NumberEight} class = "hiHatAndSnare"  fluid />

<Image src={NumberNine} class = "hiHatAndSnare"  fluid />

<Image src={NumberTen} class = "hiHatAndSnare"  fluid />


</Content>
</div>
)

}

export default ChapterTwoPractice;



