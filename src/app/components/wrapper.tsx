import { ReactNode } from "react";

export default function Wrapper({ children }: { children: ReactNode }) {
    return (
        <div className="flex flex-wrap items-center justify-center mx-auto max-w-[100%] p-4">
            {children}
        </div>
    )
}