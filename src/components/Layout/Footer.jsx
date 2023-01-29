import React from 'react'
import {BUG_REPORT_LINK, GITHUB_LINK, LINKEDIN_LINK, MAILTO_LINK, TWITTER_LINK} from "../../utils/constants"

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
  <li
    css={`
      margin-top: 0;
      margin-bottom: 0;
    `}
  >
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
      <FooterLinkLi
        title='GitHub'
        href={GITHUB_LINK}
      />
      <FooterLinkLi
        title='Twitter'
        href={TWITTER_LINK}
      />
      <FooterLinkLi
        title='LinkedIn'
        href={LINKEDIN_LINK}
      />
      <FooterLinkLi
        title='Email'
        href={MAILTO_LINK}
      />
    </ul>
    <div>
      <FooterLink title='Submit a bug' href={BUG_REPORT_LINK} />
    </div>
  </footer>
)
