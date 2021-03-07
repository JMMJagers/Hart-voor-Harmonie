import React, { Component, Fragment} from 'react';
import homeContent from '../data/homeContent.json';

const Home = () => {

  let title = '';
  let p1 = '';
  let p2 = '';
  let heroImg = '';
  homeContent.homeContent.map((item) => {
    title = item.title;
    heroImg = item.hero;
    p1 = item.p1;
    p2 = item.p2;
  });

  return (

      <div>
        <div className="hero__section">
          <img alt="" className="hero__img" src={heroImg}></img>
        </div>
        
        <div className="content__section col-8 offset-2">
          <div>
            <h1 className='text-center'>{title}</h1>
            <p className='text-center'>{p1}</p>
            <p className='text-center'>{p2}</p>
            <figure className="wp-block-image size-large text-center">
              <a href="http://www.hartvoorharmonie.nl">
                <img data-attachment-id="113" data-permalink="https://hartvoorharmonie.wordpress.com/logolang1/" data-orig-file="https://hartvoorharmonie.files.wordpress.com/2020/10/logolang1.png" data-orig-size="2379,1206" data-comments-opened="1" data-image-meta="{&quot;aperture&quot;:&quot;0&quot;,&quot;credit&quot;:&quot;&quot;,&quot;camera&quot;:&quot;&quot;,&quot;caption&quot;:&quot;&quot;,&quot;created_timestamp&quot;:&quot;0&quot;,&quot;copyright&quot;:&quot;&quot;,&quot;focal_length&quot;:&quot;0&quot;,&quot;iso&quot;:&quot;0&quot;,&quot;shutter_speed&quot;:&quot;0&quot;,&quot;title&quot;:&quot;&quot;,&quot;orientation&quot;:&quot;0&quot;}" data-image-title="logolang1" data-image-description="" data-medium-file="https://hartvoorharmonie.files.wordpress.com/2020/10/logolang1.png?w=300" data-large-file="https://hartvoorharmonie.files.wordpress.com/2020/10/logolang1.png?w=640" src="https://hartvoorharmonie.files.wordpress.com/2020/10/logolang1.png?w=1024" alt="" class="wp-image-113" srcset="https://hartvoorharmonie.files.wordpress.com/2020/10/logolang1.png?w=1024 1024w, https://hartvoorharmonie.files.wordpress.com/2020/10/logolang1.png?w=2048 2048w, https://hartvoorharmonie.files.wordpress.com/2020/10/logolang1.png?w=150 150w, https://hartvoorharmonie.files.wordpress.com/2020/10/logolang1.png?w=300 300w, https://hartvoorharmonie.files.wordpress.com/2020/10/logolang1.png?w=768 768w" sizes="(max-width: 1024px) 100vw, 1024px"></img>
              </a>
            </figure>
          </div>
        </div>
      </div>

    )
}

export default Home;
