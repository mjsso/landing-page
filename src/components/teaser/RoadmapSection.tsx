import React from 'react'
import moment from 'moment'
import SectionContainer from 'components/common/SectionContainer'
import SectionContent from 'components/common/SectionContent'
import VerticalStepper from 'components/common/VerticalStepper'
import './RoadmapSection.scss'


const getActivateState = (date: string) => {
    return moment().isAfter(moment(date))
}

const chartData: {
    title: string;
    description: string;
    isActive: boolean;
}[] = [
    {
        title: '2021 Q3',
        description: 'Neque porro\nquisquam est\nqui dolorem ipsum',
        isActive: getActivateState('2021-07-01')
    },
    {
        title: '2021 Q4',
        description: 'Neque porro\nquisquam est\nqui dolorem ipsum',
        isActive: getActivateState('2021-10-01')
    },
    {
        title: '2022 Q1',
        description: 'Neque porro\nquisquam est\nqui dolorem ipsum',
        isActive: getActivateState('2022-01-01')
    },
    {
        title: '2022 Q2',
        description: 'Neque porro\nquisquam est\nqui dolorem ipsum',
        isActive: getActivateState('2022-04-01')
    },
    {
        title: '2022 Q3',
        description: 'Neque porro\nquisquam est\nqui dolorem ipsum',
        isActive: getActivateState('2022-07-01')
    },
    {
        title: '2022 Q4',
        description: 'Neque porro\nquisquam est\nqui dolorem ipsum',
        isActive: getActivateState('2022-10-01')
    }
]

const RoadmapSection: React.FC = () => {
    return <SectionContainer className='teaser-roadmap-section' id='teaser-roadmap-section'>
        <SectionContent title='Roadmap' subTitle='Sample will show you the future of derivatives in the cryptocurrency world'>
            <VerticalStepper items={chartData}/>
        </SectionContent>
    </SectionContainer>
}

export default RoadmapSection