# Software Requirements

## What is the vision of this product?

- There are so many different kinds of social media platforms out there. Why can't devs have one??? Talk Dev to Me is a mix of discord,facebook and dial up AOL. A place where Devs can connect and meet other Devs.

## What pain point does this project solve?

- There are things like LinkedIn and facebook that allow you to connect with people but there is no where were you can just meet other Devs.

## Why should we care about your product?

- You should care because it would be a great place to netork and find people with your same coding intersts all over the world

## Scope

#### IN

- Sign up and be able to create a User Profile
- Log in after you have creadted a profile
- Edit your user profile
- Make posts
- Have the latest tech news on your feed

#### OUT

- Direct messager or message sender
- Collab app
-

### Minimum Viable Product (MVP)

- REACT front-end

  - Landing page with working login and sign up option
  - Homepage feed with news & user posts
  - Profile page that allows user to update their profile

- A Django back-end with database to hold user data
  - take in data from user form data to store user data
  - parse api data to pass to homepage feed
  - Handle JWT authentication
  - host it with vercel or netlefy

### Stretch Goals

- Use OAuth to allow users to sign up with github or google
- Set up some kind of chat room for collab
- Set up 2 factor Authentication
- Suggest connections based off of similar coding languages/interests
- Developer ratings on different libraries and tools
- Option to save/share news articles and links
- Find and request to be friends with other users/devs
- Create old school AOL style chat rooms

## Functional Requirements

1. A user can create user profile
2. A user can update their profile information
3. A user can make posts and delete them

### Data Flow

- User travels to the Log In page
- User chooses to sign up and input information
- User Sets up profile page
- User gets redirected to Home Page
- Home page shows news feed with tech news
- User can then Post
- Feed updates with most updated post

## Non-Functional Requirements

1. Usability: We really want this to be fun and easy to use. If it is difficult to user or not really intuitive then no one will want to use it.

2. Security: This app has the potential of holding a users personal information. So we want to make sure it is secure.
