import {useEffect, useState} from 'react';

export const useNotFoundPageContent = () => {

    const [notFoundPageContent, setNotFoundPageContent] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const content =
            {
                title: "404 - Page Not Found",
                message: "The page you are looking for does not exist.",
                errorPicture: "",
                backgroundImage: "",
                backgroundColor: "c21f26"
            }
        setNotFoundPageContent(content);
        setIsLoading(false);
        return (() => {
            setNotFoundPageContent(null);
        });
    }, []);

    return {notFoundPageContent, isLoading};
}