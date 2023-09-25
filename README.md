# SWAPI Dashboard

This project is a dashboard built using React to display data from the ["Star Wars API"](https://swapi.dev/). It allows you to view StarShips, Vehicles and Films. And you can sort by name/title.

## Viewing the project

The project can be viewed live [here](http://swapi-dashboard.s3-website.eu-west-2.amazonaws.com/)!
Or, if you prefer, you can clone the repo and then run `npm install` followed by `npm start` to view the app locally.

## Project Structure

The folder structure is fairly simple:

Inside the `src` folder there is a `components` folder containing reusable components. The components are organised via an `index.js` to keep imports clean.

Types of component:
- User Controls: (entity selection and sorting) These take in a list of options and output a function to handle when a user input is given.
- Visual components: There are cards and lists to display the entities which simply take in props and show them nicely.

The other folder `pages` houses the home page which puts these components all together in a single page, and handles all of the logic.

There is also an `assets` folder with a font in!
 
## The Logic

To start with I decided to use [React Toastify](https://www.npmjs.com/package/react-toastify) for user feedback as it is a flexible solution that can output information in a way a typical user might expect. I use this for letting the user know what web requests are happening in the background and when they are done (or if they fail). It is mounted in `App.js` in the root and called with `toast.success("something")`.

The only other bit in `App.js` is some routing which decides which component from the pages folder to show based on the current pathname. There is only one page at the moment but this allows for expansion later on.

The home page component houses the rest of the logic. I have tried to keep the functions small and concise so I am hoping they are self explanatory but I will run through them here anyway:

### `dataReducer`
This is a React reducer hook that houses the data to displayed on the page (so starships, films,etc.). I have used a reducer over a `useState` as the logic for it started to become complex. At it's core it is just an array of objects, but through dispatching its actions it's able to have data set, appended to, sorted and cleared.

- Lazy Loading: The reducer has an `APPEND` action so that data can be added to it over time through the use of lazy loading as opposed to trying to pull and set the data all at once. This is good practice as it speeds up the time it takes for the user to start seeing data. A `handleScroll` function is fired every time the user scrolls and when the bottom is reached it will fetch more data. The `webRequest` function stores the next endpoint to be fetched from in `nextAPICall`, through this it is easy to check if there is more data, and where to get it. An `isCurrentlyFetching` flag is also used to make sure the user doesn't accidentally fire off multiple of the same call by mashing the scroll up and down.
- Sorting: The reducer has a `SORT` action that allows it to sort itself. It has 3 options, No Sort, Name Up, And Name Down. By passing the action `nameAttribute` it is able to sort alphabetically on one of the properties of the objects in the array, this is important as films and vehicles use `title` and `name` respectively. To return to a "No Sort" state it needs to keep track of what the original indexes were, as the API does not provide this, so I work this out myself in the `webRequest` function to sort on when needed. I am also using a `useEffect` hook to ensure the data is resorted any time the data is changed, this means each time new data is added via lazy load it is sorted again.
- Different Entities: As discussed before there are three different entities. You could argue that each one should be it's own page, however as vehicle and starship are essentially the same model, I have decided to use the same page and run if statements if the entity is a film instead, this way I can re-use all of the functions with each entity.

## Styling
To display the items I have opted to use flex as I expect each card to be the same dimmensions it feels simpler than using CSS grid.

In keeping with the Star Wars theme I have used bright white colours on a dark background. And by using CSS masks I was able to create custom borders with cut off edges.

I am using icons from [Font Awesome](https://fontawesome.com/) as they have a very consistent style and and icons for close to everything.

I sourced an icon from [Icons8.com](https://icons8.com/icons/set/star-wars) and a font from [Fontspace.com](https://www.fontspace.com/moonhouse-font-f18420).

## Stretch Goals
- Each vehicle and starship returns with it a lot of extra information that could be displayed in a pop up model when selecting them from the list. It would be nice if the API included images as this could make the site less text heavy.
- Filters could be expanded to filter on multiple attributes in the objects
- Each entity could potentially be using it's own page, which would become more needed if more different entities were included.
