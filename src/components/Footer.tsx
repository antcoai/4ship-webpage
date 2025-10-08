import { Facebook, Linkedin, Youtube, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: {
      title: 'Công ty',
      links: [
        { label: 'Về chúng tôi', href: '#about' },
        { label: 'Giải pháp', href: '#solutions' },
        { label: 'Use Cases', href: '#usecases' },
        { label: 'Liên hệ', href: '#contact' },
      ],
    },
    solutions: {
      title: 'Giải pháp',
      links: [
        { label: 'Chatbot AI', href: '#solutions' },
        { label: 'Voice Bot', href: '#solutions' },
        { label: 'Document AI', href: '#solutions' },
        { label: 'CMS AI', href: '#solutions' },
      ],
    },
    support: {
      title: 'Hỗ trợ',
      links: [
        { label: 'Tài liệu', href: '#' },
        { label: 'Câu hỏi thường gặp', href: '#' },
        { label: 'Điều khoản sử dụng', href: '#' },
        { label: 'Chính sách bảo mật', href: '#' },
      ],
    },
  };

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
            
              <span className="text-2xl font-bold text-white">4SHIP</span>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Công ty công nghệ AI hàng đầu Việt Nam, chuyên cung cấp các giải pháp AI toàn diện
              giúp doanh nghiệp chuyển đổi số và nâng cao hiệu quả vận hành.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-500 transition-all"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-500 transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-500 transition-all"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-500 transition-all"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([key, section]) => (
            <div key={key}>
              <h3 className="text-white font-bold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm mb-4 md:mb-0">
              © {currentYear} 4SHIP. All rights reserved.
            </p>
            <p className="text-slate-400 text-sm">
              Made with passion in Vietnam
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
