const fetchData = async () => {
  try {
    const response = await fetch("https:/fakestoreapi.com/product")

    if (!response.ok) {
      throw new Error(`tthp err status: ${response.status}`);
    }
    const data = await response.json();

    products = data
    console.log(products);

    console.log(products);
  }  catch (error) {
    console.error("fetching data", error);
  }
};

fetchData();