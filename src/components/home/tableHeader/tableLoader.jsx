import React from 'react'
import ContentLoader from 'react-content-loader'

const TableRow = ({}) => {
  return (
    <>
    <ContentLoader
      viewBox="0 0 50 15"
      height={14}
      width={50}
      speed={2}
    >
      <rect x="00" y="0" rx="6" ry="6" width={50} height="15" />
    </ContentLoader>
    </>
  )
}


export default TableRow;