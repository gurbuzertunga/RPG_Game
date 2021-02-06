const APIHandler = (() => {
  const postData = async (url, dataObj) => {
    const response = await fetch(url, {
      mode: 'cors',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataObj),
    });
    return response.json();
  };

  const getData = async (url) => {
    const response = await fetch(url);
    return response.json();
  };

  return { postData, getData };
})();

export default APIHandler;