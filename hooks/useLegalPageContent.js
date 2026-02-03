import {useEffect, useState} from 'react';

export const useLegalPageContent = () => {

    const [legalPageContent, setLegalPageContent] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const content =
            {
                title: "Legal",
                message: "The contents of this application are original work and are not to be used without permission.\n" +
                    "\n" +
                    "All Catan images, names, and associated likenesses are licensed trademarks of [Catan GmbH and Catan Studio](https://www.catan.com/).\n" +
                    "\n" +
                    "Check out the project over on [GitHub](https://github.com/trevuga2016/catan-generator-react)!",
                backgroundImage: "",
                backgroundColor: "c21f26"
            }
        setLegalPageContent(content);
        setIsLoading(false);
        return (() => {
            setLegalPageContent(null);
        });
    }, []);

    return {legalPageContent, isLoading};
}