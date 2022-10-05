
import { useState, useEffect } from 'react';
import './style.css';
import Notify from '../../components/notify'

function Main() {
  const [input, setInput] = useState('');
  const [users, setUsers] = useState([])
  const [showNotify, setShowNotify] = useState('false')

  useEffect(() => {
    if (users.length) {
      setShowNotify(true)
    }

  }, [users]);


  function HandleAddUser() {
    const localUsers = [...users]
  }

  function HandleAddNewUsers() {

    setUsers([...users, input])
    setInput('')
  }

  return (
    <div className="container">
      <div className="left">
        <input placeholder='name'
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <button onClick={HandleAddUser} >Adicionar</button>
      </div>
      <div className="right"></div>
      <h1>users</h1>
      <div className='container-users'>
        {users.map((user) => (
          <h4 key={users}> {user}</h4>
        ))}

      </div>
      <Notify
        show={showNotify}
        text='novo usuario adicionado'
        HandleClose={() => setShowNotify(false)}
      />
    </div>
  );
}

export default Main;