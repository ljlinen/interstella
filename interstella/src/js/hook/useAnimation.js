import { useEffect, useState } from "react"

export default function useAnimation(refElement, classVisible, classHidden) {

  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const refCurrent = refElement?.current
    if(refCurrent) {
      if(isVisible) {
        refCurrent.style.display = 'revert'
        classVisible && refCurrent.classList.add(classVisible)
        refCurrent.classList.remove(classHidden)
      } else {
        classVisible && refCurrent.classList.remove(classVisible)
        refCurrent.classList.add(classHidden)
        const duration = Math.max(refCurrent.style.transitionDuration.split(',').map(d => parseFloat(d) * 1000))
        console.log(duration);
        setTimeout(() => refCurrent.style.display = 'none', 3000)
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible])

  return {
    isVisible,
    setIsVisible
  }
}
