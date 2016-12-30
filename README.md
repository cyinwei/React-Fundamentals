# React Fundamentals

Hey!  I went through [Tyler McGinnis'](https://twitter.com/tylermcginnis33) [course](https://reacttraining.com/).  Find my work on the `cy-walkthru` [branch](https://github.com/cyinwei/learn-react-fundamentals/commits/cy-walkthru), or check out the demo [here](https://cyinwei.github.io/learn-react-fundamentals/).

#### Some changes:

- I've used `[create-react-app](https://github.com/facebookincubator/create-react-app)` instead of going through Tyler's webpack configuation.  It's a bit of a cop out, and there's no hot loading, but I love the dev environment of `create-react-app`.
- App is written in ES6.

#### Learning reflections:

- Components map to functions.  Keep functions stateless or pure as possible.  React let's us make functions for the views.
  - Like functions, we can stack them.  Or reuse them.
  - We can separate functions into pure ones or stateful ones.  Makes reasoning about UI design to be a breeze.  Tyler referenced Dan's [post](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.k3q4bmwf6), which explains it very well.
- Components are declarative.  I can think of them as 'things' or 'objects', rather than the specific HTML/CSS/JS bundle that lies underneath it.
- Components share info primarily top-down with `props`.  `state` is useful for individual components.  `context` is useful for accessing objects outside of the scope.
- I can map routes to components.  
- Promises are super cool.  I can chain them, group them.  They make async work easy.  Thanks axios.
- Use arrow functions to not deal with `this` and `bind`.

### To dos
I *should* finish taking notes... but probably won't.

Thanks Tyler for a great course!  Learned a lot, and definitely would recommend.  Made for a sweet Christmas week.
