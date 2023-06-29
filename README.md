# Project README

This repository contains the source code for the profile page app developed using React, TypeScript, and TailwindCSS within a Next.JS project.

## Description

The profile page app allows users to create and customize their profile pages. It consists of a profile page and an edit profile form. Users can edit various sections of their profile page through the edit profile form, and they have the option to set the visibility settings for each section, making it either private or public.

One of the key features of the app is that the edited content is preserved even across page reloads. This is achieved by storing the data in the browser's local storage.

The app focuses on providing a great frontend and UI/UX experience. It is designed to be easily maintainable and extendable. Best practices such as using Prettier and eslint for code formatting and adhering to recommended DX (Developer Experience) tools have been followed.

## Features

### Edit Profile Form

The edit profile form allows users to provide specific information such as a profile photo, name, bio, social links and other relevant details. It also collects portfolio-related information, including projects, featured playgrounds, certificates, stats, metrics, work experience, educational background, and more. Users have the freedom to include data as they see fit.

![App Screenshot](/public/images/edit-profile.png)

### Profile Page

The profile page presents all the collected data in an organized manner. It includes the user's profile photo, name, bio, social links (if provided by the user), follower and following counts (if made public by the user), experience points (if made public by the user), projects, featured playgrounds, certificates, stats, metrics, work experience , education and more.

![App Screenshot](/public/images/profile-page.png)

## Getting Started

To get started with the project, follow these steps:

- Clone the repository: git clone https://github.com/CoderGhost37/Codedamn-Frontend-Assignment
- Install dependencies: npm install
- Start the development server: npm run dev
- Open the app in your browser at http://localhost:3000
