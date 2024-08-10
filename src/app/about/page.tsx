import Image from "next/image";
import Wrapper from "../components/wrapper";

export default function AboutUsPage() {
  return (
    <section>
      <div className="relative w-full h-64">
        <Image
          src="/assets/2.jpg"
          alt="banner"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-[#173B45] text-5xl font-bold underline underline-offset-4 decoration-4">
            About Us
          </h1>
        </div>
      </div>
      <div className="my-8 mx-8 w-auto">
        <h1 className="text-2xl font-bold mb-4">About Us</h1>
        <p className="text-lg mb-4 text-justify">
          <span className="font-bold ">PT Props</span> berdiri sejak tahun 2001
          dengan moto{" "}
          <span className="font-bold">
            “Membangun Masa Depan, Menginspirasi Kehidupan!”.
          </span>{" "}
          Kami adalah perusahaan yang berkomitmen untuk menciptakan lingkungan
          hidup yang lebih baik melalui proyek-proyek properti yang inovatif dan
          berkelanjutan.
          <p className="text-lg mt-4 mb-4">
            Selama lebih dari dua dekade, PT Props telah berhasil mengembangkan
            dan menyelesaikan 6 proyek properti yang tersebar di berbagai lokasi
            strategis. Setiap proyek kami dirancang dengan perhatian terhadap
            detail dan kualitas, memastikan bahwa setiap hunian dan ruang
            komersial yang kami bangun memenuhi standar tertinggi.
          </p>
          <p className="text-lg mb-4">
            Kami percaya bahwa properti bukan hanya tentang bangunan fisik,
            tetapi juga tentang menciptakan komunitas yang harmonis dan
            berkelanjutan. Oleh karena itu, setiap proyek kami dilengkapi dengan
            fasilitas modern dan ramah lingkungan yang mendukung gaya hidup
            sehat dan nyaman bagi para penghuninya.
          </p>
          <p className="text-lg mb-2">
            Dengan tim profesional yang berpengalaman dan dedikasi yang tinggi,
            PT Props terus berinovasi dan beradaptasi dengan perkembangan zaman
            untuk memberikan solusi properti terbaik bagi masyarakat. Kami
            berkomitmen untuk terus membangun masa depan yang lebih baik dan
            menginspirasi kehidupan banyak orang melalui karya-karya kami.
          </p>
        </p>
      </div>
      <Wrapper>
        <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 md:flex px-5 place-items-center z-0">
          <div className="card bg-[#F8EDE3] image-full w-56 h-60 shadow-xl m-2 border border-[#C5705D] border-opacity-35 transition ease-in-out delay-150 hover:-translate-y-1 hover:z-[99] hover:scale-110 duration-300 hover:bg-indigo-300 hover:border-4 hover:border-indigo-200">
            <div className="card-body pt-4 md:pt-8 ">
              <h2 className="text-center font-bold text-black">Visi</h2>
              <p className="text-center text-md sm:text-sm">
                Menjadi pengembang properti terkemuka yang menciptakan hunian
                berkualitas dan berkelanjutan.
              </p>
            </div>
          </div>
          <div className="card bg-[#F8EDE3] image-full w-auto h-60 shadow-xl m-2 border border-[#C5705D] border-opacity-35 transition ease-in-out delay-150 hover:-translate-y-1 hover:z-[99] hover:scale-110 duration-300 hover:bg-indigo-300 hover:border-4 hover:border-indigo-200">
            <div className="card-body pt-4 sm:pt-8">
              <h2 className="text-center font-bold text-black">Misi</h2>
              <ul className="list-decimal list-outside px-2">
                <li className="text-[10px] text-left sm:text-xs md:text-sm">
                  <span className="font-bold">Kualitas Terbaik: </span>Membangun
                  properti dengan standar kualitas tinggi.
                </li>
                <li className="text-[10px] text-left sm:text-xs md:text-sm">
                  <span className="font-bold">Inovasi: </span>Mengembangkan
                  solusi inovatif untuk kebutuhan hunian.
                </li>
                <li className="text-[10px] text-left sm:text-xs md:text-sm">
                  <span className="font-bold">Kepuasan Pelanggan: </span>
                  Memberikan pelayanan yang memuaskan dan profesional.
                </li>
                <li className="text-[10px] text-left sm:text-xs md:text-sm">
                  <span className="font-bold">Lingkungan Berkelanjutan: </span>
                  Menerapkan praktik ramah lingkungan dalam setiap proyek.
                </li>
              </ul>
            </div>
          </div>
          <div className="card bg-[#F8EDE3] image-full w-56 h-60 shadow-xl m-2 border border-[#C5705D] border-opacity-35 transition ease-in-out delay-150 hover:-translate-y-1 hover:z-[99] hover:scale-110 duration-300 hover:bg-indigo-300 hover:border-4 hover:border-indigo-200">
            <div className="card-body pt-4 md:pt-8">
              <h2 className="text-center font-bold text-black">Moto</h2>
              <p className="text-center text-md">
                Membangun Masa Depan, Menginspirasi Kehidupan
              </p>
            </div>
          </div>
        </div>
      </Wrapper>
      <div className="my-8 mx-8 w-auto">
        <h1 className="text-2xl font-bold mb-4">Our Value</h1>
        <ul className="list-disc list-inside text-lg text-justify">
          <li>
            <span className="font-bold">Integritas: </span>Kami menjalankan
            bisnis dengan transparansi dan kejujuran.
          </li>
          <li>
            <span className="font-bold">Komitmen: </span>Kami berkomitmen untuk
            memberikan yang terbaik bagi pelanggan dan pemangku kepentingan.
          </li>
          <li>
            <span className="font-bold">Keberlanjutan: </span>Kami menerapkan
            praktik ramah lingkungan dalam setiap proyek kami.
          </li>
        </ul>
        <p className="text-base my-8 text-center italic">
          <span className="font-bold ">PT Props</span> kami percaya bahwa rumah
          adalah tempat di mana cerita hidup dimulai. Kami berusaha untuk
          menciptakan ruang yang tidak hanya menjadi tempat tinggal, tetapi juga
          tempat di mana kenangan indah tercipta. Terima kasih telah
          mempercayakan kebutuhan properti Anda kepada kami. Kami siap membantu
          Anda menemukan hunian impian Anda.
        </p>
      </div>
    </section>
  );
}
