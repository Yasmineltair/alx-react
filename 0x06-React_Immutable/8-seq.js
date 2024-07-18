import { Map, Seq } from 'immutable';

export default function printBestStudents(object) {
  const mapObject = Map(object);
  const lazySeq = Seq(mapObject);
  const bestStudents = lazySeq.filter((val) => val.score > 70).map((val) => (val.firstName.toUpperCase()));
  console.log(bestStudents);
}
