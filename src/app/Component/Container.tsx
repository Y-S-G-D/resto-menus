import React from 'react'

const Container = ({ children , className }: { children: React.ReactNode , className?: string }) => {
  return (
    <div className={`w-full max-w-7xl mx-auto px-4 md:px-8 xl:px-12 ${className || ''}`}>
      {children}
    </div>
  )
}

export default Container
