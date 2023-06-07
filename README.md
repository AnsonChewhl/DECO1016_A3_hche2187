# Justifications for implementation decisions

Design pattern & principles:

- Title tag: On all pages, I used a title tag that was related to the page content and added “Tokyo” after it. This helps the users easier to recognise the page was related to Tokyo and meets the users' needs when they are searching for it from Google. This was supported by Google (2022), in order to rank higher in the search results, the title query should be related to users' needs and the product that we are showing.

![A screenshot that shows how the title tag was showed on a browser](/image/documentation/justification/title-tag.png)

<br>

- Navigation bar: I implemented a navigation bar at the top of the prototype. This allows users to have a quick understanding of what is included on the website. Also, according to UI Patterns (n.d.), it “provides a clear visual indication of what content can be found on a website”. I made the logo to be clickable and would bring the users back to the “Home” page. Regarding Google (2022), to score a higher SEO ranking, users should be able to easily find and go back to the home page (2.5.1). Besides, I used a red straight line to indicate which page the users are currently at. This addresses the heuristic of “recognition rather than recall”, users do not have to remember information on which page they are, they can see it instead (Nielsen, 1994). A hover state was added to show elements where users’ pointers were located at. This enables the users to notify what elements they were going to click.

![A screenshot that shows the look of the navigation bar in both desktop and mobile prototypes](/image/documentation/justification/nav-bar.png)

<br>

- Static carousel: I used this design pattern as I had highly visual items to display that were related to each page (UI Patterns, n.d.). It improves the engagement of the design. Also, as it was a static carousel, its visibility is better than an auto-forward carousel and is less distracting. This provides a memorable experience for the users (Mailchimp, n.d.). These Tokyo’s featured images were related to each page's content and may motivate users to continue reading and give Tokyo a visit, which was the goal of the website (Babich, 2019). The arrows on both sides provide an interactive experience and first impression for them as well (Nielsen, 2013). I added indicators to show which carousel page users are at as well, which provides visual system status. This avoids them from looping the content unconsciously and increases the usability of the website.

![A screenshot that shows how the carousel was displayed on a desktop](/image/documentation/justification/carousel.png)

<br>

- Consistent icons: I used outlined icons throughout the design. By using the same style icons, the aesthetic of the design was improved. I chose a darker red compared to the mockups as the users revealed that the red in the mockups was too bright. Additionally, alt and visible captions were added to the icons. I used meaningful alt to label that the icons were icons. This avoids the users from being confused if they hear the system speaking the same captions when using a screen reader. I also chose icons that can visually represent the content better (see comparisons below). It is because icons can help to express the information theme visually if chosen properly (Babich, 2016).

![A screenshot that highlights the icons on the home page](/image/documentation/justification/icon.png)

<br>

- Flippable food cards: There was not much information to provide for the users, and they can be put inside the image. However, I did not want the texts blocking the images, and I wanted to avoid too many texts on the screen at the same time. Thus, I chose flip cards in the design, they hide contents from the screen, which forms a minimalist design. This creates a more user-friendly vibe (Batterywala, 2021) and Users can click to view it, which creates an interactive experience (Halliday, 2020). On the front of the cards, I selected real food images, as they had a better chance of engaging the visitors (Deluxe, 2018). The technical ability of the users was considered, so the instruction and a “Detail” button were added to the design to notify them that the cards were flippable. Besides, as Javascript was not included much in the design, in the prototype, users would need to hover to flip the card instead of clicking. This confused the users during the usability testing as they saw the buttons, but it was not our original purpose. 

![A screenshot that contains a back view of a food card (top left corner) and a front view of other cards in the food page](/image/documentation/justification/flip-card.png)

<br>

- Vertical scroll group: I applied a vertical scroll group on each page. Users can view all content simply by scrolling. In the “Events” and “Landmarks” pages, no buttons need to be clicked to view all the information. This content structuring design pattern reduces the effort users need to take, which increases efficiency. Besides, I utilized vertical scrolling instead of horizontal scrolling as it is more friendly for desktop users who don’t have trackpads (Juviler, 2021). Users can use the middle wheel button to scroll and read through all the information.

![A screenshot that shows the clipped part of the events page that allows users to scroll vertically](/image/documentation/justification/vertical-scroll.png)

<br>

- Flexbox & Grid layout: I applied the flexbox layout design to the “Events” and “Landmarks” pages. In the showcase section, to form a neat and clear design, the flexbox helps me to better organise each event/landmark. I can easily align the content inside the flexbox to form a pattern as well, which improves the depth and look of the design. Besides, each of them utilized a grid layout inside. This provides more flexibility for me to organise the content and structure. It helps to create a responsive layout for both mobile and desktop versions as well.

![A screenshot that shows how the landmarks page showcase was structured](/image/documentation/justification/layout.png)

<br>

# Comparisons between mockups and prototype

Compared to the mockups, the prototype was designed to be more detailed and the animations and interactions were finished. In general, interactions and SEO were not considered much during the mockup stage, as I was focusing on the product’s design and structure of the website, which was how a mockup was meant to be (Sketch, n.d.). However, when I was prototyping the website, I had to consider how the users would interact with each function and how the functions would react. Also, as I was trying to develop a real product, I wanted to make my product more accessible and with a better SEO score. Thus, how I transformed the mockup into code was another big challenge compared to creating the mockups. 

<br>

Besides, as suggested by the tutor, the mockups lacked proper visual design, although the big picture of UX was completed. Based on that, I considered adding more visual elements to the prototype design. However, I wanted to maintain a good balance between the content and visuals. Thus, I began with the background. I chose a Japanese-style seamless background, this matches the main theme of the website and helps to better convey the design concept. Then, I re-coloured the image using external tools. It’s because I don’t want it to be too bright and distract the users from the main content, which potentially impacts the UX part. Compared to the mockups, this background image added textures to the prototype, which makes it less flat and more engaging as suggested by the testers (see discussion below).

![The upper part of the image was the design in the mockups stage, the bottom one was the prototype after adding a soft background](/image/documentation/comparison/background.png)

<br>

When applying the mockup concept to HTML and CSS, I found some issues during the process, especially when the responsiveness of the design needs to be further considered. For instance, I did not realise the 16px font size was smaller than I thought when I prototype the design in full screen. The texts were too thin and the readability did not meet my expectations. Additionally, the carousel images were not resizing properly when I resized the windows. Thus, I created a box to crop the overflow part to maintain the images’ aspect ratio and avoid them being too small or too big. Besides, the arrows in the carousel were too close to the edges in the mockups, which makes it hard to click and reach during the prototype. Therefore, I used the flex box function to fix their position and scale them based on the viewpoint width. I set a minimum size for the arrows to ensure that it was big enough to click even though the screen size was too small. This increases the accessibility of the prototype, compared to the mockups.

![The mockup design is on the left side, which has thinner texts. The right side is the prototype design that used colour that look solid and thicker font weight to increase readability](/image/documentation/comparison/solid-text.png)

<br>

On the “Home” page, a user said they did not find some of the icons meaningful. For example, they did not understand the meaning of the speech bubble without reading the title below. Thus, I used a sunshine icon instead. This forms an external consistency, which other websites were also used for weather and climate (e.g. [https://www.japan.travel/en/](https://www.japan.travel/en/)). By using similar visual elements as other websites, users can identify its meaning more quicker and easier. The learnability would be improved as suggested by NNGroup (2019).

![The left (mockups) used a speech bubble that does not stand alone well, the right (prototype) used a sunshine icon that is more meaningful](/image/documentation/comparison/weather.png)

<br>

I did not think of how the “Food” page’s flip cards look when designing the mockups. I wanted to create a significant change when the users flipped the card to provide better feedback for them. Therefore, again, I created the back of the flip cards with a seamless background that used red as the primary colour. I chose the background as red was the symbolic colour of Japan (Lisina, 2020) and the accent colour in my design. This forms consistency across the design, which is important to achieve an aesthetic design. However, there was a problem at first, the texts were blended with the background, which I did not consider before applying the technique. Thus, I enlarged the texts to form a better contrast against the background, which increases the readability as well. Compared to the mockups, the “Food” page functionality was more completed and finalised. I paid closer attention to the visual design too.

![The screenshot shows the design of the flip card which was not considered during the mockup stage](/image/documentation/comparison/flip-card-bg.png)

<br>

Also, compared to the mockups "Events" page, I reduced the amount of presenting events to 3 instead of 12 during the prototyping stage. As I was designing a microsite, I should try to catch users' focus within a short period of time. Picking a few key events to showcase helps to avoid users getting bored and information overload. On the other hand, during the refined mockups usability testing session (see discussion below), a user revealed that the "Events" page could be designed to be more visually appealing. Thus, I did some extra research online and looked for some inspiration to create a better design. I was inspired by the image showcased on the enablemarketing website. I asked for the user’s feedback on the image style and the user was satisfied with it. Thus, I tried to create a similar layout as it is and came up with a different style compared to the mockups. I placed the event name on top and used bold text to make it stand out. The visual hierarchy was better than the mockup version and the information was easier to read as well.

![The top (mockups) lacked visual hierarchy, the bottom (prototype) used top to bottom approach to form one](/image/documentation/comparison/event-design.png)

<br>

Finally, I applied the same style to the “Landmarks” page, this internal consistency allows users to quickly know where to look to find the specific content (NNgroup, 2019). This also increases the learnability of the website. Furthermore, based on the user’s feedback, they thought the contact information was not their main concern or focus when looking at the mockups. So, I removed the contact information row and directly placed the remaining information under the landmark’s image. In terms of hierarchy, I wanted to sell the landmarks to the users to attract them to give a visit. Thus, I placed the name of the landmarks on the very top as the most important information, then followed by some interesting facts and reasons to provoke the users.

![The top (mockups) design did not relevant to the other page much, the bottom (prototype) used similar design style as the events page, which creates consistency](/image/documentation/comparison/landmark-design.png)

<br>

# Discussion of any further iterations/improvements

Other than the feedback from assignment 2, a few usability tests were conducted with participants from the target user group (family users). The participants were aged from 20 to 55, and they usually travel with their families. The tests were carried out after applying the assignment feedback to the Figma mockups (reducing the scope of the Events page). The users were happy with the remaining content, they thought the Kamakura Festival was something new to them and the Hanami Festival was important to be mentioned on the website. They were satisfied with the colour palette, which they reviewed as simple and helped them to focus more on the content. 

During the prototyping stage, I kept asking users for feedback when I was progressing to avoid too many usability issues accumulating. Finding usability problems in the early stage of production helps to avoid a lot of rework. The users provided valuable feedback when testing with the unfinalised prototype. For instance, the colour choice. Users suggested that I can try to use a lighter dark (grey) for some less important text. This helps to form a better hierarchy and maintain the readability of the texts. I also reflected that the background of some designs was grey as well, so I enlarged the text to ensure the texts meet the AA rating of WCAG even though the contrast ratio was lower than black vs white. I also wanted to improve the engagement of the design. Thus, I added fade-in animation to the “Events” page and “Landmarks” page. Although I failed to apply the Javascript code to the animation, I was satisfied with the outcome.

Also, another usability test was conducted after completing the implementation of the mockups into the prototype. The users did not see any issues with the final production. I did some further self-testing to minimise dark patterns and usability problems that may appear on the website. I also used the inspection tool to ensure the responsiveness of the website. Although I kept doing so during the production stage and I considered the smallest screen (Galaxy Fold) responsiveness, I found I had ignored the iPad Air and similar models. I was mainly scaling the responsiveness of the website based on the screen width. Their screen width was wider than mobile phones, but their height was longer as well. Thus, based on the aspect ratio, I decided to add the media rule for height and took them into account for better accessibility.

In the future, I planned to apply javascript to the prototype to make the remaining functions more interactable and clickable. This helps to provide better feedback for the users, which improves their experience. Besides, I may apply Jakob Nielsen's 10 heuristic groups further into my design, this would refine the usability of the product. For instance, I could create a loading screen when the content has not been loaded up. This provides feedback on the system, and this visibility of system status notices the users our website was loading (Nielsen, 1994). 

<br>

# References (Content)

Babich, N. (2016, October, 20). Icons As Part Of A Great User Experience. Smashing Magazine. Retrieved from [https://www.smashingmagazine.com/2016/10/icons-as-part-of-a-great-user-experience/](https://www.smashingmagazine.com/2016/10/icons-as-part-of-a-great-user-experience/)

Babich, N. (2019, November 8). Top Website Layouts That Never Grow Old. Adobe. Retrieved from [https://xd.adobe.com/ideas/principles/web-design/11-website-layouts-that-made-content-shine-in-2019/](https://xd.adobe.com/ideas/principles/web-design/11-website-layouts-that-made-content-shine-in-2019/) 

Batterywala, T. (2021, November 2). Minimalist Design: Meaning, Benefits and Process. Octet Design Studio. Retrieved from [https://octet.design/minimalist-design-meaning-benefits-process/](https://octet.design/minimalist-design-meaning-benefits-process/)

DBS Interactive. (n.d.). Web Accessibility and SEO: A Perfect Fit. Retrieved from [https://www.dbswebsite.com/blog/accessibility-seo-a-perfect-fit/](https://www.dbswebsite.com/blog/accessibility-seo-a-perfect-fit/)

Deluxe. (2018, August 16). 4 reasons your website should include real photos. Retrieved from [https://www.deluxe.com/blog/four-reasons-your-website-should-include-real-photos/](https://www.deluxe.com/blog/four-reasons-your-website-should-include-real-photos/)

Pietroluongo, L. (2020, October 15). What is the Best Logo Size for a Website?. Elegant themes. Retrieved from [https://www.elegantthemes.com/blog/design/what-is-the-best-logo-size-for-a-website](https://www.elegantthemes.com/blog/design/what-is-the-best-logo-size-for-a-website)

Google. (2022, July 28). Search Quality Evaluator Guidelines. Retrieved from [https://static.googleusercontent.com/media/guidelines.raterhub.com/en//searchqualityevaluatorguidelines.pdf](https://static.googleusercontent.com/media/guidelines.raterhub.com/en//searchqualityevaluatorguidelines.pdf)

Halliday, D. (2020, February 5). Magic Flip Cards: Solving A Common Sizing Problem. Smashing Magazine. Retrieved from [https://www.smashingmagazine.com/2020/02/magic-flip-cards-common-sizing-problem/](https://www.smashingmagazine.com/2020/02/magic-flip-cards-common-sizing-problem/)

Harvard University. (n.d.). Write good Alt Text to describe images. Retrieved from [https://accessibility.huit.harvard.edu/describe-content-images](https://accessibility.huit.harvard.edu/describe-content-images)

Hotels.com. (n.d.). 10 Most Popular Festivals and Events in Tokyo. Retrieved from [https://au.hotels.com/go/japan/jp-most-popular-events-tokyo](https://au.hotels.com/go/japan/jp-most-popular-events-tokyo)

Japanese Wiki Corpus. (n.d.). Natsumatsuri (Summer Festival) (夏祭り). Retrieved from [https://www.japanese-wiki-corpus.org/culture/Natsumatsuri%20(Summer%20Festival).html](https://www.japanese-wiki-corpus.org/culture/Natsumatsuri%20(Summer%20Festival).html)

Japan Guide. (n.d.). Harajuku. Retrieved from [https://www.japan-guide.com/e/e3006.html](https://www.japan-guide.com/e/e3006.html)

Juviler, J. (2021, June 14). Horizontal Scrolling in Web Design: How to Do It Well. HubSpot. Retrieved from [https://blog.hubspot.com/website/horizontal-scrolling](https://blog.hubspot.com/website/horizontal-scrolling)

Lisina, E. (2020, January 5). Symbolic Colors in Japan. Japan Travel. Retrieved from [https://en.japantravel.com/blog/symbolic-colors-in-japan/61005](https://en.japantravel.com/blog/symbolic-colors-in-japan/61005) 

Mailchimp. (n.d.). Carousel Design: Best Practices for UX. Retrieved from [https://mailchimp.com/en-au/resources/carousel-slider-design-best-practices/](https://mailchimp.com/en-au/resources/carousel-slider-design-best-practices/) 

Meiji Jingu. (n.d.). How to visit Meiji Jingu. Retrieved from [https://www.meijijingu.or.jp/en/visit/](https://www.meijijingu.or.jp/en/visit/)

Nielsen, J. (1994, April 24). 10 Usability Heuristics for User Interface Design. NNGroups. Retrieved from [https://www.nngroup.com/articles/ten-usability-heuristics/](https://www.nngroup.com/articles/ten-usability-heuristics/)

Nielsen, J. (2013, January 19). Auto-Forwarding Carousels and Accordions Annoy Users and Reduce Visibility. Nielsen Norman. Retrieved from [https://www.nngroup.com/articles/auto-forwarding/](https://www.nngroup.com/articles/auto-forwarding/) 

NNgroup. (2019, September 7). Usability Heuristic 4: Consistency and Standards [Video]. YouTube. Retrieved from [https://youtu.be/Ibndy9KLOSQ](https://youtu.be/Ibndy9KLOSQ)  

Sketch. (n.d.). Wireframe vs mockup vs prototype: What’s the difference?. Retrieved from [https://www.sketch.com/blog/wireframe-vs-mockup-vs-prototype/](https://www.sketch.com/blog/wireframe-vs-mockup-vs-prototype/) 

Tourist Japan. (n.d.). Hanami Festival. Retrieved from [https://touristjourney.com/hanami-festival/](https://touristjourney.com/hanami-festival/)

Truly Tokyo. (n.d.). Takeshita-dori Street. Retrieved from [https://trulytokyo.com/takeshita-dori-street/](https://trulytokyo.com/takeshita-dori-street/)

UI Patterns. (n.d.). Carousel Tabs Design Pattern. Retrieved from [https://ui-patterns.com/patterns/Carousel](https://ui-patterns.com/patterns/Carousel) 

UI Patterns. (n.d.). Navigation Tabs Design Pattern. Retrieved from [https://ui-patterns.com/patterns/NavigationTabs](https://ui-patterns.com/patterns/NavigationTabs) 

<br>

# References (Images)

@Aficons studio. (n.d.). Calendar free icon [Icon]. FlatIcon. Retrieved from [https://www.flaticon.com/free-icon/calendar_2940436](https://www.flaticon.com/free-icon/calendar_2940436) 

@Anggara. (n.d.). Location free icon [Icon]. FlatIcon. Retrieved from [https://www.flaticon.com/free-icon/location_7155185](https://www.flaticon.com/free-icon/location_7155185)

@callmetak. (n.d.). Japanese seamless vintage clouds pattern horizontally and vertically repeatable [Art]. Freepik. Retrieved from [https://www.freepik.com/free-vector/japanese-seamless-vintage-clouds-pattern-horizontally-vertically-repeatable_27222870.htm](https://www.freepik.com/free-vector/japanese-seamless-vintage-clouds-pattern-horizontally-vertically-repeatable_27222870.htm) 

@freepik. (n.d.). Three O Clock Clock free icon [Icon]. FlatIcon. Retrieved from [https://www.flaticon.com/free-icon/three-o-clock-clock_13435](https://www.flaticon.com/free-icon/three-o-clock-clock_13435) 

@freepik. (n.d.). Creative travel logo template [Vector art]. Freepik. Retrieved from [https://www.freepik.com/free-vector/creative-travel-logo-template_9357498.htm](https://www.freepik.com/free-vector/creative-travel-logo-template_9357498.htm)  

@freepik. (n.d.). Linear flat abstract lines pattern [Art]. Freepik. Retrieved from [https://www.freepik.com/free-vector/linear-flat-abstract-lines-pattern_13756389.htm](https://www.freepik.com/free-vector/linear-flat-abstract-lines-pattern_13756389.htm)

@iconixar. (n.d.). Toys free icon [Icon]. FlatIcon. Retrieved from [https://www.flaticon.com/free-icon/toys_3081993](https://www.flaticon.com/free-icon/toys_3081993)  

@kosonicon. (n.d.). Sunny free icon [Icon]. FlatIcon. Retrieved from [https://www.flaticon.com/free-icon/sunny_3222672](https://www.flaticon.com/free-icon/sunny_3222672)

@monkik. (n.d.). Plane free icon [Icon]. FlatIcon. Retrieved from [https://www.flaticon.com/free-icon/plane_701333](https://www.flaticon.com/free-icon/plane_701333)

@Made by Made Premium. (n.d.). Directions free icon [Icon]. FlatIcon. Retrieved from [https://www.flaticon.com/free-icon/directions_523280](https://www.flaticon.com/free-icon/directions_523280)

@Smashicons. (n.d.). Maps free icon [Icon]. FlatIcon. Retrieved from [https://www.flaticon.com/free-icon/maps_2953336](https://www.flaticon.com/free-icon/maps_2953336)

@Stockio. (n.d.). Info free icon [Icon]. FlatIcon. Retrieved from [https://www.flaticon.com/free-icon/info_657097](https://www.flaticon.com/free-icon/info_657097)

@tawatchai07. (n.d.). Aerial view of tokyo cityscape with fuji mountain in japan [Photo]. Freepik. Retrieved from [https://www.freepik.com/free-photo/aerial-view-tokyo-cityscape-with-fuji-mountain-japan_10824379.htm](https://www.freepik.com/free-photo/aerial-view-tokyo-cityscape-with-fuji-mountain-japan_10824379.htm)  

@tawatchai07. (n.d.). Cherry blossoms in spring, chureito pagoda and fuji mountain at sunset in japan [Photo]. Freepik. Retrieved from [https://www.freepik.com/free-photo/cherry-blossoms-spring-chureito-pagoda-fuji-mountain-sunset-japan_10824514.htm](https://www.freepik.com/free-photo/cherry-blossoms-spring-chureito-pagoda-fuji-mountain-sunset-japan_10824514.htm)  

@tawatchai07. (n.d.). Fuji mountain and cherry blossoms in spring, japan. [Photo]. Freepik. Retrieved from [https://www.freepik.com/free-photo/fuji-mountain-cherry-blossoms-spring-japan_10824541.htm](https://www.freepik.com/free-photo/fuji-mountain-cherry-blossoms-spring-japan_10824541.htm) 

baby abbas. (2020, June 29). Tempura [Photo]. Unsplash. Retrieved from [https://unsplash.com/photos/xBMNxrbQonw](https://unsplash.com/photos/xBMNxrbQonw) 

Banks, C. (2016, December 4). Three bicycles parked in front of building [Photo]. Unsplash. Retrieved from [https://unsplash.com/photos/hwLAI5lRhdM](https://unsplash.com/photos/hwLAI5lRhdM) 

Bedase, S. (2021, April 20). Ramen [Photo]. Unsplash. Retrieved from [https://unsplash.com/photos/WjdOYhgTGCM](https://unsplash.com/photos/WjdOYhgTGCM)  

Bergamini, R. (2019, March 27). Sushi [Photo]. Unsplash. Retrieved from [https://unsplash.com/photos/O2yNzXdqOu0](https://unsplash.com/photos/O2yNzXdqOu0) 

Billings, D. (2019, January 12). Man standing beside store facade [Photo]. Unsplash. Retrieved from [https://unsplash.com/photos/PsHdc1AxNK0](https://unsplash.com/photos/PsHdc1AxNK0) 

Chan, J. (2019, May 5). Train party [Photo]. Unsplash. Retrieved from [https://unsplash.com/photos/1ZL2QNVmFgM](https://unsplash.com/photos/1ZL2QNVmFgM) 

Crout, G. (2016, April 27). Cherry blossom in Osaka [Photo]. Unsplash. Retrieved from [https://unsplash.com/photos/0_xMuEbpFAQ](https://unsplash.com/photos/0_xMuEbpFAQ) 

Fader, J. (2019, September 12). 2016 Sanja Matsuri in Tokyo, Japan [Photo]. Unsplash. Retrieved from [https://unsplash.com/photos/wVu3npylZpQ](https://unsplash.com/photos/wVu3npylZpQ)  

Fernando, F. (2019, December 10). Soba noodles [Photo]. Unsplash. Retrieved from [https://unsplash.com/photos/val59UQ3PqU](https://unsplash.com/photos/val59UQ3PqU) 

Hande, A. (2022, August 1). Meiji shrine [Photo]. Unsplash. Retrieved from [https://unsplash.com/photos/o9Ki3ZiQyqc](https://unsplash.com/photos/o9Ki3ZiQyqc)  

Japan Guide. (n.d.). Harajuku [Photo]. Retrieved from [https://www.japan-guide.com/e/e3006.html](https://www.japan-guide.com/e/e3006.html) 

Japan National Tourism Organization. (n.d.). Kamakura Festival [Photo]. Travel Japan. Retrieved from [https://www.japan.travel/en/spot/1587/](https://www.japan.travel/en/spot/1587/) 

Kina. (2022, April 3). Sukiyaki [Photo]. Unsplash. Retrieved from [https://unsplash.com/photos/KPOmfhctpAA](https://unsplash.com/photos/KPOmfhctpAA) 

Lou, D. (2017, September 3). Street [Photo]. Unsplash. Retrieved from [https://unsplash.com/photos/jfZfdQtcH6k](https://unsplash.com/photos/jfZfdQtcH6k) 

Marban, T. (2017, August 10). Sushi Chef, Tokyo Japan [Photo]. Unsplash. Retrieved from [https://unsplash.com/photos/EHK-EH1SRzQ](https://unsplash.com/photos/EHK-EH1SRzQ) 

Sagano, S. (2018, April 23). Sakura [Photo]. Unsplash. Retrieved from [https://unsplash.com/photos/8sOZJ8JF0S8](https://unsplash.com/photos/8sOZJ8JF0S8) 

Shamkhali, D. (2019, December 28). Tokyo Tower [Photo]. Unsplash. Retrieved from [https://unsplash.com/photos/XRkYm1EoVAw](https://unsplash.com/photos/XRkYm1EoVAw) 

Sorasak. (2017, May 5). Two women in purple and pink kimono [Photo]. Unsplash. Retrieved from [https://unsplash.com/photos/_UIN-pFfJ7c](https://unsplash.com/photos/_UIN-pFfJ7c) 

Su, T. (2022, May 15). Japan Day [Photo]. Unsplash. Retrieved from [https://unsplash.com/photos/C2nq7lcrP30](https://unsplash.com/photos/C2nq7lcrP30) 

Su, T. (2022, May 15). Usa [Photo]. Unsplash. Retrieved from [https://unsplash.com/photos/B0Bc5WJVROI](https://unsplash.com/photos/B0Bc5WJVROI) 

Tang, B. (2019, October 23). Gundam [Photo]. Unsplash. Retrieved from [https://unsplash.com/photos/nKO_1QyFh9o](https://unsplash.com/photos/nKO_1QyFh9o) 

Tan, S. (2019, September 21). Curry Chicken Katsu [Photo]. Unsplash. Retrieved from [https://unsplash.com/photos/_sfMD-OhFR8](https://unsplash.com/photos/_sfMD-OhFR8)  

T, H. M. (2019, January 17). Green and black chinese lantern [Photo]. Unsplash. Retrieved from [https://unsplash.com/photos/XCfypCMH_qE](https://unsplash.com/photos/XCfypCMH_qE) 

Yoshitake, R. (2018, July 10). Tokyo summer [Photo]. Unsplash. Retrieved from [https://unsplash.com/photos/cnIK3nLZ0Sg](https://unsplash.com/photos/cnIK3nLZ0Sg) 

Zhou, F. (2018, December 14). Tokyo Tower from city view [Photo]. Unsplash. Retrieved from [https://unsplash.com/photos/plX7xeNb3Yo](https://unsplash.com/photos/plX7xeNb3Yo) 



