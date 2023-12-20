Hi there! This is a Take-Home Assignments for lookyto company

Tis is a SPA build on Next.js using redux-toolkit as state manager. This app allows users to create and edit their characters for an abstract RPG game. The character with specific parameters can be both imported or exported for future use. 

There are also two languages and tooltips for each property. 

!For cheaters only:
If you've got tired of everything and you want no limits in this life, here's a bonus specially for you! It will change everything!!! 
Make your character and export it on your device. Open the .json file in a text editor and find the property "points". 
Instead of that small number type in the quantity of points you want..
you're welcome ;D
 -- -- -- --
 Task Description:

The goal of this assignment is to showcase developer skills, focusing on clean and readable code, as well as data manipulation. The task should be implemented using one of the following frameworks: React, MithrilJS, or Angular.

Programming Language: TypeScript/JavaScript

Styles: CSS/SASS/SCSS

Requirements:

Develop a Single Page Application (SPA) allowing users to edit their character in an abstract RPG game. 

MVP:

Users can set and change their character's name.
Users can set and modify basic parameters of their character.
Basic parameters: Strength, Agility, Intelligence, Charisma.
Each parameter starts at 0 by default.
The character has derived parameters calculated based on the basic ones:
Vitality: Calculated as 3 + Strength. The character loses one point of vitality when taking damage.
Evasion: 10 + Agility.
Vigor: Agility + Intelligence.
Users can receive damage.
Skills:

The character has a set of skills that can be trained.
Skills have levels: 0 (Untrained), 1 (Novice), 2 (Apprentice), 3 (Adept), 4 (Expert), 5 (Master).
Each skill is tied to a basic parameter, and its level cannot exceed the value of the corresponding basic parameter.
List of Basic Parameters and Corresponding Skills:

Strength
Attack
Agility
Stealth
Archery
Intelligence
Learnability
Survival
Medicine
Charisma
Intimidation
Insight
Appearance
Manipulation
Additional Features:

Users can export/save their characters.
Users can import/load their characters.
UI should be simple and intuitive.
