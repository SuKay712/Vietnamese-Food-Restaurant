import { Seeder } from 'typeorm-extension';
import { Order } from '../../entities';
import { DataSource } from 'typeorm';
import { OrderPaymentMethodEnum, OrderStatusEnum } from '../../common';

const orderData = [
  {
    totalPrice: 1900000,
    phoneNumber: '0905116391',
    receiver: 'Nguyen Van Dung',
    address: '111 Phan Thanh, Thac Gian, Da Nang',
    email: 'vandung1702@gmail.com',
    paymentMethod: OrderPaymentMethodEnum.CASH,
    status: OrderStatusEnum.CANCEL,
    note: '',
    accountId: 1,
    isPaid: false,
    paymentCode: null,
    voucherId: 1,
  },
  {
    totalPrice: 1900000,
    phoneNumber: '0905116391',
    receiver: 'Nguyen Van Dung',
    address: '111 Phan Thanh, Thac Gian, Da Nang',
    email: 'vandung1702@gmail.com',
    paymentMethod: OrderPaymentMethodEnum.CASH,
    status: OrderStatusEnum.DONE,
    note: '',
    accountId: 1,
    isPaid: false,
    paymentCode: null,
    voucherId: 2,
  },
  {
    totalPrice: 1900000,
    phoneNumber: '0905116391',
    receiver: 'Nguyen Van Dung',
    address: '111 Phan Thanh, Thac Gian, Da Nang',
    email: 'vandung1702@gmail.com',
    paymentMethod: OrderPaymentMethodEnum.CASH,
    status: OrderStatusEnum.ON_THE_ROAD,
    note: '',
    accountId: 1,
    isPaid: false,
    paymentCode: null,
    voucherId: null,
  },
  {
    totalPrice: 1900000,
    phoneNumber: '0905116391',
    receiver: 'Nguyen Van Dung',
    address: '111 Phan Thanh, Thac Gian, Da Nang',
    email: 'vandung1702@gmail.com',
    paymentMethod: OrderPaymentMethodEnum.CASH,
    status: OrderStatusEnum.PACKAGING,
    note: '',
    accountId: 1,
    isPaid: false,
    paymentCode: null,
    voucherId: 4,
  },
  {
    totalPrice: 1900000,
    phoneNumber: '0905116391',
    receiver: 'Nguyen Van Dung',
    address: '111 Phan Thanh, Thac Gian, Da Nang',
    email: 'vandung1702@gmail.com',
    paymentMethod: OrderPaymentMethodEnum.CASH,
    status: OrderStatusEnum.RECEIVED,
    note: '',
    accountId: 1,
    isPaid: false,
    paymentCode: null,
    voucherId: 3,
  },
  {
    totalPrice: 1900000,
    phoneNumber: '0905116391',
    receiver: 'Nguyen Van Dung',
    address: '111 Phan Thanh, Thac Gian, Da Nang',
    email: 'vandung1702@gmail.com',
    paymentMethod: OrderPaymentMethodEnum.CASH,
    status: OrderStatusEnum.WAIT,
    note: '',
    accountId: 1,
    isPaid: false,
    paymentCode: null,
    voucherId: 2,
  },

  // MOMO
  {
    totalPrice: 1900000,
    phoneNumber: '0905116391',
    receiver: 'Nguyen Van Dung',
    address: '111 Phan Thanh, Thac Gian, Da Nang',
    email: 'vandung1702@gmail.com',
    paymentMethod: OrderPaymentMethodEnum.MOMO,
    status: OrderStatusEnum.CANCEL,
    note: '',
    accountId: 1,
    isPaid: true,
    paymentCode: null,
    voucherId: 1,
  },
  {
    totalPrice: 1900000,
    phoneNumber: '0905116391',
    receiver: 'Nguyen Van Dung',
    address: '111 Phan Thanh, Thac Gian, Da Nang',
    email: 'vandung1702@gmail.com',
    paymentMethod: OrderPaymentMethodEnum.MOMO,
    status: OrderStatusEnum.DONE,
    note: '',
    accountId: 1,
    isPaid: true,
    paymentCode: null,
    voucherId: null,
  },
  {
    totalPrice: 1900000,
    phoneNumber: '0905116391',
    receiver: 'Nguyen Van Dung',
    address: '111 Phan Thanh, Thac Gian, Da Nang',
    email: 'vandung1702@gmail.com',
    paymentMethod: OrderPaymentMethodEnum.MOMO,
    status: OrderStatusEnum.ON_THE_ROAD,
    note: '',
    accountId: 1,
    isPaid: true,
    paymentCode: null,
    voucherId: null,
  },
  {
    totalPrice: 1900000,
    phoneNumber: '0905116391',
    receiver: 'Nguyen Van Dung',
    address: '111 Phan Thanh, Thac Gian, Da Nang',
    email: 'vandung1702@gmail.com',
    paymentMethod: OrderPaymentMethodEnum.MOMO,
    status: OrderStatusEnum.PACKAGING,
    note: '',
    accountId: 1,
    isPaid: true,
    paymentCode: null,
    voucherId: 1,
  },
  {
    totalPrice: 1900000,
    phoneNumber: '0905116391',
    receiver: 'Nguyen Van Dung',
    address: '111 Phan Thanh, Thac Gian, Da Nang',
    email: 'vandung1702@gmail.com',
    paymentMethod: OrderPaymentMethodEnum.MOMO,
    status: OrderStatusEnum.RECEIVED,
    note: '',
    accountId: 1,
    isPaid: true,
    paymentCode: null,
    voucherId: 3,
  },
  {
    totalPrice: 1900000,
    phoneNumber: '0905116391',
    receiver: 'Nguyen Van Dung',
    address: '111 Phan Thanh, Thac Gian, Da Nang',
    email: 'vandung1702@gmail.com',
    paymentMethod: OrderPaymentMethodEnum.MOMO,
    status: OrderStatusEnum.WAIT,
    note: '',
    accountId: 1,
    isPaid: true,
    paymentCode: null,
    voucherId: 2,
  },

  // ZALOPAY
  {
    totalPrice: 1900000,
    phoneNumber: '0905116391',
    receiver: 'Nguyen Van Dung',
    address: '111 Phan Thanh, Thac Gian, Da Nang',
    email: 'vandung1702@gmail.com',
    paymentMethod: OrderPaymentMethodEnum.ZALOPAY,
    status: OrderStatusEnum.CANCEL,
    note: '',
    accountId: 1,
    isPaid: true,
    paymentCode: null,
    voucherId: null,
  },
  {
    totalPrice: 1900000,
    phoneNumber: '0905116391',
    receiver: 'Nguyen Van Dung',
    address: '111 Phan Thanh, Thac Gian, Da Nang',
    email: 'vandung1702@gmail.com',
    paymentMethod: OrderPaymentMethodEnum.ZALOPAY,
    status: OrderStatusEnum.DONE,
    note: '',
    accountId: 1,
    isPaid: true,
    paymentCode: null,
    voucherId: null,
  },
  {
    totalPrice: 1900000,
    phoneNumber: '0905116391',
    receiver: 'Nguyen Van Dung',
    address: '111 Phan Thanh, Thac Gian, Da Nang',
    email: 'vandung1702@gmail.com',
    paymentMethod: OrderPaymentMethodEnum.ZALOPAY,
    status: OrderStatusEnum.ON_THE_ROAD,
    note: '',
    accountId: 1,
    isPaid: true,
    paymentCode: null,
    voucherId: null,
  },
  {
    totalPrice: 1900000,
    phoneNumber: '0905116391',
    receiver: 'Nguyen Van Dung',
    address: '111 Phan Thanh, Thac Gian, Da Nang',
    email: 'vandung1702@gmail.com',
    paymentMethod: OrderPaymentMethodEnum.ZALOPAY,
    status: OrderStatusEnum.PACKAGING,
    note: '',
    accountId: 1,
    isPaid: true,
    paymentCode: null,
    voucherId: 3,
  },
  {
    totalPrice: 1900000,
    phoneNumber: '0905116391',
    receiver: 'Nguyen Van Dung',
    address: '111 Phan Thanh, Thac Gian, Da Nang',
    email: 'vandung1702@gmail.com',
    paymentMethod: OrderPaymentMethodEnum.ZALOPAY,
    status: OrderStatusEnum.RECEIVED,
    note: '',
    accountId: 1,
    isPaid: true,
    paymentCode: null,
    voucherId: 2,
  },
  {
    totalPrice: 1900000,
    phoneNumber: '0905116391',
    receiver: 'Nguyen Van Dung',
    address: '111 Phan Thanh, Thac Gian, Da Nang',
    email: 'vandung1702@gmail.com',
    paymentMethod: OrderPaymentMethodEnum.ZALOPAY,
    status: OrderStatusEnum.WAIT,
    note: '',
    accountId: 1,
    isPaid: true,
    paymentCode: null,
    voucherId: 1,
  },
];

export default class OrderSeeder implements Seeder {
  private dataSource: DataSource;

  constructor(dataSource: DataSource) {
    this.dataSource = dataSource;
  }

  public async run(): Promise<void> {
    const orderRepo = this.dataSource.getRepository(Order);

    await orderRepo.save(orderData);

    console.log('Seed data order created');
  }
}
