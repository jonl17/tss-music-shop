import ArtBoard from '@/components/ArtBoard'
import {
  Layer36,
  BoogieManFace,
  Glasses,
  Eyes,
  Throat,
  Lips,
  Beard,
  Pipe,
  HandColor,
  Shoulder,
  Hand,
  Layer36Second,
  RingPath,
  Ring,
} from './layers'

const ArtBoardOne = () => {
  return (
    <ArtBoard width="100%" height="100%" viewBox="0 0 640 800">
      <Layer36 />
      <BoogieManFace />
      <Glasses />
      <Eyes />
      <Throat />
      <Lips />
      {/* <Beard /> */}
      <Pipe />
    </ArtBoard>
  )
}

const ArtBoardTwo = () => {
  return (
    <ArtBoard
      height="40%"
      width="75%"
      viewBox="0 0 647.23 300.82"
      className="absolute bottom-0 left-0"
    >
      <Layer36Second />
      <HandColor />
      <Hand />
      <RingPath />
      <Ring />
    </ArtBoard>
  )
}

export default function ALongNight() {
  return (
    <div className="relative h-full w-full">
      <ArtBoardOne />
      <ArtBoardTwo />
    </div>
  )
}
