import Types from './types';

const reportsGetAllCustomerAttempt = (from, to, lastCustomer) => ({
  type: Types.REPORT_GET_ALL_CUSTOMER_ATTEMPT,
  from, to, lastCustomer,
});

const reportsGetAllCustomerSuccess = (customerList, shouldResetReduxData) => ({
  type: Types.REPORT_GET_ALL_CUSTOMER_SUCCESS,
  customerList,
  shouldResetReduxData
});

const reportsGetAllCustomerFailure = (error) => ({
  type: Types.REPORT_GET_ALL_CUSTOMER_FAILURE,
  error,
});

const reportsGetCustomerInfoAttempt = (email) => ({
  type: Types.REPORT_GET_CUSTOMER_INFO_ATTEMPT,
  email
});

const reportsGetCustomerInfoSuccess = (customerInfo) => ({
  type: Types.REPORT_GET_CUSTOMER_INFO_SUCCESS,
  customerInfo
});

const reportsGetCustomerInfoFailure = (error) => ({
  type: Types.REPORT_GET_CUSTOMER_INFO_FAILURE,
  error
});

const reportsGetAllVendorAttempt = (from, to, lastVendor) => ({
  type: Types.REPORT_GET_ALL_VENDOR_ATTEMPT,
  from,
  to,
  lastVendor,
});

const reportsGetAllVendorSuccess = (vendorList) => ({
  type: Types.REPORT_GET_ALL_VENDOR_SUCCESS,
  vendorList,
});

const reportsGetAllVendorFailure = (errorMessage) => ({
  type: Types.REPORT_GET_ALL_VENDOR_FAILURE,
  errorMessage,
});

const reportsGetVendorInfoAttempt = (vendorEmail) => ({
  type: Types.REPORT_GET_VENDOR_INFO_ATTEMPT,
  vendorEmail,
});

const reportsGetVendorInfoSuccess = (vendorInfo) => ({
  type: Types.REPORT_GET_VENDOR_INFO_SUCCESS,
  vendorInfo
});

const reportsGetVendorInfoFailure = (errorMessage) => ({
  type: Types.REPORT_GET_VENDOR_INFO_FAILURE,
  errorMessage
});

const reportsGetAllTransactionAttempt = (from, to, lastTransaction) => ({
  type: Types.REPORT_GET_ALL_TRANSACTION_ATTEMPT,
  from,
  to,
  lastTransaction,
});

const reportsGetAllTransactionSuccess = (transactionList, shouldResetReduxData) => ({
  type: Types.REPORT_GET_ALL_TRANSACTION_SUCCESS,
  transactionList,
  shouldResetReduxData
});

const reportsGetAllTransactionFailure = (error) => ({
  type: Types.REPORT_GET_ALL_TRANSACTION_FAILURE,
  error,
});

export default {
  reportsGetAllCustomerAttempt,
  reportsGetAllCustomerSuccess,
  reportsGetAllCustomerFailure,

  reportsGetCustomerInfoAttempt,
  reportsGetCustomerInfoSuccess,
  reportsGetCustomerInfoFailure,

  reportsGetAllVendorAttempt,
  reportsGetAllVendorSuccess,
  reportsGetAllVendorFailure,

  reportsGetVendorInfoAttempt,
  reportsGetVendorInfoSuccess,
  reportsGetVendorInfoFailure,

  reportsGetAllTransactionAttempt,
  reportsGetAllTransactionSuccess,
  reportsGetAllTransactionFailure,
};
