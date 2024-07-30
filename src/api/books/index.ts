import request from '../request';

export function useBooksApi() {
  return {
    getBooks: () => {
      return request({
        url: '/books/list',
        method: 'get',
      });
    },
    // addLevel1: (data: AddGameConfigLevel1) => {
    // 	return request({
    // 		url: '/Gameconfig/do_edit_level1',
    // 		method: 'post',
    // 		headers: {
    // 			'Content-Type': 'multipart/form-data',
    // 		},
    // 		data: toBeFormData(data),
    // 	});
    // },
  };
}
