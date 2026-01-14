// Site configuration and content - easily customizable for each client
export const siteConfig = {
    name: 'ÉLAN Aesthetics',
    tagline: 'Where Science Meets Beauty',
    description: 'Premier medical aesthetics clinic offering advanced treatments for face, skin, and body. Experience luxury care with proven results.',
    phone: '(407) 555-0188',
    email: 'hello@elan-aesthetics.com',
    address: '1250 Park Avenue, Suite 400\nOrlando, FL 32801',
    hours: [
        { day: 'Monday - Friday', time: '9:00 AM - 7:00 PM' },
        { day: 'Saturday', time: '10:00 AM - 5:00 PM' },
        { day: 'Sunday', time: 'Closed' },
    ],
    social: {
        instagram: 'https://instagram.com/elan-aesthetics',
        facebook: 'https://facebook.com/elan-aesthetics',
    },
    bookingUrl: 'https://calendly.com', // Replace with actual booking link
} as const;

export const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Results', href: '#gallery' },
    { label: 'Team', href: '#team' },
    { label: 'Reviews', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
] as const;

export const heroContent = {
    eyebrow: 'LUXURY MEDICAL AESTHETICS',
    heading: 'Where Science Meets Beauty',
    subheading: 'Experience transformative treatments delivered with precision, artistry, and the highest standards of care. Your journey to radiant confidence starts here.',
    primaryCta: { label: 'Book Consultation', href: '#booking' },
    secondaryCta: { label: 'View Services', href: '#services' },
    stats: [
        { value: '15+', label: 'Years Experience' },
        { value: '10K+', label: 'Treatments Performed' },
        { value: '98%', label: 'Client Satisfaction' },
    ],
} as const;

export const services = [
    {
        category: 'Injectables',
        description: 'Precision treatments to smooth, restore, and enhance your natural beauty.',
        items: [
            {
                name: 'Botox & Dysport',
                description: 'Smooth fine lines and wrinkles for a refreshed, youthful appearance. Results last 3-4 months.',
                price: 'From $12/unit',
                duration: '15-30 min',
            },
            {
                name: 'Dermal Fillers',
                description: 'Restore volume, sculpt contours, and enhance facial harmony with premium hyaluronic acid fillers.',
                price: 'From $650/syringe',
                duration: '30-45 min',
            },
            {
                name: 'Lip Enhancement',
                description: 'Achieve beautifully balanced, natural-looking lips with customized filler techniques.',
                price: 'From $550',
                duration: '30 min',
            },
        ],
    },
    {
        category: 'Skin Treatments',
        description: 'Advanced therapies to rejuvenate, resurface, and perfect your skin.',
        items: [
            {
                name: 'Laser Resurfacing',
                description: 'Stimulate collagen production and reveal smoother, more even-toned skin.',
                price: 'From $800',
                duration: '45-60 min',
            },
            {
                name: 'Chemical Peels',
                description: 'Medical-grade peels to address acne, pigmentation, and signs of aging.',
                price: 'From $150',
                duration: '30 min',
            },
            {
                name: 'Microneedling + PRP',
                description: 'Combine collagen induction with your own growth factors for remarkable skin renewal.',
                price: 'From $450',
                duration: '60 min',
            },
        ],
    },
    {
        category: 'Body Contouring',
        description: 'Non-invasive solutions to sculpt and refine your silhouette.',
        items: [
            {
                name: 'CoolSculpting',
                description: 'FDA-cleared fat reduction that permanently eliminates stubborn fat cells.',
                price: 'From $750/area',
                duration: '35-60 min',
            },
            {
                name: 'Skin Tightening',
                description: 'Radiofrequency technology to firm and tighten loose skin anywhere on the body.',
                price: 'From $500',
                duration: '45 min',
            },
        ],
    },
] as const;

export const galleryItems = [
    {
        id: 'gallery-1',
        category: 'Face',
        treatment: 'Botox + Dermal Fillers',
        description: 'Full face rejuvenation with natural results',
    },
    {
        id: 'gallery-2',
        category: 'Lips',
        treatment: 'Lip Enhancement',
        description: 'Subtle volume and shape enhancement',
    },
    {
        id: 'gallery-3',
        category: 'Skin',
        treatment: 'Laser Resurfacing',
        description: 'Texture and tone improvement',
    },
    {
        id: 'gallery-4',
        category: 'Body',
        treatment: 'CoolSculpting',
        description: 'Non-invasive fat reduction',
    },
] as const;

export const team = [
    {
        name: 'Dr. Sophia Martinez',
        title: 'Medical Director',
        credentials: 'MD, FAAD',
        bio: 'Board-certified dermatologist with 15+ years of experience in aesthetic medicine. Trained at Johns Hopkins and specializes in facial rejuvenation.',
        image: '/team-1.jpg',
    },
    {
        name: 'Nicole Chen',
        title: 'Lead Injector',
        credentials: 'PA-C, Certified Aesthetic Specialist',
        bio: 'Expert injector with a keen eye for facial balance and symmetry. Known for her gentle technique and natural-looking results.',
        image: '/team-2.jpg',
    },
    {
        name: 'Dr. James Rivera',
        title: 'Body Contouring Specialist',
        credentials: 'MD',
        bio: 'Fellowship-trained in non-invasive body sculpting with extensive experience in CoolSculpting and skin tightening technologies.',
        image: '/team-3.jpg',
    },
] as const;

export const testimonials = [
    {
        name: 'Sarah M.',
        treatment: 'Lip Enhancement',
        rating: 5,
        quote: 'I was nervous about getting lip filler, but the team made me feel so comfortable. The results are exactly what I wanted — natural and beautiful. I get compliments all the time!',
        image: '/testimonial-1.jpg',
    },
    {
        name: 'Jennifer L.',
        treatment: 'Botox + Facial Balancing',
        rating: 5,
        quote: 'Dr. Martinez has an incredible eye for detail. She addressed my concerns about looking "frozen" and delivered results that just make me look refreshed and rested.',
        image: '/testimonial-2.jpg',
    },
    {
        name: 'Michael T.',
        treatment: 'CoolSculpting',
        rating: 5,
        quote: 'Finally got rid of the stubborn belly fat that wouldn\'t budge no matter how much I worked out. The process was easy and the results speak for themselves.',
        image: '/testimonial-3.jpg',
    },
] as const;

export const faqs = [
    {
        question: 'Is there a consultation fee?',
        answer: 'Your initial consultation is complimentary. We believe in taking the time to understand your goals and create a personalized treatment plan before any commitment.',
    },
    {
        question: 'How do I know which treatment is right for me?',
        answer: 'During your consultation, our providers will assess your concerns, discuss your aesthetic goals, and recommend a tailored treatment plan. We take a conservative approach and will never recommend treatments you don\'t need.',
    },
    {
        question: 'What is the recovery time for injectables?',
        answer: 'Most injectable treatments have minimal to no downtime. You may experience slight redness or swelling for a few hours. We recommend avoiding strenuous exercise for 24 hours after treatment.',
    },
    {
        question: 'Are the treatments safe?',
        answer: 'All of our treatments are FDA-cleared and performed by licensed medical professionals with extensive training. We use only premium, authentic products from trusted manufacturers.',
    },
    {
        question: 'Do you offer payment plans?',
        answer: 'Yes! We partner with CareCredit and Cherry to offer flexible financing options. Many patients choose to spread their investment over 6-24 months with affordable monthly payments.',
    },
    {
        question: 'What should I expect during my first visit?',
        answer: 'Your first visit includes a thorough consultation where we discuss your goals, review your medical history, and create a customized treatment plan. If you\'re ready, we can often perform your first treatment the same day.',
    },
] as const;

export const bookingContent = {
    heading: 'Ready to Reveal Your Best Self?',
    subheading: 'Book your complimentary consultation today and take the first step toward the confident, radiant you.',
    features: [
        'Free consultation with our expert team',
        'Personalized treatment plan',
        'Flexible scheduling available',
        'Financing options for every budget',
    ],
} as const;
