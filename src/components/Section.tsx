interface SectionProps {
  children?: React.ReactNode,
  tailwind?: string
}

export const Section = (props : SectionProps) => {
  return (
    <section className={`flex flex-wrap px-14 gap-10 items-center justify-center my-24 ${props.tailwind}`}>
      {props.children}
    </section>
  )
}
