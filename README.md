# Landing Page Project

## Table of Contents

* [Instructions](#instructions)
* [Overview](#overview)
* [Description](description)
* [Extras Addressed](extras)
* [Comments](comments)

## Instructions

The starter project has some HTML and CSS styling to display a static version of the Landing Page project. You'll need to convert this project from a static project to an interactive one. This will require modifying the HTML and CSS files, but primarily the JavaScript file.

To get started, open `js/app.js` and start building out the app's functionality

For specific, detailed instructions, look at the project instructions in the Udacity Classroom.

## Overview

The project was to address the following required items:

* Usability for desktop, tablet, and phone browers
* Styling for active states
* At least 4 sections on the page
* Navigation - Create dynamic navigation menu bar based on the sections in page
* Section Active State - Each section within the page should be hightlighted while scrolling through the page
* Scroll to Anchor - When a navigation menu bar item is clicked on the page should "scroll vs. jump to the section

## Description

The Javascript file, `js/app.js`, was edited to create the navigation menu bar with the buildNavMenu function by looping through the sections to create unordered list items.  An eventListner for scroll and function makeActive was used to make sections as "active" and set a new background color.  The `css/styles.css` file was modified for responsiveness.  And adress styling for active states.  Additional sections were added to the page.  Research from Lesson 2 Concept 7 Further Research on jQuery was utilized to address the navigation menu bar "scroll" functionality.  `js/jquery.combinedScroll.js` file was used for the scrollTo functionality. The jQuery site https://jquery.com/! and https://www.turnwall.com/topics/learn/! were sources of assistance and tips for the "scroll" functionality.

## Extras

The "Add an active state to your navigation items when a section is in the viewport" was addressed with the `js/jquery.combinedScroll.js` file was used for the active state of the navigation menu bar items as sections were in the viewport.  Hide the navbar menu if the scrolltimer get to 3000 milliseconds from the setTimeout()

## Comments

The project was a challenge for me.  What you can pass along is that the Lessons and concepts address basic items leading into the project, but there is a lot of research, reading, reviewing examples, and outside help to get to the point to complete the project.  It is interesting that in the knowledge area other students ask questions for every item that was required for the project including this readme.md file.   The *LESSONS* leading up to the project should have better examples of what is going to be required to do the project.  For example there suggestions from mentors for getBoundingClientRect() and other Scroll functions, but none of these are ever mentioned in the lessons or reviewed.


