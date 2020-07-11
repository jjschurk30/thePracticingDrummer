import React from 'react';
import Hero from '../../components/Hero';
import Content from '../../components/Content';
import Image from 'react-bootstrap/Image';
import NumOne from '../../images/ChapterThreeImages/ch3num_1.png';
import NumTwo from '../../images/ChapterThreeImages/ch3num_2.png';
import NumThree from '../../images/ChapterThreeImages/ch3num_3.png';
import NumFour from '../../images/ChapterThreeImages/ch3num_4.png';
import NumFive from '../../images/ChapterThreeImages/ch3num_5.png';
import NumberOne from '../../images/ChapterThreeImages/number_1.png';
import NumberTwo from '../../images/ChapterThreeImages/number_2.png';
import NumberThree from '../../images/ChapterThreeImages/number_3.png';
import NumberFour from '../../images/ChapterThreeImages/number_4.png';
import NumberFive from '../../images/ChapterThreeImages/number_5.png';
import NumberSix from '../../images/ChapterThreeImages/number_6.png';




function ChapterThreePractice(props) {

return (

<div>
<Content>
   <Hero title = {props.title} />

                <h1 class = "chapterNumber">Chapter Three Practice</h1>


                <p class="post">Practice these 5 drum beats <b>every day</b> for a week. They will be your foundation for the
                    chapters to come.</p>


<Image src={NumOne} class = "hiHatAndSnare"  fluid />

<Image src={NumTwo} class = "hiHatAndSnare"  fluid />

<Image src={NumThree} class = "hiHatAndSnare"  fluid />

<Image src={NumFour} class = "hiHatAndSnare"  fluid />

<Image src={NumFive} class = "hiHatAndSnare"  fluid />




                <h1 class = "chapterNumber">Ride Cymbal Practice</h1>

                <p class="post">Practice all 5 beats on the <b>ride cymbal</b> everyday, as well.</p>



<Image src={NumberOne} class = "hiHatAndSnare"  fluid />

<Image src={NumberTwo} class = "hiHatAndSnare"  fluid />

<Image src={NumberThree} class = "hiHatAndSnare"  fluid />

<Image src={NumberFour} class = "hiHatAndSnare"  fluid />

<Image src={NumberFive} class = "hiHatAndSnare"  fluid />

<Image src={NumberSix} class = "hiHatAndSnare"  fluid />










</Content>
</div>
)

}

export default ChapterThreePractice;



