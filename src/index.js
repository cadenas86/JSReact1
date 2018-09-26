import React from 'react';
import ReactDOM from 'react-dom';

const website1 = React.createElement('li', {}, React.createElement('a', { href: "https://www.woz-u.com" }, "www.woz-u.com"));
const website2 = React.createElement('li', {}, React.createElement('a', { href: "https://www.instagram.com" }, "www.instagram.com"));
const website3 = React.createElement('li', {}, React.createElement('a', { href: "https://www.w3schools.com" }, "www.w3schools.com"));

const color1 = React.createElement('li',{},'Blue');
const color2 = React.createElement('li',{},'Green');
const color3 = React.createElement('li',{},'Red');

const music1 = React.createElement('li',{},'EDM');
const music2 = React.createElement('li',{},'Banda');
const music3 = React.createElement('li',{},'90s Rap');

const food1 = React.createElement('li',{},'Pizza');
const food2 = React.createElement('li',{},'Burgers');
const food3 = React.createElement('li',{},'Mexican');

ReactDOM.render(
    React.createElement(
        'ul',
        {},
        'Favorite Colors',
        React.createElement('li',{},color1),
        React.createElement('li',{},color2),
        React.createElement('li',{},color3),

        React.createElement('ul',{},'Favorite websites'),
        React.createElement('li',{},website1),
        React.createElement('li',{},website2),
        React.createElement('li',{},website3),

        React.createElement('ul',{},'Favorite Music'),
        React.createElement('li',{},music1),
        React.createElement('li',{},music2),
        React.createElement('li',{},music3),

        React.createElement('ul',{},'Favorite Foods'),
        React.createElement('li',{},food1),
        React.createElement('li',{},food2),
        React.createElement('li',{},food3)

          ),
          
     
    document.getElementById('root')
);
