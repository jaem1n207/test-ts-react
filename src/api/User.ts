import axios from 'axios';
import { SERVER } from '../config/index.json';

class User {
  async getUserProfile(user_id: string) {
    try {
      const url = `${SERVER}/users/${user_id}`;

      const { data } = await axios.get(url);

      return data;
    } catch (error) {
      throw new Error(`${error}`);
    }
  }
}

export default new User();
