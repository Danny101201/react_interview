import { PropsWithChildren, useState, useTransition } from 'react'
import './App.css'
import PostsTab from './components/PostsTab'
import ContactTab from './components/ContactTab'
import AboutTab from './components/AboutTab'

type TabType = 'about' | 'contact' | 'post'
function App() {
  const [tab, setTabs] = useState<TabType>()
  return (
    <>
      <ToggleButton
        onClick={() => setTabs('about')}
        isActive={tab === 'about'}
      >about
      </ToggleButton>
      <ToggleButton
        onClick={() => setTabs('post')}
        isActive={tab === 'post'}
      >post
      </ToggleButton>
      <ToggleButton
        onClick={() => setTabs('contact')}
        isActive={tab === 'contact'}
      >contact
      </ToggleButton>
      {tab === 'about' && <AboutTab />}
      {tab === 'post' && <PostsTab />}
      {tab === 'contact' && <ContactTab />}
    </>
  )
}

interface ToggleButtonProps extends PropsWithChildren {
  onClick: () => void,
  isActive: boolean
}
const ToggleButton = ({ onClick, isActive, children }: ToggleButtonProps) => {
  const [isPending, startTransition] = useTransition();
  if (isActive) {
    return <b>{children}</b>
  }
  return <button onClick={() => {
    startTransition(() => {
      onClick()
    })
  }
  }>{children}</button>
}

export default App
