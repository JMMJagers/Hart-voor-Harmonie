import React, {Fragment} from 'react';
import content from '../data/content.json';

const Home = () => {

  return (

      <div>

        <div className="hero__section">
          <img alt="" className="hero__img" src={content.home[0].hero}></img>
        </div>

        <div className="content__section">
          <div className="col-12 col-md-8 offset-md-2 text-center">
            <h1>{content.home[0].title}</h1>

            <Fragment>
              { content.home[0].paragraphs.map((item) =>
                  <p>{item.p}</p>
              )}
            </Fragment>

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
