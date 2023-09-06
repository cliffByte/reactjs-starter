/**
 * Carousel Component
 *
 * This component creates a responsive image carousel using the Chakra UI and react-slick libraries.
 * It displays a set of images with navigation buttons to slide between them.
 */

import { useState } from 'react'
import Slider from 'react-slick'
import { Box, IconButton, Image, useBreakpointValue } from '@chakra-ui/react'
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi'

// Import image URLs or paths for the carousel
import { image } from '@config/constant/image'

// Settings for the react-slick slider
const settings = {
  dots: true, // Display pagination dots
  arrows: false, // Hide default navigation arrows
  fade: true, // Enable fading transition between slides
  infinite: true, // Infinite looping of slides
  autoplay: true, // Auto-play the carousel
  speed: 500, // Transition speed in milliseconds
  autoplaySpeed: 5000, // Time between auto-play transitions
  slidesToShow: 1, // Number of slides to show at once
  slidesToScroll: 1, // Number of slides to scroll at a time
}
// FOR MORE SETTING OPTION YOU CAN CHECKOUT react-slick.d.ts from types folder

export default function Carousel() {
  // State to manage the Slider component reference
  const [slider, setSlider] = useState<Slider | null>(null)

  // Determine the position of navigation buttons based on breakpoints
  const top = useBreakpointValue({ base: '90%', md: '50%' })
  const side = useBreakpointValue({ base: '30%', md: '10px' })

  // Array of image URLs or paths to display in the carousel
  const cards = [image.slider1]

  return (
    <Box position={'relative'} height={'600px'} width={'full'} overflow={'hidden'}>
      {/* Load CSS files for react-slick */}
      <link
        rel='stylesheet'
        type='text/css'
        href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css'
      />
      <link
        rel='stylesheet'
        type='text/css'
        href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css'
      />

      {/* Left Navigation Button */}
      <IconButton
        aria-label='left-arrow'
        colorScheme='whiteAlpha'
        borderRadius='full'
        position='absolute'
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => {
          slider?.slickPrev()
        }}
      >
        <BiLeftArrowAlt />
      </IconButton>

      {/* Right Navigation Button */}
      <IconButton
        aria-label='right-arrow'
        colorScheme='whiteAlpha'
        borderRadius='full'
        position='absolute'
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => {
          slider?.slickNext()
        }}
      >
        <BiRightArrowAlt />
      </IconButton>

      {/* Slider Component */}
      <Slider
        {...settings}
        ref={(slider) => {
          setSlider(slider)
        }}
      >
        {cards.map((url, index) => (
          <Image
            key={index}
            height={'6xl'}
            backgroundPosition='center'
            backgroundRepeat='no-repeat'
            backgroundSize='cover'
            backgroundImage={`url(${url})`}
          />
        ))}
      </Slider>
    </Box>
  )
}
