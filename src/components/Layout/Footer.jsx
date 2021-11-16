import React from 'react'
import { media } from '../../utils'

const FooterLink = ({ href, title }) => (
  <li
    css={`
      margin-top: 0;
      margin-bottom: 0;
    `}
  >
    <a
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      css={`
        margin: 0;
        font-size: ${({ theme }) => theme.fontSizes.s0};
      `}
    >
      {title}
    </a>
  </li>
)

// Footer is wrapped in a div to avoid collapse issue on Safari

const Footer = () => (
  <div>
    <footer
      css={`
        background: ${(props) => props.theme.colors.n900};
        border-top: 1px solid ${(props) => props.theme.colors.n300};
        display: flex;
        flex-wrap: wrap;
        align-items: baseline;
        padding: ${({ theme }) => theme.sizes.s1}
          ${({ theme }) => theme.sizes.s2}
          ${({ theme }) => theme.sizes.s2}
          ${({ theme }) => theme.sizes.s2};

        ${media.mobile`
        padding: ${({ theme }) => theme.sizes.s1}
          ${({ theme }) => theme.sizes.s2};
      `}
      `}
    >
      <ul
        css={`
          margin: 0;
          padding: 0;
          list-style: none;
          display: flex;
          flex: 1;
          & * > * {
            margin-right: ${({ theme }) => theme.sizes['s-1']};
          }
          flex-direction: column;
          ${media.mobile`
          flex-direction: row;
        `}
        `}
      >
        <FooterLink
          title='GitHub'
          href='https://github.com/mulholo'
        />
        <FooterLink
          title='Twitter'
          href='https://twitter.com/mulholo'
        />
        <FooterLink
          title='LinkedIn'
          href='https://www.linkedin.com/in/mulholo'
        />
        <FooterLink
          title='Email'
          href='mailto:james@jmulholland.com'
        />
      </ul>
    </footer>
  </div>
)

export default Footer
