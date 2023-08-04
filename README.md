## Usage

Those templates dependencies are maintained via [pnpm](https://pnpm.io) via `pnpm up -Lri`.

This is the reason you see a `pnpm-lock.yaml`. That being said, any package manager will work. This file can be safely be removed once you clone a template.

```bash
$ npm install # or pnpm install or yarn install
```

### Learn more on the [Solid Website](https://solidjs.com) and come chat with us on our [Discord](https://discord.com/invite/solidjs)

## Available Scripts

In the project directory, you can run:

### `npm run dev` or `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>

### `npm run build`

Builds the app for production to the `dist` folder.<br>
It correctly bundles Solid in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

## Deployment

You can deploy the `dist` folder to any static host provider (netlify, surge, now, etc.)

## comparison between SolidJS and ReactJS

SolidJS and ReactJS are both popular JavaScript libraries used for building user interfaces. They both allow for the creation of reusable components and dynamic, interactive web pages. However, they differ in several ways, including how they handle reactivity and updates to the UI, their performance, size, and their learning curve.

Here are some key differences:

1. **Reactivity Model**: React uses a virtual DOM diffing technique. When a component's state changes, React creates a new virtual representation of the UI and then compares this with the current one, making the minor possible updates to the actual DOM. On the other hand, SolidJS uses fine-grained reactivity based on a compiler. It directly updates the DOM without diffing, leading to optimized and efficient updates.

2. **Performance**: Because of its fine-grained reactivity model and the fact that it avoids the virtual DOM, SolidJS can be faster than React. It's generally considered more performant due to the less computation needed for UI updates.

3. **Size**: SolidJS has a smaller footprint than React. The smaller bundle size leads to quicker load times and better performance and user experience.

4. **Learning Curve**: React is a bit older, has a larger community, and has more resources available for learning. Many large companies use it, and it is often preferred for larger projects due to its maturity and extensive ecosystem. On the other hand, SolidJS, while simpler and potentially easier to understand for beginners, does not yet have the same breadth of resources and community support.

5. **Compatibility and Ecosystem**: React has a vast ecosystem, with countless libraries and tools built specifically for it, and enjoys broad support for third-party libraries and tools. SolidJS, being relatively new, has a more miniature ecosystem.

As to which is best, it really depends on the context and needs of the specific project. If the project requires a very small bundle size, and high performance, and you are not as concerned about the availability of third-party libraries and extensive community support, SolidJS might be a good choice. If, on the other hand, you prefer a mature, widely-adopted library with a rich ecosystem and don't mind a slightly larger footprint, React could be the better option.

Remember, the "best" tool is often subjective and dependent on several factors such as the project requirements, team skillset, timeline, and long-term maintenance considerations.
