import { useEffect, useRef, useState } from 'react'

interface IUseWaitDomStable<TUseState extends boolean> {
	checkInterval?: number;
	useState?: TUseState;
	callback?: () => void;
}

type HookReturnType<TUseState extends boolean> = TUseState extends true ? boolean : null;

const useWaitDomStable = <TUseState extends boolean = true>(
	props: IUseWaitDomStable<TUseState> = {}
): HookReturnType<TUseState> => {
	const {
		checkInterval = 300,
		useState: manageState = true as TUseState,
		callback
	} = props;
	
	const [isStable, setIsStable] = useState(false);
	const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
	const observerRef = useRef<MutationObserver | null>(null);
	const callbackRef = useRef(callback);
	
	useEffect(() => {
		callbackRef.current = callback;
	}, [callback]);
	
	useEffect(() => {
		
		if (manageState && isStable) {
			if (observerRef.current) { observerRef.current.disconnect(); observerRef.current = null; }
			if (timerRef.current) { clearTimeout(timerRef.current); timerRef.current = null; }
			return;
		}
		if (typeof document === 'undefined' || typeof MutationObserver === 'undefined') {
			return;
		}
		if (!manageState && !callbackRef.current) {
			return;
		}
		
		const cleanup = () => {
			if (observerRef.current) { observerRef.current.disconnect(); observerRef.current = null; }
			if (timerRef.current) { clearTimeout(timerRef.current); timerRef.current = null; }
		};
		cleanup();
		
		const handleStable = () => {
			timerRef.current = null;
			if (observerRef.current) { observerRef.current.disconnect(); observerRef.current = null; }
			if (callbackRef.current) { callbackRef.current(); }
			if (manageState && !isStable) { setIsStable(true); }
		};
		
		const mutationCallback = (mutations: MutationRecord[]) => {
			if (timerRef.current) { clearTimeout(timerRef.current); }
			timerRef.current = setTimeout(handleStable, checkInterval);
		};
		
		observerRef.current = new MutationObserver(mutationCallback);
		observerRef.current.observe(document.body, {
			childList: true, subtree: true, attributes: true,
		});
		
		mutationCallback([]);
		
		return cleanup;
		
	}, [checkInterval, manageState, isStable]);
	
	if (manageState) {
		return isStable as HookReturnType<TUseState>;
	} else {
		return null as HookReturnType<TUseState>;
	}
};

export default useWaitDomStable;