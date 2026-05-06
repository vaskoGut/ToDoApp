/*
📌 Requirements In comparison to previous version pls move useDebounce to the hook
*/

import { useState, useEffect } from 'react';

type Product = {
    title: string;
    id: string;
}


const useDebounce = <T,>(query: T, delay: number) => {
    const [debouncedValue, setDebouncedValue] = useState(query);

    useEffect(()=>{
        const timer = setTimeout(() => {
            setDebouncedValue(query);
        }, delay);

        return () => {
            clearTimeout(timer);
        }
    }, [query])

    return debouncedValue;
}

export default function SearchBar() {
    const [isLoading, setLoading] = useState(false);
    const [query, setQuery] = useState('');
    
    const [data, setData] = useState<Product[]>([]);
    const isEmptyResults = query && !data.length && !isLoading;


    const debouncedValue = useDebounce(query, 500)

    const handleQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    }


    useEffect(() => {
        const abortController = new AbortController();

        if(!debouncedValue) { setData([]); return; }  
        setLoading(true);


        const fetchData = async () => {
            try {
                const result = await fetch('https://dummyjson.com/products', { signal: abortController.signal });
                if(!result.ok) throw new Error('some eorror');
                const data = await result.json();
                setData(data.products);
            } catch(error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
       
        return () => {
            abortController.abort();
        }
    }, [debouncedValue])

    return <div>
        <input value={query} onChange={handleQuery}/>
        {isLoading ? <div>loading</div> : null}
        {data.map(elem => <p key={elem.id}>{elem?.title}</p>)}
        {isEmptyResults && <p>no results found for {query}</p>}
    </div>
}
