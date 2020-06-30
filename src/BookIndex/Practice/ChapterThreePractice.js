import React from 'react';
import Hero from '../../components/Hero';
import Content from '../../components/Content';
// import { Link } from 'react-router-dom';




function ChapterThreePractice(props) {

return (

<div>
<Content>
   <Hero title = {props.title} />

                <h1 class = "chapterNumber">Chapter Three Practice</h1>


                <p class="post">Practice these 5 drum beats <b>every day</b> for a week. They will be your foundation for the
                    chapters to come.</p>





                <h1 class = "chapterNumber">Ride Cymbal Practice</h1>

                <p class="post">Practice all 5 beats on the <b>ride cymbal</b> everyday, as well.</p>











</Content>
</div>
)

}

export default ChapterThreePractice;



