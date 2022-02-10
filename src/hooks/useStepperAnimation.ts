import { useEffect, useRef, useCallback } from 'react'


const useStepperAnimation = (changeCssStyle) => {
    const element = useRef(null)
    
    const onScroll = useCallback(([entry]) => {
        if (entry.isIntersecting) {
            changeCssStyle?.()
        }
    }, [changeCssStyle])
    
    useEffect(() => {
        let observer
        
        if (element.current) {
            observer = new IntersectionObserver(onScroll, { threshold: 0.7, rootMargin: '300px 0px' })
            observer.observe(element.current)
        }
        
        return () => observer && observer.disconnect()
    }, [onScroll])
    
    return {
        ref: element
    }
}

export default useStepperAnimation