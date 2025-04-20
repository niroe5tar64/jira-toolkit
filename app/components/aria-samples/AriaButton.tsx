import { useRef } from "react";
import { useButton } from "@react-aria/button";

type Props = {
  children: React.ReactNode;
  onPress: () => void;
};

export function AriaButton({ children, onPress }: Props) {
  const ref = useRef(null);
  const { buttonProps } = useButton({ onPress }, ref);

  return (
    <button
      {...buttonProps}
      ref={ref}
      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
    >
      {children}
    </button>
  );
}