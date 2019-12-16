import React from 'react';

function About() {
  return (
    <div className="myComponent">
        <div id="about_page" >
            <div className="about_sections">
                <h1>About The Alt Tags</h1>
                <h3>Open Access at The Met</h3>
                <p>On February 7, 2017, The Met made all images of public-domain works in its collection available under Creative Commons Zero (CC0).</p>
                <p>You now have more than 406,000 images of artworks from The Met collection to use, share, and remix—without restriction. This policy change to Open Access is an important statement about The Met's commitment to increasing access to the collection in a digital age.</p>
                <p><em>-From the Met-</em></p>
            </div>

            <div className="about_sections">
                <h3>What is ALT tag?</h3>
                <h5>Alt tag is the first principle of web accessibility</h5>
                <p>1. ALT tag is shorten term for alternative text. For many years, alt tags have been used for visually impaired users to understand the image.</p>
                <p>2. Alt tags are also useful when the image cannot be loaded due to connection error or other reasons. In these cases, the alt tags are usually shown instead of the pictures.</p>

                <p>3. Recently, alt tags have been kept short because they were used to enhance search engine optimization. But, that is not our interest at all. Our goal is to have better alt tags for visually impaired community who uses screen readers. With our detailed descriptions, we will not allow the community to understand better but also we will start new conversation with these artworks, bringing new perspectives.</p>


            </div>
        </div>
    </div>

  );
}

export default About;

/*

<h3>Why is Alt Text Important?</h3>
<p>1. Accessibility
Alt text is a tenet of accessible web design. Its original (and still primary) purpose is to describe images to visitors who are unable to see them. This includes screen readers and browsers that block images, but it also includes users who are sight-impaired or otherwise unable to visually identify an image. Including alt text with your images ensures all users, regardless of visual ability, can appreciate the content on your site.</p>

<p>
2. Image SEO
Using alt text on your images can make for a better user experience, but it may also help earn you both explicit and implicit SEO benefits. Along with implementing image title and file naming   best practices, including alt text may also contribute to image SEO.
</p>

*/
