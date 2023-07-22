import EventDispatcher from "../../@shared/event/event-dispatcher";
import CustomerChangeAddressEvent from "./customer-change-address.event";
import SendConsoleLogWhenCustomerChangeAddressdHandler from "./handler/send-console-log-when-customer-change-address.handler";

describe("customer change address event tests", () => {

  it("should notify all event handlers", () => {
    const eventDispatcher = new EventDispatcher();
    const eventHandler = new SendConsoleLogWhenCustomerChangeAddressdHandler();
  
    const spyEventHandler = jest.spyOn(eventHandler, "handle");

    eventDispatcher.register("CustomerChangeAddressEvent", eventHandler);

    expect(
      eventDispatcher.getEventHandlers["CustomerChangeAddressEvent"][0]
    ).toMatchObject(eventHandler);

    const customerChangeAddressEvent = new CustomerChangeAddressEvent({
      id: "1",
      name: "João Paulo",
      address: "Av. Paulista"
    });
    
    eventDispatcher.notify(customerChangeAddressEvent);

    expect(spyEventHandler).toHaveBeenCalled();
  });
});
