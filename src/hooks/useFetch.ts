import { useEffect, useState } from 'react'

const useFetch = (url: string) => {
    const [data, setData] = useState<any>(null)
    const [error, setError] = useState<any>(null)
    const [loading, setLoading] = useState(true)

    const cachedData = sessionStorage.getItem('dataProduct');

    useEffect(() => {
        setLoading(true);
        if (cachedData) {
            setData(JSON.parse(cachedData));
            setLoading(false);
        } else {
            fetch(url)
                .then((response) => response.json())
                .then((data) => {
                    sessionStorage.setItem('dataProduct', JSON.stringify(data))
                    setData(data)
                })
                .catch((error) => setError(error))
                .finally(() => setLoading(false));
        }
    }, []);

    return { data, error, loading }
}

export default useFetch