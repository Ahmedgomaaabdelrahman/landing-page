# Landing Page Project
Landing page project with responsive views, so user can open it on multiple devices without any problem in styling.

## Author
Ahmed Gomaa (a.gomaaabdelrahman@gmail.com)

## Description
This landing page consists of two part:
    1. The 5 sections which is the main building blocks in our page and it is a static code in index.html file.
    2. The navigation menu which is created in app.js dynamically as an unordered list.

If user scroll through the page, the active section will be highlighted with 'your-active-class' class which added by default to the first section and the navigation item that related to the active section will be highlighted too with 'active-nav-link' class.

If user select an item from navigation menu, a very smooth scroll will be active to go to the appropriate section

## Features
1. Responsive navigation menu by hiding the navbar and show it by burger icon in the small screens.
2. When scrolling the section which opened in viewport is highlighted.
3. Update and change the design and content by changing the styling in responsive views.
4. Decrease the number of repaint and redraw processes by using Fragment to append the navigation items in it and then append the Fragment in navigation list.

## Technologies, APIs are used
1. To detect the active section in viewport to highlight it and its nav item I used Intersection Observer API (https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API).

2. To create the burger menu I just got the idea from this link on code pen (https://codepen.io/mdt2/pen/VMMmNX).

## Built in Methods
1. Document.getElementsByTagName().
2. Document.createDocumentFragment().
3. Element.scrollIntoView().
4. Element.getAttribute().
5. Document.getElementById().
6. Document.createElement().
7. Element.appendChild().
8. Element.addEventListener() , window.addEventListener().
9. Element.classList.toggle(), Element.classList.remove() , Element.classList.add().

## Custom Methods
### intersectionObserveCallback
    description: is a callback function used to update active and not active sections and nav links.
    parameters: {HTMLCollection} entries - will be the sections in page. 

### scrollToSection
    description: is used as a callback function for click event on navigation menu, it take an event and access the target property to get the clicked element and get its href which includes the section id that we need to scroll to it.
    parameters: {Event} evt event that occurred on the element.
