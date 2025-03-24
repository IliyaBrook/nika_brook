import React, { useEffect } from 'react'

interface IUseWaitDomStable<T extends boolean> {
	targetRef: React.RefObject<any>,
	checkInterval?: number,
	attributeFilter: string[],
	useCallback?: boolean,
	useState?: T,
	callback?: () => void
}

const useWaitDomStable = <T>({
	attributeFilter = [],
	checkInterval = 300,
	targetRef,
	useCallback = true,
	useState = true as T,
	callback
                          }: IUseWaitDomStable<T>) => {
	const [completed, setCompleted] = React.useState(false)
	useEffect(() => {
		let timer: ReturnType<typeof setTimeout> | null = null
		let lastMutationIndex = 0
		
		const observer = new MutationObserver((mutations: MutationRecord[]) => {
			mutations.forEach((_, idx) => {
				if (idx === 0) return
				if (lastMutationIndex !== idx) {
					lastMutationIndex = idx
					if (timer) clearTimeout(timer)
					timer = setTimeout(() => {
						if (useCallback) callback && callback()
						if (useState) setCompleted(true)
						console.log('is passes')
						observer.disconnect()
					}, checkInterval)
				}
			})
		})
		
		if (targetRef.current) {
			observer.observe(targetRef.current, {
				childList: true,
				subtree: true,
				attributes: true,
				attributeFilter
			})
		}
		
		return () => {
			observer.disconnect()
			if (timer) clearTimeout(timer)
		}
	}, [])
	
	if (useState && completed) {
		return true
	}
	return null
}

export default useWaitDomStable