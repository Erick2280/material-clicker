export abstract class IdClass {
  static classType: string = 'Object';

  /** toString is customized to actually be useful, outputting in the format of
   *    [ClassType namespace:id]
   *
   *  For example: [Item material-clicker:material]
   */
  public toString() {
    let classType;
    let parent = this.constructor;
    do {
      classType = (parent as any).classType;
      parent = parent.constructor;
    } while (!classType);
    return '[' + (this.constructor as typeof IdClass).classType + ' ' + this.id + ']';
  }
  /** The Mod ID, currently hardcoded to material-clicker */
  public get modId() {
    // TODO: figure out namespace ids exactly.
    return 'material-clicker';
  }
  /** The full namespaced id */
  public get id() {
    const partId = this.constructor.name
      .replace(/^[A-Z]/g, (char) => char.toLowerCase())
      .replace(/([a-z0-9])([A-Z])/g, (str, a, b) => `${a}-${b.toLowerCase()}`);
    return this.modId + ':' + partId;
  }
}
