import { Award, Target, Lightbulb, TrendingUp, Shield, Users, Sparkles, CheckCircle, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function AboutUs() {
  const [isContentVisible, setIsContentVisible] = useState(false);
  const titleAnim = useScrollAnimation({ threshold: 0.2 });
  const imageAnim = useScrollAnimation({ threshold: 0.2 });
  const contentAnim = useScrollAnimation({ threshold: 0.2 });
  const valuesAnim = useScrollAnimation({ threshold: 0.15 });
  const ctaAnim = useScrollAnimation({ threshold: 0.2 });
  const values = [
    {
      icon: Target,
      title: 'Tầm nhìn chiến lược',
      description: 'Trở thành đơn vị dẫn đầu về giải pháp AI tại khu vực Đông Nam Á',
    },
    {
      icon: Lightbulb,
      title: 'Đổi mới sáng tạo',
      description: 'Nghiên cứu và ứng dụng công nghệ AI tiên tiến nhất cho doanh nghiệp',
    },
    {
      icon: Shield,
      title: 'Cam kết chất lượng',
      description: 'Đảm bảo bảo mật tuyệt đối và hiệu suất tối ưu trong mọi giải pháp',
    },
  ];

  const stats = [
    { icon: Users, value: '500+', label: 'Doanh nghiệp tin dùng' },
    { icon: TrendingUp, value: '98%', label: 'Độ hài lòng khách hàng' },
    { icon: Award, value: '15+', label: 'Năm kinh nghiệm' },
  ];

  const industries = [
    'Ngân hàng & Tài chính',
    'Bảo hiểm',
    'Bán lẻ & Thương mại',
    'Viễn thông',
    'Y tế & Sức khỏe',
    'Giáo dục',
    'Logistics & Vận tải',
    'Bất động sản'
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div ref={titleAnim.ref} className={`text-center mb-16 scroll-fade-in ${titleAnim.isVisible ? 'visible' : ''}`}>
            <div className="inline-flex items-center space-x-2 px-5 py-2.5 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-full mb-6">
              <Building2 className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-bold text-blue-900 tracking-wider">VỀ 4SHIP</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Đối tác công nghệ AI
              <span className="block bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent mt-2">
                đáng tin cậy của doanh nghiệp
              </span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-4xl mx-auto">
              Với đội ngũ chuyên gia hàng đầu trong lĩnh vực AI và Machine Learning,
              chúng tôi mang đến giải pháp công nghệ tối ưu, giúp doanh nghiệp
              <span className="font-semibold text-blue-600"> tăng trưởng bền vững</span> và
              <span className="font-semibold text-blue-600"> nâng cao lợi thế cạnh tranh</span>.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div ref={imageAnim.ref} className={`relative order-2 lg:order-1 scroll-slide-left ${imageAnim.isVisible ? 'visible' : ''}`}>
              <div
                className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-slate-200 cursor-pointer"
                onClick={() => setIsContentVisible(!isContentVisible)}
              >
                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920"
                  alt="4SHIP Team"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/20 to-transparent"></div>

                <div className="md:hidden absolute bottom-6 left-6 right-6">
                  <div className="grid grid-cols-2 gap-4">
                    {stats.slice(0, 2).map((stat, idx) => (
                      <div key={idx} className="bg-white/20 backdrop-blur-xl p-5 rounded-xl border border-white/30">
                        <div className="text-3xl font-bold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent mb-1">
                          {stat.value}
                        </div>
                        <div className="text-xs text-white font-medium">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div
                  className={`md:hidden absolute inset-0 bg-blue-900/95 backdrop-blur-sm transition-all duration-500 ${
                    isContentVisible ? 'opacity-100 visible' : 'opacity-0 invisible'
                  }`}
                >
                  <div className="h-full overflow-y-auto p-6 flex flex-col justify-center">
                    <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 border border-white/30 rounded-full mb-4">
                      <Sparkles className="w-4 h-4 text-cyan-300" />
                      <span className="text-xs font-bold text-white">CÂU CHUYỆN</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                      Tiên phong công nghệ AI
                      <span className="block text-cyan-300 mt-1">tại Việt Nam</span>
                    </h3>
                    <div className="space-y-4 text-white text-sm leading-relaxed">
                      <p>
                        <strong className="text-cyan-300">4SHIP</strong> được thành lập với sứ mệnh dân chủ hóa công nghệ AI,
                        giúp mọi doanh nghiệp - từ startup đến tập đoàn lớn - đều có thể tiếp cận
                        và ứng dụng AI hiệu quả.
                      </p>
                      <p>
                        Với hơn <strong className="text-cyan-300">15 năm kinh nghiệm</strong>,
                        chúng tôi đã đồng hành cùng hàng trăm doanh nghiệp thành công với
                        <strong className="text-cyan-300"> ROI trung bình 300%</strong> trong năm đầu tiên.
                      </p>
                    </div>
                    <Link
                      to="/about"
                      className="inline-flex items-center mt-6 px-6 py-3 bg-white text-blue-900 rounded-xl font-semibold hover:bg-cyan-50 transition-all"
                    >
                      Tìm hiểu thêm
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 ml-2">
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </svg>
                    </Link>
                    <button
                      className="mt-4 text-white/80 text-sm underline"
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsContentVisible(false);
                      }}
                    >
                      Đóng
                    </button>
                  </div>
                </div>

                <div className="hidden md:block absolute bottom-6 left-6 right-6">
                  <div className="grid grid-cols-2 gap-4">
                    {stats.slice(0, 2).map((stat, idx) => (
                      <div key={idx} className="bg-white/20 backdrop-blur-xl p-5 rounded-xl border border-white/30">
                        <div className="text-3xl font-bold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent mb-1">
                          {stat.value}
                        </div>
                        <div className="text-xs text-white font-medium">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div ref={contentAnim.ref} className={`order-1 lg:order-2 hidden md:block scroll-slide-right ${contentAnim.isVisible ? 'visible' : ''}`}>
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full mb-6">
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-bold text-blue-900">CÂU CHUYỆN</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                Tiên phong công nghệ AI
                <span className="block text-blue-600 mt-2">tại Việt Nam</span>
              </h3>
              <div className="space-y-5 text-slate-600 text-base md:text-lg leading-relaxed">
                <p>
                  <strong className="text-slate-900">4SHIP</strong> được thành lập với sứ mệnh dân chủ hóa công nghệ AI,
                  giúp mọi doanh nghiệp - từ startup đến tập đoàn lớn - đều có thể tiếp cận
                  và ứng dụng AI hiệu quả.
                </p>
                <p>
                  Với hơn <strong className="text-slate-900">15 năm kinh nghiệm</strong>,
                  chúng tôi đã đồng hành cùng hàng trăm doanh nghiệp thành công với
                  <strong className="text-blue-600"> ROI trung bình 300%</strong> trong năm đầu tiên.
                </p>
              </div>
              <Link
                to="/about"
                className="inline-flex items-center mt-6 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all"
              >
                Tìm hiểu thêm
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 ml-2">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>

          <div ref={valuesAnim.ref} className="grid md:grid-cols-3 gap-8 mb-20">
            {values.map((value, index) => (
              <div
                key={value.title}
                className={`group bg-white border-2 border-slate-200 rounded-2xl p-8 hover:border-blue-300 hover:shadow-2xl transition-all duration-300 scroll-scale-up scroll-stagger-${index + 1} ${valuesAnim.isVisible ? 'visible' : ''}`}
              >
                <value.icon className="w-12 h-12 text-blue-600 mb-6 group-hover:scale-110 transition-transform" strokeWidth={2} />
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>

          <div ref={ctaAnim.ref} className={`bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-12 md:p-16 text-center text-white shadow-2xl relative overflow-hidden scroll-scale-up ${ctaAnim.isVisible ? 'visible' : ''}`}>
            <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-5"></div>
            <div className="relative z-10">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-6">
                <CheckCircle className="w-4 h-4 text-cyan-300" />
                <span className="text-sm font-bold text-white tracking-wider">ĐỐI TÁC TIN CẬY</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Được tin tưởng bởi các tổ chức hàng đầu
              </h3>
              <p className="text-slate-300 text-lg mb-10 max-w-3xl mx-auto leading-relaxed">
                Đồng hành cùng hàng trăm doanh nghiệp lớn trong nhiều lĩnh vực,
                thúc đẩy chuyển đổi số và tăng trưởng bền vững
              </p>
              <div className="flex flex-wrap justify-center gap-3 mb-10">
                {industries.map((industry, idx) => (
                  <span
                    key={idx}
                    className="px-5 py-2.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-sm font-medium hover:bg-white/20 transition-all cursor-default"
                  >
                    {industry}
                  </span>
                ))}
              </div>
              <Link
                to="/about"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-bold hover:shadow-2xl hover:scale-105 transition-all"
              >
                Xem chi tiết về chúng tôi
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 ml-2">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
