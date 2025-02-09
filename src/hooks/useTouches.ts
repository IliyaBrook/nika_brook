import type { VideoGallery } from '@/types/sharable.types.ts'
import React, { useRef } from 'react'

interface IUseTouches <TTouchEnd, TMouseUp> {
	touchEndCallback: (item: TTouchEnd) => void;
	mouseUpCallback: (item: TMouseUp) => void;
}

const useTouches = <TTouchEnd, TMouseUp>({
	touchEndCallback,
	mouseUpCallback,
                    }: IUseTouches<TTouchEnd, TMouseUp>) => {
	const clickPosition = useRef<{ x: number; y: number } | null>(null);
	
	const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
		clickPosition.current = { x: e.clientX, y: e.clientY };
	};
	
	const handleMouseUp = (e: React.MouseEvent<any>, video: TMouseUp) => {
		if (clickPosition.current) {
			const dx = Math.abs(clickPosition.current.x - e.clientX);
			const dy = Math.abs(clickPosition.current.y - e.clientY);
			
			if (dx < 5 && dy < 5) {
				mouseUpCallback(video);
			}
			clickPosition.current = null;
		}
	};
	
	const handleTouchStart = (e: React.TouchEvent<any>) => {
		const touch = e.touches[0];
		clickPosition.current = { x: touch.clientX, y: touch.clientY };
	};
	
	const handleTouchEnd = (e: React.TouchEvent<any>, video: TTouchEnd) => {
		if (clickPosition.current) {
			const touch = e.changedTouches[0];
			const dx = Math.abs(clickPosition.current.x - touch.clientX);
			const dy = Math.abs(clickPosition.current.y - touch.clientY);
			
			if (dx < 5 && dy < 5) {
				touchEndCallback(video);
			}
			clickPosition.current = null;
		}
	};
	
	return {
		handleMouseDown,
		handleMouseUp,
		handleTouchStart,
		handleTouchEnd,
	};
	
}

export default useTouches;