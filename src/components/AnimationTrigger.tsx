import React, { ReactNode } from "react";
import { useInView } from "react-intersection-observer";

interface Props {
  children?: ReactNode;
  animation: string;
  startClass?: string;
  endClass?: string;
  rootMargin?: string;
  triggerOnce?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const AnimationTrigger = ({
  children,
  rootMargin = "-10%",
  animation,
  startClass = "",
  triggerOnce = true,
  className,
  style
}: Props) => {
  const { ref, inView } = useInView({
    rootMargin: rootMargin,
    triggerOnce: triggerOnce
  });
  return (
    <div ref={ref} className={className}>
      <div className={inView ? animation : startClass} style={style}>{children}</div>
    </div>
  );
};

export default AnimationTrigger;