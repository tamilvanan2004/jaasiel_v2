export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', 
    path: '/about',
    // dropdown: [
    //   { label: 'Who We Are', path: '/about/who-we-are' },
    //   { label: 'Our Management Team', path: '/about/management-team' },
    //   { label: 'Service Areas', path: '/about/service-areas' },
    // ],
   },
  {
    label: 'Food Service',
    dropdown: [
      { label: 'Corporate Catering', path: '/services/sectors-served' },
      { label: 'Family Events', path: '/services/family-events' },
      { label: 'Jaasiel Foods', path: '/services/jaasiel-foods' },
      { label: 'Food Brands', path: '/services/food-brands' },
      // { label: 'Certifications', path: '/services/certifications' },
    ],
  },
  { label: 'Clients', path: '/clients' },
  { label: 'Contact Us', path: '/contact' },
];
// keep logoUrl etc as-is

export const stats = [
  { value: 15, suffix: '+', label: 'Years of Experience' },
  { value: 500, suffix: '+', label: 'Corporate Clients' },
  { value: 2.5, suffix: 'k', label: 'Events Managed' },
  { value: 1, suffix: 'M+', label: 'People Served' },
];

export const aboutHighlights = [
  {
    icon: 'work',
    title: 'Professional Service',
    desc: 'Highly trained staff delivering excellence daily.',
  },
  {
    icon: 'verified',
    title: 'Quality & Hygiene',
    desc: 'Uncompromising standards across all operations.',
  },
  {
    icon: 'settings',
    title: 'Customized Solutions',
    desc: 'Tailored to fit your unique business needs.',
  },
  {
    icon: 'sync',
    title: 'Reliable Operations',
    desc: 'Seamless execution you can count on.',
  },
];

export const services = [
  {
    icon: 'restaurant',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCIrjoTpNzlVgthTLGT62OnG19SpP6sz-0m0ittP05iFTfgGLrMlw2jENS0SnvwlfbVhaKucXxGbDFIrkAjGzJjVcbD2bKVf72Z-nV6r2As0xLPtUKjspgw2EiuyPlQqQyMXtcx31flh6R2Rqki1XAJpDvshyfcxFaEFAeJBkipL0tFk-dNSxBRcZpFe7f4yLpMylvGpC-Z5YwnmqmBnkvxLAKYthlPZSiwLv38X81uEzZeONOPPvEHbA',
    title: 'Corporate Catering',
    desc: 'Elevating workplace dining with nutritious, diverse, and high-quality culinary offerings for everyday sustenance and executive meetings.',
  },
  {
    icon: 'health_and_safety',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCY1Vg0n_dqJrI9ttZooO3B_JBUyeFWWeRaTPt1EWdUC1OGyBPR3QKOBbzbUlrtHpEZ9XiaU667f8H7jv00zXv9gwz3In6hl13UneBZYgsGOQWgQB7h_nIDX3LdJXQrfgN22v4kzvYJh0jjN6Nrb2C4NejuCe2dD3BXRV9IUv2xmydrDcoTLadt0oL8IUf9IVYW9Ghh4gFsXt72u_ZTsPKCL_cqWz9y0rD_Vaq-Q_YITiIInLqzpKeDrw',
    title: 'Healthcare Catering',
    desc: 'Specialized nutritional services adhering to strict dietary and hygiene standards to support patient recovery and staff wellness.',
  },
  {
    icon: 'celebration',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBftaBHarfgG6b2qY2EpjBFmJeFV_QWGeNb5Nffc6-SWnvdKXcSkOhh-hP8tI8NUpJhN4HTDhciwGN1FM7lEKCby_jj53rhXJKQaHYyhrcmnelPSEg7SHIk1ulkdKANb-afXbwRreVA6FM0u4fXiY4GuYhmm5yk6a1tSNkP7KV6JO7wSqpSkiaD3jXUaB5RDS4eHU8k3KF5iJzjuyFZZPtxS1r6ASEvBNbIGG-OO8B65Jf-EmDaF1EuBQ',
    title: 'Event Management',
    desc: 'End-to-end planning and execution for corporate gatherings, ensuring seamless logistics and memorable experiences.',
  },
];

export const industries = [
  {
    icon: 'computer',
    title: 'IT & Technology',
    desc: 'Corporate cafeterias, employee meals, snacks, workplace catering, and AI-enabled service optimization.',
  },
  {
    icon: 'local_hospital',
    title: 'Healthcare',
    desc: 'Hospital and healthcare facility catering.',
  },
  {
    icon: 'school',
    title: 'Education',
    desc: 'School, college, and institutional food services.',
  },
  {
    icon: 'domain',
    title: 'Corporate',
    desc: 'Meetings, conferences, office events, and employee dining.',
  },
  {
    icon: 'event',
    title: 'Events',
    desc: 'Wedding, corporate, private, and large-scale event management.',
  },
  {
    icon: 'account_balance',
    title: 'Institutions',
    desc: 'Customized large-scale food and facility service solutions.',
  },
];

export const whyChoose = [
  { icon: 'verified', title: 'Quality First', desc: 'Consistent quality across every service.' },
  { icon: 'groups', title: 'Professional Team', desc: 'Trained and experienced service professionals.' },
  {
    icon: 'design_services',
    title: 'Customized Solutions',
    desc: "Services designed around each client's requirements.",
  },
  { icon: 'schedule', title: 'Reliable Operations', desc: 'Efficient and dependable day-to-day service management.' },
  { icon: 'sanitizer', title: 'Hygiene & Safety', desc: 'Strict hygiene and food safety standards.' },
  { icon: 'trending_up', title: 'Scalable Service', desc: 'Solutions suitable for small offices to large organizations.' },
];

export const process = [
  { num: '01', title: 'Understand', desc: "We understand the client's requirements." },
  { num: '02', title: 'Plan', desc: 'We create a customized service plan.' },
  { num: '03', title: 'Deliver', desc: 'Our professional team executes the service.' },
  { num: '04', title: 'Improve', desc: 'We continuously collect feedback and improve service quality.' },
];

export const events = [
  {
    label: 'Corporate Events',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCbIo562EDk8g00PU3f3PJN4HnRfv2HlrhgMC1SkaJiIedzfL0rUswA9uGKy7u1Zg6uX2TC9unv9IHIlIjTwZ6ghvnCNlPQeUgxEc1R6AHSrKJFSQ_LoAKz9N52jIlTMBgnFAWGYNSbuCTMFdseCnL2mSrsJQOQzm_gADDMWHjYsiT9iK_Mn7x86MhclI4JGzfAwhEx_KO-Pni6C58QZEa_c4N2OgyNf-76zi6TYHAUgMXApE0qcJejIA',
  },
  {
    label: 'Conferences',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDU1Ph3yusfVIcJqI8f0XiPmNyHDQYOrvJBtml0fJRWmu5GNI8NNadvGBIwstOw3hhJyFzaDAzqENJYwwQumM35_mF1IEFsKPCYlArxUUUnOou-CZbrnlcu6j5fRxW3ft0de3MNZz9CNddD7ojJIzGbV1seaE2NzR4mnTxxqSlULfpmZMucqcu4xGM5uQgcqqifKlF326x6ujB-xoGlxhq-uPiFEC0NOLoK88WLmuy7P9Na8DD80ixPqw',
  },
  {
    label: 'Product Launches',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCvW845TvfipF9OIuBmr2_ygOaQqF-0pfL0_9TDC1lTpyzMnVGLZ6vw4FZH3oY-L4ra1cZ34p8JfawvujOWSQ7rxZub0dQyc6hbQDTNJyQd_IoP1WzpV-nqcfvhXavuhR2rzirMrckXbxq8au3YhSCdQxLDC6MjCEH3Xf0RPC1F7X3UCTYaF6GPQwJ9xtHekdFaHYjtSB94b3Z7gpEhT1ybuF0Hm0jrzTBK1P3UDuu5kxW17KqGaFJRfg',
  },
  {
    label: 'Employee Events',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBUKa1rzEJYlcwyg4nCk7DzPufsG9naUg3g1YR_Wkc0lDIPsgr-xm5Ox_N1PHY0Owlbdka3ReWGZz93CJxe8DHf8skM5OcJSeaNFk6F8yBsD5v65pzplvOkNsNuu5Utm87J2G5hOypHNb88ZvFt18j9X7clUtUujcMKYwao7UB_VZRvFXrQUFW7OoGIA_fF7fjL-DUNcX-a1fCYrRjKnkwZgicG8ubukbwseugpFP3LhTTMtApF_RIF-A',
  },
  {
    label: 'Private Events',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDl4zIZ0nCyDlOpLK4nBFon_ELs-qz065qCCjSaBLZpZB8lzE6ppfNUpY7IsB3JTnxeSSLp8NvECXht5W_S-ORF52ikf7nsOB-LIy7zTOYSZH3Xs3HvCeU7m6LOEbMu8KBIBL_m2YYS-RJoEk1hMb0nNGghdJTeCevuTwqJB7l_dfJodxkcdBASEWtV_hqJQIvZyr6ZYUG0OogPX-0eclcgl9jX2htl1D82iP1N59RQ9w4VyzGnF5r93A',
  },
  {
    label: 'Celebrations',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBwGwCwDQZM22VG2JPeryLHPfwhFOuShYS_OvQyClHkjDsRNLI84ZcPa51AQqZ1lY06-5Dy9QdSG4G_zQ9c1qgWc8jvzkIeLyLvpvCLv6JKMFG4yLlsYUCiRNkHI0vwjAElhz5FKEH-8h-wd5fmQs7i3V2vYRTbj0a54Jr6K2pIvMOqdl-rCji1z304aelNilkiX_Q4arNr0GAa8crDgNLT9HucXTtevTyrdyFvO6WYqOhn4oUZDp8I3A',
  },
];

export const testimonials = [
  {
    name: 'Rajiv Menon',
    role: 'Operations Head, TechNova Solutions',
    text: 'Jaasiel has completely transformed our corporate catering experience. Their attention to detail and consistent quality have made them an invaluable partner for our daily operations.',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAWiDYJ8b8IqZJ_YDcBFJ0As-wAhAB5KOl-XUrLD6WlK5IgayMcV3knnjeiP9zx051CM-Uo9DKLw-VjfSR9VmNXlv96DMKKyU0AtopALkVcHbZnzTei5QGanMAj81u26bNNmlzW0kxBPvDnaU3f-7dLQYcgReMG-Y6_6z2sntHt645zS1fT-q6Ifa6MyLTauBVmwxgUXfBySBGvOXMa7HYAY0FfoagedzdcVCkm_prfXPqRWmc1IqfJ_g',
  },
  {
    name: 'Ananya Sharma',
    role: 'Facility Director, CareWell Hospital',
    text: "In a healthcare setting, hygiene and specialized diets are critical. Jaasiel's team goes above and beyond to ensure our stringent standards are met flawlessly every single day.",
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCX9tyl0Gjw1OTgKYmTem0lThUTnGZOTKFZ_ydnVttW1d61QkdKfv_OYJixWgzKMKiRLup_0k-pgOwP6sK6VTG1K5GwN7eHBFPPOtTJ64EF5kUzBo31WqqdQ-8iAy9V6K_DyP7Y9jeVHrA93skcsTd7QH25WwOE40u1rEpWASfhCBfqJhjrls9G2to72NuHumICCRkOkeRAyUg3JyNoLl-tPcNlfv_sernf2IYkWfrJngB8qAv0IO0Zew',
  },
  {
    name: 'Michael Roberts',
    role: 'Event Manager, GlobalEdge Corporation',
    text: 'Managing large-scale corporate events requires precision and reliability. Jaasiel brings both, along with a level of professionalism that makes our events truly shine.',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCJFGGzOQC5MqGJheNXbRQwQWJjH_tSyInjx-gi9rw-PTQ3kfeQxAZqqdvExQBSIpxhKSqihvF2M2oxgfv5RYemc3NPItv3mXIHqNwcjec2ai5D2iVq-v7MPsY9bhRMlnri51b1zVlQ9usmjY_6mcYc3NfVtoFVTgyLRLK9pBCczHw3As73JQ7deNUP7MzxZsdud2nGpC4EtuJMVDX7dkhY0vxOxeOXDSDf7JGaZzla0chK-FXx_nVYtA',
  },
  {
    name: 'Priya Nair',
    role: 'HR Manager, InfoCore Systems',
    text: "Employee satisfaction starts with the workplace experience, and Jaasiel's food services have been a massive hit. Their diverse menus keep our team energized and happy.",
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA2a6TAH14QyBsgf723FWaZwp6kneO2vfIafluW8OuBdxE7lrMLlTMnqpJ0vNTnGVp2M2QkmmA11kaROiKJFcCDIu2VayQ-9QFW-ooe_tfithaDFcWVZ7OihHGCsgzTDvP5KxO-FxKjAuFzF3AlTYQGmhWskOd6yud6pe4ONoZUw6fCh_ciN5viTvYjV4WJiTUYAYPy6yPlQeIhREe8pZN02MLy1ueltBpgoKaSpaZpTzjPdlrwL22tIg',
  },
  {
    name: 'Suresh Iyer',
    role: 'Admin Manager, BrightFuture University',
    text: 'Providing consistent, high-quality food services for a large university campus is no small feat. Jaasiel handles it with incredible efficiency and remarkable quality.',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBtptkHMNnKY08ONGWuXoiR6-RNWdfN0LK_Iwx04wkyWYL3SMxGH-A-vseiGjO8ZIrGZi98SJP4ImwiTOSRAqMsEriIkdBOF1BQ_NBNGmiqOVGORPo9idNti6rh19_00jBFVExljniNCztkX-6wcf2OFWyEYAc2XkK14Oi-D2HO6fADbFL3sSqXxtEgk8nnBZYyNQHypY08s2at7msIy2p1lr7kSoZHZBiMjfAuo_cbblgzyQ7mG2uvsg',
  },
  {
    name: 'Kavitha Ramesh',
    role: 'Admin Manager, PrimeWorks Technologies',
    text: "From daily cafeteria management to high-stakes board meetings, Jaasiel's team is always prepared, professional, and completely dedicated to excellence.",
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDKtf-DT5qezF-7oEqqrXukA4aFmchbEv1fy4h0HwtqrgbZbyAPw8qPb82Pl3MYetEc3KjBprQvR3fEIdl8d9MiZtrZvmE0a5u_rIpWcxwuob4hFoMeKgC4pHGlcc-y2-Ge49tE6vUDnGBQYCQ-yg7jTzbatIcCy1JuY7LXJinllw_dt2VUeRVq8L_a67mQpdr-qAVaNyh18gwATRRvNrMtegYeOdv1U71g-c7vAxtLtadMD716Plg5ZQ',
  },
];

export const heroImage =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBnzEv5E5pEUcI6cXnDJ0d4IHnKrqfUDbAee82PaZ7yTKenf51eB4yq2SreDNw83hBsqsFMfrOP3CyYZ0Mz_mB7SaM2HTVHfyjTojTgZ06uxn5mf3mt-XtzxUUVTKIDhJhUy5h82YnXyrp-Lg92KB-NLmkcXzPCiajYHekITSIx6TdlTVgRDbod2A2HYLle7-yhsD0C6Ej3wr632UqQllka0VI0CYde-1Aazls_efpTOhtLhO6KjjLqfg';

export const aboutImage =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAtbCRtJGAYWhfEpPUaDiSz2ylNG_xRhyb2aFToxI4vCH89eJ44G_4GshBW3X2dPWg3bOPKvP5Vcx9UuwX5W9YULCuHxnPBRgOJjLQ6eoJGjaUeA-5cLKbsc8qVxFfcDgNzzBjTVYF7xkSEWhjpRHsxC_SR8sxrIy8cLV22kzfZ14avWSu9JIKLU7xqCnjR73OTO79a04yjF9LLPJOherW3Fx0--97vRDSZeifaCs3FRuLKmsHfuzDjxg';

export const logoUrl =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuA4EgJAewOMRE4032j0pUdjoXZjuShdQX9u8PrISWrHMt_6JUs9bCvHV9rLEXqKfOl-iuOi6DBYeU5hs3q4ol0SdzjgBaL3rRTJGbh1QpZ26Z7TdEtNw_20NEzqSNR5NxFZesskd6BH5UqEK0al2WlZvmgsGSnnNEBayx81Mf6-d2HWJTR9kRgoB67y-Z53-N15AIcyO309IO6hsK4tvDbn-E5NRHnHfpvauSP1piwEuDCGR_v0mfiPpbrUL5uf4fu8ECY';


  export const managementTeam = [
  { name: 'Full Name', role: 'Managing Director', bio: 'Short one-line bio.', photo: '' },
  { name: 'Full Name', role: 'Operations Head', bio: 'Short one-line bio.', photo: '' },
  { name: 'Full Name', role: 'Food Service Lead', bio: 'Short one-line bio.', photo: '' },
  { name: 'Full Name', role: 'Facility Manager', bio: 'Short one-line bio.', photo: '' },
];

export const serviceAreas = [
  { name: 'Manufacturing', desc: 'On-site catering for industrial facilities.' },
  { name: 'Healthcare', desc: 'Nutrition-focused meal service for hospitals.' },
  { name: 'Education', desc: 'Campus dining programs for schools and colleges.' },
  { name: 'Corporates', desc: 'Workplace cafeteria and events catering.' },
  { name: 'Hospitality', desc: 'Event catering for hotels and venues.' },
  { name: 'Facility Management', desc: 'Housekeeping and upkeep services.' },
];



export const companyTimeline = [
  {
    step: '01',
    range: '2017 – 2018',
    year: '2018',
    title: 'Founded & First Contracts',
    description:
      'JJS Catering Service was founded with a team of 3 employees, securing its first 2 industrial catering contracts and laying the operational foundation for the business.',
  },
  {
    step: '02',
    range: '2019 – 2020',
    year: '2020',
    title: 'Building Momentum',
    description:
      'The team grew to 8 employees while contracts expanded to 5, reflecting steady demand across manufacturing and institutional clients.',
  },
  {
    step: '03',
    range: '2021 – 2026',
    year: '2026',
    title: 'Scaling Operations',
    description:
      'JJS scaled to a 20-member team managing 30 active contracts, extending its reach across manufacturing, healthcare, and education sectors.',
  },
];
export const aboutMeta = {
  eyebrow: 'About JJS Catering Service',
  title: 'Industrial Catering, Delivered With Precision',
};