/*
📌 Requirements
Create a controlled input field where users can type a search query.
Implement debouncing:


1. The search function should trigger only after the user stops typing for ~500ms.
2. handle no results
3. Use a mock function (e.g., setTimeout or Promise) to return results.
4. Manage and display loading state:
5. If the input is empty:
6. Clear results
7. write with fetch and with try async syntax <code></code>






Display the search results after the request completes.

Do not trigger a search
Properly clean up side effects:
Cancel pending debounce timers when input changes
⭐ Bonus (for stronger solutions)
Extract debounce logic into a custom hook (useDebounce)
Handle race conditions (e.g., ignore outdated responses)
Add basic error handling
Cache previous results to avoid duplicate requests
Abort controller
*/


/*
Add explanation why useRef good for caching results
useRef persists between renders
updating it does NOT re-render
perfect for caching
If you used useState, you'd trigger unnecessary renders.
*/


/*
Extract fetch logic into a custom hook (useSearch)
Add empty state (“no results”)
Add error state in UI (not just console)
Use debounce hook instead of manual timeout
*/

import { useState, useEffect } from 'react';

type Product = {
    title: string;
    id: string;
}

export default function SearchBar() {
    const [isLoading, setLoading] = useState(false);
    const [query, setQuery] = useState('');
    const [data, setData] = useState<Product[]>([]);
    const isEmptyResults = query && !data.length && !isLoading

    const handleQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    }

    useEffect(() => {
        const abortController = new AbortController();

        if(!query) { setData([]); return; }  
        setLoading(true);

        /*
            // result with fetch then syntax
            const timer = setTimeout(() =>
                fetch('https://dummyjson.com/products', { signal: abortController.signal }).then(data => {
                    if(!data.ok) throw new Error('some problem')
                    return data.json();
                }).then((data) => {
                    setData(data.products);
                }).catch(error => console.error(error)).finally(() => setLoading(false))
                , 500
            )
        */

        const fetchData = async () => {
            try {
                const result = await fetch('https://dummyjson.com/products', { signal: abortController.signal });
                if(!result.ok) throw new Error('some eorror');
                const data = await result.json();
                setData(data);
            } catch(error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }

        const timer = setTimeout(() => {
            fetchData();
        }, 500)
       
        return () => {
            clearTimeout(timer);
            abortController.abort();
        }
    }, [query])

    return <div>
        <input value={query} onChange={handleQuery}/>
        {isLoading ? <div>loading</div> : null}
        {data.map(elem => <p key={elem.id}>{elem?.title}</p>)}
        {isEmptyResults && <p>no results found for {query}</p>}
    </div>
}
