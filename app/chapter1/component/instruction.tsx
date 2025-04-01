import React from "react";

interface InstructionProps {
  children: React.ReactNode;
}

export default function Instruction({ children }: InstructionProps) {
  return (
    <div className="mb-6 p-4 bg-blue-50 rounded-md border border-blue-200">
      <h3 className="text-lg font-semibold text-blue-800 mb-2">Instructions</h3>
      <p className="text-sm text-blue-700">{children}</p>
    </div>
  );
}
