import { useEffect } from "react";

const useTitle = (title) => {
    useEffect(() => {
        document.title = `ACU | ${title}`
    }, [title]);
}

export default useTitle;