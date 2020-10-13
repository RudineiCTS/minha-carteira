class HashProviderModel {
  // eslint-disable-next-line
  async hash(password: string) {
    return 'any_hash';
  }
  // eslint-disable-next-line
  async compare(password: string, passwordCompare: string) {
    return password === passwordCompare;
  }
}
export default HashProviderModel;
