import * as React from 'react'
import styled from '../utils/styled-components'
import media from '../utils/media'

const StyledFooter = styled.footer`
  margin-top: auto;
  background: ${props => props.theme.n900};
  border-top: 1px solid ${props => props.theme.n700};
`

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: ${props => props.theme.lg};
  padding: ${props => props.theme.s3};
  margin: auto;

  ${media.tablet`flex-direction: row;`}
`

const StyledSection = styled.div`
  color: ${props => props.theme.n500};
  width: 100%;

  ${media.tablet`width: 50%; padding-right: ${props =>
    props.theme.s8};`}
`

const StyledHeader = styled.h4`
  color: ${props => props.theme.n400};
`

const StyledList = styled.ul`
  padding: 0;
  list-style: none;

  li {
    display: flex;
  }

  a {
    text-decoration: none;
    display: flex;
    align-items: center;
  }

  a > svg {
    width: 16px;
    height: 16px;
    margin-right: ${props => props.theme.s2};
    padding-bottom: 1px;
  }

  .a {
    fill: none;
    stroke: ${props => props.theme.n400};
    stroke-width: 2px;
    stroke-linecap: round;
    stroke-linejoin: round;
  }
`

const Footer = () => (
  <StyledFooter>
    <StyledContainer>
      <StyledSection>
        <StyledHeader>About</StyledHeader>
        <p>
          This is my (
          <a
            href='https://twitter.com/mulholio'
            target='_blank'
            rel='noopener noreferrer'
          >
            @mulholio's
          </a>
          ) personal website. Say hello.
        </p>
      </StyledSection>
      <StyledSection>
        <StyledHeader>Links</StyledHeader>
        <StyledList>
          <li>
            <a
              href='https://github.com/mulholio'
              target='_blank'
              rel='noopener noreferrer'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
              >
                <defs>
                  <style>.a{}</style>
                </defs>
                <path
                  className='a'
                  d='M19.459,17c0-5.969-4.126-3.532-7.5-3.532s-7.5-2.375-7.5,3.532a3.5,3.5,0,0,0,3.5,3.5h8A3.5,3.5,0,0,0,19.459,17Z'
                />
                <path
                  className='a'
                  d='M21.489,10.214l.032.023s2.646-4.572-.6-7.237c-2,0-5.058,3.3-5.058,3.3l.022.016A14.152,14.152,0,0,0,8.1,6.3C8.083,6.285,5.037,3,3.042,3c-3.173,2.6-.729,7.012-.614,7.217A8.876,8.876,0,0,0,1.033,15.96c.241,3.126,2.847,6.54,5.982,6.54H16.9c3.135,0,5.742-3.414,5.982-6.54A8.857,8.857,0,0,0,21.489,10.214Z'
                />
                <ellipse
                  className='a'
                  cx='15.48'
                  cy='17'
                  rx='1'
                  ry='1.5'
                />
                <ellipse
                  className='a'
                  cx='8.48'
                  cy='17'
                  rx='1'
                  ry='1.5'
                />
              </svg>
              GitHub
            </a>
          </li>
          <li>
            <a
              href='https://twitter.com/mulholio'
              target='_blank'
              rel='noopener noreferrer'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
              >
                <path
                  className='a'
                  d='M23,6.628l-2-.5,1-2-2.464.7A4.48,4.48,0,0,0,12,8.128v1c-3.539.73-6.634-1.2-9.5-4.5q-.75,4,1.5,6l-3-.5c.405,2.069,1.362,3.7,4,4l-2.5,1c1,2,2.566,2.31,5,2.5a10.748,10.748,0,0,1-6.5,2c12.755,5.669,20-2.664,20-10V8.3Z'
                />
              </svg>
              Twitter
            </a>
          </li>
          <li>
            <a
              href='https://www.linkedin.com/in/mulholio'
              target='_blank'
              rel='noopener noreferrer'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
              >
                <path
                  className='a'
                  d='M6.5,22.5h-5V9.5h5Zm9-9a2,2,0,0,0-2,2v7h-5V9.5h5v1.485A6.307,6.307,0,0,1,17.49,9.49c2.962,0,5.01,2.2,5.01,6.355V22.5h-5v-7A2,2,0,0,0,15.5,13.5ZM6.5,5A2.5,2.5,0,1,1,4,2.5,2.5,2.5,0,0,1,6.5,5Z'
                />
              </svg>
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href='mailto:james@jmulholland.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
              >
                <rect
                  className='a'
                  x='0.5'
                  y='3.954'
                  width='23'
                  height='16'
                  rx='2'
                  ry='2'
                />
                <polyline
                  className='a'
                  points='22.911 4.536 12 13.454 1.089 4.536'
                />
              </svg>
              Email
            </a>
          </li>
        </StyledList>
      </StyledSection>
    </StyledContainer>
  </StyledFooter>
)

export default Footer
