import { ReactNode } from "react";

interface DarkLayoutProps {
    children: ReactNode;
}

export const DarkLayout = ({ children }: DarkLayoutProps) => {
    return (
        <div style={{
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            borderRadius: '2px',
        }}>
            <div>
                {children}
            </div>
        </div>
    );
}
