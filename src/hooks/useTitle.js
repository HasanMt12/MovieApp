import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Cineflex`;
    }, [title])
};

export default useTitle;