import { useEffect, useRef, useState } from "react";
import { useBlocker } from "react-router";

function beforeUnloadHandler(e: BeforeUnloadEvent): void {
    e.preventDefault();
    return;
}

function useWindow(): void {
    let blocker = useBlocker(({ currentLocation, nextLocation, historyAction }) => !currentLocation.state.ignoreConfirm);

    if (blocker.state === 'blocked') {
        const isAccept = window.confirm('페이지 이동시 기존 데이터가 사라질 수 있습니다. 정말 진행하시겠습니까?');
        if (isAccept) {
            blocker.proceed() // 진행한다.
        } else {
            blocker.reset();
        }
    }

    useEffect(() => {
        const handleBeforeUnload = (event: BeforeUnloadEvent) => beforeUnloadHandler(event);
        window.addEventListener("beforeunload", handleBeforeUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, []);
    
}

export {
    useWindow
}
