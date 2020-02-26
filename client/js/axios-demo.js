import axios from 'axios';

axios.get('http://localhost:9999/').then(res => {
    console.log('res: ', res);
});