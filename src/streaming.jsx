const fetchData = async () => {
  const response = await fetch('https://www.example.com/large-text-file.txt');

  const reader = response.body.getReader();

  const decoder = new TextDecoder();

  while (true) {
    const { done, value } = await reader.read();

    if (done) break;

    const chunk = decoder.decode(value, { stream: true });

    console.log(chunk); // Process the chunk (e.g., display it in UI)
  }

  console.log('Stream complete');
};

fetchData();
