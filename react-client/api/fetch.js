import axios from 'axios';

const fetch = id => axios({
  method: 'get',
  url: `/item/${id}/description`,
});

export default fetch;
