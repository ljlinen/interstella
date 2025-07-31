import { useRef } from 'react'

export default function useScrollButtons(xy, percentage = .5) {

  const refContainer = useRef(null)
  const Scroll = (isIncrementing) => {
    try {
          const elem = refContainer.current
          if(!elem) throw new Error('scroll buttons ref current null')

            const viewport = (xy === 'x') ? 
            document.body.clientWidth :
            document.body.clientHeight
            const increment = viewport * .5

            console.log('incriment: ', increment);
            console.log(isIncrementing ?
              'increasing from: ' + elem.scrollLeft + ' to: ' + (elem.scrollLeft + increment) :
              'decreasing from: ' + elem.scrollLeft + ' to: ' + (elem.scrollLeft - increment)
            );

            elem.scrollTo(
              xy === 'x' ?  
              { left: isIncrementing ? (elem.scrollLeft + increment) : (elem.scrollLeft - increment) } :
              { top: isIncrementing ? (elem.scrollLeft + increment) : (elem.scrollLeft - increment) }
            )
          } catch (error) {
      console.log(error);
    }
  }

  return {
    refContainer,
    Scroll
  }
}
