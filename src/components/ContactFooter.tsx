import { Mail } from 'lucide-react';

interface ContactFooterProps {
  email: string;
}

const ContactFooter = ({ email }: ContactFooterProps) => (
  <footer id="contact" className="mt-24 pt-12 border-t border-gray-800">
    <div className="bg-[#111] rounded-2xl p-8 md:p-12 border border-gray-800 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-16 bg-green-600/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
      <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <h3 className="text-2xl font-bold text-white mb-2">Ready to collaborate?</h3>
          <p className="text-gray-400 max-w-md">ขณะนี้ผมเปิดรับโอกาสใหม่ๆ หากคุณกำลังมองหานักพัฒนาที่เข้าใจทั้งโค้ดและความคิดสร้างสรรค์</p>
        </div>
        <a href={`mailto:${email}`} className="group flex items-center gap-3 bg-green-600 text-black font-bold px-6 py-3 rounded hover:bg-green-500 transition-all shadow-[0_0_20px_rgba(22,197,94,0.3)]">
          <Mail size={18} />
          <span>Get In Touch</span>
        </a>
      </div>
    </div>
    <div className="mt-12 text-center md:text-left text-xs text-gray-600 font-mono uppercase tracking-widest">
      <p>© {new Date().getFullYear()} Panithan Akepanthanpong. Built with Vite, React & Tailwind.</p>
    </div>
  </footer>
);

export { ContactFooter };