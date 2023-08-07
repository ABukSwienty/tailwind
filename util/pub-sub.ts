interface Subscriber {
  (): void;
}

/**
 * Simple pub-sub implementation. Add subscribers, unsubscribe, and publish events. Events are published without data and event names are defined by the generic type.
 *
 * @example
 * const pubSub = new PubSub<"event1" | "event2">();
 *
 * const unsubscribe = pubSub.subscribe("event1", () => console.log("event1 fired"));
 *
 * pubSub.publish("event1"); // logs "event1 fired"
 *
 *
 */
export class PubSub<T extends string> {
  private subscribers: { [K in T]?: Subscriber[] };

  constructor() {
    this.subscribers = {};
  }

  /**
   * Subscribe to an event. Returns an unsubscribe function. If the once parameter is true, the callback will be unsubscribed after the first time it is called.
   * @param event string - the event name to subscribe to
   * @param callback () => void - the callback to be called when the event is published
   * @param once boolean - if true, the callback will be unsubscribed after the first time it is called
   * @returns () => void - unsubscribe function
   */
  public subscribe(event: T, callback: Subscriber, once = false): () => void {
    if (!this.subscribers[event]) {
      this.subscribers[event] = [];
    }

    if (!once) {
      this.subscribers[event]?.push(callback);

      const unsubscribe = () => {
        this.unsubscribe(event, callback);
      };

      return unsubscribe;
    }

    const onceCallback = () => {
      callback();
      this.unsubscribe(event, onceCallback);
    };

    this.subscribers[event]?.push(onceCallback);

    const unsubscribe = () => {
      this.unsubscribe(event, onceCallback);
    };

    return unsubscribe;
  }

  public unsubscribe(event: T, callback: Subscriber): void {
    if (!this.subscribers[event]) return;
    this.subscribers[event] = this.subscribers[event]?.filter(
      (subscriber) => subscriber !== callback
    );
  }

  public publish(event: T): void {
    if (!this.subscribers[event]) return;
    this.subscribers[event]?.forEach((subscriber) => subscriber());
  }
}
