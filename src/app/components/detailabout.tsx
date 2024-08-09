import Link from "next/link";

export default function DetailAbout() {
  return (
    <div className="hero bg-[#F5EDED] min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-3xl">
          <h1 className="text-5xl text-center font-bold animate-bounce">Membangun Masa Depan, Menginspirasi Kehidupan!</h1>
          <p className="py-6 text-lg">
          Selamat datang di PT Props, pengembang properti terkemuka yang berkomitmen untuk menciptakan hunian berkualitas dan berkelanjutan. Sejak didirikan pada tahun 2001, kami telah berfokus pada pembangunan properti yang tidak hanya memenuhi kebutuhan pelanggan, tetapi juga memberikan nilai tambah bagi lingkungan dan masyarakat.
          </p>
          <Link href={"/about"}>
            <button className="btn btn-outline border-white text-white bg-[#6482AD] hover:bg-gray-300 hover:shadow-md hover:border-[#7FA1C3]">About Us ...</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
