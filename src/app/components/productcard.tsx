import { CardBlog } from "../components/cardproduct";
import Wrapper from "../components/wrapper";
import { getBlogs } from "../lib/contentproduct";
import { IBlogs } from "../type/contentproduct";

export default async function ProductCard() {
  const blogs = await getBlogs();
  return (
    <section>
      <div className="container">
        <div className="w-screen pt-8 text-center">
          <h1 className="font-bold underline underline-offset-4 decoration-4 text-3xl text-text1">Check Our Project!</h1>
        </div>
      </div>
      <Wrapper>
        <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 max-sm:grid-cols-1 gap-2">
          {blogs.map((items: IBlogs) => {
            return (
              <CardBlog
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
