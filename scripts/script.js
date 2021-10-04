// JavaScript Document
var sessionButton = document.querySelector("header nav section:nth-of-type(1) >a");
var colourButton = document.querySelector("header nav section:nth-of-type(2) >a");
var sidebar = document.querySelector('header');
var sessionSidebarMenu = document.querySelector("header nav section:nth-of-type(1) >a");
var colourSidebarMenu = document.querySelector("header nav section:nth-of-type(2) >a");
var sessionSidebar = document.querySelector("header nav section:nth-of-type(1) div");
var colourSidebar = document.querySelector("header nav section:nth-of-type(2) div");
var root = document.querySelector(":root");

function toggleMenu () {
    sidebar.classList.toggle("showSidebar");
}

function inactiveSessionMenu () {
    sessionSidebar.classList.toggle("inactiveNav");
    colourSidebarMenu.classList.toggle("activeNav");
    colourButton.classList.toggle("activeButton");
}

function inactiveColourMenu () {
    colourSidebar.classList.toggle("inactiveNav");
    sessionSidebarMenu.classList.toggle("activeNav");
    sessionButton.classList.toggle("activeButton"); 
}

sessionButton.addEventListener("click", toggleMenu);
sessionButton.addEventListener("click", inactiveColourMenu);
colourButton.addEventListener("click", toggleMenu);
colourButton.addEventListener("click", inactiveSessionMenu);