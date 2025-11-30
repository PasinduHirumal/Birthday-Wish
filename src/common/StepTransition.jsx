import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

const StepTransition = ({ children, trigger }) => {
    const containerRef = useRef(null);

    useLayoutEffect(() => {
        const el = containerRef.current;

        gsap.fromTo(
            el,
            { autoAlpha: 0, y: 30 },
            {
                autoAlpha: 1,
                y: 0,
                duration: 0.8,
                ease: "power3.out",
            }
        );
    }, [trigger]);

    return (
        <div ref={containerRef} className="w-full">
            {children}
        </div>
    );
};

export default StepTransition;
