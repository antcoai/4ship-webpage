import { Cloud, Blocks, Brain, BookOpen, Cpu } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Partners() {
  const headerAnim = useScrollAnimation({ threshold: 0.2 });
  const hexagonsAnim = useScrollAnimation({ threshold: 0.1 });
  const products = [
    {
      icon: Cloud,
      title: 'Điện toán đám mây AI',
      description: 'Dịch vụ điện toán đám mây cho AI, sử dụng phần cứng AMD, Qualcomm và Edge Computing.',
      position: 'top'
    },
    {
      icon: Brain,
      title: 'Nền tảng AI bảo mật',
      description: 'Hệ thống AI bảo mật để lưu trữ và thực thi mô hình AI, đảm bảo bảo mật, minh bạch và kiểm soát truy cập.',
      position: 'top'
    },
    {
      icon: Blocks,
      title: 'Nền tảng quản trị AI',
      description: 'Cung cấp công cụ quản lý AI, giám sát và đánh giá rủi ro trong quá trình phát triển và triển khai AI.',
      position: 'bottom'
    },
    {
      icon: BookOpen,
      title: 'Nền tảng học liên kết',
      description: 'Cho phép huấn luyện mô hình AI phân tán trên nhiều thiết bị, tập trung vào ứng dụng Quốc phòng và Y tế.',
      position: 'bottom'
    },
    {
      icon: Cpu,
      title: 'Thiết bị AI Edge Computing',
      description: 'Thiết kế và sản xuất thiết bị Edge AI sử dụng chip Qualcomm.',
      position: 'bottom'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white via-slate-50/50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a08_1px,transparent_1px),linear-gradient(to_bottom,#0f172a08_1px,transparent_1px)] bg-[size:32px_32px]">
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white to-transparent"></div>
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div ref={headerAnim.ref} className={`text-center mb-16 scroll-fade-in ${headerAnim.isVisible ? 'visible' : ''}`}>
          <div className="inline-flex items-center space-x-2 mb-6">
            <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-blue-700 rounded-full"></div>
            <span className="text-sm font-semibold text-blue-700 tracking-wider uppercase">
              Hệ sinh thái sản phẩm
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent mb-6 py-2">
            Nền tảng AI toàn diện
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-blue-600 to-transparent mx-auto"></div>
        </div>

        <div ref={hexagonsAnim.ref} className="relative max-w-6xl mx-auto">
          {/* Hexagon Grid Layout */}
          <div className="flex flex-col items-center gap-8">
            {/* Top Row - 2 cards */}
            <div className="flex justify-center gap-8 md:gap-12">
              {products.filter(p => p.position === 'top').map((product, index) => {
                const Icon = product.icon;
                return (
                  <div
                    key={index}
                    className={`relative w-72 h-72 flex-shrink-0 group transition-all duration-500 scroll-scale-up scroll-stagger-${index + 1} ${hexagonsAnim.isVisible ? 'visible' : ''}`}
                  >
                    {/* Outer glow border with spread-radius */}
                    <div
                      className="absolute inset-0"
                      style={{
                        clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                        boxShadow: '0 0 30px 15px rgba(59, 130, 246, 0.25), 0 0 50px 25px rgba(59, 130, 246, 0.15), 0 0 80px 40px rgba(59, 130, 246, 0.08)'
                      }}
                    ></div>
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                        boxShadow: '0 0 40px 20px rgba(59, 130, 246, 0.35), 0 0 70px 35px rgba(59, 130, 246, 0.25), 0 0 100px 50px rgba(59, 130, 246, 0.15)'
                      }}
                    ></div>

                    {/* Main hexagon container */}
                    <div
                      className="absolute inset-0"
                      style={{
                        clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                        filter: 'drop-shadow(0 20px 60px rgba(59, 130, 246, 0.1)) drop-shadow(0 10px 40px rgba(59, 130, 246, 0.06)) drop-shadow(0 5px 25px rgba(59, 130, 246, 0.04))'
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-2xl"
                        style={{
                          clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
                        }}
                      ></div>

                      <div className="bg-white relative group-hover:bg-transparent transition-all duration-500 h-full flex items-center justify-center">
                        <div
                          className="absolute inset-0 bg-gradient-to-br from-white via-slate-50/50 to-blue-50/30 group-hover:opacity-0 transition-opacity duration-500"
                          style={{
                            clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
                          }}
                        ></div>

                        <div className="relative z-10 flex flex-col items-center text-center px-8">
                          <div className="mb-6 group-hover:scale-110 transition-all duration-500">
                            <Icon className="w-16 h-16 text-blue-600 group-hover:text-white transition-colors duration-500" strokeWidth={2} />
                          </div>

                          <h3 className="text-lg font-bold text-slate-900 mb-3 leading-tight group-hover:text-white transition-colors duration-500">
                            {product.title}
                          </h3>

                          <p className="text-slate-600 text-xs leading-relaxed group-hover:text-white/90 transition-colors duration-500">
                            {product.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Row - 3 cards */}
            <div className="flex justify-center gap-8 md:gap-12 md:-mt-4">
              {products.filter(p => p.position === 'bottom').map((product, index) => {
                const Icon = product.icon;
                return (
                  <div
                    key={index}
                    className={`relative w-72 h-72 flex-shrink-0 group transition-all duration-500 scroll-scale-up scroll-stagger-${index + 3} ${hexagonsAnim.isVisible ? 'visible' : ''}`}
                  >
                    {/* Outer glow border with spread-radius */}
                    <div
                      className="absolute inset-0"
                      style={{
                        clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                        boxShadow: '0 0 30px 15px rgba(59, 130, 246, 0.25), 0 0 50px 25px rgba(59, 130, 246, 0.15), 0 0 80px 40px rgba(59, 130, 246, 0.08)'
                      }}
                    ></div>
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                        boxShadow: '0 0 40px 20px rgba(59, 130, 246, 0.35), 0 0 70px 35px rgba(59, 130, 246, 0.25), 0 0 100px 50px rgba(59, 130, 246, 0.15)'
                      }}
                    ></div>

                    {/* Main hexagon container */}
                    <div
                      className="absolute inset-0"
                      style={{
                        clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                        filter: 'drop-shadow(0 20px 60px rgba(59, 130, 246, 0.1)) drop-shadow(0 10px 40px rgba(59, 130, 246, 0.06)) drop-shadow(0 5px 25px rgba(59, 130, 246, 0.04))'
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-2xl"
                        style={{
                          clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
                        }}
                      ></div>

                      <div className="bg-white relative group-hover:bg-transparent transition-all duration-500 h-full flex items-center justify-center">
                        <div
                          className="absolute inset-0 bg-gradient-to-br from-white via-slate-50/50 to-blue-50/30 group-hover:opacity-0 transition-opacity duration-500"
                          style={{
                            clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
                          }}
                        ></div>

                        <div className="relative z-10 flex flex-col items-center text-center px-8">
                          <div className="mb-6 group-hover:scale-110 transition-all duration-500">
                            <Icon className="w-16 h-16 text-blue-600 group-hover:text-white transition-colors duration-500" strokeWidth={2} />
                          </div>

                          <h3 className="text-lg font-bold text-slate-900 mb-3 leading-tight group-hover:text-white transition-colors duration-500">
                            {product.title}
                          </h3>

                          <p className="text-slate-600 text-xs leading-relaxed group-hover:text-white/90 transition-colors duration-500">
                            {product.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>

      <div className="w-full mt-24 relative overflow-hidden py-8">
        <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white pointer-events-none z-10"></div>

        <div className="flex animate-scroll-seamless">
          {[
            { name: 'Google Cloud', logo: 'https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg' },
            { name: 'AWS', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' },
            { name: 'Microsoft Azure', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg' },
            { name: 'OpenAI', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg' },
            { name: 'NVIDIA', logo: 'https://www.nvidia.com/content/dam/en-zz/Solutions/about-nvidia/logo-and-brand/01-nvidia-logo-horiz-500x200-2c50-d.png' },
            { name: 'Google Cloud', logo: 'https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg' },
            { name: 'AWS', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' },
            { name: 'Microsoft Azure', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg' },
            { name: 'OpenAI', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg' },
            { name: 'NVIDIA', logo: 'https://www.nvidia.com/content/dam/en-zz/Solutions/about-nvidia/logo-and-brand/01-nvidia-logo-horiz-500x200-2c50-d.png' }
          ].map((partner, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center h-24 px-12 mx-4 flex-shrink-0 transition-all duration-300"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className={`w-auto object-contain grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer ${
                  partner.name === 'NVIDIA' ? 'h-20' : 'h-10'
                }`}
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll-seamless {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 2));
          }
        }

        .animate-scroll-seamless {
          display: flex;
          animation: scroll-seamless 40s linear infinite;
          will-change: transform;
        }

        .animate-scroll-seamless:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
