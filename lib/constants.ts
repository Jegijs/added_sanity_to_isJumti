export const NAVIGATION_LINKS = [
    { name: "Sākums", href: "/" },
    { name: "Pakalpojumi", href: "/pakalpojumi" },
    { name: "Galerija", href: "/galerija" },
    { name: "Izmaksas", href: "/izmaksas" },
    { name: "Padomi", href: "/padomi" },
    { name: "Kontakti", href: "/kontakti" },
];

export const CONTACT_INFO = {
    phone: "+371 20555606",
    phoneDisplay: "+371 20555606",
    email: "info@isjumti.lv",
    whatsapp: "https://wa.me/37120555606",

    // Kept for backwards-compat with existing UI; prefer base / serviceArea below.
    address: "Jelgava · Strādājam visā Latvijā",

    // Base + service areas
    base: "Jelgava",
    serviceArea: "Strādājam visā Latvijā",
    serviceCities: ["Jelgava", "Rīga", "Pierīga", "Liepāja", "Daugavpils", "Ventspils"],

    // Legal
    company: {
        legalName: 'SIA "Baltijas jumtu būve un renovācija"',
        regNo: "40203426065",
    },
};

export const SOCIAL_LINKS = {
    tiktok: "https://www.tiktok.com/@isjumti",
    facebook: "https://www.facebook.com/isjumti",
    instagram: "https://www.instagram.com/isjumti",
    youtube: "https://www.youtube.com/@isjumti",
};
