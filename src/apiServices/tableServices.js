const tableServices = {
  fetchTableData: async (url) => {
    try {
      const response = await fetch(url);
      console.log(response);
      // return response.data;
    } catch (error) {
      const response = error.response || { data: { error: error.message } };
      const { status: code, statusText: text, data } = response;
      const errorEx = {
        code,
        message: (typeof data === 'string' ? data : data.error) || text,
      };
      console.error('Error create Call Source:', errorEx);
      throw errorEx;
    }
  },
};

export default tableServices;
