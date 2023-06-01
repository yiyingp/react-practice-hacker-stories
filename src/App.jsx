// // import { useState } from 'react'
// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'
// // import './App.css'

// // function App() {
// //   const [count, setCount] = useState(0)

// //   return (
// //     <div className="App">
// //       <div>
// //         <a href="https://vitejs.dev" target="_blank">
// //           <img src={viteLogo} className="logo" alt="Vite logo" />
// //         </a>
// //         <a href="https://reactjs.org" target="_blank">
// //           <img src={reactLogo} className="logo react" alt="React logo" />
// //         </a>
// //       </div>
// //       <h1>Vite + React</h1>
// //       <div className="card">
// //         <button onClick={() => setCount((count) => count + 1)}>
// //           count is {count}
// //         </button>
// //         <p>
// //           Edit <code>src/App.jsx</code> and save to test HMR
// //         </p>
// //       </div>
// //       <p className="read-the-docs">
// //         Click on the Vite and React logos to learn more
// //       </p>
// //     </div>
// //   )
// // }

// // export default App

// // const title = 'React';
// // // jsx
// // const myElement = <h1>Hello {title}</h1>;

// // // gets transpiled to JavaScript
// // const myElement = React.createElement('h1', null,  `Hello ${title}`);

// // // gets rendered as HTML by React
// // <h1>Hello React</h1>

// // import * as React from 'react';
// // // import { useState } from 'react';

// // // // const welcome = {
// // // //   greeting: "Hey",
// // // //   title: "React"
// // // // };

// // // // function getTitle(title) {
// // // //   return title;
// // // // }

// // // // const list = [
// // // //   {
// // // //     title: 'React',
// // // //     url: 'https://reactjs.org/',
// // // //     author: 'Jordan Walke',
// // // //     num_comments: 3,
// // // //     points: 4,
// // // //     objectId: 0,
// // // //   },
// // // //   {
// // // //     title: 'Readux',
// // // //     url: 'https://redux.js.org/',
// // // //     author: 'Dan Abramov, Andrew Clark',
// // // //     num_comments: 2,
// // // //     points: 5,
// // // //     objectId: 1,
// // // //   },
// // // // ];
// // const useStorageState = (key, initialState) => {
// //   const [value, setValue] = React.useState(
// //     localStorage.getItem('key') || initialState
// //   );

// //   React.useEffect(() => {
// //       localStorage.setItem(key, value);
// //   }, [key, value]);

// //   return [value, setValue];
// // }

// // const initialStories = [
// //   {
// //     title: 'React',
// //     url: 'https://reactjs.org/',
// //     author: 'Jordan Walke',
// //     num_comments: 3,
// //     points: 4,
// //     objectId: 0,
// //   },
// //   {
// //     title: 'Readux',
// //     url: 'https://redux.js.org/',
// //     author: 'Dan Abramov, Andrew Clark',
// //     num_comments: 2,
// //     points: 5,
// //     objectId: 1,
// //   },
// // ]

// // const getAsyncStories = () =>
// //   new Promise((resolve) =>
// //     setTimeout(
// //       () => resolve({ data: { stories: initialStories } }),
// //       2000
// //     )
// //   );

// // const storiesReducer = (state, action) => {
// //   // if (action.type === 'SET_STORIES') {
// //   //   return action.payload;
// //   // } else if (action.type === 'REMOVE_STORY') {
// //   //   return state.filter(
// //   //     (story) => action.payload.objectId !== story.objectId
// //   //   );
// //   // } else {
// //   //   throw new Error();
// //   // }
// //   switch (action.type) {
// //     case 'SET_STORIES':
// //       return action.payload;
// //     case 'REMOVE_STORY':
// //       return state.filter(
// //         (story) => action.payload.objectId !== story.objectId
// //       );
// //     default:
// //       throw new Error();
// //   }
// // };

// // const App = () => {  
// //   const [searchTerm, setSearchTerm] = useStorageState('search', 'React');
// //   // const [stories, setStories] = React.useState([]);
// //   const [stories, dispatchStories] = React.useReducer(
// //     storiesReducer,
// //     []
// //   );
// //   const [isLoading, setIsLoading] = React.useState(false);
// //   const [isError, setIsError] = React.useState(false);
  

// //   React.useEffect(() => {
// //     setIsLoading(true);

// //     getAsyncStories()
// //       .then((result) => {
// //         dispatchStories({
// //           type: 'SET_STORIES',
// //           payload: result.data.stories,
// //         });
// //         setIsLoading(false);
// //     })
// //       .catch(() => setIsError(true));
// //   }, []);

// //   // remove an item from the list
// //   // const handleRemoveStory = (item) => {
// //   //   const newStories = stories.filter(
// //   //     (story) => item.objectId !== story.objectId
// //   //   );

// //   //   dispatchStories({
// //   //     type: 'SET_STORIES',
// //   //     payload: newStories,
// //   //   });
// //   // };
// //   const handleRemoveStory = (item) => {
// //     dispatchStories({
// //       type: 'REMOVE_STORY',
// //       payload: item,
// //     })
// //   }

// //   const handleSearch = (event) => {
// //     // console.log(event.target.value);
// //     setSearchTerm(event.target.value);

// //     // localStorage.setItem('search', event.target.value);
// //   };

// //   const searchedStories = stories.filter((story) => 
// //     story.title.toLowerCase().includes(searchTerm.toLowerCase())
// //   );
  
// //   return (
// //     <div>
// //       <h1>My Hacker Stories</h1>
// //       {/* <Search search={searchTerm} onSearch={handleSearch} /> */}
      
// //       <InputWuthLabel
// //         id="search"
// //         //label="Search"
// //         value={searchTerm}
// //         isFocused
// //         onInputChange={handleSearch}
// //       >
// //         <strong>Search:</strong>
// //       </InputWuthLabel>
      
// //       <p>Searching for <strong>{searchTerm}</strong>.</p>
      
// //       <hr />
      
// //       {isError && <p>Something went wrong...</p>}
      
// //       {isLoading ? (
// //         <p>Loading...</p>
// //       ) : (
// //         <List list={searchedStories} onRemoveItem={handleRemoveStory} />
// //       )}
// //     </div>
// //   );
// // };

// // const InputWuthLabel = ({ id, value, type='text', onInputChange, isFocused, children }) => {
// //   const inputRef = React.useRef();

// //   React.useEffect(() => {
// //     if (isFocused && inputRef.current) {
// //       inputRef.current.focus();
// //     }
// //   }, [isFocused]);
  
// //   return (
// //     <>
// //       <label htmlFor={id}>{children}</label>
// //       &nbsp;
// //       <input
// //         ref={inputRef}
// //         id={id}
// //         type={type}
// //         value={value}
// //         // autoFocus={isFocused}
// //         // note that `autoFocus` is a shorthand for `autoFocus={true}`
// //         // every attribute that is set to `true` can use this shorthand
// //         onChange={onInputChange}
// //       />
// //     </>
// //   );
// // };

// // // const Search = ({ search, onSearch }) => {

// // //   // const { search, onSearch} = props;
// // //   return (
// // //     <div>
// // //     {/* <React.Fragment> */}
// // //       <label htmlFor="search">Search: </label>
// // //       <input 
// // //         id="search" 
// // //         type="text" 
// // //         value={search}
// // //         onChange={onSearch} 
// // //       />
    
// // //       {/* <p>Searching for <strong>{props.value}</strong>.</p> */}
// // //     {/* </React.Fragment> */}
// // //     </div>
// // //   );
// // // };

// // const List = ({ list, onRemoveItem }) => {
// //   return (
// //     <ul>
// //       {list.map((item) => {
// //         return (
// //           <Item 
// //             key={item.objectId} 
// //             item={item} 
// //             onRemoveItem={onRemoveItem}
// //           />
// //         );
// //       })}
// //     </ul>
// //   );
// // }

// // const Item = ({ item, onRemoveItem }) => {
// //   // const handleRemoveItem = () => {
// //   //   onRemoveItem(item);
// //   // }
  
// //   return (
// //     <li>
// //       <span>
// //         <a href={item.url}>{item.title}</a>
// //       </span>
// //       <span>{item.author}</span>
// //       <span>{item.num_comments}</span>
// //       <span>{item.points}</span>
// //       <span>
// //         <button type="button" onClick={() => onRemoveItem(item)}>
// //           Dismiss
// //         </button>
// //       </span>
// //     </li>
// //   );
// // }

// // // const List = ({ list }) => {
// // //   return (
// // //     <ul>
// // //       {list.map(({ objectId, ...item }) => {
// // //         return (
// // //           <Item key={item.objectId} {...item} />
// // //         );
// // //       })}
// // //     </ul>
// // //   );
// // // }

// // // const Item = ({ title, url, author, num_comments, points }) => {
// // //   return (
// // //     <li>
// // //       <span>
// // //         <a href={url}>{title}</a>
// // //       </span>
// // //       <span>{author}</span>
// // //       <span>{num_comments}</span>
// // //       <span>{points}</span>
// // //     </li>
// // //   );
// // // }

// // export default App; 


// // // ----------------------------------------------------------------------------------
// // // React Impossible States
// // import * as React from 'react';

// // const useStorageState = (key, initialState) => {
// //   const [value, setValue] = React.useState(
// //     localStorage.getItem('key') || initialState
// //   );

// //   React.useEffect(() => {
// //       localStorage.setItem(key, value);
// //   }, [key, value]);

// //   return [value, setValue];
// // }

// // const initialStories = [
// //   {
// //     title: 'React',
// //     url: 'https://reactjs.org/',
// //     author: 'Jordan Walke',
// //     num_comments: 3,
// //     points: 4,
// //     objectId: 0,
// //   },
// //   {
// //     title: 'Readux',
// //     url: 'https://redux.js.org/',
// //     author: 'Dan Abramov, Andrew Clark',
// //     num_comments: 2,
// //     points: 5,
// //     objectId: 1,
// //   },
// // ]

// // const getAsyncStories = () =>
// //   // new Promise((resolve) =>
// //   //   setTimeout(
// //   //     () => resolve({ data: { stories: initialStories } }),
// //   //     2000
// //   //   )
// //   // );
// //   new Promise((resolve) =>
// //     setTimeout(reject, 2000));

// // const storiesReducer = (state, action) => {
// //   // if (action.type === 'SET_STORIES') {
// //   //   return action.payload;
// //   // } else if (action.type === 'REMOVE_STORY') {
// //   //   return state.filter(
// //   //     (story) => action.payload.objectId !== story.objectId
// //   //   );
// //   // } else {
// //   //   throw new Error();
// //   // }
// //   // switch (action.type) {
// //   //   case 'SET_STORIES':
// //   //     return action.payload;
// //   //   case 'REMOVE_STORY':
// //   //     return state.filter(
// //   //       (story) => action.payload.objectId !== story.objectId
// //   //     );
// //   //   default:
// //   //     throw new Error();
// //   // }

// //   switch (action.type) {
// //     case 'STORIES_FETCH_INIT':
// //       return {
// //         ...state,
// //         isLoading: true,
// //         isError: false,
// //       };
// //     case 'STORIES_FETCH_SUCCESS':
// //       return {
// //         ...state,
// //         isLoading: false,
// //         isError: false,
// //         data: action.payload,
// //       };
// //     case 'STORIES_FETCH_FAILURE':
// //       return {
// //         ...state,
// //         isLoading: false,
// //         isError: true,
// //       };
// //     case 'REMOVE_STORY':
// //       return {
// //         ...state,
// //         data: state.data.filter(
// //           (story) => action.payload.objectId !== story.objectId
// //         ),
// //       }
// //     default:
// //       throw new Error();
// //   }
// // };

// // const App = () => {  
// //   const [searchTerm, setSearchTerm] = useStorageState('search', 'React');
// //   // const [stories, setStories] = React.useState([]);
// //   // const [stories, dispatchStories] = React.useReducer(
// //   //   storiesReducer,
// //   //   []
// //   // );
// //   // const [isLoading, setIsLoading] = React.useState(false);
// //   // const [isError, setIsError] = React.useState(false);

// //   // moving states that belong together from 
// //   // multiple useState (and useReducer) hooks into a single useReducer hook
// //   const [stories, dispatchStories] = React.useReducer(
// //     storiesReducer,
// //     { data: [], isLoading: false, isError: false }
// //   );
  
// //   // exchanging the state updater function with the dispatch function. 
// //   // Then the dispatch function receives a distinct type and a payload
// //   React.useEffect(() => {
// //     dispatchStories({ type: 'STORIES_FETCH_INIT' });

// //     getAsyncStories()
// //       .then((result) => {
// //         dispatchStories({
// //           type: 'STORIES_FETCH_SUCCESS',
// //           payload: result.data.stories,
// //         });
// //       })
// //       .catch(() => 
// //         dispatchStories({ type: 'STORIES_FETCH_FAILURE' })
// //       );
// //   }, []);

    
// //   //   setIsLoading(true);

// //   //   getAsyncStories()
// //   //     .then((result) => {
// //   //       dispatchStories({
// //   //         type: 'SET_STORIES',
// //   //         payload: result.data.stories,
// //   //       });
// //   //       setIsLoading(false);
// //   //   })
// //   //     .catch(() => setIsError(true));
// //   // }, []);

// //   const handleRemoveStory = (item) => {
// //     dispatchStories({
// //       type: 'REMOVE_STORY',
// //       payload: item,
// //     })
// //   }

// //   const handleSearch = (event) => {
// //     // console.log(event.target.value);
// //     setSearchTerm(event.target.value);

// //     // localStorage.setItem('search', event.target.value);
// //   };

// //   const searchedStories = stories.data.filter((story) => 
// //     story.title.toLowerCase().includes(searchTerm.toLowerCase())
// //   );
  
// //   return (
// //     <div>
// //       <h1>My Hacker Stories</h1>
// //       {/* <Search search={searchTerm} onSearch={handleSearch} /> */}
      
// //       <InputWuthLabel
// //         id="search"
// //         //label="Search"
// //         value={searchTerm}
// //         isFocused
// //         onInputChange={handleSearch}
// //       >
// //         <strong>Search:</strong>
// //       </InputWuthLabel>
      
// //       <p>Searching for <strong>{searchTerm}</strong>.</p>
      
// //       <hr />
      
// //       {stories.isError && <p>Something went wrong...</p>}
      
// //       {stories.isLoading ? (
// //         <p>Loading...</p>
// //       ) : (
// //         <List list={searchedStories} onRemoveItem={handleRemoveStory} />
// //       )}
// //     </div>
// //   );
// // };

// // const InputWuthLabel = ({ id, value, type='text', onInputChange, isFocused, children }) => {
// //   const inputRef = React.useRef();

// //   React.useEffect(() => {
// //     if (isFocused && inputRef.current) {
// //       inputRef.current.focus();
// //     }
// //   }, [isFocused]);
  
// //   return (
// //     <>
// //       <label htmlFor={id}>{children}</label>
// //       &nbsp;
// //       <input
// //         ref={inputRef}
// //         id={id}
// //         type={type}
// //         value={value}
// //         // autoFocus={isFocused}
// //         // note that `autoFocus` is a shorthand for `autoFocus={true}`
// //         // every attribute that is set to `true` can use this shorthand
// //         onChange={onInputChange}
// //       />
// //     </>
// //   );
// // };

// // const List = ({ list, onRemoveItem }) => {
// //   return (
// //     <ul>
// //       {list.map((item) => {
// //         return (
// //           <Item 
// //             key={item.objectId} 
// //             item={item} 
// //             onRemoveItem={onRemoveItem}
// //           />
// //         );
// //       })}
// //     </ul>
// //   );
// // }

// // const Item = ({ item, onRemoveItem }) => {
// //   // const handleRemoveItem = () => {
// //   //   onRemoveItem(item);
// //   // }
  
// //   return (
// //     <li>
// //       <span>
// //         <a href={item.url}>{item.title}</a>
// //       </span>
// //       <span>{item.author}</span>
// //       <span>{item.num_comments}</span>
// //       <span>{item.points}</span>
// //       <span>
// //         <button type="button" onClick={() => onRemoveItem(item)}>
// //           Dismiss
// //         </button>
// //       </span>
// //     </li>
// //   );
// // }

// // export default App; 


// // // ----------------------------------------------------------------------------------
// // // Data Fetching
// // import * as React from 'react';

// // const useStorageState = (key, initialState) => {
// //   const [value, setValue] = React.useState(
// //     localStorage.getItem('key') || initialState
// //   );

// //   React.useEffect(() => {
// //       localStorage.setItem(key, value);
// //   }, [key, value]);

// //   return [value, setValue];
// // }

// // // const initialStories = [
// // //   {
// // //     title: 'React',
// // //     url: 'https://reactjs.org/',
// // //     author: 'Jordan Walke',
// // //     num_comments: 3,
// // //     points: 4,
// // //     objectId: 0,
// // //   },
// // //   {
// // //     title: 'Readux',
// // //     url: 'https://redux.js.org/',
// // //     author: 'Dan Abramov, Andrew Clark',
// // //     num_comments: 2,
// // //     points: 5,
// // //     objectId: 1,
// // //   },
// // // ]

// // // const getAsyncStories = () =>
// // //   new Promise((resolve) =>
// // //     setTimeout(reject, 2000));

// // const storiesReducer = (state, action) => {
// //   switch (action.type) {
// //     case 'STORIES_FETCH_INIT':
// //       return {
// //         ...state,
// //         isLoading: true,
// //         isError: false,
// //       };
// //     case 'STORIES_FETCH_SUCCESS':
// //       return {
// //         ...state,
// //         isLoading: false,
// //         isError: false,
// //         data: action.payload,
// //       };
// //     case 'STORIES_FETCH_FAILURE':
// //       return {
// //         ...state,
// //         isLoading: false,
// //         isError: true,
// //       };
// //     case 'REMOVE_STORY':
// //       return {
// //         ...state,
// //         data: state.data.filter(
// //           (story) => action.payload.objectId !== story.objectId
// //         ),
// //       }
// //     default:
// //       throw new Error();
// //   }
// // };

// // // A: First, the API_ENDPOINT (A) is used to fetch popular tech stories for 
// // // a certain query (a search term). In this case, we fetch stories about React (B)
// // const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?query=React';

// // const App = () => {  
// //   const [searchTerm, setSearchTerm] = useStorageState('search', 'React');
// //     const [stories, dispatchStories] = React.useReducer(
// //     storiesReducer,
// //     { data: [], isLoading: false, isError: false }
// //   );
  
// //   // exchanging the state updater function with the dispatch function. 
// //   // Then the dispatch function receives a distinct type and a payload
// //   React.useEffect(() => {
// //     dispatchStories({ type: 'STORIES_FETCH_INIT' });

// //     // getAsyncStories()
// //     //   .then((result) => {
// //     //     dispatchStories({
// //     //       type: 'STORIES_FETCH_SUCCESS',
// //     //       payload: result.data.stories,
// //     //     });
// //     //   })
// //     fetch(`${API_ENDPOINT}react`) // B: the native browser's fetch API is used to make this request (B)
// //       .then((response) => response.json()) // C: the response needs to be translated into JSON (C)
// //       .then((result) => {
// //         dispatchStories({
// //           type: 'STORIES_FETCH_SUCCESS',
// //           payload: result.hits, // D: the returned result has a different data structure (D), which we send as payload to our component's state reducer
// //         })
// //       })
// //       .catch(() => 
// //         dispatchStories({ type: 'STORIES_FETCH_FAILURE' })
// //       );
// //   }, []);

// //   const handleRemoveStory = (item) => {
// //     dispatchStories({
// //       type: 'REMOVE_STORY',
// //       payload: item,
// //     })
// //   }

// //   const handleSearch = (event) => {
// //     // console.log(event.target.value);
// //     setSearchTerm(event.target.value);

// //     // localStorage.setItem('search', event.target.value);
// //   };

// //   const searchedStories = stories.data.filter((story) => 
// //     story.title.toLowerCase().includes(searchTerm.toLowerCase())
// //   );
  
// //   return (
// //     <div>
// //       <h1>My Hacker Stories</h1>
// //       {/* <Search search={searchTerm} onSearch={handleSearch} /> */}
      
// //       <InputWuthLabel
// //         id="search"
// //         //label="Search"
// //         value={searchTerm}
// //         isFocused
// //         onInputChange={handleSearch}
// //       >
// //         <strong>Search:</strong>
// //       </InputWuthLabel>
      
// //       <p>Searching for <strong>{searchTerm}</strong>.</p>
      
// //       <hr />
      
// //       {stories.isError && <p>Something went wrong...</p>}
      
// //       {stories.isLoading ? (
// //         <p>Loading...</p>
// //       ) : (
// //         <List list={searchedStories} onRemoveItem={handleRemoveStory} />
// //       )}
// //     </div>
// //   );
// // };

// // const InputWithLabel = ({ id, value, type='text', onInputChange, isFocused, children }) => {
// //   const inputRef = React.useRef();

// //   React.useEffect(() => {
// //     if (isFocused && inputRef.current) {
// //       inputRef.current.focus();
// //     }
// //   }, [isFocused]);
  
// //   return (
// //     <>
// //       <label htmlFor={id}>{children}</label>
// //       &nbsp;
// //       <input
// //         ref={inputRef}
// //         id={id}
// //         type={type}
// //         value={value}
// //         // autoFocus={isFocused}
// //         // note that `autoFocus` is a shorthand for `autoFocus={true}`
// //         // every attribute that is set to `true` can use this shorthand
// //         onChange={onInputChange}
// //       />
// //     </>
// //   );
// // };

// // const List = ({ list, onRemoveItem }) => {
// //   return (
// //     <ul>
// //       {list.map((item) => {
// //         return (
// //           <Item 
// //             key={item.objectId} 
// //             item={item} 
// //             onRemoveItem={onRemoveItem}
// //           />
// //         );
// //       })}
// //     </ul>
// //   );
// // }

// // const Item = ({ item, onRemoveItem }) => {
// //   // const handleRemoveItem = () => {
// //   //   onRemoveItem(item);
// //   // }
  
// //   return (
// //     <li>
// //       <span>
// //         <a href={item.url}>{item.title}</a>
// //       </span>
// //       <span>{item.author}</span>
// //       <span>{item.num_comments}</span>
// //       <span>{item.points}</span>
// //       <span>
// //         <button type="button" onClick={() => onRemoveItem(item)}>
// //           Dismiss
// //         </button>
// //       </span>
// //     </li>
// //   );
// // }

// // export default App; 



// // // ----------------------------------------------------------------------------------
// // // Data Re-Fetching
// // import * as React from 'react';

// // const useStorageState = (key, initialState) => {
// //   const [value, setValue] = React.useState(
// //     localStorage.getItem('key') || initialState
// //   );

// //   React.useEffect(() => {
// //       localStorage.setItem(key, value);
// //   }, [key, value]);

// //   return [value, setValue];
// // }

// // const storiesReducer = (state, action) => {
// //   switch (action.type) {
// //     case 'STORIES_FETCH_INIT':
// //       return {
// //         ...state,
// //         isLoading: true,
// //         isError: false,
// //       };
// //     case 'STORIES_FETCH_SUCCESS':
// //       return {
// //         ...state,
// //         isLoading: false,
// //         isError: false,
// //         data: action.payload,
// //       };
// //     case 'STORIES_FETCH_FAILURE':
// //       return {
// //         ...state,
// //         isLoading: false,
// //         isError: true,
// //       };
// //     case 'REMOVE_STORY':
// //       return {
// //         ...state,
// //         data: state.data.filter(
// //           (story) => action.payload.objectId !== story.objectId
// //         ),
// //       }
// //     default:
// //       throw new Error();
// //   }
// // };

// // // A: First, the API_ENDPOINT (A) is used to fetch popular tech stories for 
// // // a certain query (a search term). In this case, we fetch stories about React (B)
// // const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?query=React';

// // const App = () => {  
// //   const [searchTerm, setSearchTerm] = useStorageState('search', 'React');
// //     const [stories, dispatchStories] = React.useReducer(
// //     storiesReducer,
// //     { data: [], isLoading: false, isError: false }
// //   );
  
// //   // exchanging the state updater function with the dispatch function. 
// //   // Then the dispatch function receives a distinct type and a payload
// //   React.useEffect(() => {
// //     // if (searchTerm === '') return;

// //     // if 'searchTerm' is not present e.g. null, empty string, undefined
// //     // do nothing
// //     // more generalized condition than searchTerm === ''
// //     if (!searchTerm) return;

// //     dispatchStories({ type: 'STORIES_FETCH_INIT' });

// //     // getAsyncStories()
// //     //   .then((result) => {
// //     //     dispatchStories({
// //     //       type: 'STORIES_FETCH_SUCCESS',
// //     //       payload: result.data.stories,
// //     //     });
// //     //   })
// //     fetch(`${API_ENDPOINT}${searchTerm}`) // B: the native browser's fetch API is used to make this request (B)
// //       .then((response) => response.json()) // C: the response needs to be translated into JSON (C)
// //       .then((result) => {
// //         dispatchStories({
// //           type: 'STORIES_FETCH_SUCCESS',
// //           payload: result.hits, // D: the returned result has a different data structure (D), which we send as payload to our component's state reducer
// //         })
// //       })
// //       .catch(() => 
// //         dispatchStories({ type: 'STORIES_FETCH_FAILURE' })
// //       );
// //   }, [searchTerm]);

// //   const handleRemoveStory = (item) => {
// //     dispatchStories({
// //       type: 'REMOVE_STORY',
// //       payload: item,
// //     })
// //   }

// //   const handleSearch = (event) => {
// //     // console.log(event.target.value);
// //     setSearchTerm(event.target.value);

// //     // localStorage.setItem('search', event.target.value);
// //   };

// //   // const searchedStories = stories.data.filter((story) => 
// //   //   story.title.toLowerCase().includes(searchTerm.toLowerCase())
// //   // );
  
// //   return (
// //     <div>
// //       <h1>My Hacker Stories</h1>
// //       {/* <Search search={searchTerm} onSearch={handleSearch} /> */}
      
// //       <InputWuthLabel
// //         id="search"
// //         //label="Search"
// //         value={searchTerm}
// //         isFocused
// //         onInputChange={handleSearch}
// //       >
// //         <strong>Search:</strong>
// //       </InputWuthLabel>
      
// //       <p>Searching for <strong>{searchTerm}</strong>.</p>
      
// //       <hr />
      
// //       {stories.isError && <p>Something went wrong...</p>}
      
// //       {stories.isLoading ? (
// //         <p>Loading...</p>
// //       ) : (
// //         <List list={stories.data} onRemoveItem={handleRemoveStory} />
// //       )}
// //     </div>
// //   );
// // };

// // const InputWuthLabel = ({ id, value, type='text', onInputChange, isFocused, children }) => {
// //   const inputRef = React.useRef();

// //   React.useEffect(() => {
// //     if (isFocused && inputRef.current) {
// //       inputRef.current.focus();
// //     }
// //   }, [isFocused]);
  
// //   return (
// //     <>
// //       <label htmlFor={id}>{children}</label>
// //       &nbsp;
// //       <input
// //         ref={inputRef}
// //         id={id}
// //         type={type}
// //         value={value}
// //         // autoFocus={isFocused}
// //         // note that `autoFocus` is a shorthand for `autoFocus={true}`
// //         // every attribute that is set to `true` can use this shorthand
// //         onChange={onInputChange}
// //       />
// //     </>
// //   );
// // };

// // const List = ({ list, onRemoveItem }) => {
// //   return (
// //     <ul>
// //       {list.map((item) => {
// //         return (
// //           <Item 
// //             key={item.objectId} 
// //             item={item} 
// //             onRemoveItem={onRemoveItem}
// //           />
// //         );
// //       })}
// //     </ul>
// //   );
// // }

// // const Item = ({ item, onRemoveItem }) => {
// //   // const handleRemoveItem = () => {
// //   //   onRemoveItem(item);
// //   // }
  
// //   return (
// //     <li>
// //       <span>
// //         <a href={item.url}>{item.title}</a>
// //       </span>
// //       <span>{item.author}</span>
// //       <span>{item.num_comments}</span>
// //       <span>{item.points}</span>
// //       <span>
// //         <button type="button" onClick={() => onRemoveItem(item)}>
// //           Dismiss
// //         </button>
// //       </span>
// //     </li>
// //   );
// // }

// // export default App;



// // // ----------------------------------------------------------------------------------
// // // Explicit Data Fetching
// // import * as React from 'react';
// // // import { useCallback } from 'react';

// // const useStorageState = (key, initialState) => {
// //   const [value, setValue] = React.useState(
// //     localStorage.getItem('key') || initialState
// //   );

// //   React.useEffect(() => {
// //       localStorage.setItem(key, value);
// //   }, [key, value]);

// //   return [value, setValue];
// // }

// // const storiesReducer = (state, action) => {
// //   switch (action.type) {
// //     case 'STORIES_FETCH_INIT':
// //       return {
// //         ...state,
// //         isLoading: true,
// //         isError: false,
// //       };
// //     case 'STORIES_FETCH_SUCCESS':
// //       return {
// //         ...state,
// //         isLoading: false,
// //         isError: false,
// //         data: action.payload,
// //       };
// //     case 'STORIES_FETCH_FAILURE':
// //       return {
// //         ...state,
// //         isLoading: false,
// //         isError: true,
// //       };
// //     case 'REMOVE_STORY':
// //       return {
// //         ...state,
// //         data: state.data.filter(
// //           (story) => action.payload.objectId !== story.objectId
// //         ),
// //       }
// //     default:
// //       throw new Error();
// //   }
// // };

// // // A: First, the API_ENDPOINT (A) is used to fetch popular tech stories for 
// // // a certain query (a search term). In this case, we fetch stories about React (B)
// // const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?query=React';

// // const App = () => {  
// //   const [searchTerm, setSearchTerm] = useStorageState('search', 'React');
// //   const [stories, dispatchStories] = React.useReducer(
// //     storiesReducer,
// //     { data: [], isLoading: false, isError: false }
// //   );
// //   const [url, setUrl] = React.useState(`${API_ENDPOINT}${searchTerm}`);
  
// //   const handleFetchStories = React.useCallback(() => {
// //     // if 'searchTerm' is not present e.g. null, empty string, undefined
// //     // do nothing
// //     // more generalized condition than searchTerm === ''
// //     // if (!searchTerm) return;

// //     dispatchStories({ type: 'STORIES_FETCH_INIT' });

// //     fetch(url) // B: the native browser's fetch API is used to make this request (B)
// //       .then((response) => response.json()) // C: the response needs to be translated into JSON (C)
// //       .then((result) => {
// //         dispatchStories({
// //           type: 'STORIES_FETCH_SUCCESS',
// //           payload: result.hits, // D: the returned result has a different data structure (D), which we send as payload to our component's state reducer
// //         })
// //       })
// //       .catch(() => 
// //         dispatchStories({ type: 'STORIES_FETCH_FAILURE' })
// //       );
// //   }, [url]);
// //   // exchanging the state updater function with the dispatch function. 
// //   // Then the dispatch function receives a distinct type and a payload
// //   React.useEffect(() => {
// //     handleFetchStories();
// //   }, [handleFetchStories]);

// //   const handleRemoveStory = (item) => {
// //     dispatchStories({
// //       type: 'REMOVE_STORY',
// //       payload: item,
// //     })
// //   }

// //   const handleSearchInput = (event) => {
// //     // console.log(event.target.value);
// //     setSearchTerm(event.target.value);
// //   };

// //   const handleSearchSubmit = () => {
// //     setUrl(`${API_ENDPOINT}${searchTerm}`);
// //   }
  
// //   return (
// //     <div>
// //       <h1>My Hacker Stories</h1>
// //       {/* <Search search={searchTerm} onSearch={handleSearch} /> */}
      
// //       <InputWuthLabel
// //         id="search"
// //         //label="Search"
// //         value={searchTerm}
// //         isFocused
// //         // onInputChange={handleSearch}
// //         onInputChange={handleSearchInput}
// //       >
// //         <strong>Search:</strong>
// //       </InputWuthLabel>
      
// //       <button
// //         type='button'
// //         disabled={!searchTerm}
// //         onClick={handleSearchSubmit}
// //       >
// //         Submit
// //       </button>

// //       <p>Searching for <strong>{searchTerm}</strong>.</p>
      
// //       <hr />
      
// //       {stories.isError && <p>Something went wrong...</p>}
      
// //       {stories.isLoading ? (
// //         <p>Loading...</p>
// //       ) : (
// //         <List list={stories.data} onRemoveItem={handleRemoveStory} />
// //       )}
// //     </div>
// //   );
// // };

// // const InputWuthLabel = ({ id, value, type='text', onInputChange, isFocused, children }) => {
// //   const inputRef = React.useRef();

// //   React.useEffect(() => {
// //     if (isFocused && inputRef.current) {
// //       inputRef.current.focus();
// //     }
// //   }, [isFocused]);
  
// //   return (
// //     <>
// //       <label htmlFor={id}>{children}</label>
// //       &nbsp;
// //       <input
// //         ref={inputRef}
// //         id={id}
// //         type={type}
// //         value={value}
// //         // autoFocus={isFocused}
// //         // note that `autoFocus` is a shorthand for `autoFocus={true}`
// //         // every attribute that is set to `true` can use this shorthand
// //         onChange={onInputChange}
// //       />
// //     </>
// //   );
// // };

// // const List = ({ list, onRemoveItem }) => {
// //   return (
// //     <ul>
// //       {list.map((item) => {
// //         return (
// //           <Item 
// //             key={item.objectId} 
// //             item={item} 
// //             onRemoveItem={onRemoveItem}
// //           />
// //         );
// //       })}
// //     </ul>
// //   );
// // }

// // const Item = ({ item, onRemoveItem }) => {
// //   // const handleRemoveItem = () => {
// //   //   onRemoveItem(item);
// //   // }
  
// //   return (
// //     <li>
// //       <span>
// //         <a href={item.url}>{item.title}</a>
// //       </span>
// //       <span>{item.author}</span>
// //       <span>{item.num_comments}</span>
// //       <span>{item.points}</span>
// //       <span>
// //         <button type="button" onClick={() => onRemoveItem(item)}>
// //           Dismiss
// //         </button>
// //       </span>
// //     </li>
// //   );
// // }

// // export default App;



// // // // ----------------------------------------------------------------------------------
// // // // Third-Party Libraries
// // import * as React from 'react';
// // import axios from 'axios';
// // // import { useCallback } from 'react';

// // const useStorageState = (key, initialState) => {
// //   const [value, setValue] = React.useState(
// //     localStorage.getItem('key') || initialState
// //   );

// //   React.useEffect(() => {
// //       localStorage.setItem(key, value);
// //   }, [key, value]);

// //   return [value, setValue];
// // }

// // const storiesReducer = (state, action) => {
// //   switch (action.type) {
// //     case 'STORIES_FETCH_INIT':
// //       return {
// //         ...state,
// //         isLoading: true,
// //         isError: false,
// //       };
// //     case 'STORIES_FETCH_SUCCESS':
// //       return {
// //         ...state,
// //         isLoading: false,
// //         isError: false,
// //         data: action.payload,
// //       };
// //     case 'STORIES_FETCH_FAILURE':
// //       return {
// //         ...state,
// //         isLoading: false,
// //         isError: true,
// //       };
// //     case 'REMOVE_STORY':
// //       return {
// //         ...state,
// //         data: state.data.filter(
// //           (story) => action.payload.objectId !== story.objectId
// //         ),
// //       }
// //     default:
// //       throw new Error();
// //   }
// // };

// // // A: First, the API_ENDPOINT (A) is used to fetch popular tech stories for 
// // // a certain query (a search term). In this case, we fetch stories about React (B)
// // const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?query=React';

// // const App = () => {  
// //   const [searchTerm, setSearchTerm] = useStorageState('search', 'React');
// //   const [stories, dispatchStories] = React.useReducer(
// //     storiesReducer,
// //     { data: [], isLoading: false, isError: false }
// //   );
// //   const [url, setUrl] = React.useState(`${API_ENDPOINT}${searchTerm}`);
  
// //   const handleFetchStories = React.useCallback(() => {
// //     // if 'searchTerm' is not present e.g. null, empty string, undefined
// //     // do nothing
// //     // more generalized condition than searchTerm === ''
// //     // if (!searchTerm) return;

// //     dispatchStories({ type: 'STORIES_FETCH_INIT' });

// //     // fetch(url) // B: the native browser's fetch API is used to make this request (B)
// //     axios
// //       .get(url)
// //       // .then((response) => response.json()) // C: the response needs to be translated into JSON (C)
// //       .then((result) => {
// //         dispatchStories({
// //           type: 'STORIES_FETCH_SUCCESS',
// //           payload: result.data.hits, // D: the returned result has a different data structure (D), which we send as payload to our component's state reducer
// //         })
// //       })
// //       .catch(() => 
// //         dispatchStories({ type: 'STORIES_FETCH_FAILURE' })
// //       );
// //   }, [url]);
// //   // exchanging the state updater function with the dispatch function. 
// //   // Then the dispatch function receives a distinct type and a payload
// //   React.useEffect(() => {
// //     handleFetchStories();
// //   }, [handleFetchStories]);

// //   const handleRemoveStory = (item) => {
// //     dispatchStories({
// //       type: 'REMOVE_STORY',
// //       payload: item,
// //     })
// //   }

// //   const handleSearchInput = (event) => {
// //     // console.log(event.target.value);
// //     setSearchTerm(event.target.value);
// //   };

// //   const handleSearchSubmit = () => {
// //     setUrl(`${API_ENDPOINT}${searchTerm}`);
// //   }
  
// //   return (
// //     <div>
// //       <h1>My Hacker Stories</h1>
// //       {/* <Search search={searchTerm} onSearch={handleSearch} /> */}
      
// //       <InputWuthLabel
// //         id="search"
// //         //label="Search"
// //         value={searchTerm}
// //         isFocused
// //         // onInputChange={handleSearch}
// //         onInputChange={handleSearchInput}
// //       >
// //         <strong>Search:</strong>
// //       </InputWuthLabel>
      
// //       <button
// //         type='button'
// //         disabled={!searchTerm}
// //         onClick={handleSearchSubmit}
// //       >
// //         Submit
// //       </button>

// //       <p>Searching for <strong>{searchTerm}</strong>.</p>
      
// //       <hr />
      
// //       {stories.isError && <p>Something went wrong...</p>}
      
// //       {stories.isLoading ? (
// //         <p>Loading...</p>
// //       ) : (
// //         <List list={stories.data} onRemoveItem={handleRemoveStory} />
// //       )}
// //     </div>
// //   );
// // };

// // const InputWuthLabel = ({ id, value, type='text', onInputChange, isFocused, children }) => {
// //   const inputRef = React.useRef();

// //   React.useEffect(() => {
// //     if (isFocused && inputRef.current) {
// //       inputRef.current.focus();
// //     }
// //   }, [isFocused]);
  
// //   return (
// //     <>
// //       <label htmlFor={id}>{children}</label>
// //       &nbsp;
// //       <input
// //         ref={inputRef}
// //         id={id}
// //         type={type}
// //         value={value}
// //         // autoFocus={isFocused}
// //         // note that `autoFocus` is a shorthand for `autoFocus={true}`
// //         // every attribute that is set to `true` can use this shorthand
// //         onChange={onInputChange}
// //       />
// //     </>
// //   );
// // };

// // const List = ({ list, onRemoveItem }) => {
// //   return (
// //     <ul>
// //       {list.map((item) => {
// //         return (
// //           <Item 
// //             key={item.objectId} 
// //             item={item} 
// //             onRemoveItem={onRemoveItem}
// //           />
// //         );
// //       })}
// //     </ul>
// //   );
// // }

// // const Item = ({ item, onRemoveItem }) => {
// //   // const handleRemoveItem = () => {
// //   //   onRemoveItem(item);
// //   // }
  
// //   return (
// //     <li>
// //       <span>
// //         <a href={item.url}>{item.title}</a>
// //       </span>
// //       <span>{item.author}</span>
// //       <span>{item.num_comments}</span>
// //       <span>{item.points}</span>
// //       <span>
// //         <button type="button" onClick={() => onRemoveItem(item)}>
// //           Dismiss
// //         </button>
// //       </span>
// //     </li>
// //   );
// // }

// // export default App;




// // // ----------------------------------------------------------------------------------
// // // Async/Await in React
// // import * as React from 'react';
// // import axios from 'axios';
// // // import { useCallback } from 'react';

// // const useStorageState = (key, initialState) => {
// //   const [value, setValue] = React.useState(
// //     localStorage.getItem('key') || initialState
// //   );

// //   React.useEffect(() => {
// //       localStorage.setItem(key, value);
// //   }, [key, value]);

// //   return [value, setValue];
// // }

// // const storiesReducer = (state, action) => {
// //   switch (action.type) {
// //     case 'STORIES_FETCH_INIT':
// //       return {
// //         ...state,
// //         isLoading: true,
// //         isError: false,
// //       };
// //     case 'STORIES_FETCH_SUCCESS':
// //       return {
// //         ...state,
// //         isLoading: false,
// //         isError: false,
// //         data: action.payload,
// //       };
// //     case 'STORIES_FETCH_FAILURE':
// //       return {
// //         ...state,
// //         isLoading: false,
// //         isError: true,
// //       };
// //     case 'REMOVE_STORY':
// //       return {
// //         ...state,
// //         data: state.data.filter(
// //           (story) => action.payload.objectId !== story.objectId
// //         ),
// //       }
// //     default:
// //       throw new Error();
// //   }
// // };

// // // A: First, the API_ENDPOINT (A) is used to fetch popular tech stories for 
// // // a certain query (a search term). In this case, we fetch stories about React (B)
// // const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?query=React';

// // const App = () => {  
// //   const [searchTerm, setSearchTerm] = useStorageState('search', 'React');
// //   const [stories, dispatchStories] = React.useReducer(
// //     storiesReducer,
// //     { data: [], isLoading: false, isError: false }
// //   );
// //   const [url, setUrl] = React.useState(`${API_ENDPOINT}${searchTerm}`);
  
// //   // use async/await
// //   const handleFetchStories = React.useCallback(async () => {
// //     // if 'searchTerm' is not present e.g. null, empty string, undefined
// //     // do nothing
// //     // more generalized condition than searchTerm === ''
// //     // if (!searchTerm) return;

// //     dispatchStories({ type: 'STORIES_FETCH_INIT' });

// //     try {    
// //       const result = await axios.get(url);

// //       dispatchStories({
// //         type: 'STORIES_FETCH_SUCCESS',
// //         payload: result.data.hits,
// //       });
// //     } catch {
// //       dispatchStories({ type: 'STORIES_FETCH_FAILURE'});
// //     }
// //   }, [url]);

// //   //   // fetch(url) // B: the native browser's fetch API is used to make this request (B)
// //   //   axios
// //   //     .get(url)
// //   //     // .then((response) => response.json()) // C: the response needs to be translated into JSON (C)
// //   //     .then((result) => {
// //   //       dispatchStories({
// //   //         type: 'STORIES_FETCH_SUCCESS',
// //   //         payload: result.data.hits, // D: the returned result has a different data structure (D), which we send as payload to our component's state reducer
// //   //       })
// //   //     })
// //   //     .catch(() => 
// //   //       dispatchStories({ type: 'STORIES_FETCH_FAILURE' })
// //   //     );
// //   // }, [url]);
  
// //   // exchanging the state updater function with the dispatch function. 
// //   // Then the dispatch function receives a distinct type and a payload
// //   React.useEffect(() => {
// //     handleFetchStories();
// //   }, [handleFetchStories]);

// //   const handleRemoveStory = (item) => {
// //     dispatchStories({
// //       type: 'REMOVE_STORY',
// //       payload: item,
// //     })
// //   }

// //   const handleSearchInput = (event) => {
// //     // console.log(event.target.value);
// //     setSearchTerm(event.target.value);
// //   };

// //   const handleSearchSubmit = () => {
// //     setUrl(`${API_ENDPOINT}${searchTerm}`);
// //   }
  
// //   return (
// //     <div>
// //       <h1>My Hacker Stories</h1>
// //       {/* <Search search={searchTerm} onSearch={handleSearch} /> */}
      
// //       <InputWuthLabel
// //         id="search"
// //         //label="Search"
// //         value={searchTerm}
// //         isFocused
// //         // onInputChange={handleSearch}
// //         onInputChange={handleSearchInput}
// //       >
// //         <strong>Search:</strong>
// //       </InputWuthLabel>
      
// //       <button
// //         type='button'
// //         disabled={!searchTerm}
// //         onClick={handleSearchSubmit}
// //       >
// //         Submit
// //       </button>

// //       <p>Searching for <strong>{searchTerm}</strong>.</p>
      
// //       <hr />
      
// //       {stories.isError && <p>Something went wrong...</p>}
      
// //       {stories.isLoading ? (
// //         <p>Loading...</p>
// //       ) : (
// //         <List list={stories.data} onRemoveItem={handleRemoveStory} />
// //       )}
// //     </div>
// //   );
// // };

// // const InputWuthLabel = ({ id, value, type='text', onInputChange, isFocused, children }) => {
// //   const inputRef = React.useRef();

// //   React.useEffect(() => {
// //     if (isFocused && inputRef.current) {
// //       inputRef.current.focus();
// //     }
// //   }, [isFocused]);
  
// //   return (
// //     <>
// //       <label htmlFor={id}>{children}</label>
// //       &nbsp;
// //       <input
// //         ref={inputRef}
// //         id={id}
// //         type={type}
// //         value={value}
// //         // autoFocus={isFocused}
// //         // note that `autoFocus` is a shorthand for `autoFocus={true}`
// //         // every attribute that is set to `true` can use this shorthand
// //         onChange={onInputChange}
// //       />
// //     </>
// //   );
// // };

// // const List = ({ list, onRemoveItem }) => {
// //   return (
// //     <ul>
// //       {list.map((item) => {
// //         return (
// //           <Item 
// //             key={item.objectId} 
// //             item={item} 
// //             onRemoveItem={onRemoveItem}
// //           />
// //         );
// //       })}
// //     </ul>
// //   );
// // }

// // const Item = ({ item, onRemoveItem }) => {
// //   // const handleRemoveItem = () => {
// //   //   onRemoveItem(item);
// //   // }
  
// //   return (
// //     <li>
// //       <span>
// //         <a href={item.url}>{item.title}</a>
// //       </span>
// //       <span>{item.author}</span>
// //       <span>{item.num_comments}</span>
// //       <span>{item.points}</span>
// //       <span>
// //         <button type="button" onClick={() => onRemoveItem(item)}>
// //           Dismiss
// //         </button>
// //       </span>
// //     </li>
// //   );
// // }

// // export default App;



// // ----------------------------------------------------------------------------------
// // Form in React
// import * as React from 'react';
// import axios from 'axios';
// // import { useCallback } from 'react';

// const useStorageState = (key, initialState) => {
//   const [value, setValue] = React.useState(
//     localStorage.getItem('key') || initialState
//   );

//   React.useEffect(() => {
//       localStorage.setItem(key, value);
//   }, [key, value]);

//   return [value, setValue];
// }

// const storiesReducer = (state, action) => {
//   switch (action.type) {
//     case 'STORIES_FETCH_INIT':
//       return {
//         ...state,
//         isLoading: true,
//         isError: false,
//       };
//     case 'STORIES_FETCH_SUCCESS':
//       return {
//         ...state,
//         isLoading: false,
//         isError: false,
//         data: action.payload,
//       };
//     case 'STORIES_FETCH_FAILURE':
//       return {
//         ...state,
//         isLoading: false,
//         isError: true,
//       };
//     case 'REMOVE_STORY':
//       return {
//         ...state,
//         data: state.data.filter(
//           (story) => action.payload.objectId !== story.objectId
//         ),
//       }
//     default:
//       throw new Error();
//   }
// };

// // A: First, the API_ENDPOINT (A) is used to fetch popular tech stories for 
// // a certain query (a search term). In this case, we fetch stories about React (B)
// const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?query=React';

// const App = () => {  
//   const [searchTerm, setSearchTerm] = useStorageState('search', 'React');
//   const [stories, dispatchStories] = React.useReducer(
//     storiesReducer,
//     { data: [], isLoading: false, isError: false }
//   );
//   const [url, setUrl] = React.useState(`${API_ENDPOINT}${searchTerm}`);
  
//   // use async/await
//   const handleFetchStories = React.useCallback(async () => {
//     // if 'searchTerm' is not present e.g. null, empty string, undefined
//     // do nothing
//     // more generalized condition than searchTerm === ''
//     // if (!searchTerm) return;

//     dispatchStories({ type: 'STORIES_FETCH_INIT' });

//     try {    
//       const result = await axios.get(url);

//       dispatchStories({
//         type: 'STORIES_FETCH_SUCCESS',
//         payload: result.data.hits,
//       });
//     } catch {
//       dispatchStories({ type: 'STORIES_FETCH_FAILURE'});
//     }
//   }, [url]);
  
//   // exchanging the state updater function with the dispatch function. 
//   // Then the dispatch function receives a distinct type and a payload
//   React.useEffect(() => {
//     handleFetchStories();
//   }, [handleFetchStories]);

//   const handleRemoveStory = (item) => {
//     dispatchStories({
//       type: 'REMOVE_STORY',
//       payload: item,
//     })
//   }

//   const handleSearchInput = (event) => {
//     // console.log(event.target.value);
//     setSearchTerm(event.target.value);
//   };

//   const handleSearchSubmit = (event) => {
//     setUrl(`${API_ENDPOINT}${searchTerm}`);
//     event.preventDefault();
//   };
  
//   return (
//     <div>
//       <h1>My Hacker Stories</h1>
//       {/* <Search search={searchTerm} onSearch={handleSearch} /> */}
      
//       <SearchForm 
//         searchTerm={searchTerm}
//         onSearchInput={handleSearchInput}
//         onSearchSubmit={handleSearchSubmit}
//       />

//       <p>Searching for <strong>{searchTerm}</strong>.</p>
      
//       <hr />
      
//       {stories.isError && <p>Something went wrong...</p>}
      
//       {stories.isLoading ? (
//         <p>Loading...</p>
//       ) : (
//         <List list={stories.data} onRemoveItem={handleRemoveStory} />
//       )}
//     </div>
//   );
// };

// const SearchForm = ({ searchTerm, onSearchInput, onSearchSubmit }) => (
//   <form onSubmit={onSearchSubmit}>
//     <InputWuthLabel
//       id="search"
//       //label="Search"
//       value={searchTerm}
//       isFocused
//       // onInputChange={handleSearch}
//       onInputChange={onSearchInput}
//     >
//       <strong>Search:</strong>
//     </InputWuthLabel>

//     <button
//       type='submit'
//       disabled={!searchTerm}
//       // onClick={handleSearchSubmit}
//     >
//       Submit
//     </button>
//   </form>
// );

// const InputWuthLabel = ({ id, value, type='text', onInputChange, isFocused, children }) => {
//   const inputRef = React.useRef();

//   React.useEffect(() => {
//     if (isFocused && inputRef.current) {
//       inputRef.current.focus();
//     }
//   }, [isFocused]);
  
//   return (
//     <>
//       <label htmlFor={id}>{children}</label>
//       &nbsp;
//       <input
//         ref={inputRef}
//         id={id}
//         type={type}
//         value={value}
//         // autoFocus={isFocused}
//         // note that `autoFocus` is a shorthand for `autoFocus={true}`
//         // every attribute that is set to `true` can use this shorthand
//         onChange={onInputChange}
//       />
//     </>
//   );
// };

// const List = ({ list, onRemoveItem }) => {
//   return (
//     <ul>
//       {list.map((item) => {
//         return (
//           <Item 
//             key={item.objectId} 
//             item={item} 
//             onRemoveItem={onRemoveItem}
//           />
//         );
//       })}
//     </ul>
//   );
// }

// const Item = ({ item, onRemoveItem }) => {
//   // const handleRemoveItem = () => {
//   //   onRemoveItem(item);
//   // }
  
//   return (
//     <li>
//       <span>
//         <a href={item.url}>{item.title}</a>
//       </span>
//       <span>{item.author}</span>
//       <span>{item.num_comments}</span>
//       <span>{item.points}</span>
//       <span>
//         <button type="button" onClick={() => onRemoveItem(item)}>
//           Dismiss
//         </button>
//       </span>
//     </li>
//   );
// }

// export default App;



// import * as React from 'react';
// const initialStories = [
//   {
//     title: 'React',
//     url: 'https://reactjs.org/',
//     author: 'Jordan Walke',
//     num_comments: 3,
//     points: 4,
//     objectID: 0,
//   },
//   {
//     title: 'Redux',
//     url: 'https://redux.js.org/',
//     author: 'Dan Abramov, Andrew Clark',
//     num_comments: 2,
//     points: 5,
//     objectID: 1,
//   },
// ];

// const getAsyncStories = () =>
//   new Promise((resolve) =>
//     setTimeout(
//       () => resolve({ data: { stories: initialStories } }),
//       2000
//     )
//   );

// // const useStorageState = (key, initialState) => {
// //   const [value, setValue] = React.useState(
// //     localStorage.getItem(key) || initialState
// //     );
// //   React.useEffect(() => {
// //     localStorage.setItem(key, value);
// //   }, [value, key]);
// //   return [value, setValue];
// // };
// const App = () => {
//   // const [searchTerm, setSearchTerm] = useStorageState(
//   //   'search',
//   //   'React'
//   // );

//   const [stories, setStories] = React.useState([]);

//   React.useEffect(() => {
//     getAsyncStories().then((result) => {
//       setStories(result.data.stories);
//     });
//   }, []);

//   // const handleRemoveStory = (item) => {
//   //   const newStories = stories.filter(
//   //     (story) => item.objectID !== story.objectID
//   //   );
//   //   setStories(newStories);
//   // };
//   // const handleSearch = (event) => {
//   //   setSearchTerm(event.target.value);
//   // };
//   // const searchedStories = stories.filter((story) =>
//   //   story.title.toLowerCase().includes(searchTerm.toLowerCase())
//   // );
//   return (
//     <div>
//       <h1>My Hacker Stories</h1>
//       <InputWithLabel
//         id="search"
//         value={searchTerm}
//         isFocused
//         onInputChange={handleSearch}
//       >
//         <strong>Search:</strong>
//       </InputWithLabel>
//       <hr />
//       <List list={searchedStories} onRemoveItem={handleRemoveStory} />
//     </div>
//   );
// };

// // const InputWithLabel = ({
// //   id,
// //   value,
// //   type = 'text',
// //   onInputChange,
// //   isFocused,
// //   children,
// // }) => {
// //   const inputRef = React.useRef();
// //   React.useEffect(() => {
// //     if (isFocused && inputRef.current) {
// //       inputRef.current.focus();
// //     }
// //   }, [isFocused]);
// //   return (
// //     <>
// //       <label htmlFor={id}>{children}</label>
// //       &nbsp;
// //       <input
// //         ref={inputRef}
// //         id={id}
// //         type={type}
// //         value={value}
// //         onChange={onInputChange}
// //       />
// //     </>
// //   );
// // };
// // const List = ({ list, onRemoveItem }) => (
// //   <ul>
// //     {list.map((item) => (
// //       <Item
// //         key={item.objectID}
// //         item={item}
// //         onRemoveItem={onRemoveItem}
// //       />
// //     ))}
// //   </ul>
// // );
// // const Item = ({ item, onRemoveItem }) => (
// //   <li>
// //     <span>
// //       <a href={item.url}>{item.title}</a>
// //     </span>
// //     <span>{item.author}</span>
// //     <span>{item.num_comments}</span>
// //     <span>{item.points}</span>
// //     <span>
// //       <button type="button" onClick={() => onRemoveItem(item)}>
// //         Dismiss
// //       </button>
// //     </span>
// //   </li>
// // );
// export default App;


// // ----------------------------------------------------------------------------------
// // Styling in React
// // CSS
// import * as React from 'react';
// import axios from 'axios';
// import './App.css';
// // import { useCallback } from 'react';

// const useStorageState = (key, initialState) => {
//   const [value, setValue] = React.useState(
//     localStorage.getItem('key') || initialState
//   );

//   React.useEffect(() => {
//       localStorage.setItem(key, value);
//   }, [key, value]);

//   return [value, setValue];
// }

// const storiesReducer = (state, action) => {
//   switch (action.type) {
//     case 'STORIES_FETCH_INIT':
//       return {
//         ...state,
//         isLoading: true,
//         isError: false,
//       };
//     case 'STORIES_FETCH_SUCCESS':
//       return {
//         ...state,
//         isLoading: false,
//         isError: false,
//         data: action.payload,
//       };
//     case 'STORIES_FETCH_FAILURE':
//       return {
//         ...state,
//         isLoading: false,
//         isError: true,
//       };
//     case 'REMOVE_STORY':
//       return {
//         ...state,
//         data: state.data.filter(
//           (story) => action.payload.objectId !== story.objectId
//         ),
//       }
//     default:
//       throw new Error();
//   }
// };

// // A: First, the API_ENDPOINT (A) is used to fetch popular tech stories for 
// // a certain query (a search term). In this case, we fetch stories about React (B)
// const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?query=React';

// const App = () => {  
//   const [searchTerm, setSearchTerm] = useStorageState('search', 'React');
//   const [stories, dispatchStories] = React.useReducer(
//     storiesReducer,
//     { data: [], isLoading: false, isError: false }
//   );
//   const [url, setUrl] = React.useState(`${API_ENDPOINT}${searchTerm}`);
  
//   // use async/await
//   const handleFetchStories = React.useCallback(async () => {
//     // if 'searchTerm' is not present e.g. null, empty string, undefined
//     // do nothing
//     // more generalized condition than searchTerm === ''
//     // if (!searchTerm) return;

//     dispatchStories({ type: 'STORIES_FETCH_INIT' });

//     try {    
//       const result = await axios.get(url);

//       dispatchStories({
//         type: 'STORIES_FETCH_SUCCESS',
//         payload: result.data.hits,
//       });
//     } catch {
//       dispatchStories({ type: 'STORIES_FETCH_FAILURE'});
//     }
//   }, [url]);
  
//   // exchanging the state updater function with the dispatch function. 
//   // Then the dispatch function receives a distinct type and a payload
//   React.useEffect(() => {
//     handleFetchStories();
//   }, [handleFetchStories]);

//   const handleRemoveStory = (item) => {
//     dispatchStories({
//       type: 'REMOVE_STORY',
//       payload: item,
//     })
//   }

//   const handleSearchInput = (event) => {
//     // console.log(event.target.value);
//     setSearchTerm(event.target.value);
//   };

//   const handleSearchSubmit = (event) => {
//     setUrl(`${API_ENDPOINT}${searchTerm}`);
//     event.preventDefault();
//   };
  
//   return (
//     <div className="container">
//       <h1 className="headline-primary">My Hacker Stories</h1>
//       {/* <Search search={searchTerm} onSearch={handleSearch} /> */}
      
//       <SearchForm 
//         searchTerm={searchTerm}
//         onSearchInput={handleSearchInput}
//         onSearchSubmit={handleSearchSubmit}
//       />

//       <p>Searching for <strong>{searchTerm}</strong>.</p>
      
//       {/* <hr /> */}
      
//       {stories.isError && <p>Something went wrong...</p>}
      
//       {stories.isLoading ? (
//         <p>Loading...</p>
//       ) : (
//         <List list={stories.data} onRemoveItem={handleRemoveStory} />
//       )}
//     </div>
//   );
// };

// const SearchForm = ({ searchTerm, onSearchInput, onSearchSubmit }) => (
//   <form onSubmit={onSearchSubmit} className="search-form">
//     <InputWuthLabel
//       id="search"
//       //label="Search"
//       value={searchTerm}
//       isFocused
//       // onInputChange={handleSearch}
//       onInputChange={onSearchInput}
//     >
//       <strong>Search:</strong>
//     </InputWuthLabel>

//     <button
//       type='submit'
//       disabled={!searchTerm}
//       // onClick={handleSearchSubmit}
//       className="button button_large"
//     >
//       Submit
//     </button>
//   </form>
// );

// const InputWuthLabel = ({ id, value, type='text', onInputChange, isFocused, children }) => {
//   const inputRef = React.useRef();

//   React.useEffect(() => {
//     if (isFocused && inputRef.current) {
//       inputRef.current.focus();
//     }
//   }, [isFocused]);
  
//   return (
//     <>
//       <label htmlFor={id} className='label'>{children}</label>
//       &nbsp;
//       <input
//         ref={inputRef}
//         id={id}
//         type={type}
//         value={value}
//         // autoFocus={isFocused}
//         // note that `autoFocus` is a shorthand for `autoFocus={true}`
//         // every attribute that is set to `true` can use this shorthand
//         onChange={onInputChange}
//         className="input"
//       />
//     </>
//   );
// };

// const List = ({ list, onRemoveItem }) => {
//   return (
//     <ul>
//       {list.map((item) => {
//         return (
//           <Item 
//             key={item.objectId} 
//             item={item} 
//             onRemoveItem={onRemoveItem}
//           />
//         );
//       })}
//     </ul>
//   );
// }

// const Item = ({ item, onRemoveItem }) => (
//   <li className="item">
//     <span style={{ width: '40%' }}>
//       <a href={item.url}>{item.title}</a>
//     </span>
//     <span style={{ width: '30%' }}>{item.author}</span>
//     <span style={{ width: '10%' }}>{item.num_comments}</span>
//     <span style={{ width: '10%' }}>{item.points}</span>
//     <span style={{ width: '10%' }}>
//       <button className="button button_small" type="button" onClick={() => onRemoveItem(item)}>
//         Dismiss
//       </button>
//       </span>
//     </li>
//   );

// export default App;


// // ----------------------------------------------------------------------------------
// // Styling in React
// // CSS Modules
// import * as React from 'react';
// import axios from 'axios';
// import styles from './App.module.css';
// import clsx from 'clsx';

// const useStorageState = (key, initialState) => {
//   const [value, setValue] = React.useState(
//     localStorage.getItem('key') || initialState
//   );

//   React.useEffect(() => {
//       localStorage.setItem(key, value);
//   }, [key, value]);

//   return [value, setValue];
// }

// const storiesReducer = (state, action) => {
//   switch (action.type) {
//     case 'STORIES_FETCH_INIT':
//       return {
//         ...state,
//         isLoading: true,
//         isError: false,
//       };
//     case 'STORIES_FETCH_SUCCESS':
//       return {
//         ...state,
//         isLoading: false,
//         isError: false,
//         data: action.payload,
//       };
//     case 'STORIES_FETCH_FAILURE':
//       return {
//         ...state,
//         isLoading: false,
//         isError: true,
//       };
//     case 'REMOVE_STORY':
//       return {
//         ...state,
//         data: state.data.filter(
//           (story) => action.payload.objectId !== story.objectId
//         ),
//       }
//     default:
//       throw new Error();
//   }
// };

// // A: First, the API_ENDPOINT (A) is used to fetch popular tech stories for 
// // a certain query (a search term). In this case, we fetch stories about React (B)
// const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?query=React';

// const App = () => {  
//   const [searchTerm, setSearchTerm] = useStorageState('search', 'React');
//   const [stories, dispatchStories] = React.useReducer(
//     storiesReducer,
//     { data: [], isLoading: false, isError: false }
//   );
//   const [url, setUrl] = React.useState(`${API_ENDPOINT}${searchTerm}`);
  
//   // use async/await
//   const handleFetchStories = React.useCallback(async () => {
//     // if 'searchTerm' is not present e.g. null, empty string, undefined
//     // do nothing
//     // more generalized condition than searchTerm === ''
//     // if (!searchTerm) return;

//     dispatchStories({ type: 'STORIES_FETCH_INIT' });

//     try {    
//       const result = await axios.get(url);

//       dispatchStories({
//         type: 'STORIES_FETCH_SUCCESS',
//         payload: result.data.hits,
//       });
//     } catch {
//       dispatchStories({ type: 'STORIES_FETCH_FAILURE'});
//     }
//   }, [url]);
  
//   // exchanging the state updater function with the dispatch function. 
//   // Then the dispatch function receives a distinct type and a payload
//   React.useEffect(() => {
//     handleFetchStories();
//   }, [handleFetchStories]);

//   const handleRemoveStory = (item) => {
//     dispatchStories({
//       type: 'REMOVE_STORY',
//       payload: item,
//     })
//   }

//   const handleSearchInput = (event) => {
//     // console.log(event.target.value);
//     setSearchTerm(event.target.value);
//   };

//   const handleSearchSubmit = (event) => {
//     setUrl(`${API_ENDPOINT}${searchTerm}`);
//     event.preventDefault();
//   };
  
//   return (
//     <div className={styles.container}>
//       <h1 className={styles.headlinePrimary}>My Hacker Stories</h1>
//       {/* <Search search={searchTerm} onSearch={handleSearch} /> */}
      
//       <SearchForm 
//         searchTerm={searchTerm}
//         onSearchInput={handleSearchInput}
//         onSearchSubmit={handleSearchSubmit}
//       />

//       <p>Searching for <strong>{searchTerm}</strong>.</p>
      
//       {/* <hr /> */}
      
//       {stories.isError && <p>Something went wrong...</p>}
      
//       {stories.isLoading ? (
//         <p>Loading...</p>
//       ) : (
//         <List list={stories.data} onRemoveItem={handleRemoveStory} />
//       )}
//     </div>
//   );
// };

// const SearchForm = ({ searchTerm, onSearchInput, onSearchSubmit }) => (
//   <form onSubmit={onSearchSubmit} className={styles.searchForm}>
//     <InputWuthLabel
//       id="search"
//       //label="Search"
//       value={searchTerm}
//       isFocused
//       // onInputChange={handleSearch}
//       onInputChange={onSearchInput}
//     >
//       <strong>Search:</strong>
//     </InputWuthLabel>

//     <button
//       type='submit'
//       disabled={!searchTerm}
//       // onClick={handleSearchSubmit}
//       className={`${styles.button} ${styles.buttonLarge}`}
//       // somewhere in a className attribute
//       // className={clsx(styles.button, styles.buttonLarge)} //2
//       // className={clsx(styles.button, { [styles.buttonLarge]: isLarge })} //3
//     >
//       Submit
//     </button>
//   </form>
// );

// const InputWuthLabel = ({ id, value, type='text', onInputChange, isFocused, children }) => {
//   const inputRef = React.useRef();

//   React.useEffect(() => {
//     if (isFocused && inputRef.current) {
//       inputRef.current.focus();
//     }
//   }, [isFocused]);
  
//   return (
//     <>
//       <label htmlFor={id} className={styles.label}>{children}</label>
//       &nbsp;
//       <input
//         ref={inputRef}
//         id={id}
//         type={type}
//         value={value}
//         // autoFocus={isFocused}
//         // note that `autoFocus` is a shorthand for `autoFocus={true}`
//         // every attribute that is set to `true` can use this shorthand
//         onChange={onInputChange}
//         className={styles.input}
//       />
//     </>
//   );
// };

// const List = ({ list, onRemoveItem }) => {
//   return (
//     <ul>
//       {list.map((item) => {
//         return (
//           <Item 
//             key={item.objectId} 
//             item={item} 
//             onRemoveItem={onRemoveItem}
//           />
//         );
//       })}
//     </ul>
//   );
// }

// const Item = ({ item, onRemoveItem }) => (
//   <li className={styles.item}>
//     <span style={{ width: '40%' }}>
//       <a href={item.url}>{item.title}</a>
//     </span>
//     <span style={{ width: '30%' }}>{item.author}</span>
//     <span style={{ width: '10%' }}>{item.num_comments}</span>
//     <span style={{ width: '10%' }}>{item.points}</span>
//     <span style={{ width: '10%' }}>
//       <button className={`${styles.button} ${styles.buttonSmall}`} type="button" onClick={() => onRemoveItem(item)}>
//         Dismiss
//       </button>
//       </span>
//     </li>
//   );

// export default App;


// // ----------------------------------------------------------------------------------
// // Styling in React
// // Styled Component (CSS-in-JS)
// import * as React from 'react';
// import axios from 'axios';
// import styled from 'styled-components';

// const useStorageState = (key, initialState) => {
//   const [value, setValue] = React.useState(
//     localStorage.getItem('key') || initialState
//   );

//   React.useEffect(() => {
//       localStorage.setItem(key, value);
//   }, [key, value]);

//   return [value, setValue];
// }

// const storiesReducer = (state, action) => {
//   switch (action.type) {
//     case 'STORIES_FETCH_INIT':
//       return {
//         ...state,
//         isLoading: true,
//         isError: false,
//       };
//     case 'STORIES_FETCH_SUCCESS':
//       return {
//         ...state,
//         isLoading: false,
//         isError: false,
//         data: action.payload,
//       };
//     case 'STORIES_FETCH_FAILURE':
//       return {
//         ...state,
//         isLoading: false,
//         isError: true,
//       };
//     case 'REMOVE_STORY':
//       return {
//         ...state,
//         data: state.data.filter(
//           (story) => action.payload.objectId !== story.objectId
//         ),
//       }
//     default:
//       throw new Error();
//   }
// };

// // A: First, the API_ENDPOINT (A) is used to fetch popular tech stories for 
// // a certain query (a search term). In this case, we fetch stories about React (B)
// const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?query=React';

// const StyledContainer = styled.div`
//   height: 100vw;
//   padding: 20px;
//   background: #83a4d4;
//   background: linear-gradient(to left, #b6fbff, #83a4d4);
//   color: #171212;
// `;

// const StyledHeadlinePrimary = styled.h1`
//   font-size: 48px;
//   font-weight: 300;
//   letter-spacing: 2px;
// `;

// const StyledItem = styled.li`
//   display: flex;
//   align-items: center;
//   padding-bottom: 5px;
// `;

// const StyledColumn = styled.span`
//   padding: 0 5px;
//   white-space: nowrap;
//   overflow: hidden;
//   white-space: nowrap;
//   text-overflow: ellipsis;
//   a {
//     color: inherit;
//   }
//   width: ${(props) => props.width};
// `;

// const StyledButton = styled.button`
//   background: transparent;
//   border: 1px solid #171212;
//   padding: 5px;
//   cursor: pointer;
//   transition: all 0.1s ease-in;
//   &:hover {
//     background: #171212;
//     color: #ffffff;
//   }
// `;

// const StyledButtonSmall = styled(StyledButton)`
//   padding: 5px;
// `;

// const StyledButtonLarge = styled(StyledButton)`
//   padding: 10px;
// `;

// const StyledSearchForm = styled.form`
//   padding: 10px 0 20px 0;
//   display: flex;
//   align-items: baseline;
// `;

// const StyledLabel = styled.label`
//   border-top: 1px solid #171212;
//   border-left: 1px solid #171212;
//   padding-left: 5px;
//   font-size: 24px;
// `;

// const StyledInput = styled.input`
//   border: none;
//   border-bottom: 1px solid #171212;
//   background-color: transparent;
//   font-size: 24px;
// `;

// const App = () => {  
//   const [searchTerm, setSearchTerm] = useStorageState('search', 'React');
//   const [stories, dispatchStories] = React.useReducer(
//     storiesReducer,
//     { data: [], isLoading: false, isError: false }
//   );
//   const [url, setUrl] = React.useState(`${API_ENDPOINT}${searchTerm}`);
  
//   // use async/await
//   const handleFetchStories = React.useCallback(async () => {
//     // if 'searchTerm' is not present e.g. null, empty string, undefined
//     // do nothing
//     // more generalized condition than searchTerm === ''
//     // if (!searchTerm) return;

//     dispatchStories({ type: 'STORIES_FETCH_INIT' });

//     try {    
//       const result = await axios.get(url);

//       dispatchStories({
//         type: 'STORIES_FETCH_SUCCESS',
//         payload: result.data.hits,
//       });
//     } catch {
//       dispatchStories({ type: 'STORIES_FETCH_FAILURE'});
//     }
//   }, [url]);
  
//   // exchanging the state updater function with the dispatch function. 
//   // Then the dispatch function receives a distinct type and a payload
//   React.useEffect(() => {
//     handleFetchStories();
//   }, [handleFetchStories]);

//   const handleRemoveStory = (item) => {
//     dispatchStories({
//       type: 'REMOVE_STORY',
//       payload: item,
//     })
//   }

//   const handleSearchInput = (event) => {
//     // console.log(event.target.value);
//     setSearchTerm(event.target.value);
//   };

//   const handleSearchSubmit = (event) => {
//     setUrl(`${API_ENDPOINT}${searchTerm}`);
//     event.preventDefault();
//   };
  
//   return (
//     <StyledContainer>
//       <StyledHeadlinePrimary>My Hacker Stories</StyledHeadlinePrimary>
//       {/* <Search search={searchTerm} onSearch={handleSearch} /> */}
      
//       <SearchForm 
//         searchTerm={searchTerm}
//         onSearchInput={handleSearchInput}
//         onSearchSubmit={handleSearchSubmit}
//       />

//       <p>Searching for <strong>{searchTerm}</strong>.</p>
      
//       {/* <hr /> */}
      
//       {stories.isError && <p>Something went wrong...</p>}
      
//       {stories.isLoading ? (
//         <p>Loading...</p>
//       ) : (
//         <List list={stories.data} onRemoveItem={handleRemoveStory} />
//       )}
//     </StyledContainer>
//   );
// };

// const SearchForm = ({ searchTerm, onSearchInput, onSearchSubmit }) => (
//   <StyledSearchForm onSubmit={onSearchSubmit}>
//     <InputWuthLabel
//       id="search"
//       //label="Search"
//       value={searchTerm}
//       isFocused
//       // onInputChange={handleSearch}
//       onInputChange={onSearchInput}
//     >
//       <strong>Search:</strong>
//     </InputWuthLabel>

//     <StyledButtonLarge
//       type='submit'
//       disabled={!searchTerm}
//       // onClick={handleSearchSubmit}
//       // className={`${styles.button} ${styles.buttonLarge}`} //1
//       // somewhere in a className attribute
//       // className={clsx(styles.button, styles.buttonLarge)} //2
//       // className={clsx(styles.button, { [styles.buttonLarge]: isLarge })} //3
//     >
//       Submit
//     </StyledButtonLarge>
//   </StyledSearchForm>
// );

// const InputWuthLabel = ({ id, value, type='text', onInputChange, isFocused, children }) => {
//   const inputRef = React.useRef();

//   React.useEffect(() => {
//     if (isFocused && inputRef.current) {
//       inputRef.current.focus();
//     }
//   }, [isFocused]);
  
//   return (
//     <>
//       <StyledLabel htmlFor={id}>{children}</StyledLabel>
//       &nbsp;
//       <StyledInput
//         ref={inputRef}
//         id={id}
//         type={type}
//         value={value}
//         // autoFocus={isFocused}
//         // note that `autoFocus` is a shorthand for `autoFocus={true}`
//         // every attribute that is set to `true` can use this shorthand
//         onChange={onInputChange}
//       />
//     </>
//   );
// };

// const List = ({ list, onRemoveItem }) => {
//   return (
//     <ul>
//       {list.map((item) => {
//         return (
//           <Item 
//             key={item.objectId} 
//             item={item} 
//             onRemoveItem={onRemoveItem}
//           />
//         );
//       })}
//     </ul>
//   );
// }

// const Item = ({ item, onRemoveItem }) => (
//   <StyledItem>
//     <StyledColumn width= '40%'>
//       <a href={item.url}>{item.title}</a>
//     </StyledColumn>
//     <StyledColumn width= '30%'>{item.author}</StyledColumn>
//     <StyledColumn width= '10%'>{item.num_comments}</StyledColumn>
//     <StyledColumn width= '10%'>{item.points}</StyledColumn>
//     <StyledColumn width= '10%'>
//       <StyledButtonSmall type="button" onClick={() => onRemoveItem(item)}>
//         Dismiss
//       </StyledButtonSmall>
//     </StyledColumn>
//   </StyledItem>
// );

// export default App;



// // ----------------------------------------------------------------------------------
// // React Maintenance
// // Performance in React
// import * as React from 'react';
// import axios from 'axios';
// import './App.css';
// // import { useCallback } from 'react';

// const useStorageState = (key, initialState) => {
//   const isMounted = React.useRef(false);
  
//   const [value, setValue] = React.useState(
//     localStorage.getItem(key) || initialState
//   );

//   React.useEffect(() => {
//     if (!isMounted.current) {
//       isMounted.current = true;
//     } else {
//       console.log('A');
//       localStorage.setItem(key, value);
//     }    
//   }, [key, value]);

//   return [value, setValue];
// }

// const storiesReducer = (state, action) => {
//   switch (action.type) {
//     case 'STORIES_FETCH_INIT':
//       return {
//         ...state,
//         isLoading: true,
//         isError: false,
//       };
//     case 'STORIES_FETCH_SUCCESS':
//       return {
//         ...state,
//         isLoading: false,
//         isError: false,
//         data: action.payload,
//       };
//     case 'STORIES_FETCH_FAILURE':
//       return {
//         ...state,
//         isLoading: false,
//         isError: true,
//       };
//     case 'REMOVE_STORY':
//       return {
//         ...state,
//         data: state.data.filter(
//           (story) => action.payload.objectId !== story.objectId
//         ),
//       }
//     default:
//       throw new Error();
//   }
// };

// // A: First, the API_ENDPOINT (A) is used to fetch popular tech stories for 
// // a certain query (a search term). In this case, we fetch stories about React (B)
// // const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?query=React';
// const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?query=';

// const getSumComments = (stories) => {
//   console.log('C');
 
//   return stories.data.reduce(
//     (result, value) => result + value.num_comments,
//     0
//   );
// };

// const App = () => {  
//   const [searchTerm, setSearchTerm] = useStorageState('search', 'React');
//   const [stories, dispatchStories] = React.useReducer(
//     storiesReducer,
//     { data: [], isLoading: false, isError: false }
//   );
//   const [url, setUrl] = React.useState(`${API_ENDPOINT}${searchTerm}`);
  
//   // use async/await
//   const handleFetchStories = React.useCallback(async () => {
//     // if 'searchTerm' is not present e.g. null, empty string, undefined
//     // do nothing
//     // more generalized condition than searchTerm === ''
//     // if (!searchTerm) return;
//     dispatchStories({ type: 'STORIES_FETCH_INIT' });

//     try {    
//       const result = await axios.get(url);

//       dispatchStories({
//         type: 'STORIES_FETCH_SUCCESS',
//         payload: result.data.hits,
//       });
//     } catch {
//       dispatchStories({ type: 'STORIES_FETCH_FAILURE' });
//     }
//   }, [url]);
  
//   // exchanging the state updater function with the dispatch function. 
//   // Then the dispatch function receives a distinct type and a payload
//   React.useEffect(() => {
//     console.log('How many times do I log?');
//     handleFetchStories();
//   }, [handleFetchStories]);

//   const handleRemoveStory = React.useCallback((item) => {
//     dispatchStories({
//       type: 'REMOVE_STORY',
//       payload: item,
//     })
//   }, []);

//   const handleSearchInput = (event) => {
//     // console.log(event.target.value);
//     setSearchTerm(event.target.value);
//   };

//   const handleSearchSubmit = (event) => {
//     setUrl(`${API_ENDPOINT}${searchTerm}`);
//     event.preventDefault();
//   };
  
//   console.log('B:App')

//   const sumComments = React.useMemo(
//     () => getSumComments(stories),
//     [stories]
//   );

//   return (
//     <div className="container">
//       <h1 className="headline-primary">My Hacker Stories</h1>
//       {/* <Search search={searchTerm} onSearch={handleSearch} /> */}
//       <h1>My Hacker Stories with {sumComments} comments.</h1>
      
//       <SearchForm 
//         searchTerm={searchTerm}
//         onSearchInput={handleSearchInput}
//         onSearchSubmit={handleSearchSubmit}
//       />

//       <p>Searching for <strong>{searchTerm}</strong>.</p>
      
//       {/* <hr /> */}
      
//       {stories.isError && <p>Something went wrong...</p>}
      
//       {stories.isLoading ? (
//         <p>Loading...</p>
//       ) : (
//         <List list={stories.data} onRemoveItem={handleRemoveStory} />
//       )}
//     </div>
//   );
// };

// const SearchForm = ({ searchTerm, onSearchInput, onSearchSubmit }) => (
//   <form onSubmit={onSearchSubmit} className="search-form">
//     <InputWuthLabel
//       id="search"
//       //label="Search"
//       value={searchTerm}
//       isFocused
//       // onInputChange={handleSearch}
//       onInputChange={onSearchInput}
//     >
//       <strong>Search:</strong>
//     </InputWuthLabel>

//     <button
//       type='submit'
//       disabled={!searchTerm}
//       // onClick={handleSearchSubmit}
//       className="button button_large"
//     >
//       Submit
//     </button>
//   </form>
// );

// const InputWuthLabel = ({ id, value, type='text', onInputChange, isFocused, children }) => {
//   const inputRef = React.useRef();

//   React.useEffect(() => {
//     if (isFocused && inputRef.current) {
//       inputRef.current.focus();
//     }
//   }, [isFocused]);
  
//   return (
//     <>
//       <label htmlFor={id} className='label'>{children}</label>
//       &nbsp;
//       <input
//         ref={inputRef}
//         id={id}
//         type={type}
//         value={value}
//         // autoFocus={isFocused}
//         // note that `autoFocus` is a shorthand for `autoFocus={true}`
//         // every attribute that is set to `true` can use this shorthand
//         onChange={onInputChange}
//         className="input"
//       />
//     </>
//   );
// };

// const List = React.memo(({ list, onRemoveItem }) => {
//   return (
//     console.log('B:Lis') || 
//       <ul>
//         {list.map((item) => {
//           return (
//             <Item 
//               key={item.objectId} 
//               item={item} 
//               onRemoveItem={onRemoveItem}
//             />
//           );
//         })}
//       </ul>
//   );
// })

// const Item = ({ item, onRemoveItem }) => (
//   <li className="item">
//     <span style={{ width: '40%' }}>
//       <a href={item.url}>{item.title}</a>
//     </span>
//     <span style={{ width: '30%' }}>{item.author}</span>
//     <span style={{ width: '10%' }}>{item.num_comments}</span>
//     <span style={{ width: '10%' }}>{item.points}</span>
//     <span style={{ width: '10%' }}>
//       <button className="button button_small" type="button" onClick={() => onRemoveItem(item)}>
//         Dismiss
//       </button>
//       </span>
//     </li>
//   );

// export default App;


// // ----------------------------------------------------------------------------------
// // React Maintenance
// // Testing
import * as React from 'react';
import axios from 'axios';

const storiesReducer = (state, action) => {
  switch (action.type) {
    case 'STORIES_FETCH_INIT':
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case 'STORIES_FETCH_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      };
    case 'STORIES_FETCH_FAILURE':
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case 'REMOVE_STORY':
      return {
        ...state,
        data: state.data.filter(
          (story) => action.payload.objectID !== story.objectID
        ),
      };
    default:
      throw new Error();
  }
};

const useStorageState = (key, initialState) => {
  const [value, setValue] = React.useState(
    localStorage.getItem(key) || initialState
  );
  
  React.useEffect(() => {
    localStorage.setItem(key, value);
  }, [value, key]);
  
  return [value, setValue];
};

const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?query=';

const App = () => {
  const [searchTerm, setSearchTerm] = useStorageState(
    'search',
    'React'
  );
  
  const [url, setUrl] = React.useState(
    `${API_ENDPOINT}${searchTerm}`
  );
  
  const [stories, dispatchStories] = React.useReducer(
    storiesReducer,
    { data: [], isLoading: false, isError: false }
  );
  
  const handleFetchStories = React.useCallback(async () => {
    dispatchStories({ type: 'STORIES_FETCH_INIT' });
    
    try {
      const result = await axios.get(url);
      dispatchStories({
        type: 'STORIES_FETCH_SUCCESS',
        payload: result.data.hits,
      });
    } catch {
      dispatchStories({ type: 'STORIES_FETCH_FAILURE' });
    }
  }, [url]);
  
  React.useEffect(() => {
    handleFetchStories();
  }, [handleFetchStories]);
  
  const handleRemoveStory = (item) => {
    dispatchStories({
      type: 'REMOVE_STORY',
      payload: item,
    });
  };
  
  const handleSearchInput = (event) => {
    setSearchTerm(event.target.value);
  };
  
  const handleSearchSubmit = (event) => {
    setUrl(`${API_ENDPOINT}${searchTerm}`);
    event.preventDefault();
  };
  
  return (
    <div>
      <h1>My Hacker Stories</h1>
      <SearchForm
        searchTerm={searchTerm}
        onSearchInput={handleSearchInput}
        onSearchSubmit={handleSearchSubmit}
      />
      <hr />
      {stories.isError && <p>Something went wrong ...</p>}
      {stories.isLoading ? (
        <p>Loading ...</p>
      ) : (
        <List list={stories.data} onRemoveItem={handleRemoveStory} />
      )}
    </div>
  );
};
const SearchForm = ({
  searchTerm,
  onSearchInput,
  onSearchSubmit,
}) => (
  <form onSubmit={onSearchSubmit}>
    <InputWithLabel
      id="search"
      value={searchTerm}
      isFocused
      onInputChange={onSearchInput}
    >
      <strong>Search:</strong>
      {/* Search: */}
    </InputWithLabel>
    <button type="submit" disabled={!searchTerm}>
      Submit
    </button>
  </form>
);
const InputWithLabel = ({
  id,
  value,
  type = 'text',
  onInputChange,
  isFocused,
  children,
}) => {
  const inputRef = React.useRef();
  React.useEffect(() => {
    if (isFocused && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isFocused]);
  return (
    <>
      <label htmlFor={id}>{children}</label>
      &nbsp;
      <input
        ref={inputRef}
        id={id}
        type={type}
        value={value}
        onChange={onInputChange}
      />
    </>
  );
};
const List = ({ list, onRemoveItem }) => (
  <ul>
    {list.map((item) => (
      <Item
        key={item.objectID}
        item={item}
        onRemoveItem={onRemoveItem}
      />
    ))}
  </ul>
);
const Item = ({ item, onRemoveItem }) => (
  <li>
    <span>
      <a href={item.url}>{item.title}</a>
    </span>
    <span>{item.author}</span>
    <span>{item.num_comments}</span>
    <span>{item.points}</span>
    <span>
      <button type="button" onClick={() => onRemoveItem(item)}>
        Dismiss
      </button>
    </span>
  </li>
);

export default App;

export { storiesReducer, SearchForm, InputWithLabel, List, Item };