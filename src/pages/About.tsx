import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Target, Users, Award, TrendingUp, Globe, Heart, Lightbulb, Shield, Sparkles, CheckCircle, Building2, Linkedin, Mail } from 'lucide-react';

export default function About() {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Đối tác AI đáng tin cậy, kiến tạo tương lai doanh nghiệp';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  const coreValues = [
    {
      icon: Target,
      title: 'Tập trung khách hàng',
      description: 'Đặt nhu cầu và thành công của khách hàng lên hàng đầu trong mọi quyết định',
    },
    {
      icon: Lightbulb,
      title: 'Đổi mới không ngừng',
      description: 'Nghiên cứu và phát triển công nghệ AI tiên tiến nhất cho thị trường',
    },
    {
      icon: Shield,
      title: 'Cam kết chất lượng',
      description: 'Đảm bảo bảo mật tuyệt đối và hiệu suất tối ưu trong mọi giải pháp',
    },
    {
      icon: Heart,
      title: 'Đối tác tin cậy',
      description: 'Xây dựng mối quan hệ bền vững dựa trên sự minh bạch và trách nhiệm',
    }
  ];

  const stats = [
    { number: '500+', label: 'Doanh nghiệp tin dùng' },
    { number: '98%', label: 'Độ hài lòng khách hàng' },
    { number: '15+', label: 'Năm kinh nghiệm' },
    { number: '24/7', label: 'Hỗ trợ không ngừng' }
  ];

  const team = [
    {
      name: 'Nguyễn Văn An',
      role: 'CEO & Founder',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=800',
      bio: '15+ năm kinh nghiệm AI/ML tại Google, Meta'
    },
    {
      name: 'Trần Thị Bình',
      role: 'CTO',
      image: 'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=800',
      bio: 'Chuyên gia NLP, PhD từ Stanford University'
    },
    {
      name: 'Lê Minh Cường',
      role: 'Head of AI Research',
      image: 'https://images.pexels.com/photos/3778212/pexels-photo-3778212.jpeg?auto=compress&cs=tinysrgb&w=800',
      bio: 'Tác giả 20+ bài báo AI hàng đầu quốc tế'
    },
    {
      name: 'Phạm Thu Hương',
      role: 'Head of Customer Success',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=800',
      bio: '10+ năm kinh nghiệm tư vấn chuyển đổi số'
    }
  ];

  const milestones = [
    {
      year: '2010',
      title: 'Nghiên cứu công nghệ AI',
      description: 'Khởi đầu nghiên cứu thuật toán ML/NLP cơ bản',
      metric: '5',
      metricLabel: 'Mô hình AI',
      progress: 20
    },
    {
      year: '2015',
      title: 'Phát triển sản phẩm',
      description: 'Ra mắt Chatbot AI và Voice Bot đầu tiên',
      metric: '50+',
      metricLabel: 'Tính năng',
      progress: 45
    },
    {
      year: '2020',
      title: 'Tích hợp đa nền tảng',
      description: 'Tích hợp với CRM, ERP, WhatsApp, Zalo, Messenger',
      metric: '200+',
      metricLabel: 'Tích hợp',
      progress: 75
    },
    {
      year: '2025',
      title: 'Mở rộng toàn cầu',
      description: 'Nền tảng AI đa ngôn ngữ, phục vụ 500+ doanh nghiệp',
      metric: '500+',
      metricLabel: 'Khách hàng',
      progress: 100
    }
  ];

  const industries = [
    'Ngân hàng & Tài chính',
    'Bảo hiểm',
    'Bán lẻ & Thương mại',
    'Viễn thông',
    'Y tế & Sức khỏe',
    'Giáo dục',
    'Logistics & Vận tải',
    'Bất động sản',
    'Du lịch & Khách sạn',
    'Sản xuất'
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="relative bg-gradient-to-br from-blue-900 via-cyan-900 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/50 to-blue-900"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="pt-8 pb-4">
            <Link
              to="/"
              className="inline-flex items-center space-x-2 text-cyan-300 hover:text-cyan-200 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Trang chủ</span>
            </Link>
          </div>

          <div className="py-20 text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center space-x-2 px-5 py-2.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-8">
              <Building2 className="w-5 h-5 text-cyan-300" />
              <span className="text-sm font-bold text-white tracking-wider">VỀ 4SHIP</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight min-h-[140px] md:min-h-[160px]">
              <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-cyan-300 bg-clip-text text-transparent">
                {typedText}
              </span>
              <span className="animate-pulse">|</span>
            </h1>
          </div>
        </div>
      </div>

      <div className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
              <div className="relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-slate-200">
                  <img
                    src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920"
                    alt="4SHIP Team"
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent"></div>
                  <div className="absolute bottom-8 left-8 right-8">
                    <div className="grid grid-cols-2 gap-4">
                      {stats.slice(0, 2).map((stat, idx) => (
                        <div key={idx} className="bg-white/20 backdrop-blur-xl p-6 rounded-2xl border border-white/30">
                          <div className="text-4xl font-bold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent mb-2">
                            {stat.number}
                          </div>
                          <div className="text-sm text-white font-medium">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full mb-6">
                  <Sparkles className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-bold text-blue-900">CÂU CHUYỆN</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                  Hành trình tiên phong
                  <span className="block text-blue-600 mt-2">công nghệ AI tại Việt Nam</span>
                </h2>
                <div className="space-y-5 text-slate-600 text-lg leading-relaxed">
                  <p>
                    <strong className="text-slate-900">4SHIP</strong> được thành lập năm 2010 với sứ mệnh dân chủ hóa AI,
                    giúp mọi doanh nghiệp tiếp cận công nghệ tiên tiến một cách dễ dàng và hiệu quả.
                  </p>
                  <p>
                    Từ đội ngũ ban đầu 5 người, chúng tôi đã phát triển thành công ty AI hàng đầu với
                    <strong className="text-blue-600"> hơn 100 chuyên gia</strong>, phục vụ 500+ doanh nghiệp và đạt
                    <strong className="text-blue-600"> ROI trung bình 300%</strong> cho khách hàng.
                  </p>
                  <p>
                    Chúng tôi tự hào là đối tác tin cậy của các tập đoàn lớn, mang đến giải pháp AI
                    <strong className="text-slate-900"> dễ tích hợp, hiệu quả cao, bảo mật tuyệt đối</strong>.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center p-8 bg-white rounded-2xl border-2 border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all">
                  <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-3">
                    {stat.number}
                  </div>
                  <div className="text-slate-600 font-semibold">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full mb-6">
                <Users className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-bold text-blue-900">ĐỘI NGŨ LÃNH ĐẠO</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Những chuyên gia hàng đầu
                <span className="block text-blue-600 mt-2">dẫn dắt 4SHIP</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              {team.map((member, idx) => (
                <div key={idx} className="group bg-white rounded-2xl border-2 border-slate-200 overflow-hidden hover:border-blue-300 hover:shadow-2xl transition-all">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                      <p className="text-sm text-cyan-300 font-medium">{member.role}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-slate-600 leading-relaxed mb-4">{member.bio}</p>
                    <div className="flex space-x-3">
                      <a href="#" className="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center hover:bg-blue-100 transition-colors">
                        <Linkedin className="w-4 h-4 text-blue-600" />
                      </a>
                      <a href="#" className="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center hover:bg-blue-100 transition-colors">
                        <Mail className="w-4 h-4 text-blue-600" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full mb-6">
                <TrendingUp className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-bold text-blue-900">HÀNH TRÌNH PHÁT TRIỂN</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                15 năm không ngừng
                <span className="block text-blue-600 mt-2">đổi mới và phát triển</span>
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Từ nghiên cứu công nghệ đến mở rộng toàn cầu
              </p>
            </div>

            <div className="relative">
              <svg className="w-full h-[500px]" viewBox="0 0 1200 500" preserveAspectRatio="xMidYMid meet">
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#0ea5e9" stopOpacity="1" />
                    <stop offset="50%" stopColor="#06b6d4" stopOpacity="1" />
                    <stop offset="100%" stopColor="#0284c7" stopOpacity="1" />
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>

                <path
                  d="M 50 450 Q 200 420, 350 350 T 650 200 T 950 80 L 1150 50"
                  fill="none"
                  stroke="url(#lineGradient)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  filter="url(#glow)"
                  opacity="0.8"
                />

                {milestones.map((milestone, idx) => {
                  const positions = [
                    { x: 50, y: 450 },
                    { x: 350, y: 350 },
                    { x: 650, y: 200 },
                    { x: 950, y: 80 }
                  ];
                  const pos = positions[idx];

                  return (
                    <g key={idx}>
                      <line
                        x1={pos.x}
                        y1={pos.y}
                        x2={pos.x}
                        y2="490"
                        stroke="#e2e8f0"
                        strokeWidth="1"
                        strokeDasharray="4 4"
                      />
                      <circle
                        cx={pos.x}
                        cy={pos.y}
                        r="10"
                        fill="#0ea5e9"
                        opacity="0.2"
                      >
                        <animate
                          attributeName="r"
                          values="10;25;10"
                          dur="3s"
                          begin={`${idx * 0.8}s`}
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="opacity"
                          values="0.2;0;0.2"
                          dur="3s"
                          begin={`${idx * 0.8}s`}
                          repeatCount="indefinite"
                        />
                      </circle>
                      <circle
                        cx={pos.x}
                        cy={pos.y}
                        r="8"
                        fill="white"
                        stroke="#0ea5e9"
                        strokeWidth="3"
                      />
                      <circle
                        cx={pos.x}
                        cy={pos.y}
                        r="4"
                        fill="#0ea5e9"
                      />
                    </g>
                  );
                })}
              </svg>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 -mt-12">
                {milestones.map((milestone, idx) => (
                  <div
                    key={idx}
                    className="group relative"
                  >
                    <div className="bg-white rounded-2xl p-6 border-2 border-slate-200 hover:border-blue-400 hover:shadow-2xl transition-all">
                      <div className="text-sm font-bold text-blue-600 mb-3">{milestone.year}</div>
                      <div className="text-3xl font-bold text-blue-600 mb-1">
                        {milestone.metric}
                      </div>
                      <div className="text-xs text-slate-500 font-medium mb-4">{milestone.metricLabel}</div>
                      <h3 className="text-base font-bold text-slate-900 mb-2 leading-tight">
                        {milestone.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed mb-4">
                        {milestone.description}
                      </p>

                      <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-blue-600 rounded-full transition-all duration-1000"
                          style={{ width: `${milestone.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-2xl p-8 border-2 border-slate-200 hover:border-blue-400 hover:shadow-xl transition-all text-center group">
                  <div className="text-4xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform">100+</div>
                  <div className="text-sm font-semibold text-slate-600">Công nghệ AI triển khai</div>
                </div>
                <div className="bg-white rounded-2xl p-8 border-2 border-slate-200 hover:border-blue-400 hover:shadow-xl transition-all text-center group">
                  <div className="text-4xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform">50+</div>
                  <div className="text-sm font-semibold text-slate-600">Đối tác công nghệ</div>
                </div>
                <div className="bg-white rounded-2xl p-8 border-2 border-slate-200 hover:border-blue-400 hover:shadow-xl transition-all text-center group">
                  <div className="text-4xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform">300%</div>
                  <div className="text-sm font-semibold text-slate-600">ROI trung bình</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full mb-6">
                <Target className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-bold text-blue-900">GIÁ TRỊ CỐT LÕI</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Những giá trị định hướng
                <span className="block text-blue-600 mt-2">mọi hành động của chúng tôi</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {coreValues.map((value, idx) => (
                <div
                  key={idx}
                  className="group bg-white rounded-2xl p-8 border-2 border-slate-200 hover:border-blue-300 hover:shadow-2xl transition-all"
                >
                  <value.icon className="w-12 h-12 text-blue-600 mb-6 group-hover:scale-110 transition-transform" strokeWidth={2} />
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full mb-6">
                  <Award className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-bold text-blue-900">LỢI THỾ VƯỢT TRỘI</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
                  Lý do doanh nghiệp
                  <span className="block text-blue-600 mt-2">tin tưởng 4SHIP</span>
                </h2>

                <div className="space-y-6">
                  {[
                    {
                      title: 'Chuyên môn sâu về AI',
                      description: 'Đội ngũ 100+ kỹ sư AI với chứng chỉ quốc tế, kinh nghiệm thực chiến tại các tập đoàn công nghệ hàng đầu thế giới'
                    },
                    {
                      title: 'Hiệu quả đã chứng minh',
                      description: '500+ dự án thành công, ROI trung bình 300%, giảm 60% chi phí vận hành cho khách hàng'
                    },
                    {
                      title: 'Hỗ trợ toàn diện 24/7',
                      description: 'Từ tư vấn chiến lược, thiết kế, triển khai đến đào tạo và bảo trì liên tục'
                    },
                    {
                      title: 'Công nghệ tiên tiến nhất',
                      description: 'Ứng dụng GPT-4, Claude, LLaMA và các framework AI mới nhất, cập nhật liên tục'
                    }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-4">
                      <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" strokeWidth={2.5} />
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                        <p className="text-slate-600 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-slate-200">
                  <img
                    src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1920"
                    alt="AI Technology"
                    className="w-full h-[600px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-12 md:p-16 text-center text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-5"></div>
              <div className="relative z-10">
                <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-6">
                  <Globe className="w-4 h-4 text-cyan-300" />
                  <span className="text-sm font-bold text-white tracking-wider">ĐỐI TÁC TIN CẬY</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-6">
                  Được tin tưởng bởi các tổ chức hàng đầu
                </h3>
                <p className="text-slate-300 text-lg mb-10 max-w-3xl mx-auto leading-relaxed">
                  Đồng hành cùng 500+ doanh nghiệp trong nhiều lĩnh vực,
                  thúc đẩy chuyển đổi số và tăng trưởng bền vững
                </p>
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                  {industries.map((industry, idx) => (
                    <span
                      key={idx}
                      className="px-5 py-2.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-sm font-medium hover:bg-white/20 transition-all cursor-default"
                    >
                      {industry}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/#contact"
                    className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-bold hover:shadow-2xl hover:scale-105 transition-all"
                  >
                    Liên hệ tư vấn ngay
                  </Link>
                  <Link
                    to="/"
                    className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-xl font-bold hover:bg-white/20 transition-all border-2 border-white/30"
                  >
                    Khám phá giải pháp
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
