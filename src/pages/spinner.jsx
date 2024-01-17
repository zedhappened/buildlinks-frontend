import React from 'react'
import { MoonLoader } from 'react-spinners'

const cssOverride = {

}

const Spinner = () => {
  return (
    <div className="min-h-dvh flex h-full items-center justify-center">
      <MoonLoader
        color="#D01F25"
        cssOverride={cssOverride}
        size={80}
        aria-label="Loading Spinner"
      />
    </div>
  )
}

export default Spinner