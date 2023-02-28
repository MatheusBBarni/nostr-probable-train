// type Nostr = {
//   getPublicKey(): Promise<string> // returns a public key as hex
//   signEvent(event: any): Promise<any> // takes an event object, adds `id`, `pubkey` and `sig` and returns it
// }

module Nostr = {
  @genType
  let getPublicKey = async () => {
    Js.Promise2.resolve("getPublicKey from rescript")
  }

  // signEvent(event) {
  //   console.log({ event });

  //   return Promise.resolve('signEvent')
  // }
}
