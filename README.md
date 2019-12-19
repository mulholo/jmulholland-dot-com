# jmulholland.com

[![Netlify Status](https://api.netlify.com/api/v1/badges/f78a46a9-01dd-402b-8db6-872418d056dc/deploy-status)](https://app.netlify.com/sites/james/deploys)

This is the repo for my personal website,
[jmulholland.com](https://jmulholland.com).

## Stack

- [Gatsby](https://www.gatsbyjs.org/) using
  [React](https://reactjs.org))
- [TypeScript](http://typescript.com)
- [Styled Components](https://styled-components.com)
- [MDX](https://mdxjs.com)

## Usage

- Clone the repo
- `yarn install`
- `yarn dev`

### Deployment

- Auto-deploy to
  [Netlify](https://app.netlify.com/sites/james/overview) on merge

## Notes

- To resolve a `@types` issue between `styled-components` and React,
  the React version must be specified in the `package.json`
  resolutions:
  ```json
  "resolutions": {
    "@types/react": "^16.8.7"
  },
  ```
