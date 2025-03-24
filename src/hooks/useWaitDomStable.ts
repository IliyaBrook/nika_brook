import React, { useEffect } from 'react'

interface IUseWaitDomStable<T extends boolean> {
	checkInterval?: number,
	useState?: T,
	callback?: () => void
}

const useWaitDomStable = <T extends boolean>(props: IUseWaitDomStable<T> = {}) => {
	const [completed, setCompleted] = React.useState(false)
	const {
		checkInterval = 300,
		useState = true as T,
		callback
	} = props
	
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
		
		if (document) {
			observer.observe(document, {
				childList: true,
				subtree: true,
				attributes: true
			})
		}
		
		return () => {
			observer.disconnect()
			if (timer) clearTimeout(timer)
		}
	}, [])
	
	if (useState && completed) {
		return true as T extends true ? true : never
	}
	return null as T extends true ? true : null
}

export default useWaitDomStable