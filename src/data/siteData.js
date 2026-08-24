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
      bgImage: `${import.meta.env.BASE_URL}assets/categories/poly-foam.jpg`,
      description: 'رغوات عالية الجودة للتعبئة والتثبيت والعزل بكفاءة احترافية.'
    },
    {
      id: 2,
      slug: 'silicone',
      title: 'سيليكون',
      icon: Droplets,
      bgImage: `${import.meta.env.BASE_URL}assets/categories/silicone.jpg`,
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
    { id: 1, name: 'اسم المعرض الأول', image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop', video: '' },
    { id: 2, name: 'اسم المعرض الثاني', image: 'https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=600&h=400&fit=crop', video: '' },
    { id: 3, name: 'اسم المعرض الثالث', image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=600&h=400&fit=crop', video: '' },
    { id: 4, name: 'اسم المعرض الرابع', image: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?w=600&h=400&fit=crop', video: '' },
    { id: 5, name: 'اسم المعرض الخامس', image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&h=400&fit=crop', video: '' },
    { id: 6, name: 'اسم المعرض السادس', image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop', video: '' },
    { id: 7, name: 'اسم المعرض السابع', image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=400&fit=crop', video: '' },
    { id: 8, name: 'اسم المعرض الثامن', image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&h=400&fit=crop', video: '' },
  ]
};