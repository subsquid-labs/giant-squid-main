interface Observer<T> {
  next: (value: T) => void;
  complete: () => void;
}

/**
 * A class used to wrap a user-provided Observer. Since the
 * observer is just a plain objects with a couple of callbacks on it,
 * this type will wrap that to ensure `next` does nothing if called after
 * `complete` has been called, and that nothing happens if `complete`
 * is called more than once.
 */
class SafeSubscriber<T> {
  closed = false;
 
  constructor(private destination: Observer<T>) {}
 
  next(value: T) {
    // Check to see if this is "closed" before nexting.
    if (!this.closed) {
      this.destination.next(value);
    }
  }
 
  complete() {
    // Make sure we're not completing an already "closed" subscriber.
    if (!this.closed) {
      // We're closed now.
      this.closed = true;
      this.destination.complete();
    }
  }
}
 
/**
 * A class to wrap our function, to ensure that when the function is
 * called with an observer, that observer is wrapped with a SafeSubscriber
 */
class Observable<T> {
  constructor(private _wrappedFunc: (subscriber: Observer<T>) => void) {}
 
  subscribe(observer: Observer<T>): void {
    // We can wrap our observer in a "safe subscriber" that
    // does the work of making sure it's not closed.
    const subscriber = new SafeSubscriber(observer);
    this._wrappedFunc(subscriber);
  }
}
 
// Usage
// Now 4 won't be nexted after we complete.
const source = new Observable((subscriber) => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  subscriber.complete();
  subscriber.next(4); // this does nothing.
});




a = cache.deffer(...)
a.subscribe

ab



let a = new Promise()
let b = new Promise()

let c = a.then(async (v1) => {
    let v2 = await b

    v1 v2
})

Promise.all([a, b]).then(([v1, v2]) => {
    
})

let calls = CallManager.get()

let a = calls.defer()
let b = a.then((v) => {
    return calls.defer(v)
}).then((v) => v)



class Defer<T> {
    private _promise: Promise<T> | undefined

    constructor(private fn:(res, rej) => Defer<T>, private parent?: Defer<any>) {}

    then<R>(fn: (v) => R): Defer<R> {
        if (this._Promise == null) {

        }
        this.promise.then(fn)
        return new Defer(() => {}, this)
    }

    get() {
      
        if (this._Promise == null) {
            this._Promise = new Promise((res, rej) => {
                this.fn(res, rej)
            })
        }

        return this._Promise
    }


}


defer<S, V extends GetVersions<Storage<S>>>(
    block: Block,
    req: StorageRequest<S, V>
  ) {
    let _deferred = this.deferred.get(block)
    if (_deferred == null) {
      this.deferred.set(block, [req])
    } else {
      _deferred.push(req)
    }

    return new Defer((resolve, reject) => {
        this.call(block,req).then(resolve).catch(reject)
    })
  }