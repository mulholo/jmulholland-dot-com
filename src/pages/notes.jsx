import React, { useState, useEffect } from 'react'
import styled, { css } from 'styled-components'
import { graphql, Link } from 'gatsby'
import * as JsSearch from 'js-search'
import {
  Cluster,
  Layout,
  Input,
  Stack,
  Sidebar,
  Tag,
  Detail,
} from '../components'

const Label = styled.label(
  ({ theme }) => css`
    font-family: ${theme.fonts.sans};
    font-weight: bold;
  `
)

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
      <Stack spacer='s2'>
        <Stack spacer='s1'>
          <Stack spacer='s-1'>
            <Label htmlFor='search'>Search</Label>
            <Input
              id='search'
              placeholder='Search note titles and tags'
              value={searchQuery}
              onChange={handleSearch}
              css={`
                width: 100%;
              `}
            />
          </Stack>
          <Stack spacer='s-1'>
            <Label>Tags</Label>
            <Sidebar contentMin='20%' sidebarWidth='s8' gap='s-1'>
              <div>
                <Cluster
                  space='s-1'
                  css={`
                    border: none;
                  `}
                >
                  <ul
                    css={`
                      padding: 0;
                    `}
                  >
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
              </div>
            </Sidebar>
          </Stack>
        </Stack>
        <Stack spacer='s2'>
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
      </Stack>
    </Layout>
  )
}

const FilterButton = styled.button(
  ({ theme, selected }) => css`
    height: 100%;
    width: 50%;
    min-width: ${theme.sizes.s3};

    text-transform: uppercase;

    color: ${selected ? theme.colors.n900 : 'inherit'};
    background: ${selected ? theme.colors.b500 : 'none'};

    border-width: 1px;
    border-style: solid;

    border-color: ${selected ? theme.colors.b500 : theme.colors.n100};

    outline: none;

    &:active,
    &:hover,
    &:focus {
      color: ${selected ? theme.colors.n900 : theme.colors.b500};
      border-color: ${selected
        ? theme.colors.b300
        : theme.colors.b500};
      outline: none;
    }

    transition: 0.1s color, 0.1s background, border 0.2s;
    ${!selected && `cursor: pointer;`}
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
      text-decoration: none;
      &:focus,
      &:active {
        outline: none;
        text-decoration: none;
      }
      &:focus h4,
      &:hover h4 {
        color: ${({ theme }) => theme.colors.b400};
      }
    `}
  >
    <Stack spacer='s0'>
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
      <Detail>
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
      </Detail>
    </Stack>
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
