import Image from "next/image";

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
        <p className="text-lg mb-4">
          <span className="underline font-bold decoration-[#173B45]">
            PT Props
          </span>{" "}
          berdiri sejak tahun 2001 dengan moto{" "}
          <span className="underline font-bold decoration-[#173B45]">
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
      <div className="my-8 mx-8 w-auto">
        <h1 className="text-2xl font-bold mb-4">Our Value</h1>
        <ul className="list-disc list-inside text-lg">
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
        <p className="text-xl my-8 text-center ">
          <span className="underline font-bold decoration-[#173B45]">
            PT Props
          </span>{" "}
          kami percaya bahwa rumah adalah tempat di mana cerita hidup dimulai.
          Kami berusaha untuk menciptakan ruang yang tidak hanya menjadi tempat
          tinggal, tetapi juga tempat di mana kenangan indah tercipta. Terima
          kasih telah mempercayakan kebutuhan properti Anda kepada kami. Kami
          siap membantu Anda menemukan hunian impian Anda.
        </p>
      </div>
    </section>
  );
}
