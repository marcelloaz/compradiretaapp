import { Amount } from '../Amount';
import { Item } from '../Item';
import { Customer } from '../Customer';
import { Receiver } from '../Receiver';
import { Phone } from '../Phone';
import { ShippingAddress } from '../Shippingaddress';
import { PaymentRequest } from './PaymentRequest';

export class OrderRequest
{
    ownId: string;
    amount: Amount;
    items: Item[];
    customer: Customer;
    hash: string;
    expirationMonth: string;
    expirationYear: string;
    number: string;
    cvc: string;
    parcelas: string;
}
