import { fork } from 'redux-saga/effects';

import { watchGetAllCustomers } from './getAllCustomers';
import { watchGetCustomerInfo } from './getCustomerInfo';
import { watchGetAllVendors } from './getAllVendors';
import { watchGetApprovedVendors } from './getApprovedVendors';
import { watchGetUnapprovedVendors } from './getUnapprovedVendors';
import { watchGetVendorInfo } from './getVendorInfo';
import { watchApproveVendor } from './approveVendor';
import { watchGetAllTransactions } from './getAllTransactions';

export default (api) => {
  function* rootSaga() {
    yield fork(watchGetAllCustomers, api);
    yield fork(watchGetCustomerInfo, api);

    yield fork(watchGetAllVendors, api);
    yield fork(watchGetApprovedVendors, api);
    yield fork(watchGetUnapprovedVendors, api);
    yield fork(watchGetVendorInfo, api);
    yield fork(watchApproveVendor, api);

    yield fork(watchGetAllTransactions, api);
  }

  return {
    rootSaga
  };
};
