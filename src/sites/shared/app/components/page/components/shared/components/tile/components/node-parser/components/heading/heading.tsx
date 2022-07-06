import React from 'react'

interface HeadingProps {
  rank: number,
  heading: { c: string, n: number } | string
}

const Heading = (props: HeadingProps) => {
  const {
    rank,
    heading
  } = props

  const objectHeading = typeof heading === 'object'
  const tag = `h${rank}`
  const headingText = objectHeading ? heading.c : heading

  return (
    <>
      <div className={`heading-container ${tag}`}>
        {objectHeading && <span className='number'>{heading.n}</span>} {React.createElement(tag, {}, headingText)}
      </div>
    </>
  )
}

export default Heading
