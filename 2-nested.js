import { fromJS } from 'immutable';

export default function accessImmutableObject(object, array) {
  const finalObject = fromJS(object);
  return finalObject.getIn(array, undefined);
}