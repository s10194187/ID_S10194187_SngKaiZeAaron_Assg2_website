# ID_S10194187_SngKaiZeAaron_Assg2_website
# interactivedev-readme-template
Readme template for interactive development module
# ID_S10194187_SngKaiZeAaron_Assg2_website

For my website, I decided on a topic which I think suits me the best. As I am fond of watching anime, I have created an anime searching website that helps users to search for their desired website and view its information. I wanted to create an experience for the user which would be aesthetically pleasing and functional. As other anime searching websites were made around 2005, i wanted to create one that would look more mordern and stylish.

## Design Process

When designing this website, I was focusing on creating a website made for people who want to search for the anime show that they have in mind so as to view the shows information like studio name, date of premiere, etc. My website can help them do this as it is a straightforward platform that is easy-to-use and very user-friendly. By simply searching for the show title, they can find the show the want.
<!-- In particular, as part of this section we recommend that you provide a list of User Stories, with the following general structure: 
- As a user type, I want to perform an action, so that I can achieve a goal. -->

- As a user type, I be able to search for any show title.
- As a user type, I want to be able to view he details of said shows.
- As a user type, I want to the website to be simple to use and uncomplicated.

<!--link to wireframe-->
https://xd.adobe.com/view/cde741c8-479c-4c46-8b54-a25e7e187276-98b4/

## Features

<!--In this section, you should go over the different parts of your project, and describe each in a sentence or so.-->
For my website I have simple, convenient features. The first feature is that the logo and the header in the top bar is a link to reload the site. This is good in case I decide to add more pages, and I can use this to link to the main page. The second feature is the search bar where it can search all the shows you want. For the icon in the search bar, the cursor icon will change to a pointer to let users know that it is a button. When you have searched the show, it will show all the related shows that is retrieved from the api. The results are placed in a result box that can be flexed. When hovering over the cover img or the name, the cursor will change to a pointer to let users know that they can click on it. When it is clicked, a modal will pop out and show the shows contents and information. Inside, there is also a close button that allows users to close the modal. The button will also make your cursor change to a pointer when you hover or activate it.

### Existing Features
- Feature 1 - Logo and header links to the main page.
- Feature 2 - Search bar allows you to search for the shows.(hovering over the search icon changes cursor to pointer)
- Feature 3 - Search results are placed in the results box and shows the respective show cover and title. (hovering over them will change cursor to pointer)
- Feature 4 - Clicking any show will pop out a modal that displays the shows information.
- Feature 5 - Inside the modal, theres a close button that closes the modam. (hovering over the button changes your cursor to a pointer and the button is animated to become bigger.)
- Feature 6 - The result container and the modal can be flexed based on the device size.

In addition, you may also use this section to discuss plans for additional features to be implemented in the future:

### Features Left to Implement
- Another feature idea would be to create category pages that contains shows based on categories.
- Another feature idea would be to expand the media forms to others like manga etc.

## Technologies Used

In this section, you should mention all of the languages, frameworks, libraries, and any other tools that you have used to construct this project. For each, provide its name, a link to its official site and a short sentence of why it was used.

- [Html](index.html)
    - The project uses **html** as to create the structure.
- [Css](style.css)
    - This project uses **css** to style the site.
-[JavaScript](script.js)
    - This project uses **js** to implement the api.
-[Api](https://api.jikan.moe/v3/search/anime/)
    - This project uses **api** from kitsu(unofficial myAnimeList api) as its database. It lets the website collect the show data.


## Testing

For any scenarios that have not been automated, test the user stories manually and provide as much detail as is relevant. A particularly useful form for describing your testing process is via scenarios, such as:

1. Search Bar:
    1. Search any show.
    2. Click the search icon or press enter.
    3. The results will appear.

2. Modam:
    1. Click on any show.
    2. Pop out should appear.
    3. Click the close button to close and return to the main page.

Up until screen width of 1300px, in the modam, the pic will be above the content, otherwise the pic will be on the right.

You should also mention in this section any interesting bugs or problems you discovered during your testing, even if you haven't addressed them yet.
- Depending on the show, if it is classified as a ova or something else thats not identifies as an anime, it will display all the information expect the english title.
- In the css, in the class #modal-content, when you try to implement 'flex-wrap:wrap', the pic in the modal will not flex to the right.

## Credits

### Content
- The content in the website is obtained from the api that i used. ("https://api.jikan.moe/v3/search/anime/")

### Media
- The background img was taken from "https://wallpaperscave.com/download/85036/1920x1080"
- The icon for the search bar was taken from "https://fontawesome.com/v4.7.0/icons/"
- The site logo was self made.
- The search bar icon in the wireframe was self made.
### Acknowledgements

- I recieved inspiration from myAnimeList and Netflix.