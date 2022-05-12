# UnImage Finder

UnImage Finder is a simple React and Node/Express app that fetches images from Unsplash via a search feature

## API Side

On the API side of things, I created a basic setup of Express with cors, an image routes file in the routes folder,
an Unsplash repository in the repositories folder, and an image controller file in the controllers folder. Since I
have not worked with Node as much, I may not know all of the best practices, but am looking at this from an MVC standpoint
from my experience with Laravel, and I personally think this would scale nicely if grown. 

Another thing I decided to add in was TypeScript. TypeScript allowed me to implement some basic type checking on parameters 
passed to the route, the controller, and the repository function as well, which caught some bugs during my time. Lastly,
I made sure to return a status code for errors and for successful requests, as this is something I would always do in a real-
world application.

## Client Side

For the client side, I naturally went with React with TypeScript, but added in one of my new favorite component libraries: Mantine UI. 
I was going to either user React-Hook-Form or Mantine's form library, but I thought it would be overkill considering I'd only be 
using one input throughout the entire application. Thus, I did things the old fashioned way with state and onChange on the input itself. 
In order to communicate with the API easier, I installed axios and exported a base function to search for images, which I used
asynchronously in the submit function for the form. I added some basic error checking and added in an error message as well. I was
thinking about adding in a debounce functionality to search after entering some characters, but it would defeat the purpose of the
button, which was a requirement. Instead, since I wanted to limit massive queries as much as possible, I opted for a compromise
at requiring at least three characters to be entered.

After the search feature was complete and I was getting data back correctly, I installed the React-Infinite-Scroller component
and wrapped it around some fetching methods once images, the state variable, was set. This included easy pagination, detected when
the page was at the bottom, and gave me the ability to add in a loader as well. Since I'm a stickler for displaying information to the
user, I also added in a placeholder for the image to show it is being loaded. Normally I wouldn't have to do such a thing if I
was working with smaller data, but alas, the images are large.

Lastly, for the actual lightbox-feature itself, I decided to just use the common modal component to show the image when it's
clicked, along with a hover effect. Since I didn't like the blank space at the top of the modal, I added in the description
of the image to the title.