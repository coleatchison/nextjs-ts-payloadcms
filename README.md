# A Quick Project to Learn PayloadCMS with NEXTJS and Typescript

I wanted to create this small website to begin learning PayloadCMS, a headless CMS that allows you to create custom schema, components, and have complete freedom over website content, hosting providers, and much more!

I didn't want to make this project exhaustive, or with a detailed/premium design. I was focused on learning and demonstrating key principles, such as:
- Rendering a dedicated page that will not change (Home page)
- Rendering dynamic routes (About Us page)
- Creating Globals (Header/Nav)
- Creating Collections (Pages)
- Creating schema for components
- Fetching page data
- Dynamically rendering page data/layout

With what I did for this project, making a larger website will really be more of the same, just more in-depth. For example, adding more components is just making new schema and their corresponding frontend components. Creating pages that have access to different layouts than others is just defining a new collection with the appropriate fields, and then creating the corresponding frontend routes, and loading/building the page in the same dynamic way. As you can see, the fundamentals explored in this project enable me to take on more complicated websites without much challenge.

## Quick Start - local setup

To run the website locally, follow the below steps

1. First clone the repo if you have not done so already
2. `npm install && npm run dev` to install dependencies and start the dev server
3. `docker-compose up` to run the docker container
4. Open `http://localhost:3000` to open the app in your browser

That's it! 

## How it works

Since this is just a development environment, you can click the "Admin Dashboard" button and create an account. Once in the admin dashboard, you can create pages, save them, then go back to the website and see the content dynamically populate!

## Home Page

Here's an image of the home page (the '/' route)

### Site Rendered
<img width="2399" height="1347" alt="image" src="https://github.com/user-attachments/assets/04c86e91-175d-4fbc-86f1-a3a7e16696dd" />

### Admin Dashboard
<img width="2398" height="1351" alt="image" src="https://github.com/user-attachments/assets/0a293074-d13a-4d78-a951-bdbb6989b6ab" />



## Dynamic Header/Nav

I built the header/nav bar to be fully dynamic, which would allow easy updating of quick navigation links and their nested pages

### Site Rendered
<img width="2314" height="517" alt="image" src="https://github.com/user-attachments/assets/416dca81-0e8a-4556-aa5e-9424742c131d" />

### Admin Dashboard
<img width="2401" height="1347" alt="image" src="https://github.com/user-attachments/assets/0063d8f7-91c5-4129-8608-0c44f09fd419" />

## Dynamic Pages (e.g. About Us)

When creating any other unique route, such as this, you are free to organize the page within the dashboard and choose the slug, and the frontend will be able to render the page content at that route.

### Site Rendered

As you can see, the content of the page is different, but the components are the same. This editing is all done through the Admin Dashboard, the frontend is simply dynamically rendering the content using the components I built.

<img width="2396" height="1347" alt="image" src="https://github.com/user-attachments/assets/1030c79a-09ea-4739-b453-11c1df1670bf" />


### Admin Dashboard

<img width="2396" height="1354" alt="image" src="https://github.com/user-attachments/assets/097ee743-7557-4cb3-9878-7c047eb6de54" />
