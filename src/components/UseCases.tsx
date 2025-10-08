import { Building2, ShoppingBag, HeartPulse, GraduationCap, Phone, Shield, Sparkles, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function UseCases() {
  const headerAnim = useScrollAnimation({ threshold: 0.2 });
  const cardsAnim = useScrollAnimation({ threshold: 0.1 });
  const ctaAnim = useScrollAnimation({ threshold: 0.2 });
  const useCases = [
    {
      icon: Building2,
      industry: 'Ngân hàng & Tài chính',
      cases: [
        'Chatbot hỗ trợ khách hàng 24/7',
        'Xác thực giọng nói sinh trắc học',
        'Số hóa hồ sơ vay tự động',
        'Phân tích rủi ro và phát hiện gian lận',
      ],
      stat: '95%',
      statLabel: 'Giảm thời gian xử lý',
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-50 to-cyan-50',
    },
    {
      icon: ShoppingBag,
      industry: 'Thương mại & Bán lẻ',
      cases: [
        'Trợ lý mua sắm thông minh',
        'Phân tích hành vi khách hàng',
        'Tự động hóa chăm sóc khách hàng',
        'Dự đoán xu hướng và tồn kho',
      ],
      stat: '3x',
      statLabel: 'Tăng tỷ lệ chuyển đổi',
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-50 to-cyan-50',
    },
    {
      icon: HeartPulse,
      industry: 'Y tế & Sức khỏe',
      cases: [
        'Số hóa hồ sơ bệnh án',
        'Trợ lý đặt lịch khám tự động',
        'Phân tích hình ảnh y tế',
        'Tư vấn sức khỏe sơ bộ',
      ],
      stat: '80%',
      statLabel: 'Giảm tải hành chính',
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-50 to-cyan-50',
    },
    {
      icon: GraduationCap,
      industry: 'Giáo dục',
      cases: [
        'Trợ giảng ảo thông minh',
        'Chấm bài tự động',
        'Gợi ý học tập cá nhân hóa',
        'Quản lý tài liệu số',
      ],
      stat: '60%',
      statLabel: 'Tăng hiệu quả học tập',
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-50 to-cyan-50',
    },
    {
      icon: Phone,
      industry: 'Viễn thông',
      cases: [
        'Voice bot chăm sóc khách hàng',
        'Xử lý khiếu nại tự động',
        'Phân tích cuộc gọi',
        'Tối ưu trải nghiệm khách hàng',
      ],
      stat: '70%',
      statLabel: 'Giảm chi phí vận hành',
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-50 to-cyan-50',
    },
    {
      icon: Shield,
      industry: 'Bảo hiểm',
      cases: [
        'Đánh giá hồ sơ bồi thường tự động',
        'Chatbot tư vấn sản phẩm',
        'Số hóa tài liệu hợp đồng',
        'Phát hiện gian lận bảo hiểm',
      ],
      stat: '5x',
      statLabel: 'Tăng tốc xử lý hồ sơ',
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-50 to-cyan-50',
    },
  ];

  return (
    <section id="usecases" className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-30">
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div ref={headerAnim.ref} className={`max-w-4xl mx-auto text-center mb-16 md:mb-20 scroll-fade-in ${headerAnim.isVisible ? 'visible' : ''}`}>
          <div className="inline-flex items-center space-x-2 px-4 md:px-5 py-2 md:py-2.5 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200/50 rounded-full mb-6 md:mb-8">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-xs md:text-sm font-bold text-blue-700 tracking-wider">ỨNG DỤNG THỰC TẾ</span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 md:mb-8 leading-tight px-4">
            Ứng dụng thực tiễn
            <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mt-2">
              tại các ngành nghề
            </span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Giải pháp AI triển khai thành công tại nhiều lĩnh vực, mang lại hiệu quả vượt trội và tạo giá trị bền vững
          </p>
        </div>

        <div ref={cardsAnim.ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-20">
          {useCases.map((useCase, index) => (
            <div
              key={useCase.industry}
              className={`group relative bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 scroll-scale-up scroll-stagger-${index + 1} ${cardsAnim.isVisible ? 'visible' : ''}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${useCase.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

              <div className="relative p-6 md:p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="relative group-hover:scale-110 transition-transform duration-500">
                    <useCase.icon
                      className={`w-12 h-12 md:w-14 md:h-14 group-hover:rotate-6 transition-all duration-500`}
                      strokeWidth={1.5}
                      style={{
                        stroke: `url(#gradient-blue-cyan)`,
                      }}
                    />
                    <svg width="0" height="0" style={{ position: 'absolute' }}>
                      <defs>
                        <linearGradient id="gradient-blue-cyan" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" style={{ stopColor: '#3b82f6' }} />
                          <stop offset="100%" style={{ stopColor: '#06b6d4' }} />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>

                  <div className="flex items-center space-x-1 text-xs font-bold text-slate-400 group-hover:text-blue-600 transition-colors">
                    <span>0{index + 1}</span>
                  </div>
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-6 group-hover:text-blue-600 transition-colors">
                  {useCase.industry}
                </h3>

                <div className="space-y-3 mb-8">
                  {useCase.cases.map((case_item, idx) => (
                    <div
                      key={case_item}
                      className="flex items-start group/item opacity-0 animate-fade-in"
                      style={{ animationDelay: `${(index * 0.1) + (idx * 0.05)}s`, animationFillMode: 'forwards' }}
                    >
                      <div className="flex-shrink-0 w-5 h-5 mt-0.5 mr-3 rounded-full border-2 border-blue-500 flex items-center justify-center group-hover/item:scale-110 transition-all duration-300 group-hover/item:bg-gradient-to-br group-hover/item:from-blue-500 group-hover/item:to-cyan-500 group-hover/item:border-transparent">
                        <svg className="w-3 h-3 text-blue-500 group-hover/item:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm md:text-base text-slate-600 leading-relaxed group-hover:text-slate-800 transition-colors">
                        {case_item}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="relative pt-6 border-t border-slate-200/50">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${useCase.gradient} bg-clip-text text-transparent`}>
                        {useCase.stat}
                      </div>
                      <div className="text-xs md:text-sm text-slate-500 mt-2 font-semibold">
                        {useCase.statLabel}
                      </div>
                    </div>

                    <button className="group/btn flex items-center justify-center w-12 h-12 rounded-xl border-2 border-slate-200 bg-white hover:border-blue-500 hover:bg-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20">
                      <ArrowRight className="w-5 h-5 text-slate-400 group-hover/btn:text-white transition-colors" strokeWidth={2.5} />
                    </button>
                  </div>
                </div>

                <div className={`absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br ${useCase.gradient} rounded-full opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-700`}></div>
              </div>
            </div>
          ))}
        </div>

        <div ref={ctaAnim.ref} className={`relative max-w-6xl mx-auto scroll-scale-up ${ctaAnim.isVisible ? 'visible' : ''}`}>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 rounded-3xl blur-2xl opacity-20"></div>

          <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-grid-white/5"></div>

            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>

            <div className="relative p-8 md:p-12 lg:p-16 text-center">
              <div className="max-w-3xl mx-auto">
                <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-6">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs font-bold text-cyan-400 tracking-wider">TƯ VẤN RIÊNG</span>
                </div>

                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6 leading-tight">
                  Ngành nghề của bạn chưa có trong danh sách?
                </h3>

                <p className="text-blue-100 text-base md:text-lg mb-8 md:mb-10 leading-relaxed">
                  Chúng tôi sẵn sàng tư vấn và phát triển giải pháp AI tùy chỉnh, phù hợp hoàn toàn với nhu cầu và đặc thù riêng của doanh nghiệp bạn
                </p>

                <a
                  href="#contact"
                  className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-slate-900 rounded-xl text-base font-bold hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 group"
                >
                  <span>Liên hệ tư vấn ngay</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
