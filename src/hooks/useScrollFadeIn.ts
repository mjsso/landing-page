import { useRef, useEffect, useCallback } from 'react'
import { isMobileOnly } from 'react-device-detect'


export enum Direction {
    UP = 'UP',
    DOWN = 'DOWN',
    LEFT = 'LEFT',
    RIGHT = 'RIGHT'
}

type ScrollFadeInProps = {
    direction: Direction.UP | Direction.DOWN | Direction.LEFT | Direction.RIGHT;
    duration: number;
    delay: number;
}

const useScrollFadeIn = (props: ScrollFadeInProps) => {
    const { direction, duration, delay } = props
    const element = useRef(null)
    
    const handleDirection = (dir: string) => {
        switch (dir) {
            case Direction.UP:
                return 'translate3d(0, 50%, 0)'
            case Direction.DOWN:
                return 'translate3d(0, -50%, 0)'
            case Direction.LEFT:
                return 'translate3d(50%, 0, 0)'
            case Direction.RIGHT:
                return 'translate3d(-50%, 0, 0)'
            default:
                return
        }
    }
    
    const onScroll = useCallback(([entry]) => {
        const { current } = element
        if (entry.isIntersecting) {
            current.style.transitionProperty = 'all'
            current.style.transitionDuration = `${duration}s`
            current.style.transitionTimingFunction = 'cubic-bezier(0, 0, 0.2, 1)'
            current.style.transitionDelay = `${delay}s`
            current.style.opacity = 1
            current.style.transform = 'translate3d(0, 0, 0)'
        }
    }, [delay, duration])
    
    useEffect(() => {
        let observer
        
        if (element.current) {
            observer = new IntersectionObserver(onScroll, { threshold: 0.7 })
            observer.observe(element.current)
        }
        
        return () => observer && observer.disconnect()
    }, [onScroll])
    
    // NOTE : Desktop, Pad에서만 스크롤 효과 활성화
    return !isMobileOnly ? {
        ref: element,
        style: { opacity: 0, transform: handleDirection(direction) }
    } : {}
}

export default useScrollFadeIn