import { useCallback } from 'react'

/*
  It takes IconName and event, and save to clipboard of IconName
*/

const useShareIconName = () =>
  useCallback((iconName, e) => {
    e?.stopPropagation()
    navigator?.clipboard?.writeText(iconName)
  }, [])

export default useShareIconName
