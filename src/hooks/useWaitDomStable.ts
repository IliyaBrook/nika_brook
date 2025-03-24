import React, { useEffect } from 'react'

interface IUseWaitDomStable<T extends boolean> {
	targetRef: React.RefObject<any>,
	checkInterval?: number,
	attributeFilter?: string[],
	useState?: T,
	callback?: () => void
}

const useWaitDomStable = <T extends boolean>({
	attributeFilter = [],
	checkInterval = 300,
	targetRef,
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
						if (callback) callback()
						if (useState) setCompleted(true)
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
		return true as T extends true ? true : false
	}
	return null as T extends true ? true : null;
}

export default useWaitDomStable