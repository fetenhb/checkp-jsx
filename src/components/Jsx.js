import React from 'react';
import imageInSrc from '../../src/imageInSrc.jpg';

function Jsx() {
    return (
     <div>
        <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
           <h1 className="title red">Hello  Tunisia</h1>
            <br />
           <img src={imageInSrc} />
            <br />
           <img src="/imageInPublic.jpg" />
        </div>

        <h1 className="title red">Tunisia: Like you've never seen before</h1>
        
             <div class="arrow-wrapper">
                <div class="arrow-down"></div>
                <div class="arrow-down"></div> 
                <div class="arrow-down"></div>
                <div class="arrow-down"></div>
                <div class="arrow-down"></div>
             </div>

           <video width={'70%'} height={'70%'} controls>
             <source src="tunisia.mp4" type="video/mp4" />
           </video>
       </div>
    )
}

export default Jsx

