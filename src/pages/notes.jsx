import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { graphql, Link } from 'gatsby'
import * as JsSearch from 'js-search'
import {
  Box,
  Cluster,
  Layout,
  Input,
  Stack,
  Separator,
  Sidebar,
  Tag,
} from '../components'

const Notes = ({ data }) => {
  const allNotes = data.notes.edges.map(formatNote)
  const allTags = [...new Set(allNotes.flatMap((note) => note.tags))]

  // Tags
  const [selectedTags, setSelectedTags] = useState([])
  const [filterType, setFilterType] = useState('or')
  const toggleTag = (tag) =>
    setSelectedTags((tags) =>
      tags.includes(tag)
        ? tags.filter((_tag) => _tag !== tag)
        : [...tags, tag]
    )

  // Text search
  const [searchQuery, setSearchQuery] = useState('')
  const [search, setSearch] = useState()
  const [queryResult, setQueryResult] = useState([])
  useEffect(() => {
    const search = new JsSearch.Search('slug') // use slug as uid
    search.addIndex('title') // make title searchable
    search.addIndex('tags') // make tags searchable
    search.addDocuments(allNotes)
    setSearch(search)
  }, [])
  const handleSearch = ({ currentTarget }) => {
    const { value } = currentTarget
    const queryResult = search.search(value)
    setQueryResult(queryResult)
    setSearchQuery(value)
  }

  return (
    <Layout pageName='Notes'>
      <Stack>
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
                  {allTags.map((tag) => (
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
        <Box
          borderY
          padding='0'
          css={`
            flex-grow: 0;
          `}
        >
          <Input
            placeholder='Search note titles and tags'
            value={searchQuery}
            onChange={handleSearch}
            css={`
              width: 100%;
              padding-left: ${({ theme }) => theme.sizes.s2};
              padding-right: ${({ theme }) => theme.sizes.s2};
              border: none;
            `}
          />
        </Box>
        <Separator />
        {(searchQuery ? queryResult : allNotes)
          .filter((note) =>
            selectedTags.length === 0
              ? true
              : filterType === 'or'
              ? note.tags.some((tag) => selectedTags.includes(tag))
              : selectedTags.every((selectedTag) =>
                  note.tags.includes(selectedTag)
                )
          )
          .map((note) => (
            <NoteRow
              key={note.slug}
              link={note.slug}
              title={note.title}
              tags={note.tags}
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
  background: ${selected ? theme.colors.r500 : 'none'};
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
        ? `inset 0px 0px 0px 3px ${theme.colors.r300}`
        : `inset 0px 0px 0px 3px ${theme.colors.r500}`
    };
    border: none;
    outline: none;
  }
`
)

/**
 * Put graphql note data in a slightly more workable format
 */
const formatNote = ({ node }) => ({
  title: node.frontmatter.title,
  tags: node.frontmatter.tags,
  slug: node.fields.slug,
})

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
          ${({ theme }) => theme.colors.r500};
      }
      &:focus h4,
      &:hover h4 {
        color: ${({ theme }) => theme.colors.r400};
      }
    `}
  >
    <Box borderY padding='s2'>
      <div
        css={`
          display: flex;
          flex-direction: column;
          align-items: baseline;
          & > *:last-child {
            margin-left: 0;
            margin-top: ${({ theme }) => theme.sizes['s-2']};
          }

          @media (min-width: ${780 / 16}em) {
            flex-direction: row;
            & > *:last-child {
              margin-left: auto;
              margin-top: 0;
            }
          }
        `}
      >
        <h4
          css={`
            font-size: ${({ theme }) => theme.fontSizes.s0};
            @media (min-width: ${780 / 16}em) {
              font-size: ${({ theme }) => theme.fontSizes.s1};
            }
          `}
        >
          {title}
        </h4>
        <p
          css={`
            font-size: ${({ theme }) => theme.fontSizes['s-1']};
            @media (min-width: ${780 / 16}em) {
              font-size: ${({ theme }) => theme.fontSizes.s0};
            }
          `}
        >
          {tags.map((tag, i) => (
            <>
              <span
                key={tag}
                css={`
                  color: ${({ theme }) => theme.colors.n400};
                `}
              >
                {tag}
              </span>
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
