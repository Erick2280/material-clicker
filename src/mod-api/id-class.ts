export abstract class IdClass {
  public toString() {
    // TODO: figure out namespace ids exactly.
    return 'material-clicker:' + this.constructor.name;
  }
}
