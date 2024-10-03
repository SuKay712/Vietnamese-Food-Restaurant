import { Seeder } from 'typeorm-extension';
import { Account } from '../../entities';
import { DataSource } from 'typeorm';
import { AccountGenderEnum } from '../../common/enums/account-gender.enum';
import { PasswordUtils } from '../../common/utils/password.utils';
import { AccountRoleEnum } from '../../common/enums/account-role.enum';

const accountData = [
    {
        name: 'Nguyen Van Dung',
        displayName: 'NVDung',
        address: '111 Phan Thanh, Thac Gian, Thanh Khe, Da Nang',
        email: 'dung@gmail.com',
        tel: '1234567890',
        gender: AccountGenderEnum.MALE,
        password: PasswordUtils.hashPassword('12345678'),
        role: AccountRoleEnum.CUSTOMER,
    },
    {
        name: 'Nguyen Van A',
        displayName: 'NVA',
        address: '222 Le Duan, Hai Chau, Da Nang',
        email: 'nva@gmail.com',
        tel: '0987654321',
        gender: AccountGenderEnum.MALE,
        password: PasswordUtils.hashPassword('12345678'),
        role: AccountRoleEnum.CUSTOMER,
    },
    {
        name: 'Tran Thi B',
        displayName: 'TTB',
        address: '333 Nguyen Van Troi, Thanh Khe, Da Nang',
        email: 'ttb@gmail.com',
        tel: '0912345678',
        gender: AccountGenderEnum.FEMALE,
        password: PasswordUtils.hashPassword('12345678'),
        role: AccountRoleEnum.CUSTOMER,
    },
    {
        name: 'Le Van C',
        displayName: 'LVC',
        address: '444 Tran Phu, Cam Le, Da Nang',
        email: 'lvc@gmail.com',
        tel: '0123456789',
        gender: AccountGenderEnum.MALE,
        password: PasswordUtils.hashPassword('12345678'),
        role: AccountRoleEnum.CUSTOMER,
    },
    {
        name: 'Le Tuan Nguyen Khoi',
        displayName: 'NKhoi',
        address: '111 Phan Thanh, Thac Gian, Thanh Khe, Da Nang',
        email: 'khoi@gmail.com',
        tel: '1234567890',
        gender: AccountGenderEnum.MALE,
        password: PasswordUtils.hashPassword('12345678'),
        role: AccountRoleEnum.ADMIN,
    },
    {
        name: 'Pham Duy Tin',
        displayName: 'DTin',
        address: '111 Phan Thanh, Thac Gian, Thanh Khe, Da Nang',
        email: 'tin@gmail.com',
        tel: '1234567890',
        gender: AccountGenderEnum.MALE,
        password: PasswordUtils.hashPassword('12345678'),
        role: AccountRoleEnum.STAFF,
    },
    {
        name: 'Nguyen Hoang Nhat Minh',
        displayName: 'NMinh',
        address: '111 Phan Thanh, Thac Gian, Thanh Khe, Da Nang',
        email: 'minh@gmail.com',
        tel: '1234567890',
        gender: AccountGenderEnum.MALE,
        password: PasswordUtils.hashPassword('12345678'),
        role: AccountRoleEnum.STAFF,
    },
];

export default class AccountSeeder implements Seeder {
    private dataSource: DataSource;

    constructor(dataSource: DataSource) {
        this.dataSource = dataSource;
    }

    public async run(): Promise<void> {
        const accountRepo = this.dataSource.getRepository(Account);

        await accountRepo.save(accountData);

        console.log('Seed data account created');
    }
}