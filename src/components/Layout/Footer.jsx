import React from 'react'
import { media } from '../../utils'

const FooterLink = ({ href, title }) => (
  <li>
    <a href={href} target='_blank' rel='noopener noreferrer'>
      {title}
    </a>
  </li>
)

const Footer = () => (
  <footer
    css={`
      background: ${props => props.theme.colors.n900};
      border-top: solid ${props => props.theme.colors.n400};
      padding: ${({ theme }) => theme.sizes.s1}
        ${({ theme }) => theme.sizes.s2};
    `}
  >
    <div
      css={`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        & > * + * {
          margin-top: ${({ theme }) => theme.sizes['s-1']};
        }

        ${media.tablet`
          flex-direction: row;
          & > * + * {
            margin: 0;
          }
        `}
      `}
    >
      <ul
        css={`
          padding: 0;
          margin: 0;
          list-style: none;
          display: flex;
          flex-direction: row;
          justify-content: center;
          ${media.mobile`
            justify-content: flex-start;
          `}
          & > * + * {
            margin-left: ${({ theme }) => theme.sizes.s1};
          }
          a {
            margin: 0;
            font-size: ${({ theme }) => theme.fontSizes.s0};
          }
          li {
            margin-top: 0;
            margin-bottom: 0;
          }
        `}
      >
        <FooterLink
          title='GitHub'
          href='https://github.com/mulholio'
        />
        <FooterLink
          title='Twitter'
          href='https://twitter.com/mulholio'
        />
        <FooterLink
          title='LinkedIn'
          href='https://www.linkedin.com/in/mulholio'
        />
        <FooterLink
          title='Email'
          href='mailto:james@jmulholland.com'
        />
      </ul>
      <span
        css={`
          color: ${({ theme }) => theme.colors.n400};
          font-size: ${({ theme }) => theme.fontSizes.s0};
        `}
      >{`© James Mulholland ${new Date().getFullYear()}`}</span>
    </div>
  </footer>
)

export default Footer
