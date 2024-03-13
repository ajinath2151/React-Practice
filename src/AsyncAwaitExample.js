import React, { useEffect, useState } from 'react'

const AsyncAwaitExample = () => {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('https://api.example.com/data');
            const result = await response.json();
            setData(result);
          } catch (error) {
            console.error('Error fetching data:', error);
          } finally {
            setIsLoading(false);
          }
        };
    
        fetchData();
      }, []); // 
  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h1>Data fetched with async/await:</h1>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  )
}

export default AsyncAwaitExample
