import { formatDate } from "../formatDate";
type Props = {
  wedding: any;
};

export default function Hero({ wedding }: Props) {
 
  return (
        <section className="text-center py-20 bg-white">
      <h1 className="text-4xl text-black font-bold">
        {wedding.groom.name} & {wedding.bride.name}
      </h1>

      <p className="mt-4 text-gray-600">
        {formatDate(wedding.event.akadDate)} | {formatDate(wedding.event.receptionDate)}
      </p>
    </section>
  );
}