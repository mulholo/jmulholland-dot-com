import React from 'react'
import styled from 'styled-components'
import Card from './Card'

const StyledTitle = styled.h4`
  margin: 0 0 ${props => props.theme.s2} 0;
  line-height: 1.2;
`

const StyledDetail = styled.span`
  margin-top: ${props => props.theme.s4};
  font-size: ${props => props.theme.tSmall};
  color: ${props => props.theme.n500};
`

const BlogCard = ({
  /**
   * Internal page to link to
   */
  link,
  title,
  detail,
  className,
}) => (
  <Card link={link} className={className}>
    {title && <StyledTitle>{title}</StyledTitle>}
    {detail && <StyledDetail>{detail}</StyledDetail>}
  </Card>
)

export default BlogCard
