import { Item, register } from '../mod-api';

/** The main currency in Material Clicker */
@register
class Material extends Item {
  name = 'Material';
}

export default new Material();
