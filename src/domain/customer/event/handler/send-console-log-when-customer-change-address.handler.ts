import EventHandlerInterface from "../../../@shared/event/event-handler.interface";
import CustomerCreatedEvent from "../customer-created.event";

export default class SendConsoleLogWhenCustomerChangeAddressdHandler
  implements EventHandlerInterface<CustomerCreatedEvent>
{
  handle(event: CustomerCreatedEvent): void {
    const id = event.eventData.id;
    const name = event.eventData.name;
    const address = event.eventData.address;

    console.log(`Endereço do cliente: ${id}, ${name} alterado para: ${address}`);
  }
}

