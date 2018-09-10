/**
 * Created by zhuliang on 2018/9/6.
 */
import * as api from 'axios';

// 获取账户下所有商品
const getAllProductionApi = '/api/17wa-product/{account}/all';


export default {
  getAllProduction(account, index, size) {
    const params = {
      index,
      size,
    }
    return api.get(getAllProductionApi.replace('{account}', account), params);
  },
};
