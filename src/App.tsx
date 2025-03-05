import {useState, useEffect} from 'react'
import './styles/global.scss';
import fetchUsers from './services/api'
import { getByAltText } from '@testing-library/dom';


const App: React.FC = () => {
  const [users, setUsers] = useState<any[]>([])
  useEffect(() => {
    const getUsers = async() => {
      const data = await fetchUsers()
      setUsers(data)
    }
    getUsers()
  }, [])

  return (
    <div>
      {'{'}
         <p>"users": {'{'} {
         users.map((users) => <p>
          "{users.id}" :
           {'{'}"id" : "{users.id}",
            "name": "{users.name}",
            "posts":  [{users.posts.map((post: {id: number}) => post.id).join(", ")}]{'},'}
            </p>)}</p>
            {'},'}
        <p>"posts" {'{'} : {users.map((users) => <p>{users.posts.map((post: {id: number, title: string, content: string}) => <p>"{post.id}": {'{,'}"id" : "{post.id}", "title": "{post.title}", "content": "{post.content}"{'},'}</p>)}</p>)}</p>
        {'}'}
        <p></p>
    </div>
  //<p>{JSON.stringify(users)}</p>

  )
}



export default App;
