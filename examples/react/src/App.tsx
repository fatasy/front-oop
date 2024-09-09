import "./App.css";
import { useUsers } from "./hooks/use-users";

function App() {
  const { data: response } = useUsers();
  const { data } = response ?? {};
  console.log({ data, response });

  return (
    <div className="App">
      {data?.map((user) => (
        <div key={user.id}>{user.firstName}</div>
      ))}
    </div>
  );
}

export default App;
