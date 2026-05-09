import { CONTACT_INFO, SOCIAL_LINKS } from "./constants";

const SITE_URL = "https://www.isjumti.lv";

export const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    "@id": `${SITE_URL}/#localbusiness`,
    name: "IS JUMTI",
    legalName: CONTACT_INFO.company.legalName,
    url: SITE_URL,
    logo: `${SITE_URL}/icon.png`,
    image: `${SITE_URL}/icon.png`,
    telephone: CONTACT_INFO.phone,
    email: CONTACT_INFO.email,
    description:
        "Jumtu darbi visā Latvijā – jumtu montāža, remonts, renovācija, siltināšana un noteksistēmu izbūve. 15 gadu pieredze.",
    address: {
        "@type": "PostalAddress",
        addressLocality: CONTACT_INFO.base,
        addressCountry: "LV",
    },
    areaServed: [
        { "@type": "Country", name: "Latvija" },
        ...CONTACT_INFO.serviceCities.map((name) => ({ "@type": "City", name })),
    ],
    taxID: CONTACT_INFO.company.regNo,
    priceRange: "€€",
    foundingDate: "2010",
    openingHoursSpecification: [
        {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
            ],
            opens: "00:00",
            closes: "23:59",
        },
    ],
    sameAs: [
        SOCIAL_LINKS.facebook,
        SOCIAL_LINKS.instagram,
        SOCIAL_LINKS.tiktok,
        SOCIAL_LINKS.youtube,
    ],
    knowsAbout: [
        "Jumtu montāža",
        "Jumtu remonts",
        "Jumtu renovācija",
        "Metāla jumti",
        "Dakstiņu jumti",
        "Bitumena šindeļi",
        "Plakano jumtu hidroizolācija",
        "Bēniņu siltināšana",
        "Noteksistēmu montāža",
        "Skārdnieka darbi",
    ],
};

export function faqPageSchema(items: { question: string; answer: string }[]) {
    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: items.map(({ question, answer }) => ({
            "@type": "Question",
            name: question,
            acceptedAnswer: { "@type": "Answer", text: answer },
        })),
    };
}

export function jsonLd(schema: object) {
    return { __html: JSON.stringify(schema) };
}
