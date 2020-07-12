# jmulholland.com

[![Netlify Status](https://api.netlify.com/api/v1/badges/f78a46a9-01dd-402b-8db6-872418d056dc/deploy-status)](https://app.netlify.com/sites/james/deploys)

This is the repo for my personal website,
[jmulholland.com](https://jmulholland.com).

## Stack

- [Gatsby](https://www.gatsbyjs.org/) (using
  [React](https://reactjs.org))
- [Styled Components](https://styled-components.com)

## Usage

- Clone the repo
- `yarn install`
- `yarn dev`

### Deployment

- Auto-deploys to
  [Netlify](https://app.netlify.com/sites/james/overview) on merge to
  master.
- Netlify also generates a preview build for each PR.

### Content

#### Adding a new blog post

1. Create a new `.mdx?` file in `src/content/posts`
2. Add frontmatter with the following fields:

```markdown
---
date: '2019-05-04'
title: 'My blog post'
---
```

#### Adding a new page

1. Create a new `.mdx?` file in `src/content/pages`

```markdown
---
title: 'About'
---
```

#### Adding Images to `.md` files

1. Add an image in the same directory as the markdown post
2. Link to in the markdown like so:

```markdown
![my-caption-alt](my-image-in-same-folder.jpg)
```

#### Adding Blockquote Sources

When adding blockquotes, use an inline HTML footer to add a source.

```markdown
> To be, or not to be? That is the question.
>
> <footer>Hamlet</footer>
```
