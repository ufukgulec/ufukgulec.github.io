export const bio = [
    "Yazılım Geliştirme Uzmanı — Bilgisayar mühendisi olarak kurumsal iş süreçleri yönetimi, süreç otomasyonu ve dijital dönüşüm projelerinde aktif rol alıyorum.",
    "Bimser eBA ve Bimser Synergy platformları üzerinde geliştirme, entegrasyon, süreç iyileştirme ve kurumsal çözüm projeleri yürütüyor; C#, .NET Core, ASP.NET Core, MSSQL ve Oracle teknolojileriyle ölçeklenebilir altyapılar kuruyorum."
];

export const skills = [
    // Diller ve Frameworkler
    "C#",
    ".NET Core",
    ".NET Framework",
    "ASP.NET Core",
    "Blazor",
    "WPF",
    "JavaScript",
    "TypeScript",
    "HTML/CSS",

    // BPM ve Kurumsal Platformlar (Eksik olanlar bunlardı)
    "Bimser Synergy",
    "Bimser eBA",
    "BPM",
    "İş Akış Yönetimi",
    "Form Tasarımı",
    "Süreç Otomasyonu",

    // Veritabanı ve Servisler
    "MSSQL",
    "Oracle",
    "T-SQL",
    "Entity Framework",
    "REST API",
    "XML / UBL",
    "WebSockets",

    // Mimari ve Altyapı
    "Clean Architecture",
    "CQRS",
    "MediatR",
    "Docker",
    "Ubuntu VPS",
    "Nginx Proxy Manager"
];

export const projects = [
    {
        title: "Feysoft Server",
        description:
            "Enterprise backend ecosystem incorporating Microsoft Graph API integrations, ticket messaging networks, and custom SMTP email services for automated corporate communications.",
        tags: ["C#", ".NET Core", "MSSQL", "Microsoft Graph API", "SMTP"],
        repo: "https://github.com/feysoft",
        demo: "https://github.com/feysoft",
        icon: "fa-solid fa-server",
    },
    {
        title: "Feysoft Terminal",
        description:
            "A desktop WPF application designed to connect to cloud servers, interface with database containers, and safely download backup files via secure shell and file transfer protocols.",
        tags: ["C#", "WPF", "SSH", "SFTP", "Docker"],
        repo: "https://github.com/feysoft",
        demo: "https://github.com/feysoft",
        icon: "fa-solid fa-terminal",
    },
];

export const experience = [
    {
        title: "Feysoft Yazılım Danışmanlık A.Ş.",
        duration: "2024 – Present",
        subtitle: "Yazılım Geliştirme Uzmanı",
        details: [
            "Kurumsal iş süreçleri yönetimi (BPM), süreç otomasyonu ve dijital dönüşüm projelerinde yazılım geliştirme ve süreç danışmanlığı yürütüyorum.",
            "Bimser eBA ve Bimser Synergy platformları üzerinde iş akışları, elektronik belge süreçleri, form tasarımları ve modül entegrasyonları geliştiriyorum.",
            "C#, .NET Core, MSSQL ve T-SQL kullanarak Clean Architecture mimarisiyle performanslı, ölçeklenebilir ve sürdürülebilir kurumsal çözümler üretiyorum.",
        ],
        tags: ["Bimser eBA", "Bimser Synergy", ".NET Core", "C#", "MSSQL", "T-SQL", "TypeScript"],
        icon: "briefcase",
    },
    {
        title: "Auracure",
        duration: "2022 – Dönemsel",
        subtitle: "Yazılım Geliştirme Uzmanı",
        details: [
            "Şirketin global e-ticaret ve tanıtım operasyonları kapsamında Wix altyapısı üzerinde auracure.us.com web sitesinin kurulum ve geliştirme süreçlerini yürüttüm.",
            "Kullanıcı deneyimini artıran arayüz düzenlemeleri ve özel entegrasyonlar gerçekleştirdim.",
        ],
        tags: ["HTML", "CSS", "JavaScript", "Wix"],
        icon: "briefcase",
    },
    {
        title: "Kabi Partners",
        duration: "2022 – Stajyer",
        subtitle: "Yazılım Geliştirme Uzmanı",
        details: [
            "yuvanikur.com, dugunbuketi.com ve dugunyardimcisi.com gibi yüksek trafikli platformlarda WordPress tabanlı çalışmalar gerçekleştirdim, özel eklenti geliştirme deneyimleri edindim.",
            "Figma üzerinden hazırlanan tasarımları Elementor, PHP, CSS ve JavaScript kullanarak piksel hassasiyetinde web sayfalarına dönüştürdüm.",
            "Şirket projelerinin arayüz modernizasyonunu sağlayarak kullanıcı etkileşimini optimize ettim.",
        ],
        tags: ["PHP", "WordPress", "JavaScript", "HTML/CSS", "Elementor", "Figma", "UI/UX"],
        icon: "briefcase",
    }
];

export const education = [
    {
        title: "Bilgisayar Mühendisliği",
        duration: "Lisans",
        subtitle: "Tokat Gaziosmanpaşa Üniversitesi",
        details: [
            "Yazılım mühendisliği prensipleri, veri yapıları, algoritmalar, veritabanı yönetim sistemleri ve nesne yönelimli programlama alanlarında akademik eğitim aldım.",
        ],
        tags: ["Bilgisayar Mühendisliği", "Yazılım Geliştirme", "Algoritmalar", "Veritabanı"],
        icon: "graduation-cap",
    },
];

export const adventures = [
    {
        title: "Denizcilik & Hobi",
        icon: "fa-solid fa-water",
        accent: "blue",
        items: [
            {
                name: "İstanbul Boğazı İstavrit Avı",
                state: "İstanbul",
                height: "Deniz Seviyesi",
                duration: "Sezonluk",
                level: "Keyifli",
            },
            {
                name: "Amatör Deniz Balıkçılığı",
                state: "Marmara",
                height: "Sahil / Tekne",
                duration: "Sürekli",
                level: "Hobisi",
            },
        ],
    },
];

export const contact = [
    {
        label: "orhanufukgulec@gmail.com",
        link: "mailto:orhanufukgulec@gmail.com",
        icon: "fa-solid fa-envelope",
    },
    {
        label: "LinkedIn",
        link: "https://www.linkedin.com/in/ufukgulec",
        icon: "fa-brands fa-linkedin",
    },
    {
        label: "GitHub",
        link: "https://github.com/ufukgulec",
        icon: "fa-brands fa-github",
    },
];

export const footer = [
    {
        label: "copyright-text",
        data: ["Orhan Ufuk Güleç · Yazılım Geliştirme Uzmanı"],
    },
];