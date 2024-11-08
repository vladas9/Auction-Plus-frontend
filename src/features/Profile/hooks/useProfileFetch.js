import { useEffect, useState, useContext } from "react";
import { BidContext } from "../../../context/BidContext";
export const useProfileFetch = (url) => {
    const { profilePicUrl } = useContext(BidContext);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [user_data, setUserData] = useState(null);
    useEffect(() => {
        const fetchData = async (fetchUrl) => {
            try {
                let response = await fetch(fetchUrl, {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("auth-token")}`,
                    },
                });
                let data = await response.json();
                setUserData(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchData(url);
    }, []);
    return { profilePicUrl, error, loading, user_data };
};
