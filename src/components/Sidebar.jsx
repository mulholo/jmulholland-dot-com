import styled, { css } from 'styled-components'

// To make this component more flexible in the future,
// consider adding a 'side' props which dictates which side
// is the 'sidebar' and which is the 'content'

/**
 * Positions one piece of content next to another
 * with intelligent wrapping behaviour.
 *
 * @param {string} sidebarWidth - Default width (flex-basis) of sidebar. Leave blank for intrinsic. Theme size accessor format e.g. 's2'
 * @param {string} gap - Theme size accessor to control gutter width e.g. 's2'
 * @param {string} contentMin - Percentage value at which the component breaks onto two lines
 * @param {boolean} flipSides - Whether to flip the component so that sidebar is on the right and content on left
 * @param {ReactNode} children - Must have a single child which has 2 children (see example)
 *
 * @example
 * <Sidebar gutter='s1' sidebarWidth='s4' contentMin='20%' >
 *   <form>
 *    <input/>
 *    <button />
 *   </form>
 * <Sidebar>
 */
const Sidebar = styled.div(
  ({
    sidebarWidth,
    gap,
    contentMin = '50%',
    flipSides = false,
    theme,
  }) => {
    const gapValue = gap ? theme.sizes[gap] : 0
    return css`
      & > * {
        display: flex;
        flex-wrap: wrap;
        margin: -${gapValue}; /* negative margin hack to allow gap that still wraps okay */
      }

      /* intermediary wrapper */
      & > * > * {
        margin: ${gapValue};
      }

      /* the 'sidebar' itself */
      & > * > *:${flipSides ? 'last-child' : 'first-child'} {
        ${sidebarWidth &&
          `flex-basis: ${theme.sizes[sidebarWidth]};`} /* default width of sidebar; omit this line for intrinsic width of sidebar */
      flex-grow: 1; /* makes the sidebar grow after wrap */
        align-items: stretch;
      }

      /* 'content' */
      & > * > *:${flipSides ? 'first-child' : 'last-child'} {
        flex-grow: 999; /* make content take up remaining space */
        flex-basis: 0; /* needed so the contents does not force wrap instantly */
        min-width: calc(${contentMin} - (${gapValue} * 2));
      }
    `
  }
)

export default Sidebar
