export interface Settings {
  accessibility?: boolean | undefined
  adaptiveHeight?: boolean | undefined
  afterChange?(currentSlide: number): void
  appendDots?(dots: React.ReactNode): JSX.Element
  arrows?: boolean | undefined
  asNavFor?: Slider | undefined
  autoplaySpeed?: number | undefined
  autoplay?: boolean | undefined
  beforeChange?(currentSlide: number, nextSlide: number): void
  centerMode?: boolean | undefined
  centerPadding?: string | undefined
  children?: React.ReactNode
  className?: string | undefined
  cssEase?: string | undefined
  customPaging?(index: number): JSX.Element
  dotsClass?: string | undefined
  dots?: boolean | undefined
  draggable?: boolean | undefined
  easing?: string | undefined
  edgeFriction?: number | undefined
  fade?: boolean | undefined
  focusOnSelect?: boolean | undefined
  infinite?: boolean | undefined
  initialSlide?: number | undefined
  lazyLoad?: LazyLoadTypes | undefined
  nextArrow?: JSX.Element | undefined
  onEdge?(swipeDirection: SwipeDirection): void
  onInit?(): void
  onLazyLoad?(slidesToLoad: number[]): void
  onReInit?(): void
  onSwipe?(swipeDirection: SwipeDirection): void
  pauseOnDotsHover?: boolean | undefined
  pauseOnFocus?: boolean | undefined
  pauseOnHover?: boolean | undefined
  prevArrow?: JSX.Element | undefined
  responsive?: ResponsiveObject[] | undefined
  rows?: number | undefined
  rtl?: boolean | undefined
  slide?: string | undefined
  slidesPerRow?: number | undefined
  slidesToScroll?: number | undefined
  slidesToShow?: number | undefined
  speed?: number | undefined
  swipeToSlide?: boolean | undefined
  swipe?: boolean | undefined
  swipeEvent?(swipeDirection: SwipeDirection): void
  touchMove?: boolean | undefined
  touchThreshold?: number | undefined
  useCSS?: boolean | undefined
  useTransform?: boolean | undefined
  variableWidth?: boolean | undefined
  vertical?: boolean | undefined
  verticalSwiping?: boolean | undefined
  waitForAnimate?: boolean | undefined
}

declare module 'react-slick' {
  interface Slider {
    slickPrev: () => void
    slickNext: () => void
    slickPause(): void
    slickPlay(): void
    slickGoTo(slideNumber: number, dontAnimate?: boolean): void
    Settings: Settings
  }

  const Slider: React.ComponentClass
  export default Slider
}
