"use client";

import React, { useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import CardTesti from './cardtestimoni';

const CardSlider: React.FC = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  
    const autoplay = useCallback(() => {
      if (!emblaApi) return;
      emblaApi.scrollNext();
    }, [emblaApi]);
  
    useEffect(() => {
      if (!emblaApi) return;
      const interval = setInterval(autoplay, 3000);
      return () => clearInterval(interval);
    }, [emblaApi, autoplay]);

  const cards = [
    {
      nama: 'Nina Kusuma',
      description: '“Layanan pelanggan dari PT Props luar biasa. Mereka benar-benar mendengarkan dan memahami apa yang saya cari dalam sebuah rumah.”',
    },
    {
      nama: 'Agus Dermawan',
      description: '“Proses pembelian properti saya dengan PT Props sangat transparan. Saya merasa aman dan terinformasi sepanjang proses tersebut.”',
    },
    {
      nama: 'Siti Aminah',
      description: '“Kualitas konstruksi dari PT Props sangat baik. Saya menghargai komitmen mereka terhadap keberlanjutan dan lingkungan.”',
    },
    {
      nama: 'Michael Sutanto',
      description: '“Tim PT Props sangat mengerti kebutuhan saya dan memberikan solusi yang tepat. Saya sangat puas dengan layanan after-sales mereka.”',
    },
    {
      nama: 'Jessica Tania',
      description: '“Desain modern dan lingkungan yang nyaman membuat saya memilih PT Props sebagai pengembang properti saya. Saya tidak sabar untuk membuat banyak kenangan di rumah baru saya.”',
    },
    {
      nama: 'Denny Surya',
      description: '“Investasi properti saya bersama PT Props adalah keputusan terbaik yang pernah saya buat. Nilai properti saya meningkat secara signifikan dalam waktu singkat.”',
    },
    {
      nama: 'Lia Anggraini',
      description: '“Saya merekomendasikan PT Props kepada siapa saja yang mencari properti berkualitas. Pengalaman saya dari awal hingga akhir sangat menyenangkan.”',
    },
    {
      nama: 'Budi Raharjo',
      description: '“Pelayanan yang diberikan oleh PT Props sangat memuaskan. Timnya responsif dan selalu siap membantu setiap kali saya memiliki pertanyaan atau kebutuhan.”',
    },
    {
      nama: 'Rina Kartika',
      description: '“Saya ingin mengucapkan terima kasih kepada PT Props atas rumah impian yang kini saya huni. Kualitas bangunan dan desainnya melebihi ekspektasi saya.”',
    },
    {
      nama: 'Andi Setiawan',
      description: '“Sebagai pembeli pertama kali, saya sangat terkesan dengan profesionalisme dan perhatian detail dari tim PT Props. Proses pembelian rumah saya berjalan lancar dan tanpa hambatan.”',
    },
  ];

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {cards.map((card, index) => (
          <div className="flex-none w-64 p-4" key={index}>
            <CardTesti {...card} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSlider;
