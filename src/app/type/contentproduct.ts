export interface IBlogs {
  sys: { id: number | null | undefined };
  fields: {
    title: string;
    slug: string;
    description: string;
    nama: string;
    testimoni: string;
    photo: {
      fields: {
        file: {
          url: string;
        };
      };
    };
  };
}
