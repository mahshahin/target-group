import {
  ShieldCheck, Award, Headset, Truck,
  Droplets, Layers, Link2, Shield, SprayCan, Crosshair
} from 'lucide-react';

export const siteData = {
  contact: {
    phone: "+20 010 19143218",
    whatsapp: "+20 010 19337096",
    email: "info@target-co.net",
    addressAr: "١ شارع العدسي - مؤسسة الزكاة - القاهرة",
    addressEn: "1 El Adsie ST - Moa'sas El Zakah - Cairo",
  },
  social: {
    facebook: "#",
    twitter: "#",
    instagram: "#",
    linkedin: "#"
  },
  navigation: [
    { key: 'home', href: '/#home' },
    { key: 'products', href: '/#products' },
    { key: 'exhibitions', href: '/#exhibitions' },
    { key: 'about', href: '/#about' },
    { key: 'contact', href: '/#contact' },
  ],
  whyChooseUs: [
    {
      title: 'جودة عالية',
      description: 'منتجات مطابقة لأعلى المعايير العالمية.',
      icon: Award,
    },
    {
      title: 'وكيل حصري',
      description: 'الوكيل الحصري لمنتجات SOMAFIX في مصر.',
      icon: ShieldCheck,
    },
    {
      title: 'دعم فني',
      description: 'فريق متخصص لتقديم الدعم والاستشارات.',
      icon: Headset,
    },
    {
      title: 'توصيل سريع',
      description: 'تغطية وتوصيل لمختلف المحافظات.',
      icon: Truck,
    }
  ],
  productCategories: [
    {
      id: 1,
      slug: 'polyurethane-foam',
      title: 'رغوة بولي يوريثان',
      icon: Layers,
      bgImage: "/assets/categories/poly-foam.jpg",
      description: 'رغوات عالية الجودة للتعبئة والتثبيت والعزل بكفاءة احترافية.'
    },
    {
      id: 2,
      slug: 'silicone',
      title: 'سيليكون',
      icon: Droplets,
      bgImage: "/assets/categories/silicone.jpg",
      description: 'سيليكون ممتاز للغلق المحكم ومنع التسربات في كافة التطبيقات.'
    },
    {
      id: 3,
      slug: 'insulation',
      title: 'عوازل',
      icon: Shield,
      description: 'حلول عزل متكاملة لحماية المنشآت من التسرب المائي والحراري.'
    },
    {
      id: 4,
      slug: 'somafix-insulation',
      title: 'عوازل سوميـج',
      icon: ShieldCheck,
      description: 'عوازل متطورة لضمان أقصى درجات الحماية والمتانة للمشروعات.'
    },
    {
      id: 5,
      slug: 'adhesives',
      title: 'لواصق',
      icon: Link2,
      description: 'مواد لاصقة قوية وفعالة لكافة أنواع الأسطح والاستخدامات.'
    },
    {
      id: 6,
      slug: 'industrial-sprays',
      title: 'بخاخات صناعية',
      icon: SprayCan,
      description: 'بخاخات متخصصة لتلبية احتياجات الصيانة والتشغيل الصناعي.'
    },
    {
      id: 7,
      slug: 'guns',
      title: 'مسدسات',
      icon: Crosshair,
      description: 'مسدسات حقن وتوزيع احترافية لضمان الدقة وسهولة الاستخدام.'
    }
  ],
  somafixFeatures: [
    'منتجات موثوقة',
    'تقنيات متطورة',
    'جودة عالمية'
  ],
  aboutFeatures: [
    'فريق متخصص',
    'الالتزام بالجودة',
    'خدمة العملاء',
    'حلول متكاملة'
  ],
  statistics: [
    { number: '+500', text: 'عميل ومشروع' },
    { number: '+15', text: 'سنة من الخبرة' },
    { number: '+100', text: 'منتج عالي الجودة' },
    { number: 'جميع المحافظات', text: 'تغطية وتوصيل' }
  ],
  exhibitions: [
    { id: 1, name: 'اسم المعرض الأول', image: 'https://via.placeholder.com/600x400?text=Exhibition+1', video: '' },
    { id: 2, name: 'اسم المعرض الثاني', image: 'https://via.placeholder.com/600x400?text=Exhibition+2', video: '' },
    { id: 3, name: 'اسم المعرض الثالث', image: 'https://via.placeholder.com/600x400?text=Exhibition+3', video: '' },
    { id: 4, name: 'اسم المعرض الرابع', image: 'https://via.placeholder.com/600x400?text=Exhibition+4', video: '' },
    { id: 5, name: 'اسم المعرض الخامس', image: 'https://via.placeholder.com/600x400?text=Exhibition+5', video: '' },
    { id: 6, name: 'اسم المعرض السادس', image: 'https://via.placeholder.com/600x400?text=Exhibition+6', video: '' },
    { id: 7, name: 'اسم المعرض السابع', image: 'https://via.placeholder.com/600x400?text=Exhibition+7', video: '' },
    { id: 8, name: 'اسم المعرض الثامن', image: 'https://via.placeholder.com/600x400?text=Exhibition+8', video: '' },
  ]
};