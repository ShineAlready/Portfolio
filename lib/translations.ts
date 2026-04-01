export const translations = {
  en: {
    // Nav
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      experience: "Experience",
      certifications: "Certifications",
      contact: "Contact",
    },
    // Hero
    hero: {
      greeting: "Hello, I'm",
      name: "Abdulrahman Al-Shahrani",
      title: "AI & Data-Driven Systems Specialist",
      subtitle:
        "I build intelligent systems at the intersection of AI, data, and real-world impact. Passionate about IoT solutions, machine learning, and creating technology that solves meaningful problems.",
      cta: "View My Work",
      cv: "Download CV",
    },
    // About
    about: {
      sectionLabel: "About Me",
      heading: "Building Intelligent Systems",
      p1: "I'm a Computer Information Systems student at Imam Abdulrahman Bin Faisal University, specializing in data-driven systems, AI-enabled solutions, and smart technology integration. My GPA of 4.00 reflects my commitment to technical excellence.",
      p2: "I've built real-world projects in IoT, automation, and machine learning — from a smart wearable child safety system to an intelligent Gmail automation pipeline. I bring technical leadership and a systems-thinking mindset to every challenge.",
      p3: "When I'm not building, you'll find me exploring the latest AI research, participating in competitions like the Consulting Championship 2025, or deepening my expertise through programs like the KAUST Academy AI Program.",
      skills: "Core Skills",
    },
    // Projects
    projects: {
      sectionLabel: "Work",
      heading: "Selected Projects",
      viewProject: "View Project",
      viewCode: "Code",
    },
    // Experience
    experience: {
      sectionLabel: "Background",
      heading: "Education & Achievements",
    },
    // Certifications
    certifications: {
      sectionLabel: "Credentials",
      heading: "Certifications",
      issued: "Issued",
    },
    // Contact
    contact: {
      sectionLabel: "Get In Touch",
      heading: "Let's Work Together",
      subtitle:
        "I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.",
      emailLabel: "Email Me",
      linkedinLabel: "LinkedIn",
      githubLabel: "GitHub",
    },
    // Footer
    footer: {
      built: "Built with",
      and: "and",
      rights: "All rights reserved.",
    },
  },
  ar: {
    nav: {
      home: "الرئيسية",
      about: "عني",
      projects: "المشاريع",
      experience: "الخبرة",
      certifications: "الشهادات",
      contact: "تواصل",
    },
    hero: {
      greeting: "مرحباً، أنا",
      name: "عبدالرحمن الشهراني",
      title: "متخصص في الأنظمة الذكية والمدفوعة بالبيانات",
      subtitle:
        "أبني أنظمة ذكية عند تقاطع الذكاء الاصطناعي والبيانات والأثر الحقيقي. شغوف بحلول إنترنت الأشياء والتعلم الآلي وصنع تقنيات تحل مشكلات حقيقية.",
      cta: "اعرض أعمالي",
      cv: "تحميل السيرة الذاتية",
    },
    about: {
      sectionLabel: "عني",
      heading: "بناء أنظمة ذكية",
      p1: "أنا طالب نظم معلومات الحاسب في جامعة الإمام عبدالرحمن بن فيصل، أتخصص في الأنظمة المدفوعة بالبيانات والحلول القائمة على الذكاء الاصطناعي وتكامل التقنيات الذكية. معدلي التراكمي 4.00 يعكس التزامي بالتميز التقني.",
      p2: "بنيت مشاريع حقيقية في إنترنت الأشياء والأتمتة والتعلم الآلي — من نظام ذكي لتتبع سلامة الأطفال إلى خط أتمتة Gmail المتكامل. أجمع بين القيادة التقنية وعقلية التفكير الشامل في كل تحدٍّ.",
      p3: "خارج عالم البرمجة، تجدني أستكشف أحدث أبحاث الذكاء الاصطناعي وأشارك في مسابقات كبطولة الاستشارات 2025 وأعمّق خبراتي من خلال برامج كبرنامج أكاديمية كاوست للذكاء الاصطناعي.",
      skills: "المهارات الأساسية",
    },
    projects: {
      sectionLabel: "الأعمال",
      heading: "مشاريع مختارة",
      viewProject: "عرض المشروع",
      viewCode: "الكود",
    },
    experience: {
      sectionLabel: "الخلفية",
      heading: "التعليم والإنجازات",
    },
    certifications: {
      sectionLabel: "الاعتمادات",
      heading: "الشهادات",
      issued: "تاريخ الإصدار",
    },
    contact: {
      sectionLabel: "تواصل",
      heading: "لنعمل معاً",
      subtitle:
        "أنا دائماً منفتح لمناقشة مشاريع جديدة وأفكار إبداعية وفرص للمشاركة في رؤيتك.",
      emailLabel: "راسلني",
      linkedinLabel: "لينكد إن",
      githubLabel: "غيت هاب",
    },
    footer: {
      built: "صُنع بـ",
      and: "و",
      rights: "جميع الحقوق محفوظة.",
    },
  },
};
 
export type Lang = "en" | "ar";
export type Translations = typeof translations.en;