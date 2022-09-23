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
  useEffect(() => {
    const elements = document.querySelectorAll('.aln__beard')
    setBeardLayers(Array.from(elements) as HTMLElement[])
  }, [])

  useEffect(() => {
    const el = document.getElementById('boogieman-ringpath')
    const current = inputRef.current
    const callback = (el: HTMLElement) => {
      const { width, x, y } = el.getBoundingClientRect()

      if (current) {
        current.style.width = `${width}px`
        current.style.transform = `translate3d(${x}px, ${y}px, 0) rotate(5deg)`
      }
    }
    if (el) {
      callback(el)
      if (window) {
        window.addEventListener('resize', () => callback(el))
        return () => window.removeEventListener('resize', () => callback(el))
      }
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
        className="absolute top-0"
        onChange={(e) => handleValueChange(e.target.value)}
      />
    </div>
  )
}
