import ArtBoard from '@/components/ArtBoard'
import { useEffect, useRef, useState } from 'react'
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
      <Beard />
      <Pipe />
    </ArtBoard>
  )
}

const ArtBoardTwo = () => {
  return (
    <ArtBoard
      height="40%"
      width="80%"
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
  const inputRef = useRef<HTMLInputElement | null>(null)

  const [beardLayers, setBeardLayers] = useState<HTMLElement[]>([])
  const [ringLayer, setRingLayer] = useState<HTMLElement>()
  const [ringPathLayer, setRingPathLayer] = useState<HTMLElement>()

  useEffect(() => {
    const beardElements = document.querySelectorAll('.aln__beard')
    const ringElement = document.querySelector('#boogieman-ring')
    setBeardLayers(Array.from(beardElements) as HTMLElement[])
    setRingLayer(ringElement as HTMLElement)
  }, [])

  useEffect(() => {
    // position input element
    // align with the boogieman ring-path element
    const el = document.getElementById('boogieman-ringpath')
    setRingPathLayer(el as HTMLElement)

    const positionInput = (el: HTMLElement) => {
      const { width, x, y } = el.getBoundingClientRect()
      const current = inputRef.current

      if (current) {
        current.style.width = `${width * 1.1}px`
        current.style.transform = `translate3d(${x}px, ${y}px, 0) rotate(5deg)`
      }
    }

    positionInput(el as HTMLElement)

    if (window && el) {
      window.addEventListener('resize', () => positionInput(el))
      return () => window.removeEventListener('resize', () => positionInput(el))
    }
  }, [])

  const handleValueChange = (value: string) => {
    const currentValue = parseInt(value)

    beardLayers.forEach((layer, idx) => {
      if (idx > currentValue) {
        layer.style.opacity = '0'
      } else {
        layer.style.opacity = '1'
      }
    })

    const maxInputVal = beardLayers.length
    const inputValPerc = currentValue / maxInputVal
    if (ringPathLayer && ringLayer) {
      const maxX = 160
      const maxY = 18
      const xTransform = maxX * inputValPerc
      const yTransform = maxY * inputValPerc
      ringLayer.style.transform = `translate(${xTransform}px, ${yTransform}px)`
    }
  }

  return (
    <div className="relative h-full w-full">
      <ArtBoardOne />
      <ArtBoardTwo />
      <input
        min={0}
        max={beardLayers.length}
        ref={inputRef}
        type="range"
        className="hover:cursor-pointer absolute -top-3 -left-2 md:-left-4 opacity-0 appearance-none h-[5%]"
        onChange={(e) => handleValueChange(e.target.value)}
      />
    </div>
  )
}
