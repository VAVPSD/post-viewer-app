import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

export function usePortal(id = 'portal-root') {
    const rootRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        let container = document.getElementById(id);
        if (!container) {
            container = document.createElement('div');
            container.id = id;
            document.body.appendChild(container);
        }
        rootRef.current = container;
    }, [id]);

    interface Props {
        children: React.ReactNode;
    };
    
    const Portal = ({ children }: Props) => {
        return rootRef.current ? createPortal(children, rootRef.current) : null;
    };

    return Portal;
}
