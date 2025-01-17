function getElementsByXPath({
	                            xpath,
	                            context = document,
                            }: {
	xpath: string;
	context?: Document | Element;
}): HTMLElement[] {
	const result = document.evaluate(
		xpath,
		context,
		null,
		XPathResult.ORDERED_NODE_ITERATOR_TYPE,
		null
	);
	
	const elements: HTMLElement[] = [];
	let node = result.iterateNext();
	
	while (node) {
		if (node instanceof HTMLElement) {
			elements.push(node);
		}
		node = result.iterateNext();
	}
	
	return elements;
}

export default getElementsByXPath;