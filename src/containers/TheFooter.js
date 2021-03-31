import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
        <a target="_blank" rel="noopener noreferrer">UI</a>
        <span className="ml-1">&copy; 2020 creativeLabs.</span>
      </div>
      <div className="mfs-auto">
        <span className="mr-1">Powered by</span>
        <a target="_blank" rel="noopener noreferrer"> React</a>
      </div>
    </CFooter>
  )
}

export default React.memo(TheFooter)
