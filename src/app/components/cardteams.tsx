import Image from "next/image";

interface ICardTeams {
  name: string;
  image: string;
  email: string;
  country: string;
}

export const CardTeams: React.FC<ICardTeams> = ({
  name,
  image,
  email,
  country,
}) => {
  return (
    <section className="transition ease-in-out delay-150 hover:-translate-y-1 hover:z-[99] hover:scale-110 duration-300">
      <div className="w-[300px] rounded-md drop-shadow-lg bg-bgcard my-4 hover:border-4 hover:bg-butt ">
        <div className="container">
          <div className="text-center">
            <div className="avatar">
              <div className="flex w-24 rounded-full m-2 shadow-md border-4">
                <Image src={image} alt={name} width={100} height={100} />
              </div>
            </div>
            <h1 className="text-xl font-bold underline decoration-slate-800 ">
              {name}
            </h1>
            <div className="text-md p-2 text-base ">
              <p>{email}</p>
              <p className="font-semibold">{country}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
