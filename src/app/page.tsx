"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FeatureCardSeven from '@/components/sections/feature/FeatureCardSeven';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroSplitDoubleCarousel from '@/components/sections/hero/HeroSplitDoubleCarousel';
import MediaAbout from '@/components/sections/about/MediaAbout';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-stagger"
        defaultTextAnimation="entrance-slide"
        borderRadius="pill"
        contentWidth="medium"
        sizing="largeSmallSizeMediumTitles"
        background="none"
        cardStyle="glass-elevated"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="layered"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Ana Sayfa",          id: "#hero"},
        {
          name: "Ürünler",          id: "#products"},
        {
          name: "Hakkımızda",          id: "#about"},
        {
          name: "İletişim",          id: "#contact"},
      ]}
      brandName="Vesta Premium Mobilya"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitDoubleCarousel
      background={{
        variant: "downward-rays-animated"}}
      title="Yaşam Alanınıza Dijital Dokunuş"
      description="Vesta Premium Mobilya olarak, lüks ve konforu bir araya getirerek yaşam alanlarınızı yeniden tanımlıyoruz. Modern tasarımlarımız ve kusursuz işçiliğimizle hayallerinizdeki evi gerçeğe dönüştürün."
      leftCarouselItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/modern-kitchen-interior-with-island-armchair-stylish-open-space-home-design_169016-72732.jpg",          imageAlt: "Lüks modern oturma odası"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/dining-table-background-zoom-calls_23-2149684444.jpg",          imageAlt: "Şık yemek odası takımı"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/cozy-lively-home-interior-design_23-2151119015.jpg",          imageAlt: "Minimalist lüks yatak odası"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/furniture-room-background-sofa-contemporary_1203-4464.jpg",          imageAlt: "Lüks tekli koltuk"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/abstract-creation-made-from-3d-geometric-shapes_23-2150829289.jpg",          imageAlt: "Modern sehpa"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/elegant-rendering-interior-design_23-2151892447.jpg",          imageAlt: "Şık konsol masa"},
      ]}
      rightCarouselItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/view-futuristic-bedroom-with-furniture_23-2151152056.jpg",          imageAlt: "Lüks modern yatak odası"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/young-businesswoman-with-face-mask-waiting-job-interview-hallway_637285-8963.jpg",          imageAlt: "Lüks ev ofisi"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/white-counter-tap-vintage-home_1203-4973.jpg",          imageAlt: "Lüks banyo makyaj masası"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/lawyer-office-shelf_23-2148172327.jpg",          imageAlt: "Modern kitaplık"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/virtual-love-cute-girl-red-dress-distance-date-with-wine-candles-talking-camera_140725-164255.jpg",          imageAlt: "Lüks bar dolabı"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/leather-couch-dark-room_23-2148422202.jpg",          imageAlt: "Tasarımcı dresuar"},
      ]}
      buttons={[
        {
          text: "Showroomu Keşfet",          href: "#products"},
      ]}
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/young-blonde-charming-female-isolated_176474-79581.jpg",          alt: "Deneyimli İç Mimar"},
        {
          src: "http://img.b2bpic.net/free-photo/young-beautiful-woman-wearing-red-shirt-showing-kiss-gesture-isolated-yellow-wall_141793-36021.jpg",          alt: "Memnun Müşteri"},
        {
          src: "http://img.b2bpic.net/free-photo/happy-young-man-laughing_23-2148911860.jpg",          alt: "Proje Yöneticisi"},
        {
          src: "http://img.b2bpic.net/free-photo/smiling-young-handsome-guy-wearing-green-shirt_141793-122624.jpg",          alt: "Tasarım Danışmanı"},
        {
          src: "http://img.b2bpic.net/free-photo/annoyed-young-brunette-caucasian-girl-isolated-orange-wall-with-copy-space_141793-119059.jpg",          alt: "Mutlu Ev Sahibi"},
      ]}
      avatarText="250+ mutlu müşterimiz ve iç mimarlarımızla tanışın."
      marqueeItems={[
        {
          type: "image",          src: "asset://hero-marquee-logo-1",          alt: "Luxury Hotels Logo"},
        {
          type: "image",          src: "asset://hero-marquee-logo-2",          alt: "Exclusive Resorts Logo"},
        {
          type: "image",          src: "asset://hero-marquee-logo-3",          alt: "Architectural Design Logo"},
        {
          type: "image",          src: "asset://hero-marquee-logo-4",          alt: "Interior Artistry Logo"},
        {
          type: "image",          src: "http://img.b2bpic.net/free-photo/ballerina-training-perform-eleegance-icon_53876-13812.jpg",          alt: "Bespoke Living Logo"},
      ]}
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardTwo
      animationType="scale-rotate"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      products={[
        {
          id: "1",          brand: "Vesta Premium",          name: "Zümrüt Koltuk Takımı",          price: "₺35.000",          rating: 5,
          reviewCount: "24 Yorum",          imageSrc: "http://img.b2bpic.net/free-photo/wooden-table-luxury-lifestyle-comfortable_1203-4716.jpg",          imageAlt: "Zümrüt Koltuk Takımı"},
        {
          id: "2",          brand: "Vesta Premium",          name: "Mira Ahşap Yemek Odası",          price: "₺28.500",          rating: 5,
          reviewCount: "18 Yorum",          imageSrc: "http://img.b2bpic.net/free-photo/modern-kitchen-interior-design_23-2150771903.jpg",          imageAlt: "Mira Ahşap Yemek Odası"},
        {
          id: "3",          brand: "Vesta Premium",          name: "Kanyon Premium Yatak Odası",          price: "₺42.000",          rating: 5,
          reviewCount: "30 Yorum",          imageSrc: "http://img.b2bpic.net/free-photo/luxurious-modern-bedroom-interior-design_23-2151978959.jpg",          imageAlt: "Kanyon Premium Yatak Odası"},
        {
          id: "4",          brand: "Vesta Premium",          name: "Safir Konsol Masa",          price: "₺15.750",          rating: 5,
          reviewCount: "12 Yorum",          imageSrc: "http://img.b2bpic.net/free-photo/dry-twig-wooden-cabinet-white-room_53876-105824.jpg",          imageAlt: "Safir Konsol Masa"},
        {
          id: "5",          brand: "Vesta Premium",          name: "Obsidyen Berjer",          price: "₺9.900",          rating: 5,
          reviewCount: "9 Yorum",          imageSrc: "http://img.b2bpic.net/free-photo/view-futuristic-bedroom-with-furniture_23-2151151851.jpg",          imageAlt: "Obsidyen Berjer"},
        {
          id: "6",          brand: "Vesta Premium",          name: "Elmas Kitaplık Ünitesi",          price: "₺19.200",          rating: 5,
          reviewCount: "15 Yorum",          imageSrc: "http://img.b2bpic.net/free-photo/3d-rendering-classic-interior_23-2150943456.jpg",          imageAlt: "Elmas Kitaplık Ünitesi"},
      ]}
      title="Öne Çıkan Koleksiyonlar"
      description="Lüks ve konforu bir araya getiren özel tasarım mobilya koleksiyonlarımızı keşfedin. Her bir parça, yaşam alanınıza değer katmak için özenle seçilmiştir."
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardSeven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "El İşçiliği Detayları",          description: "Her bir mobilya parçası, usta zanaatkarlarımızın elinde özenle şekillenir ve eşsiz detaylarla hayat bulur. Geleneksel teknikler modern tasarımlarla harmanlanır.",          imageSrc: "http://img.b2bpic.net/free-photo/mid-adult-carpenter-using-drill-while-working-with-wood-workshop_637285-11681.jpg",          imageAlt: "El işçiliği detayları"},
        {
          title: "Sürdürülebilir Malzemeler",          description: "Çevreye duyarlı bir yaklaşımla, mobilyalarımızda yüksek kaliteli ve sürdürülebilir kaynaklardan elde edilen doğal ahşap ve kumaşlar kullanıyoruz.",          imageSrc: "http://img.b2bpic.net/free-photo/top-view-cookie-sandwiches-with-plaid-cloth-wooden-background-with-copy-space_141793-11865.jpg",          imageAlt: "Sürdürülebilir malzemeler"},
        {
          title: "Ergonomik Tasarım",          description: "Estetiği ve fonksiyonelliği bir araya getiren tasarımlarımız, evinizde maksimum konfor ve kullanım kolaylığı sağlamak üzere ergonomik olarak geliştirilmiştir.",          imageSrc: "http://img.b2bpic.net/free-photo/office-chair-still-life_23-2151149130.jpg",          imageAlt: "Ergonomik tasarım"},
      ]}
      title="Üstün Kalite ve Kusursuz İşçilik"
      description="Vesta Premium Mobilya olarak, her bir detayı titizlikle işliyor, yaşam alanlarınıza değer katacak zamansız parçalar üretiyoruz. Kalite standartlarımızı en üst düzeyde tutarak müşteri memnuniyetini garanti ediyoruz."
    />
  </div>


  <div id="about" data-section="about">
      <MediaAbout
      useInvertedBackground={false}
      title="Atölyeden Evinize: Vesta Premium Hikayesi"
      description="Vesta Premium Mobilya, yılların verdiği tecrübe ve modern tasarım anlayışıyla kuruldu. Her bir parçada estetiği, fonksiyonelliği ve dayanıklılığı bir araya getirerek, sadece bir mobilya değil, bir yaşam tarzı sunuyoruz. Atölyemizde başlayan bu yolculuk, evlerinize getirdiğimiz eşsiz parçalarla devam ediyor. Müşteri memnuniyetini ön planda tutan hizmet anlayışımızla, hayalinizdeki yaşam alanlarını kurmanız için yanınızdayız."
      imageSrc="http://img.b2bpic.net/free-photo/young-cobbler-glasses-is-working-shoe-sole-his-dark-workplace_613910-12934.jpg"
      imageAlt="Vesta Premium Mobilya atölyesinden bir görüntü"
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={true}
      names={[
        "Luxury Hotels",        "Exclusive Resorts",        "Architectural Design",        "Interior Artistry",        "Elite Residences",        "Bespoke Living",        "Premium Yachts"]}
      title="Değerli İş Ortaklarımız"
      description="Lüks mobilya sektöründe güçlü işbirlikleri kurarak, projelerimize değer katıyor ve geniş kitlelere ulaşıyoruz. İşte bize güvenen bazı iş ortaklarımız:"
      showCard={true}
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={false}
      background={{
        variant: "plain"}}
      tag="Bize Ulaşın"
      title="Showroom ve İletişim Bilgileri"
      description="Modoko Mobilyacılar Sitesi, 11. Sk. No: 34, 34775 Ümraniye/İstanbul\nTelefon: +90 212 555 55 55\nE-posta: info@vestapremium.com"
      inputPlaceholder="Adınız Soyadınız"
      buttonText="Mesaj Gönder"
      termsText="Tarafıma ticari elektronik ileti gönderilmesine onay veriyorum."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoText="Vesta Premium Mobilya"
      columns={[
        {
          title: "Keşfet",          items: [
            {
              label: "Ana Sayfa",              href: "#hero"},
            {
              label: "Koleksiyonlar",              href: "#products"},
            {
              label: "Hakkımızda",              href: "#about"},
          ],
        },
        {
          title: "Hizmetler",          items: [
            {
              label: "Showroom Randevusu",              href: "#contact"},
            {
              label: "Tasarım Danışmanlığı",              href: "#"},
            {
              label: "Sıkça Sorulan Sorular",              href: "#"},
          ],
        },
        {
          title: "Yasal",          items: [
            {
              label: "Gizlilik Politikası",              href: "#"},
            {
              label: "KVKK Aydınlatma Metni",              href: "#"},
            {
              label: "Çerez Politikası",              href: "#"},
          ],
        },
      ]}
      copyrightText="Telif Hakkı © 2026 Vesta Premium Mobilya. Tüm Hakları Saklıdır."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}