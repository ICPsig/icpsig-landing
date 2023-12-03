import React from 'react'
import { sampleCardData } from '../config'
import SampleCard from '../utils/SampleCard'

type Props = {}

const Samples = (props: Props) => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-[90%] sm:w-[80%]">
        {sampleCardData.map((data) => {
          return <SampleCard {...data} key={data.id} />;
        })}
      </div>
    </div>
  );
}

export default Samples