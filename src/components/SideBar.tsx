import React from "react";
import { Globe, Terminal } from "lucide-react";
import type { Profile } from "../types";

interface SocialIconProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const SocialIcon = ({ href, icon, label }: SocialIconProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="w-10 h-10 flex items-center justify-center rounded bg-gray-900 border border-gray-700 text-gray-400 hover:text-white hover:border-green-500 hover:bg-green-900/20 transition-all duration-300 transform hover:scale-110"
  >
    {icon}
  </a>
);

interface SidebarProps {
  profile: Profile;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar = ({
  profile,
  mobileMenuOpen,
  setMobileMenuOpen,
}: SidebarProps) => (
  <aside
    className={`
    fixed md:sticky top-0 left-0 h-screen w-full md:w-80
    bg-[#0f0f0f]/95 md:bg-[#0f0f0f]/50 backdrop-blur-md
    border-r border-green-900/30
    flex flex-col justify-between p-8 transition-transform duration-300 z-50
    ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
  `}
  >
    <div className="space-y-6">
      <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-green-500 to-purple-600 p-[2px]">
        <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden">
          <span className="text-2xl font-bold text-white">PA</span>
        </div>
      </div>
      <div>
        <h1 className="text-2xl font-bold text-white tracking-tighter uppercase mb-2">
          {profile.name}
        </h1>
        <div className="flex items-center gap-2 text-green-500 text-sm font-medium">
          <Terminal size={14} />
          <span>{profile.role}</span>
        </div>
      </div>
      <p className="text-sm text-gray-400 leading-relaxed font-light">
        {profile.about}
      </p>
      <nav className="space-y-4 pt-8 border-t border-gray-800 font-mono text-sm">
        {["Projects", "Skills", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3 text-gray-400 hover:text-green-400 transition-colors group"
          >
            <span className="w-1.5 h-1.5 bg-gray-600 rounded-full group-hover:bg-green-500 transition-colors"></span>
            {item}
          </a>
        ))}
      </nav>
    </div>
    <div className="pt-8 border-t border-gray-800">
      <div className="flex gap-4">
        <SocialIcon
          href={profile.socials.github}
          icon={<Globe size={18} />}
          label="GitHub"
        />
        <SocialIcon
          href={profile.socials.linkedin}
          icon={<Globe size={18} />}
          label="LinkedIn"
        />
        <SocialIcon
          href={profile.socials.youtube}
          icon={<Globe size={18} />}
          label="YouTube"
        />
      </div>
    </div>
  </aside>
);

export { Sidebar };
