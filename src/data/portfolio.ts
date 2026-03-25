import type { Profile, Project , SkillCategories } from '../types/index'

export const PROFILE: Profile = {
  name: "Panithan Akepanthanpong",
  role: "Full Stack Developer & Video Editor",
  about: "ผสมผสานตรรกะที่ซับซ้อนเข้ากับภาพลักษณ์ที่สร้างสรรค์ ผมสร้างเว็บแอปพลิเคชันที่แข็งแกร่งและเล่าเรื่องราวที่น่าสนใจผ่านการตัดต่อวิดีโอ",
  email: "hello@panithan.com",
  socials: {
    github: "https://github.com/Genblem",
    linkedin: "https://www.linkedin.com/in/panithan1410/",
    youtube: "https://www.youtube.com/@Genblem"
  }
};

export const SKILLCATEGORIES: SkillCategories[] = [
  {
    title: "Development Stack",
    icon: "Code",
    skills: ["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Tailwind CSS", "PostgreSQL"]
  },
  {
    title: "Automated Testing",
    icon: "TestTube",
    skills: ["Cypress.io", "Playwright", "Jest", "API Testing", "E2E Testing", "CI/CD Integration"]
  },
  {
    title: "Creative & Tools",
    icon: "Palette",
    skills: ["Premiere Pro", "After Effects", "DaVinci Resolve", "Git", "Docker"]
  },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Automation Test Mock-up",
    description: "แดชบอร์ดที่ครอบคลุมสำหรับการจัดการผลิตภัณฑ์และวิเคราะห์ข้อมูลพร้อมการแสดงผลแบบเรียลไทม์",
    category: "Dev",
    tags: ["Next.js", "Tailwind", "PostgreSQL"],
    link: "#"
  },
  {
    id: 2,
    title: "Crypto Tracker",
    description: "แอปพลิเคชันติดตามคริปโตเคอเรนซีแบบเรียลไทม์โดยใช้ Public APIs และ WebSocket",
    category: "Dev",
    tags: ["React", "WebSocket", "Chart.js"],
    link: "#"
  },
  {
    id: 3,
    title: "Social Network API",
    description: "โครงสร้างพื้นฐาน Backend สำหรับแพลตฟอร์มโซเชียลมีเดียที่รองรับการพิสูจน์ตัวตนและการโพสต์",
    category: "Dev",
    tags: ["Node.js", "Express", "MongoDB"],
    link: "#"
  },
  {
    id: 4,
    title: "Cinematic Travel Vlog",
    description: "วิดีโอท่องเที่ยวที่ดำเนินเรื่องอย่างรวดเร็ว พร้อมการเปลี่ยนฉากที่ซับซ้อนและการออกแบบเสียง",
    category: "Editing",
    tags: ["Premiere Pro", "Sound Design"],
    link: "#"
  },
  {
    id: 5,
    title: "Tech Product Commercial",
    description: "งานตัดต่อโฆษณาสินค้าเทคโนโลยีที่ดูสะอาดตาและทันสมัยสำหรับการเปิดตัวผลิตภัณฑ์",
    category: "Editing",
    tags: ["After Effects", "Motion Graphics"],
    link: "#"
  },
  {
    id: 6,
    title: "Music Video VFX",
    description: "วิชวลเอฟเฟกต์คอมโพสิตและการปรับแต่งสีสำหรับมิวสิกวิดีโอเพลงอินดี้",
    category: "Editing",
    tags: ["DaVinci Resolve", "VFX"],
    link: "#"
  },
  {
    id: 7,
    title: "Music Video VFX",
    description: "วิชวลเอฟเฟกต์คอมโพสิตและการปรับแต่งสีสำหรับมิวสิกวิดีโอเพลงอินดี้",
    category: "Editing",
    tags: ["DaVinci Resolve", "VFX"],
    link: "#"
  }
];
