import React, { createRef, useMemo, useEffect } from 'react'
import Content from 'components/Content'
import SmoothScroll from 'smooth-scroll'
import { isMobileOnly } from 'react-device-detect'
import { MainSection, IntroductionSection, EcoSystemSection, CommunitySection, RoadmapSection, FAQSection } from 'components/teaser'


const ANIMATION_OFFSET = 800

const Home: React.FC = () => {
    const scrollTarget = createRef<HTMLDivElement>()
    const scroll = useMemo(() => new SmoothScroll(), [])
    
    useEffect(() => {
        let inScroll = false
        
        function endPaging(event: WheelEvent) {
            event.preventDefault()
            event.stopPropagation()
            event.stopImmediatePropagation()
            
            if (event.deltaY >= 1 && !inScroll) {
                inScroll = true
                scroll.animateScroll(scrollTarget.current, undefined, {
                    easing: 'easeInOutCubic'
                })
                
                setTimeout(() => {
                    window.removeEventListener('wheel', endPaging)
                    inScroll = false
                }, ANIMATION_OFFSET)
            }
        }
        
        const startPaging = () => {
            setTimeout(() => {
                const scrollY = window.scrollY
                if (scrollY === 0) {
                    window.addEventListener('wheel', endPaging, { passive: false })
                }
            }, 500)
        }
        
        if (!isMobileOnly) {
            window.addEventListener('scroll', startPaging)
            startPaging()
        }
        
        return () => {
            window.removeEventListener('scroll', startPaging)
            window.removeEventListener('wheel', endPaging)
        }
    }, [scroll])
    return (<Content>
        <MainSection/>
        <IntroductionSection ref={scrollTarget}/>
        <EcoSystemSection/>
        <CommunitySection/>
        <RoadmapSection/>
        <FAQSection/>
    </Content>)
}

export default Home