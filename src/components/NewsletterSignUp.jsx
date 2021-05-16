import React from 'react'
import { Box, Button, Stack, Input, Sidebar } from '../components'

export const NewsletterSignUp = () => (
  <Box>
    <Stack spacer='s1'>
      <h3>Newsletter</h3>
      <p>
        I run the Explore-Exploit newsletter where I write about being
        a better engineer and play with future ideas in technology.
        Sign up below.
      </p>
      <Sidebar flipSides contentMin='61.8%'>
        <form
          action='https://buttondown.email/api/emails/embed-subscribe/explore-exploit'
          method='post'
          target='popupwindow'
          onSubmit={() =>
            window.open(
              'https://buttondown.email/mulholio',
              'popupwindow'
            )
          }
          // className needed for email signup (non-styling)
          className='embeddable-buttondown-form'
        >
          <Input
            type='email'
            name='email'
            id='bd-email'
            placeholder='email@address.com'
          ></Input>
          <input type='hidden' value='1' name='embed'></input>
          <Button type='submit' value='Subscribe'>
            Subscribe
          </Button>
        </form>
      </Sidebar>
    </Stack>
  </Box>
)
