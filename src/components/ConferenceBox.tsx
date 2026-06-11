interface ConferenceBoxProps {
  name: string;
  place: string;
  isRight: boolean;
}

export default function ConferenceBox({name, place, isRight}: ConferenceBoxProps) {
  let classList = "my-2 w-3/4 rounded-lg border-2 border-gray-300 p-2";
  if (isRight) {
    classList += " ml-auto";
  }

  return (
    <article className={classList}>
      <h3 className="text-xl font-bold text-gray-600">{name}</h3>
      <span className="text-gray-500">{place}</span>
    </article>
  )
}
