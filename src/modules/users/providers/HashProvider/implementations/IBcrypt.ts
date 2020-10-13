export default interface IBcrypt {
  hash: (data: string) => Promise<string>;
}
