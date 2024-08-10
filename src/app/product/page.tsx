import Image from "next/image";
import Wrapper from "../components/wrapper";
import { getBlogs } from "../lib/contentproduct";
import { IBlogs } from "../type/contentproduct";
import { CardProduct } from "../components/cardproductdetail";

export default async function Home() {
  const blogs = await getBlogs();
  return (
    <section>
      <div className="relative w-full h-64 mb-8">
        <Image
          src="/assets/4.jpg"
          alt="banner"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-[#173B45] text-5xl font-bold underline underline-offset-4 decoration-4">
            Our Product
          </h1>
        </div>
      </div>
      <Wrapper>
        <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 max-sm:grid-cols-1 gap-2">
          {blogs.map((items: IBlogs) => {
            return (
              <CardProduct
                key={items.sys.id}
                title={items.fields.title}
                slug={items.fields.slug}
                description={items.fields.description}
                image={items.fields.photo.fields.file.url}
              />
            );
          })}
        </div>
      </Wrapper>
    </section>
  );
}
