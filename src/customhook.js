import { useEffect } from 'react';

function useConsoleCount(countVar) {

    useEffect(() => {
        console.log(countVar);
    }, [countVar]);
};

export default useConsoleCount;