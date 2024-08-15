import './App.css';
import Profile from './Profile';
import FriendList from './FriendList';
import TransactionHistory from './TransactionHistory';
import userData from './userData.json';
import friends from './friends.json';
import transactions from './transactions.json';
import {useState} from 'react'

function App() {

  const [page, setPage] = useState("main")

  return (
    <div className="main-page">
      <h1>Welcome to my homework page!</h1>
      <button className="mainBtn" onClick={() => setPage("main")}>
        Back to main site
      </button>
      <button onClick={() => setPage("Profile")}>Profile homework</button>
      <button onClick={() => setPage("FriendList")}>
        Friend list homework
      </button>
      <button onClick={() => setPage("TransactionHistory")}>
        Transaction history homework
      </button>

      {page === "Profile" && <Profile user={userData} />}
      {page === "FriendList" && <FriendList friends={friends} />}
      {page === "TransactionHistory" && (
        <TransactionHistory items={transactions} />
      )}
    </div>
  );
};

export default App
