import * as React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/Layout'
import Card from '../components/Card'
import { format } from 'date-fns'

const BlogCardsContainer = styled.div`
  .cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 100%;
  }

  .readMore {
    font-weight: ${props => props.theme.semiBold};
    color: ${props => props.theme.n300};
    margin-top: ${props => props.theme.s4};
  }

  .readMore:hover {
    color: ${props => props.theme.n400};
  }
`

const StyledP = styled.p`
  font-size: ${props => props.theme.tMedium};
`

const StyledHeader = styled.h4``

const Index = ({ data, location }) => (
  <Layout pathname={location.pathname}>
    <StyledP>
      I'm James, a front-end engineer from the UK. I currently work at{' '}
      <a color='#70a0dc' href='https://www.peoplegoal.com/'>
        Evermind Digital
      </a>
      &nbsp; where I spend most of my time making things with React.
    </StyledP>
    <BlogCardsContainer>
      <StyledHeader>Recent Blog Posts</StyledHeader>
      <div className='cards'>
        {data.allContentfulBlogPost.edges.map(({ node }) => (
          <Card
            key={node.slug}
            link={node.slug}
            title={node.title}
            content={node.body.childMarkdownRemark.excerpt}
            detail={format(new Date(node.publishDate), 'Do MMM YYYY')}
            fullWidth
          />
        ))}
      </div>
      <Link to='blog'>
        <p className='readMore'>Read More →</p>
      </Link>
    </BlogCardsContainer>
  </Layout>
)

export const query = graphql`
  query recentBlogQuery {
    allContentfulBlogPost(filter: { node_locale: { eq: "en-GB" } }) {
      edges {
        node {
          title
          slug
          publishDate
          body {
            childMarkdownRemark {
              excerpt
            }
          }
        }
      }
    }
  }
`

export default Index
