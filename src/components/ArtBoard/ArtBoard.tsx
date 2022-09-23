type Props = {
  width: string
  height: string
  viewBox: string
  children: React.ReactNode
  className?: string
}

export default function ArtBoard({
  width,
  height,
  viewBox,
  children,
  className,
}: Props) {
  return (
    <svg width={width} height={height} viewBox={viewBox} className={className}>
      {children}
    </svg>
  )
}
