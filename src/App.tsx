import { useState } from "react";
import { Menu, X, Terminal } from "lucide-react";

// Import Data
import { PROFILE, PROJECTS } from "./data/portfolio";

// Import Components
import { Sidebar } from "./components/SideBar";
import { FilterBar } from "./components/FilterBar";
import { ProjectCard } from "./components/ProjectCard";
import { ContactFooter } from "./components/ContactFooter";
import { BackgroundPattern } from "./components/BackgroundPattern";

export default function App() {
  // ใส่ Type ให้ State
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const filteredProjects = PROJECTS.filter((project) =>
    activeCategory === "All" ? true : project.category === activeCategory,
  );

  return (
    <div className="min-h-screen text-gray-300 font-sans relative overflow-x-hidden selection:bg-green-500/30 selection:text-green-200">
      <BackgroundPattern />

      <div className="flex flex-col md:flex-row min-h-screen relative z-10">
        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden fixed top-4 right-4 z-[60] bg-black/80 p-2 rounded-md border border-green-500/50 text-green-500"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <Sidebar
          profile={PROFILE}
          mobileMenuOpen={isMobileMenuOpen}
          setMobileMenuOpen={setIsMobileMenuOpen}
        />

        <main className="flex-1 p-6 md:p-12 lg:p-16 w-full max-w-7xl mx-auto">
          {/* Mobile Profile Header */}
          <section className="md:hidden mb-12 mt-12">
            <h2 className="text-3xl font-bold text-white mb-2">
              {PROFILE.name}
            </h2>
            <p className="text-green-500 flex items-center gap-2 font-mono">
              <Terminal size={14} /> {PROFILE.role}
            </p>
          </section>

          <FilterBar
            categories={["All", "Dev", "Editing"]}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />

          <div
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 min-h-[400px]"
            id="projects"
          >
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          

          <ContactFooter email={PROFILE.email} />
        </main>
      </div>
    </div>
  );
}
