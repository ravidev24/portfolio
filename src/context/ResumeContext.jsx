import { createContext, useContext, useState } from 'react'
import ResumeModal from '../components/ResumeModal'

const ResumeContext = createContext(null)

export function ResumeProvider({ children }) {
  const [open, setOpen] = useState(false)

  return (
    <ResumeContext.Provider value={{ openResume: () => setOpen(true) }}>
      {children}
      <ResumeModal open={open} onClose={() => setOpen(false)} />
    </ResumeContext.Provider>
  )
}

export function useResume() {
  const context = useContext(ResumeContext)
  if (!context) {
    throw new Error('useResume must be used within ResumeProvider')
  }
  return context
}
