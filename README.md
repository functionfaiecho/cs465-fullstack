# CS465: Full-Stack Development I.

This repository contains the project for CS465: Full-Stack Development I.

# Architecture

This project utilises a combination of Express, HTML, and JavaScript to render pages and manage routes. Express and JavaScript are employed to create routes and controllers that process browser requests for pages. Depending on the request, Express will either fetch a static HTML page or generate the required page using Handlebars templates filled with data from the database. These tools work cohesively to handle server requests and send the appropriate response to the frontend client.

The Angular part of the project operates differently. When the page is initially loaded, the entire single-page application (SPA) is delivered to the client. Subsequently, all page rendering and code execution are handled client-side in the browser. Backend calls are only necessary for fetching data from the database. With Express, server calls are frequent as they occur each time a page is loaded or refreshed. In contrast, with an SPA, the initial load time is longer to transfer all the code from the backend. However, once the initial load is complete, no further server calls are needed for navigating between pages within the SPA.

MongoDB was used as it can query quickly, and because it also scales well. The documents which are stored within MongoDB align well with JSON formatting. Therefore, it was a good match for the front-end application.

# Functionality

In the full-stack development process, there were isntances when I refactored code to enhance functionality and improve efficiency. A notable example of this was replacing some static HTML pages with Handlebars templates. This change enabled the use of page structures while allowing dynamic content to be displayed. Another refactor that was particularly significant transferred content from static JSON files within the codebase to MongoDB. This adjustment enabled the addition or modification of content data without code redeployment being necessary. It also demonstrated the benefits of reusable UI components - reducing redundancy and simplifying maintenance.

# Testing
HTTP methods are a different type of interactions that a client can have with a server. Most commonly, HTTP methods include GET, POST, PUT and DELETE. The API endpoints are how clients can communicate with the server. Where security was concerned, users had a valid JWT (Json Web Token) so they could access some of the endpoints.

# Reflection
As someone who enjoys full-stack development, this course has helped me to expand my knowledge and practice developing them. My other endeavour with full-stack development was one where I built an application that was a quick-answer guide to living in another country, mostly for expatriates. I've also learned to adapt and improvise when things don't go exactly as planned. A lot of programming is about finding solutions to a problem - some things did not turn up the way they should have according to the guide, so I had to turn to looking for ways to make things work. I enjoyed this class very much, and I look forward to applying what I learned to more projects.

I feel that I've gained a better undestanding as to how Express and Node js work. Above all, I feel that I can be quicker and more efficient when I develop applications next time.

