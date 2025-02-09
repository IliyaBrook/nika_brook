import React, { useRef } from 'react'

interface IUseTouches<TTouchEnd, TMouseUp> {
	touchEndCallback: (item: TTouchEnd) => void;
	mouseUpCallback: (item: TMouseUp) => void;
}

const useTouches = <TTouchEnd, TMouseUp>({
	                                         mouseUpCallback
	
                                         }: IUseTouches<TTouchEnd, TMouseUp>) => {
	const clickPosition = useRef<{ x: number; y: number } | null>(null)
	
	const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
		clickPosition.current = { x: e.clientX, y: e.clientY }
	}
	
	const handleMouseUp = (e: React.MouseEvent<any>, elem: TMouseUp) => {
		if (clickPosition.current) {
			const dx = Math.abs(clickPosition.current.x - e.clientX)
			const dy = Math.abs(clickPosition.current.y - e.clientY)
			
			if (dx < 5 && dy < 5) {
				mouseUpCallback(elem)
			}
			clickPosition.current = null
		}
	}
	
	return {
		handleMouseDown,
		handleMouseUp
	}
}

export default useTouches