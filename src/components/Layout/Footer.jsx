import React from 'react'

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

export const Footer = () => (
  <footer
    css={`
      grid-area: footer;
      background: ${(props) => props.theme.colors.n900};
      border-top: 1px solid ${(props) => props.theme.colors.n300};
      font-family: ${(props) => props.theme.fonts.sans};
      display: flex;
      flex-wrap: wrap;
      align-items: baseline;
      padding: ${({ theme }) => theme.sizes.s1}
        ${({ theme }) => theme.sizes.s2}
        ${({ theme }) => theme.sizes.s2}
        ${({ theme }) => theme.sizes.s2};

      @media (min-width: ${450 / 16}em) {
        padding: ${({ theme }) => theme.sizes.s1}
          ${({ theme }) => theme.sizes.s2};
      }
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
        @media (min-width: ${450 / 16}em) {
          flex-direction: row;
        }
      `}
    >
      <FooterLink title='GitHub' href='https://github.com/mulholo' />
      <FooterLink
        title='Twitter'
        href='https://twitter.com/mulholo'
      />
      <FooterLink
        title='LinkedIn'
        href='https://www.linkedin.com/in/mulholo'
      />
      <FooterLink title='Email' href='mailto:james@jmulholland.com' />
    </ul>
  </footer>
)
