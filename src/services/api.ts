  import axios from 'axios'
  import { resolveProjectReferencePath } from "typescript"; //???

  let url = `https://a600e78249690d56.mokky.dev/users`
  const fetchUsers = async () => {
    try {
      const response  = await axios.get(url)
      return response.data
    } catch (error) {
      return error
    }
  }
  export default fetchUsers