export const toggleFullScreens = (isFullScreen: boolean, setIsFullScreen: React.Dispatch<React.SetStateAction<boolean>>) => {

  if (isFullScreen) {
    if (document.exitFullscreen) {
      document.exitFullscreen()
    }
  } else {
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen()
    }

  }
  setIsFullScreen((pre) => !pre)
}