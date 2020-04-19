import React from 'react'
import { media } from '../../utils'

const Footer = () => (
  <footer
    css={`
      background: ${props => props.theme.colors.n900};
      border-top: 1px solid ${props => props.theme.colors.n400};
      padding: ${({ theme }) => theme.space[2]}
        ${({ theme }) => theme.space[6]};
    `}
  >
    <div
      css={`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        max-width: ${props => props.theme.lg};

        ${media.tablet`flex-direction: row;`}
      `}
    >
      <ul
        css={`
          padding: 0;
          list-style: none;
          display: flex;
          flex-direction: row;
          justify-content: center;
          ${media.mobile`
            justify-content: flex-start;
          `}
          & > * + * {
            margin-left: ${({ theme }) => theme.space[4]};
          }
          a {
            margin: 0;
            font-size: ${({ theme }) => theme.fontSizes[1]};
          }
        `}
      >
        <li>
          <a
            href='https://github.com/mulholio'
            target='_blank'
            rel='noopener noreferrer'
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            href='https://twitter.com/mulholio'
            target='_blank'
            rel='noopener noreferrer'
          >
            Twitter
          </a>
        </li>
        <li>
          <a
            href='https://www.linkedin.com/in/mulholio'
            target='_blank'
            rel='noopener noreferrer'
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href='mailto:james@jmulholland.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            Email
          </a>
        </li>
      </ul>
      <span
        css={`
          color: ${({ theme }) => theme.colors.n400};
          font-size: ${({ theme }) => theme.fontSizes[1]};
        `}
      >{`© James Mulholland ${new Date().getFullYear()}`}</span>
    </div>
  </footer>
)

export default Footer
