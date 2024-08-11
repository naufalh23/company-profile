import Image from "next/image";

interface ICardBlog {
  title: string;
  image: string;
  description: string;
  slug: string;
}

export const CardProduct: React.FC<ICardBlog> = ({
  title,
  image,
  description,

}) => {
  return (
    <div className="card card-compact bg-bgcard w-96 shadow-xl mx-8 my-4 ">
      <figure>
        <Image
          src={`https:${image}`}
          alt={title}
          width={1920}
          height={1080}
          className="w-full h-[250px]"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};
