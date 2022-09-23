import { useEffect, useState } from 'react'
import Svg from './svg'

export default function ALongNight() {
  const [beardLayers, setBeardLayers] = useState<HTMLElement[]>([])
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('.boogieman__layer')
    const arrayOfElements = Array.from(elements)
    setBeardLayers(arrayOfElements)
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
    <div className="h-screen grid relative">
      <Svg className="transition-all z-10 " />
      <div className="px-4 grid place-items-center h-24 border">
        <input
          className="w-full appearance-none bg-gray-400/60 h-2 hover:cursor-pointer"
          type="range"
          min="0"
          max={beardLayers.length.toString()}
          id="myRange"
          onChange={(e) => handleValueChange(e.target.value)}
        />
      </div>
    </div>
  )
}
