import React from 'react';
import Hero from '../../components/Hero';
import Content from '../../components/Content';
import Image from 'react-bootstrap/Image';
import TransitionOne from '../../images/ChapterSevenImages/transitions_1.png';
import TransitionTwo from '../../images/ChapterSevenImages/transitions_2.png';
import TransitionThree from '../../images/ChapterSevenImages/transitions_3.png';
import TransitionFour from '../../images/ChapterSevenImages/transitions_1.png';






function ChapterSeven(props) {

return (

<div>
<Content>
   <Hero title = {props.title} />



        <h1 class = "chapterNumber">Chapter Seven</h1>

        <h2 class = "chapterNumber">Transitions</h2>


<p class = "post">A very important skill for drummers is being able to transition from the hi-hat to the ride cymbal
or floor tom. Take any 2 of the previous beats and practice switching between them every <b>4 measures</b> on either the
hi-hat, ride or floor tom. Here are some examples to get you started:
</p>

<Image src={TransitionOne}  fluid />

<Image src={TransitionTwo}  fluid />

<Image src={TransitionThree}  fluid />

<Image src={TransitionFour}  fluid />




</Content>
</div>
)

}

export default ChapterSeven;



