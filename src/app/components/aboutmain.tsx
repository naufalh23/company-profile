import Link from "next/link";
import Wrapper from "./wrapper";

export default function AboutMain() {
  return (
    <Wrapper>
      <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 md:flex p-5 place-items-center z-0">
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
                <span className="font-bold">Inovasi: </span>Mengembangkan solusi
                inovatif untuk kebutuhan hunian.
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
  );
}
