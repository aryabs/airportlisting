# Product Engineer Coding Challenge

Our main goal for this exercise is to get an idea of how you are to work with and how you approach your engineering work. That insight is more important than your actual working solution at the end of this exercise.

Please record your screen and talk us through the coding exercise as you work through it. Don't hesitate to think out loud—that's the interesting part!

We expect this to take around an hour.

## Brief

You'll be working on a tiny app that looks up airport information. It renders a list of all airports (around 6000) and has a basic typeahead search feature so the user can look up airports by name, IATA, city, or country.

## What we'd like you to do:

- **Fix the Bug**: Our CX team has discovered a bug. When they search for airports in `Germany`, they are unable to find `Mannheim` and many other airports. Investigate the issue and add a hotfix. Prioritize unblocking the user.
- **Improve Search Functionality**: The search feels laggy! Propose and implement a solution to make it more responsive and efficient. Hint: The backend engineers have expressed concerns over the volume of search calls being made.
- **Optimize and Implement Rendering**: Ensure the app performs well with a large list of airports on mobile devices. Consider small screens, different viewport sizes and touch events. Elaborate on different strategies we could use to render large lists. Let's find a balance between evaluation and shipping, and please implement a solution that you find most feasible within the time frame! Our designer has also given you a reference to work with:
![image](https://user-images.githubusercontent.com/144075/144594282-68de44cd-bef2-4d9d-8c5d-398862cbc964.png)


## Considerations:
- Everything is a trade-off! We'd love to what makes you tick, the options and different variables you consider while making technical decisions.
- If you are using a library to implement certain optimizations, let us know why you decided to choose that library.
- While we care more about your thought process than your outcome, we're still interested in how you write code. Don't cut corners there, and write the code as if you'd write a real-world, production-quality product.

## Assumptions

- The IATA code is a unique identifier for an airport.
- If you need to modify the backend apis, please feel free. But ensure that they are not breaking changes!

## Extra questions

We'd love to hear your thoughts on some of these questions. Please don't spend more than a minute or two on each question.

- What are some edge cases you would take care of before shipping this to production?
- What would you change if you could attempt this challenge again?
- What's important for you to work well in a fully remote team?

## Deliverables

- Invite [@akshatamohanty](https://github.com/akshatamohanty) and [@pieterbeulque](https://github.com/pieterbeulque) to a GitHub repo with your completed project
- A video of your screen recording (unlisted YouTube video, Loom, … anything works)
- Answers to the questions above can be either in the video or written down in the README of your repo

## Getting Started

The app is designed to work out of the box.

```shell
yarn install
yarn dev
```

The app should be available via [http://localhost:3000](http://localhost:3000).

Good luck and talk soon!
