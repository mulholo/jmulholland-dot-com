import React from 'react'
import { Link } from 'gatsby'
import { Layout, Stack, TextContainer } from '../components'

const Index = () => {
  return (
    <Layout pageName='Home'>
      <Stack spacer='s2'>
        <TextContainer recursive={false}>
          <h2>About</h2>
          <p>I'm James, a product engineer in London.</p>
          <p>
            If you're looking for a brief introduction to who I am,
            head to <Link to='/projects'>/projects</Link> to see what
            I've been working on, or{' '}
            <Link to='/thoughts'>/thoughts</Link> for a glimpse into
            how I think.
          </p>
          <h2>Blog</h2>
          <p>
            This website acts as a space to develop and share ideas.
            The main way I achieve that is through my blog posts.
          </p>
          <h3>Favourites</h3>
          <ul>
            <li>
              <Link to='/small-group'>The Small Group</Link>: The
              history and desirability of tight-knit, productive
              groups of people.
            </li>
            <li>
              <Link to='/cascading-productivity-system'>
                The Cascading Productivity System
              </Link>
              : How I get things done.
            </li>
          </ul>
          <p>
            Head to <Link to='/blog'>/blog</Link> for a list of all
            posts.
          </p>
          <h2>Notes</h2>
          <p>
            While blog posts are great for publishing detailed guides
            or theses, sometimes I need something lighter weight. This
            is where my <Link to='/notes'>/notes</Link> page comes in.
            Expect <Link to='/atlas-shrugged'>book</Link>{' '}
            <Link to='/peak'>reviews</Link>,{' '}
            <Link to='/spanner-indexes-vs-queries/'>
              solutions for specific technical problems
            </Link>
            , and <Link to='/tutorial-paradox'>various</Link>{' '}
            <Link to='/top-gun'>mental</Link>{' '}
            <Link to='/nerd-sniping'>models</Link>.
          </p>
          <p>
            Head to <Link to='/notes'>/notes</Link> for a filterable
            list of all notes.
          </p>
          <h2>Contact</h2>
          <p>
            I've found this blog to be a great vehicle for meeting
            interesting people. If there's anything here you like,
            disagree with or generally want to discuss, I always
            appreciate a{' '}
            <a
              href='https://twitter.com/mulholo'
              rel='noopener noreferrer'
            >
              DM
            </a>{' '}
            or an <a href='mailto:james@jmulholland.com'>email</a>.
          </p>
        </TextContainer>
      </Stack>
    </Layout>
  )
}

export default Index
