import logo from './logo.svg';
import './App.css'
import contacts from './contacts.json';
import { useState } from 'react';

function App() {

  const [myContacts, setContacts] = useState(contacts.slice(0, 5));

  return (
    <div className="App">

    <button onClick={() => {
      let randomContact = contacts.filter(element => !myContacts.includes(element));
      if (randomContact.length > 0) {
        setContacts(myContacts.concat(randomContact[Math.floor(Math.random() * randomContact.length)]))
      }
    }}>Add Random</button>

    <button onClick={() => {
        const contactsCopyArr = [...myContacts].sort((a, b) => {
        return a.popularity < b.popularity ? 1 : -1
        });
        setContacts(contactsCopyArr);
    }}>Sort by popularity</button>

    <button onClick={() => {
        const contactsCopyArr = [...myContacts].sort((a, b) => {
        return a.name > b.name ? 1 : -1
      });
      setContacts(contactsCopyArr)
    }}>Sort by name</button>

      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won an Oscar</th>
          <th>Won an Emmy</th>
        </tr>
        {myContacts.map(element => {
          return (
            <tr>
            <td><img width={75} src={element.pictureUrl} alt='img'/></td>
            <td>{element.name}</td>
            <td>{(element.popularity).toFixed(2)}</td>
            <td>{element.wonOscar ? <p>🏆</p> : <p></p>}  </td>
            <td>{element.wonEmmy ? <p>🏆</p> : <p></p>}  </td>
            <td><button onClick={() => {
                const newArr = myContacts.filter(el => {
                return el !== element
                })
                setContacts(newArr)
          }}>Delete</button></td>
            </tr>
          )
        })}
      </table>
      
    </div>
  );
}

export default App;
