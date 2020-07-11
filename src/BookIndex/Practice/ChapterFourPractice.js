import React from 'react';
import Hero from '../../components/Hero';
import Content from '../../components/Content';
import Image from 'react-bootstrap/Image';
import CoreOne from '../../images/ChapterFourImages/core_1.png';
import CoreTwo from '../../images/ChapterFourImages/core_2.png';
import CoreThree from '../../images/ChapterFourImages/core_3.png';
import CoreFour from '../../images/ChapterFourImages/core_4.png';
import CoreOneRide from '../../images/ChapterFourImages/core_1_ride.png';
import CoreTwoRide from '../../images/ChapterFourImages/core_2_ride.png';
import CoreThreeRide from '../../images/ChapterFourImages/core_3_ride.png';
import CoreFourRide from '../../images/ChapterFourImages/core_4_ride.png';




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

        <Image src={CoreOne} class = "Core" fluid />

            <Image src={CoreTwo} class = "Core" fluid />

                <Image src={CoreThree} class = "Core" fluid />

                    <Image src={CoreFour} class = "Core" fluid />

                <h2 class = "chapterNumber">On the Ride</h2>

                <p class="post">  - Don’t forget to practice The Core Four on the ride cymbal as well!</p>

                <p class="post"> - Use the tip of the drumstick. Not the shoulder.</p>

                <p class="post">  - Practice in the same way as the hi-hat exercises.</p>

                        <Image src={CoreOneRide} class = "Core" fluid  />

                            <Image src={CoreTwoRide} class = "Core"  fluid />

                                <Image src={CoreThreeRide} class = "Core"  fluid />

                                    <Image src={CoreFourRide} class = "Core" fluid />








</Content>
</div>
)

}

export default ChapterFourPractice;



