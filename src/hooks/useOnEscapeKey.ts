import { useEffect } from 'react'

const useOnEscapeKey = (callback: () => void) => {
	useEffect(() => {
		const keyEventHandler = (event: KeyboardEvent) => {
			if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) {
				return
			}
			if (event.key === 'Escape'){
				callback();
			}
		}
		document.addEventListener('keydown', keyEventHandler);
		return () => {
			document.removeEventListener('keydown', keyEventHandler);
		}
	}, [])
};

export default useOnEscapeKey;