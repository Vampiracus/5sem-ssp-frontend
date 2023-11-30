export const baseURL = 'http://localhost:3000';

export const userURL = baseURL + '/user';
export const clientOrdersURL = baseURL + '/order/my';

export const baseOrderItemsURL = baseURL + '/order/items/';
export const baseOrderItemURL = baseURL + '/order_item/';
export const orderItemURL = baseURL + '/order_item';
export const baseOrderURL = baseURL + '/order/';
export const orderURL = baseURL + '/order';
export const orderNoContractURL = baseURL + '/order/no_contract';
export const baseSendOrderURL = baseURL + '/order/create/';
export const baseOrderSignedURL = baseURL + '/order/is_signed/';
export const baseOrderReadyURL = baseURL + '/order/ready/';
export const baseOrderFinishedURL = baseURL + '/order/finished/';
export const baseSetOrderHasContractURL = baseURL + '/order/has_contract/';
export const baseOrderShippedURL = baseURL + '/order/shipped/';
export const baseRejectOrderURL = baseURL + '/order/wait_for_changes/';
export const baseBlockOrderURL = baseURL + '/order/set_manager/';
export const baseUnblockOrderURL = baseURL + '/order/unset_manager/';

export const loginClientURL = baseURL + '/login/client';
export const loginManagerURL = baseURL + '/login/manager';
export const logoutURL = baseURL + '/logout';

export const ProductsURL = baseURL + '/product';
export const BaseProductsURL = baseURL + '/product/';

export const ClientsURL = baseURL + '/client';
export const ManagersURL = baseURL + '/manager';
export const ShipmentURL = baseURL + '/shipment';
