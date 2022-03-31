import './App.css';
import Login from './components/Login/Login';

const sendRequest = async (url, body) => {
  const resp = await fetch(url, {
    method: 'post',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' }
  })
  const data = await resp.json();
  console.log(data);
}

const registerBody = { "email": "test@test.com", "name": "Alex", "password": "111" }
sendRequest('/api/register', registerBody)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Login />
      </header>
    </div>
  );
}

export default App;
