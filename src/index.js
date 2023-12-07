import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';


let books=[
  {
  id:1,
  title:"Crossroads",
  image:"https://api.time.com/wp-content/uploads/2021/11/100-best-books-crossroads.jpg",
  author:"by Jonathan Franzen",  
  edition:1,
  pages:"355"
},
{
  id:2,
  title:"All That She Carried",
  image:"https://api.time.com/wp-content/uploads/2021/11/100-best-books-all-that-she-carried.jpg",
  author:"by Tiya Miles",
  edition:1,
  pages:"320"

},
{
  id:3,
  title:"The Free World",
  image:"https://api.time.com/wp-content/uploads/2021/11/100-best-books-the-free-world.jpg",
  author:"by Louis Menand",
  edition:1,
  pages:"230"

},
{
  id:4,
  title:"Girlhood",
  image:"https://api.time.com/wp-content/uploads/2021/11/100-best-books-girlhood.jpg?quality=85&w=2400",
  author:"by Melissa Febos",
  edition:1,
  pages:"572"

},
{
  id:5,
  title:"Intimacies",
  image:"https://api.time.com/wp-content/uploads/2021/11/100-best-books-intimacies.jpg?quality=85&w=2400.jpg",
  author:"by Katie Kitamura",
  edition:1,
  pages:"250"

},
{
  id:6,
  title:"Smile",
  image:"https://api.time.com/wp-content/uploads/2021/11/100-best-books-smile-the-story-of-a-face.jpg?quality=85&w=2400",
  author:"by Sarah Ruhl",
  edition:1,
  pages:"255"

}]


ReactDOM.createRoot(document.getElementById('root')).render(<App books={books}/>);
