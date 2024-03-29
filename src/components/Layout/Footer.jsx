import React from 'react'
import {
  BUG_REPORT_LINK,
  GITHUB_LINK,
  LINKEDIN_LINK,
  MAILTO_LINK,
  TWITTER_LINK,
  ARENA_LINK,
} from '../../utils/constants'

const FooterLink = ({ href, title }) => (
  <a
    href={href}
    target='_blank'
    rel='noopener noreferrer'
    css={`
      margin: 0;
      font-size: ${({ theme }) => theme.fontSizes.s0};
      text-decoration: none;
    `}
  >
    {title}
  </a>
)

const FooterLinkLi = ({ href, title }) => (
  <li>
    <FooterLink href={href} title={title} />
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

        flex-direction: column;
        & > li + li {
          margin-top: ${({ theme }) => theme.sizes['s-2']};
        }

        @media (min-width: ${450 / 16}em) {
          flex-direction: row;
          & > li + li {
            margin-left: ${({ theme }) => theme.sizes.s1};
            margin-top: 0;
          }
        }
      `}
    >
      <FooterLinkLi title='Mail' href={MAILTO_LINK} />
      <FooterLinkLi title='Twitter' href={TWITTER_LINK} />
      <FooterLinkLi title='GitHub' href={GITHUB_LINK} />
      <FooterLinkLi title='LinkedIn' href={LINKEDIN_LINK} />
      <FooterLinkLi title='Are.na' href={ARENA_LINK} />
      <FooterLinkLi title='Bugs' href={BUG_REPORT_LINK} />
    </ul>
  </footer>
)
