import axios from "axios";
const { useState, useEffect } = require("react");

const useFetch = (url:any) => {
  const config = {
    headers: {
      Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImRhMTdmNDBlLTg2MjgtNGIxYi1hZGM3LWJlNzRiYmMyNmY2OCIsImVtYWlsIjoic3VwZXJhZG1pbkB1bmRwLm9yZy5ucCIsInJvbGUiOiJzdXBlciBhZG1pbiIsImlhdCI6MTY2NDA5MDIyNSwiZXhwIjoxNjY0MTc2NjI1fQ.wXM9B4D8jn6DC7baA1ldJLgpfgR4IYMR4NcjE7vhoLI"
    },
  };

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(url,config);
        console.log('==========>',res.data)
        setData(res.data.data.data);
        setLoading(false);
      } catch (err) {
        setError(err);
      }
    };

    fetchData();
  }, []);

  const reFetch = async () => {
    setLoading(true);
    try {
      const res = await axios.get(url);
      setData(res.data);
      console.log('refetch',url)
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };


  return { data, loading, error, reFetch };
};
export default useFetch;