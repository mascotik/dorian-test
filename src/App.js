import './App.css';

const sendRequest = async (url, body) => {
  const resp = await fetch(url, {
    method: 'post',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' }
  })
  const data = await resp.json();
  console.log(data);
}

sendRequest('/api/register',{})

function App() {
  return (
    <div className="App">
      <header className="App-header">

      </header>
    </div>
  );
}

export default App;
