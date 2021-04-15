import React, { useEffect, useState, useCallback } from "react";
import { Container } from './style';

import TableScreen from "../components/TableScreen";
import FetchData from '../services/api'

function App() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [isError, setError] = useState(false);

  async function grabData() {
    const { data, error } = await FetchData();
    setData(data);
    setError(error);
  }

  useEffect(() => {
    setLoading(true);
    grabData();
    setLoading(false);
  }, []);


  const renderContent = useCallback(() => {
    if (loading) {
      return <h2>Loading ...</h2>;
    }

    if (isError) {
      return <h2>ERROR FETCHING DATA</h2>;
    }

    return <TableScreen data={data} />;
  }, [data, isError, loading]);

  return (
    <Container>
      <header className="App-header"></header>
      {renderContent()}
    </Container>
  );
}

export default App;
