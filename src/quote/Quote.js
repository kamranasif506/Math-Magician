import { useState, useEffect } from 'react';

function Quotes() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://api.api-ninjas.com/v1/quotes?category=funny', {
          method: 'GET',
          headers: {
            'X-Api-Key': 'pc77qi3GFj715AjvLqiVQw==PhSGJl3FOGua07tR',
            'Content-Type': 'application/json',
          },
        });
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        const json = await res.json();
        setData(json);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="container mt-5 bg-light p-2">
        <div className="row">
          <div className="col-12">
            <p className="text-center">Loading...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (

      <div className="container mt-5 bg-light p-2">
        <div className="row">
          <div className="col-12">
            <p className="text-center">
              Error:
              {error}
            </p>
          </div>
        </div>
      </div>
    );
  }
  return (

    <div className="container mt-5 bg-light p-2">
      <div className="row">
        <div className="col-12">

          {data.map((item) => (
            <p key={item.author} className="text-center mt-2" style={{ fontSize: '1.5rem' }}>
              {item.quote}
              {' '}
              by
              {' '}
              <b>{`"${item.author}"`}</b>
            </p>

          ))}
        </div>
      </div>
    </div>

  );
}

export default Quotes;
