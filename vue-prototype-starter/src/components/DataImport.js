import axios from 'axios';
export default {
  data(){
    return  {
      content: null
    }
  },
  mounted () {
    axios
      .get('data/content.json')
      .then(response => (this.content = response))
  }
};