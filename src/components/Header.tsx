import { Menu, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  scrolled: boolean;
}

interface SubMenuItem {
  label: string;
  description: string;
  href: string;
}

export default function Header({ scrolled }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const solutionsMenu: SubMenuItem[] = [
    { label: 'Chatbot AI', description: 'Trợ lý ảo thông minh 24/7', href: '/chatbot-ai' },
    { label: 'Voice Bot', description: 'Giải pháp giao tiếp bằng giọng nói', href: '/voice-bot' },
    { label: 'AI Travel', description: 'Trợ lý du lịch thông minh', href: '/ai-travel' },
    { label: 'Document AI', description: 'Xử lý tài liệu tự động', href: '#document' },
    { label: 'CMS AI', description: 'Quản lý nội dung thông minh', href: '#cms' },
    { label: 'Data Digitization', description: 'Số hóa dữ liệu bằng AI', href: '#digitization' },
  ];

  const useCasesMenu: SubMenuItem[] = [
    { label: 'Ngân hàng & Tài chính', description: 'Giải pháp cho lĩnh vực tài chính', href: '#banking' },
    { label: 'Thương mại & Bán lẻ', description: 'Tối ưu trải nghiệm mua sắm', href: '#retail' },
    { label: 'Y tế & Sức khỏe', description: 'Chuyển đổi số ngành y tế', href: '#healthcare' },
    { label: 'Giáo dục', description: 'Đổi mới giáo dục với AI', href: '#education' },
  ];

  const servicesMenu: SubMenuItem[] = [
    { label: 'Tư vấn chiến lược AI', description: 'Định hướng chuyển đổi số', href: '/services/consulting' },
    { label: 'Phát triển giải pháp', description: 'Xây dựng theo yêu cầu', href: '/services/development' },
    { label: 'Tích hợp hệ thống', description: 'Kết nối với hệ thống hiện tại', href: '/services/integration' },
    { label: 'Đào tạo & Hỗ trợ', description: 'Hỗ trợ triển khai và vận hành', href: '/services/support' },
  ];

  const menuItems = [
    { label: 'Dịch vụ', hasDropdown: true, dropdownItems: servicesMenu },
    { label: 'Giải pháp', hasDropdown: true, dropdownItems: solutionsMenu },
    { label: 'Use Cases', hasDropdown: true, dropdownItems: useCasesMenu },
    { label: 'Về chúng tôi', href: '/about', hasDropdown: false },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 group relative">
            <div className="relative px-2">
              {/* Glow effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 rounded-lg blur-md opacity-15 group-hover:opacity-25 transition-opacity duration-300"></div>

              <div className="relative flex flex-col">
                <span className={`text-2xl font-black tracking-tight transition-all duration-300 group-hover:scale-105 ${
                  scrolled
                    ? 'text-transparent bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 bg-clip-text'
                    : 'text-transparent bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text'
                }`}>
                  4SHIP
                </span>

                {/* Underline animation */}
                <div className={`h-0.5 w-0 group-hover:w-full transition-all duration-500 ${
                  scrolled
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-400'
                    : 'bg-gradient-to-r from-white to-cyan-200'
                }`}></div>

              </div>
            </div>
          </Link>

          <div className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item) => (
              <div
                key={item.label}
                className="relative group/menu"
              >
                {item.hasDropdown ? (
                  <button
                    className={`px-4 py-2 rounded-lg text-[15px] font-medium transition-all flex items-center space-x-1 ${
                      scrolled
                        ? 'text-slate-700 hover:text-blue-600 hover:bg-blue-50'
                        : 'text-white/90 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronDown className="w-4 h-4 transition-transform group-hover/menu:rotate-180" />
                  </button>
                ) : (
                  <Link
                    to={item.href || '#'}
                    className={`px-4 py-2 rounded-lg text-[15px] font-medium transition-all ${
                      scrolled
                        ? 'text-slate-700 hover:text-blue-600 hover:bg-blue-50'
                        : 'text-white/90 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {item.label}
                  </Link>
                )}

                {item.hasDropdown && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-2xl shadow-2xl border border-slate-200 py-3 opacity-0 invisible group-hover/menu:opacity-100 group-hover/menu:visible transition-all duration-200">
                    {item.dropdownItems?.map((subItem) => (
                      subItem.href.startsWith('/') ? (
                        <Link
                          key={subItem.label}
                          to={subItem.href}
                          className="block px-5 py-3 hover:bg-blue-50 transition-colors group/item"
                        >
                          <div className="font-semibold text-slate-900 text-[15px] group-hover/item:text-blue-600 transition-colors">
                            {subItem.label}
                          </div>
                          <div className="text-sm text-slate-500 mt-0.5">{subItem.description}</div>
                        </Link>
                      ) : (
                        <a
                          key={subItem.label}
                          href={subItem.href}
                          className="block px-5 py-3 hover:bg-blue-50 transition-colors group/item"
                        >
                          <div className="font-semibold text-slate-900 text-[15px] group-hover/item:text-blue-600 transition-colors">
                            {subItem.label}
                          </div>
                          <div className="text-sm text-slate-500 mt-0.5">{subItem.description}</div>
                        </a>
                      )
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-3">
            <a
              href="#contact"
              className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg text-[15px] font-semibold hover:shadow-lg transition-all"
            >
              Liên hệ tư vấn
            </a>
          </div>

          <button
            className={`lg:hidden ${scrolled ? 'text-slate-900' : 'text-white'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 bg-white rounded-2xl shadow-2xl animate-slide-down">
            {menuItems.map((item) => (
              <div key={item.label}>
                {item.hasDropdown ? (
                  <div>
                    <button
                      className="w-full px-5 py-3 text-left text-slate-900 font-medium hover:bg-blue-50 transition-colors flex items-center justify-between"
                      onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                    >
                      <span>{item.label}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                    </button>
                    {activeDropdown === item.label && (
                      <div className="bg-slate-50">
                        {item.dropdownItems?.map((subItem) => (
                          subItem.href.startsWith('/') ? (
                            <Link
                              key={subItem.label}
                              to={subItem.href}
                              className="block px-8 py-2.5 text-sm text-slate-700 hover:text-blue-600"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {subItem.label}
                            </Link>
                          ) : (
                            <a
                              key={subItem.label}
                              href={subItem.href}
                              className="block px-8 py-2.5 text-sm text-slate-700 hover:text-blue-600"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {subItem.label}
                            </a>
                          )
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href || '#'}
                    className="block px-5 py-3 text-slate-900 font-medium hover:bg-blue-50 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <a
              href="#contact"
              className="block mx-4 mt-3 px-4 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-center rounded-lg font-semibold hover:shadow-lg transition-all"
              onClick={() => setMobileMenuOpen(false)}
            >
              Liên hệ tư vấn
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
