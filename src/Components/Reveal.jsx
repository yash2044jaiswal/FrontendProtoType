import { useEffect, useRef, useState } from 'react';

// Fades and slides children in when scrolled into view. Respects reduced motion.
export default function Reveal({ children, delay = 0, className = '' }) {
	const ref = useRef(null);
	const [on, setOn] = useState(false);
	useEffect(() => {
		if (matchMedia('(prefers-reduced-motion: reduce)').matches) { setOn(true); return; }
		const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setOn(true); io.disconnect(); } }, { threshold: 0.15 });
		io.observe(ref.current);
		return () => io.disconnect();
	}, []);
	return <div ref={ref} style={{ transitionDelay: `${delay}ms` }} className={`transition duration-700 motion-reduce:transition-none ${on ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'} ${className}`}>{children}</div>;
}