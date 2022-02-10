import { SCROLL_DEACTIVATE_LIMIT} from './constants'
import { scroller } from 'react-scroll'


export const handleWheelScroll = (event: WheelEvent, scrollState: any, prevSectionId: string, nextSectionId: string) => {
    event.stopPropagation()
    if (event.deltaY >= SCROLL_DEACTIVATE_LIMIT && !scrollState.inScroll) {
        scrollState.inScroll = true
        scroller.scrollTo(nextSectionId, {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart'
        })
        
        setTimeout(() => {
            scrollState.inScroll = false
        }, 1000)
    }
    
    if (event.deltaY < -SCROLL_DEACTIVATE_LIMIT && !scrollState.inScroll) {
        scrollState.inScroll = true
        scroller.scrollTo(prevSectionId, {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
        })
        
        setTimeout(() => {
            scrollState.inScroll = false
        }, 1000)
    }
    
}
