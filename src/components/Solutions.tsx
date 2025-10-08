import { useState, useEffect } from 'react';
import { MessageSquare, Mic, FileText, Database, Brain, Workflow, Check, TrendingUp, Plane } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Solutions() {
  const [activeSolution, setActiveSolution] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [animatedValues, setAnimatedValues] = useState<{ [key: number]: number }>({});

  const headerAnim = useScrollAnimation({ threshold: 0.2 });
  const listAnim = useScrollAnimation({ threshold: 0.15 });
  const detailAnim = useScrollAnimation({ threshold: 0.15 });

  const solutions = [
    {
      icon: MessageSquare,
      title: 'Chatbot AI',
      shortDesc: 'Trợ lý ảo thông minh 24/7',
      description: 'Trợ lý ảo thông minh tự động xử lý yêu cầu khách hàng 24/7 với độ chính xác cao. Hệ thống có khả năng học hỏi liên tục từ mỗi cuộc hội thoại để cải thiện chất lượng phục vụ.',
      features: [
        'Xử lý ngôn ngữ tự nhiên tiên tiến',
        'Tích hợp đa nền tảng (Web, App, Social)',
        'Học máy liên tục từ dữ liệu',
        'Hỗ trợ đa ngôn ngữ',
        'Phân tích cảm xúc khách hàng',
      ],
      benefits: [
        { label: 'Giảm chi phí vận hành', value: '70%' },
        { label: 'Tăng hài lòng khách hàng', value: '85%' },
        { label: 'Xử lý đồng thời', value: '1000+' },
      ],
      color: 'from-blue-500 to-blue-600',
      techSpecs: [
        { label: 'Response Time', value: '<100ms', icon: 'speed' },
        { label: 'Accuracy Rate', value: '95%', icon: 'accuracy' },
        { label: 'Uptime', value: '99.9%', icon: 'uptime' },
      ],
    },
    {
      icon: Mic,
      title: 'Voice Bot',
      shortDesc: 'Giao tiếp giọng nói thông minh',
      description: 'Giải pháp giao tiếp bằng giọng nói với AI, chuyển đổi giọng nói thành văn bản và ngược lại với độ trễ cực thấp. Hỗ trợ giọng nói tự nhiên và cá nhân hóa cao.',
      features: [
        'Nhận diện giọng nói Việt với độ chính xác cao',
        'Tổng hợp giọng nói tự nhiên',
        'Tùy chỉnh giọng đọc theo thương hiệu',
        'Xử lý real-time với độ trễ thấp',
        'Tích hợp với hệ thống telephony',
      ],
      benefits: [
        { label: 'Độ chính xác nhận diện', value: '98%' },
        { label: 'Độ trễ xử lý', value: '<100ms' },
        { label: 'Giảm thời gian chờ', value: '60%' },
      ],
      color: 'from-cyan-500 to-cyan-600',
      techSpecs: [
        { label: 'Voice Recognition', value: '98%', icon: 'accuracy' },
        { label: 'Latency', value: '<50ms', icon: 'speed' },
        { label: 'Languages', value: '10+', icon: 'language' },
      ],
    },
    {
      icon: FileText,
      title: 'Document AI',
      shortDesc: 'Số hóa tài liệu tự động',
      description: 'Xử lý và số hóa tài liệu tự động bằng AI, trích xuất thông tin quan trọng từ mọi loại tài liệu. Hỗ trợ đa dạng định dạng và ngôn ngữ.',
      features: [
        'OCR đa ngôn ngữ và đa định dạng',
        'Phân loại tài liệu thông minh',
        'Trích xuất dữ liệu có cấu trúc',
        'Xác thực và kiểm tra tài liệu',
        'Tích hợp workflow tự động',
      ],
      benefits: [
        { label: 'Giảm thời gian xử lý', value: '90%' },
        { label: 'Độ chính xác', value: '99%' },
        { label: 'Tài liệu/ngày', value: '10000+' },
      ],
      color: 'from-teal-500 to-teal-600',
      techSpecs: [
        { label: 'OCR Accuracy', value: '99%', icon: 'accuracy' },
        { label: 'Processing Speed', value: '5s/doc', icon: 'speed' },
        { label: 'File Formats', value: '20+', icon: 'format' },
      ],
    },
    {
      icon: Database,
      title: 'Data Digitization',
      shortDesc: 'Số hóa dữ liệu thông minh',
      description: 'Số hóa dữ liệu từ phi cấu trúc sang có cấu trúc một cách tự động, giúp doanh nghiệp khai thác tối đa giá trị từ dữ liệu hiện có.',
      features: [
        'Tự động hóa 100% quy trình',
        'Độ chính xác cao với AI',
        'Tích hợp dễ dàng với hệ thống',
        'Xử lý đa nguồn dữ liệu',
        'Chuẩn hóa và làm sạch dữ liệu',
      ],
      benefits: [
        { label: 'Tiết kiệm thời gian', value: '85%' },
        { label: 'Độ chính xác', value: '97%' },
        { label: 'ROI sau 6 tháng', value: '300%' },
      ],
      color: 'from-emerald-500 to-emerald-600',
      techSpecs: [
        { label: 'Automation', value: '100%', icon: 'automation' },
        { label: 'Data Accuracy', value: '97%', icon: 'accuracy' },
        { label: 'Processing', value: '1M/day', icon: 'speed' },
      ],
    },
    {
      icon: Brain,
      title: 'CMS AI',
      shortDesc: 'Quản lý nội dung thông minh',
      description: 'Hệ thống quản lý nội dung thông minh với AI, tự động phân loại, gợi ý và tối ưu nội dung. Phân tích xu hướng để đưa ra quyết định content hiệu quả.',
      features: [
        'Tự động phân loại và gắn tag',
        'Gợi ý nội dung cá nhân hóa',
        'Phân tích xu hướng và insights',
        'Tối ưu SEO tự động',
        'Quản lý đa kênh thống nhất',
      ],
      benefits: [
        { label: 'Tăng engagement', value: '120%' },
        { label: 'Giảm thời gian quản lý', value: '75%' },
        { label: 'Cải thiện SEO', value: '90%' },
      ],
      color: 'from-sky-500 to-sky-600',
      techSpecs: [
        { label: 'Auto Tagging', value: '95%', icon: 'accuracy' },
        { label: 'SEO Score', value: '+90%', icon: 'trending' },
        { label: 'Content/day', value: '5000+', icon: 'speed' },
      ],
    },
    {
      icon: Workflow,
      title: 'Custom AI',
      shortDesc: 'Giải pháp AI tùy chỉnh',
      description: 'Giải pháp AI được thiết kế và phát triển riêng theo nhu cầu cụ thể của từng doanh nghiệp. Đội ngũ chuyên gia đồng hành từ tư vấn đến triển khai.',
      features: [
        'Phân tích và tư vấn giải pháp',
        'Phát triển model AI riêng',
        'Tích hợp với hệ thống hiện tại',
        'Đào tạo và chuyển giao',
        'Bảo trì và nâng cấp lâu dài',
      ],
      benefits: [
        { label: 'Tùy chỉnh 100%', value: 'Full' },
        { label: 'Thời gian triển khai', value: '2-3 tháng' },
        { label: 'Hỗ trợ', value: '24/7' },
      ],
      color: 'from-blue-600 to-blue-700',
      techSpecs: [
        { label: 'Customization', value: '100%', icon: 'custom' },
        { label: 'Deployment', value: '2-3mo', icon: 'time' },
        { label: 'Support', value: '24/7', icon: 'support' },
      ],
    },
    {
      icon: Plane,
      title: 'AI Travel',
      shortDesc: 'Trợ lý du lịch thông minh',
      description: 'Nền tảng AI toàn diện cho ngành du lịch, kết hợp voice bot, thực tế ảo VR360, audio thuyết minh tự động và gợi ý cá nhân hóa. Mang đến trải nghiệm du lịch tương lai.',
      features: [
        'Voice bot tư vấn địa điểm thông minh',
        'VR360 khám phá điểm đến trước khi đi',
        'Audio thuyết minh tự động đa ngôn ngữ',
        'Lộ trình cá nhân hóa theo sở thích',
        'Tích hợp booking và thanh toán',
      ],
      benefits: [
        { label: 'Tăng engagement', value: '150%' },
        { label: 'Giảm chi phí tư vấn', value: '80%' },
        { label: 'Conversion rate', value: '45%' },
      ],
      color: 'from-purple-500 to-pink-500',
      techSpecs: [
        { label: 'Voice Recognition', value: '99%', icon: 'accuracy' },
        { label: 'VR Quality', value: '4K/8K', icon: 'quality' },
        { label: 'Languages', value: '30+', icon: 'language' },
      ],
    },
  ];

  const currentSolution = solutions[activeSolution];

  useEffect(() => {
    setIsTyping(true);
    setDisplayedText('');
    const fullText = currentSolution.description;
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        setIsTyping(false);
        clearInterval(typingInterval);
      }
    }, 20);

    return () => clearInterval(typingInterval);
  }, [activeSolution]);

  useEffect(() => {
    if (detailAnim.isVisible) {
      const targetWidths = [85, 95, 90];

      currentSolution.techSpecs.forEach((_, idx) => {
        let currentValue = 0;
        const targetValue = targetWidths[idx];
        const increment = targetValue / 50;

        const interval = setInterval(() => {
          currentValue += increment;
          if (currentValue >= targetValue) {
            currentValue = targetValue;
            clearInterval(interval);
          }
          setAnimatedValues(prev => ({ ...prev, [idx]: currentValue }));
        }, 20);
      });
    }
  }, [detailAnim.isVisible, activeSolution]);

  return (
    <section id="solutions" className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div ref={headerAnim.ref} className={`lg:sticky lg:top-24 scroll-slide-left ${headerAnim.isVisible ? 'visible' : ''}`}>
              <div className="inline-flex items-center space-x-2 px-5 py-2.5 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200/50 rounded-full mb-6">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="text-xs md:text-sm font-bold text-blue-700 tracking-wider">GIẢI PHÁP</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                Giải pháp công nghệ AI
                <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mt-2">toàn diện và chuyên sâu</span>
              </h2>
              <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-8">
                Các giải pháp AI tiên tiến được phát triển bởi đội ngũ chuyên gia hàng đầu
              </p>

              <div ref={listAnim.ref} className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-blue-300 via-blue-500 to-cyan-400"></div>

                <div className="space-y-4">
                  {solutions.map((solution, index) => (
                    <div
                      key={solution.title}
                      className="relative pl-8 transition-all duration-300"
                      onMouseEnter={() => setActiveSolution(index)}
                      onClick={() => setActiveSolution(index)}
                    >
                      <div
                        className="absolute left-[-6px] top-3 w-3 h-3 rounded-full transition-all duration-300"
                        style={{
                          background: activeSolution === index ? 'linear-gradient(to right, #3b82f6, #06b6d4)' : '#cbd5e1',
                          transform: activeSolution === index ? 'scale(1.5)' : 'scale(1)',
                        }}
                      ></div>

                      <div
                        className={`bg-white rounded-xl p-6 border cursor-pointer transition-all duration-300 scroll-fade-in scroll-stagger-${index + 1} ${
                          activeSolution === index
                            ? 'border-blue-300 shadow-lg hover:shadow-xl'
                            : 'border-slate-200 hover:border-blue-200 hover:shadow-md'
                        } ${listAnim.isVisible ? 'visible' : ''}`}
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center space-x-3">
                            <solution.icon
                              className={`w-6 h-6 transition-all duration-300 ${
                                activeSolution === index ? 'text-blue-600' : 'text-slate-400'
                              }`}
                              strokeWidth={1.5}
                            />
                            <h3 className="text-lg font-bold text-slate-900">{solution.title}</h3>
                          </div>
                        </div>
                        <p className="text-sm text-slate-600 leading-relaxed mb-3">
                          {solution.shortDesc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <a
                  href="#contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg text-base font-semibold hover:shadow-lg transition-all"
                >
                  Tư vấn giải pháp phù hợp
                </a>
              </div>
            </div>

            <div ref={detailAnim.ref} className={`lg:sticky lg:top-24 scroll-slide-right ${detailAnim.isVisible ? 'visible' : ''}`}>
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 shadow-xl">
                <div className="mb-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>

                  <div className="rounded-xl p-6">
                    <div className="flex items-center space-x-4 mb-6">
                      <currentSolution.icon className="w-12 h-12 text-cyan-400" strokeWidth={1.5} />
                      <div>
                        <h3 className="text-2xl font-bold text-white">{currentSolution.title}</h3>
                        <p className="text-slate-400 text-sm">{currentSolution.shortDesc}</p>
                      </div>
                    </div>

                    <p className="text-slate-300 leading-relaxed mb-8 text-base">
                      {displayedText}
                      {isTyping && <span className="inline-block w-0.5 h-4 bg-cyan-400 ml-1 animate-pulse"></span>}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-sm font-bold text-slate-400 mb-4 uppercase tracking-wide">
                        Tính năng nổi bật
                      </h4>
                      <div className="space-y-3">
                        {currentSolution.features.map((feature, idx) => (
                          <div
                            key={idx}
                            className="flex items-start space-x-3 text-slate-300"
                          >
                            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm leading-relaxed">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-6 border-t border-slate-700">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></div>
                        <span className="text-cyan-400 text-sm font-semibold">Production Ready</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  {currentSolution.techSpecs.map((spec, idx) => {
                    const colors = [
                      { bg: 'bg-blue-900/20', border: 'border-blue-500/30', text: 'text-blue-400', iconColor: 'text-blue-400', progressBg: 'bg-gradient-to-r from-blue-500 to-cyan-500' },
                      { bg: 'bg-cyan-900/20', border: 'border-cyan-500/30', text: 'text-cyan-400', iconColor: 'text-cyan-400', progressBg: 'bg-gradient-to-r from-cyan-500 to-blue-500' },
                      { bg: 'bg-blue-900/20', border: 'border-blue-400/30', text: 'text-blue-300', iconColor: 'text-blue-300', progressBg: 'bg-gradient-to-r from-blue-400 to-cyan-400' },
                    ];
                    const color = colors[idx % 3];

                    return (
                      <div key={idx} className={`${color.bg} border ${color.border} rounded-xl p-5 relative overflow-hidden group`}>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                        <div className="relative z-10">
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center space-x-3">
                              {idx === 0 && <TrendingUp className={`w-5 h-5 ${color.iconColor}`} strokeWidth={1.5} />}
                              {idx === 1 && <Check className={`w-5 h-5 ${color.iconColor}`} strokeWidth={1.5} />}
                              {idx === 2 && <MessageSquare className={`w-5 h-5 ${color.iconColor}`} strokeWidth={1.5} />}
                              <span className={`text-sm font-semibold ${color.text}`}>{spec.label}</span>
                            </div>
                            <span className="text-lg font-bold text-white tabular-nums">{spec.value}</span>
                          </div>
                          <div className="w-full bg-slate-700/50 rounded-full h-1.5 relative overflow-hidden">
                            <div
                              className={`h-1.5 rounded-full transition-all duration-1000 ease-out ${color.progressBg} relative`}
                              style={{ width: `${animatedValues[idx] || 0}%` }}
                            >
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-4">
                {currentSolution.benefits.map((benefit, idx) => {
                  const colors = ['from-blue-600 to-cyan-500', 'from-cyan-600 to-blue-500', 'from-blue-500 to-cyan-600'];
                  return (
                    <div key={idx} className="bg-white rounded-xl p-4 border border-slate-200">
                      <div className={`text-2xl font-bold bg-gradient-to-r ${colors[idx]} bg-clip-text text-transparent mb-1`}>
                        {benefit.value}
                      </div>
                      <div className="text-xs text-slate-600">{benefit.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
