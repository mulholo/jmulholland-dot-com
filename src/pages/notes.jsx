import React, { useState } from 'react'
import styled from 'styled-components'
import { graphql, Link } from 'gatsby'
import {
  Box,
  Cluster,
  Disclosure,
  Layout,
  Stack,
  Sidebar,
  Tag,
  TextContainer,
} from '../components'
import { media } from '../utils'

const Notes = ({ data }) => {
  const notes = data.notes.edges
  const tags = [
    ...new Set(notes.flatMap(({ node }) => node.frontmatter.tags)),
  ]

  const [selectedTags, setSelectedTags] = useState([])
  const [filterType, setFilterType] = useState('or')

  const toggleTag = (tag) =>
    setSelectedTags((tags) =>
      tags.includes(tag)
        ? tags.filter((_tag) => _tag !== tag)
        : [...tags, tag]
    )

  return (
    <Layout pageName='Notes'>
      <Stack>
        <WhatIsThisPage />
        <Sidebar
          contentMin='80%'
          sidebarWidth='s5'
          flipSides
          dividingBorder
        >
          <Box borderY padding='0'>
            <Box padding='s0'>
              <Cluster>
                <ul>
                  {tags.map((tag) => (
                    <li
                      key={tag}
                      css={`
                        list-style: none;
                      `}
                    >
                      <Tag
                        onClick={() => toggleTag(tag)}
                        selected={selectedTags.includes(tag)}
                      >
                        {tag}
                      </Tag>
                    </li>
                  ))}
                </ul>
              </Cluster>
            </Box>
            <div>
              <FilterButton
                selected={filterType === 'or'}
                onClick={() => setFilterType('or')}
              >
                or
              </FilterButton>
              <FilterButton
                selected={filterType === 'and'}
                onClick={() => setFilterType('and')}
              >
                and
              </FilterButton>
            </div>
          </Box>
        </Sidebar>
        {notes
          .filter(({ node }) =>
            selectedTags.length === 0
              ? true
              : filterType === 'or'
              ? node.frontmatter.tags.some((tag) =>
                  selectedTags.includes(tag)
                )
              : selectedTags.every((selectedTag) =>
                  node.frontmatter.tags.includes(selectedTag)
                )
          )
          .map(({ node }) => (
            <NoteRow
              key={node.fields.slug}
              link={node.fields.slug}
              title={node.frontmatter.title}
              tags={node.frontmatter.tags}
            />
          ))}
      </Stack>
    </Layout>
  )
}

const FilterButton = styled.button(
  ({ theme, selected }) => `
  height: 100%;
  width: 50%;
  min-width: ${theme.sizes.s3};
  text-transform: uppercase;
  font-weight: bold;
  background: ${selected ? theme.colors.b500 : 'none'};
  color: ${selected ? theme.colors.n900 : 'inherit'};
  border: none;
  padding: ${theme.sizes.s0};
  transition: 0.1s color, 0.1s background, box-shadow 0.2s, border 0.2s;
  ${!selected && `cursor: pointer;`}

  &:active,
  &:hover,
  &:focus-visible {
    box-shadow: ${
      selected
        ? `inset 0px 0px 0px 3px ${theme.colors.b300}`
        : `inset 0px 0px 0px 3px ${theme.colors.b500}`
    };
    border: none;
    outline: none;
  }
`
)

const WhatIsThisPage = () => {
  return (
    <Box borderY>
      <TextContainer>
        <Disclosure
          title={({ icon }) => <h4>{icon} What is this page?</h4>}
        >
          <>
            <p>This page contains my notes for learning in public.</p>
            <p>
              It can be thought of as a{' '}
              <a href='https://joelhooks.com/digital-garden'>
                Digital Garden
              </a>
              : fast, evolving, messy, tangled. Expect book reviews,
              tips and tricks, notes on understanding computers, and
              my mental models.
            </p>
            <p>
              For more polished pieces, please head to{' '}
              <Link to='/blog'>/blog</Link>.
            </p>
          </>
        </Disclosure>
      </TextContainer>
    </Box>
  )
}

const NoteRow = ({
  /**
   * Internal page to link to
   */
  link,
  title,
  tags,
}) => (
  <Link
    to={link}
    css={`
      display: flex;
      flex-direction: column;
      ${Box} {
        transition: box-shadow 0.2s;
      }
      &:focus,
      &:active {
        outline: none;
        text-decoration: none;
      }
      &:focus ${Box}, &:hover ${Box} {
        box-shadow: inset 0px 0px 0px 8px
          ${({ theme }) => theme.colors.b500};
      }
      &:focus h4,
      &:hover h4 {
        color: ${({ theme }) => theme.colors.b400};
      }
    `}
  >
    <Box borderY>
      <div
        css={`
          display: flex;
          align-items: baseline;
          & > :first-child {
            margin-right: auto;
          }
        `}
      >
        <h4
          css={`
            margin: 0;
            font-size: ${({ theme }) => theme.fontSizes.s0};
            ${media.tablet`
              font-size: ${({ theme }) => theme.fontSizes.s1};
            `}
          `}
        >
          {title}
        </h4>
        <p>
          {tags.map((tag, i) => (
            <>
              <span key={tag}>{tag}</span>
              {i !== tags.length - 1 && ', '}
            </>
          ))}
        </p>
      </div>
    </Box>
  </Link>
)

export const query = graphql`
  query notesQuery {
    notes: allMdx(
      filter: { fileAbsolutePath: { regex: "/content/notes/" } }
    ) {
      edges {
        node {
          frontmatter {
            title
            tags
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default Notes
