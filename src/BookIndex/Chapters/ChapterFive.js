import React from 'react';
import Hero from '../../components/Hero';
import Content from '../../components/Content';
import Image from 'react-bootstrap/Image';
import ComboOne from '../../images/ChapterFiveImages/combo_1.png';
import ComboTwo from '../../images/ChapterFiveImages/combo_2.png';
import ComboThree from '../../images/ChapterFiveImages/combo_3.png';
import ComboFour from '../../images/ChapterFiveImages/combo_4.png';
import ComboFive from '../../images/ChapterFiveImages/combo_5.png';
import ComboSix from '../../images/ChapterFiveImages/combo_6.png';
import ComboSeven from '../../images/ChapterFiveImages/combo_7.png';
import ComboEight from '../../images/ChapterFiveImages/combo_8.png';
import ComboRideOne from '../../images/ChapterFiveImages/combo_ride_1.png';
import ComboRideTwo from '../../images/ChapterFiveImages/combo_ride_2.png';
import ComboRideThree from '../../images/ChapterFiveImages/combo_ride_3.png';
import ComboRideFour from '../../images/ChapterFiveImages/combo_ride_4.png';
import ComboRideFive from '../../images/ChapterFiveImages/combo_ride_5.png';
import ComboRideSix from '../../images/ChapterFiveImages/combo_ride_6.png';
import ComboRideSeven from '../../images/ChapterFiveImages/combo_ride_7.png';
import ComboRideEight from '../../images/ChapterFiveImages/combo_ride_8.png';





function ChapterFive(props) {

return (

<div>
<Content>
   <Hero title = {props.title} />



        <h1 class = "chapterNumber">Chapter Five</h1>

        <h2 class = "chapterNumber">Core Four Combinations</h2>


<p class = "post">The Core Four can be combined together to create longer drum beats. Here are the eight possible
combinations. Practice these drum beats until you can play each <b>4 times</b> and go onto the next one <b>without stopping</b>.
</p>

<Image src={ComboOne}  fluid />

<Image src={ComboTwo}  fluid />

<Image src={ComboThree}  fluid />

<Image src={ComboFour}  fluid />

<Image src={ComboFive}  fluid />

<Image src={ComboSix}  fluid />

<Image src={ComboSeven}  fluid />

<Image src={ComboEight}  fluid />

<p class = "post">
Practice the same eight drum beats on the <b>ride cymbal</b> as well. Play each <b>4 times</b> and go onto the next one
<b> without stopping</b>.
</p>

<Image src={ComboRideOne}  fluid />

<Image src={ComboRideTwo}  fluid />

<Image src={ComboRideThree}  fluid />

<Image src={ComboRideFour}  fluid />

<Image src={ComboRideFive}  fluid />

<Image src={ComboRideSix}  fluid />

<Image src={ComboRideSeven}  fluid />

<Image src={ComboRideEight}  fluid />



</Content>
</div>
)

}

export default ChapterFive;



