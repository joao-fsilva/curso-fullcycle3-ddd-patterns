import EventHandlerInterface from "../../../@shared/event/event-handler.interface";
import CustomerChangeAddressEvent from "../customer-change-address.event";

export default class SendConsoleLogWhenCustomerChangeAddressdHandler
  implements EventHandlerInterface<CustomerChangeAddressEvent>
{
  handle(event: CustomerChangeAddressEvent): void {
    const id = event.eventData.id;
    const name = event.eventData.name;
    const address = event.eventData.address;

    console.log(`Endereço do cliente: ${id}, ${name} alterado para: ${address}`);
  }
}

