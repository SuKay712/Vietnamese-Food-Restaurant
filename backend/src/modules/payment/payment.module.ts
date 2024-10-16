import {
    MiddlewareConsumer,
    Module,
    NestModule,
    RequestMethod,
} from '@nestjs/common';
import { ZaloPaymentController } from './zaloPayment.controller';
import { ZaloPaymentService } from './zaloPayment.service';
import { AuthGuard } from '../../common/guards/auth.guard';
import { JwtMiddleware } from '../../common';
import { AccountService } from '../account/account.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
    Account,
    Cart,
    Item,
    ItemSize,
    Order,
    OrderDetail,
} from '../../entities';
import { OrderService } from '../order/order.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            Order,
            OrderDetail,
            Account,
            Cart,
            Item,
            ItemSize,
        ]),
    ],
    controllers: [ZaloPaymentController],
    providers: [ZaloPaymentService, AuthGuard, AccountService, OrderService],
})
export class PaymentModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(JwtMiddleware).forRoutes({
            path: 'payment/zalo/payment',
            method: RequestMethod.POST,
        });
    }
}
