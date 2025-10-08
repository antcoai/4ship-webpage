import { Link } from 'react-router-dom';
import { ArrowLeft, Target, TrendingUp, Users, CheckCircle, LineChart, Lightbulb, Shield, Zap, ArrowRight, Sparkles } from 'lucide-react';

export default function Consulting() {
  return (
    <div className="min-h-screen bg-white">
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>

        <div className="max-w-7xl mx-auto px-6 py-8 relative z-10">
          <Link
            to="/"
            className="inline-flex items-center space-x-2 text-slate-300 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span>Trang chủ</span>
          </Link>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-semibold mb-6 backdrop-blur-sm">
                <Lightbulb className="w-4 h-4" />
                <span>Dịch vụ tư vấn</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Tư vấn chiến lược AI
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed mb-8">
                Định hướng chuyển đổi số và xây dựng lộ trình ứng dụng AI phù hợp với mục tiêu kinh doanh của bạn
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/#contact"
                  className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all flex items-center space-x-2"
                >
                  <span>Đặt lịch tư vấn</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="#services"
                  className="px-8 py-4 bg-white/10 border border-white/20 text-white rounded-xl font-semibold hover:bg-white/20 transition-all backdrop-blur-sm"
                >
                  Tìm hiểu thêm
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Target, value: '100+', label: 'Dự án tư vấn', color: 'blue' },
                { icon: Users, value: '50+', label: 'Doanh nghiệp', color: 'cyan' },
                { icon: TrendingUp, value: '300%', label: 'ROI trung bình', color: 'green' },
                { icon: Shield, value: '100%', label: 'Bảo mật', color: 'purple' }
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all hover:scale-105 hover:border-white/20"
                >
                  <stat.icon className={`w-10 h-10 text-${stat.color}-400 mb-4 group-hover:scale-110 transition-transform`} strokeWidth={1.5} />
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-slate-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Dịch vụ toàn diện</span>
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Dịch vụ tư vấn của chúng tôi
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Đội ngũ chuyên gia AI giàu kinh nghiệm sẽ đồng hành cùng bạn trong hành trình chuyển đổi số
          </p>
        </div>

        <div id="services" className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {[
            {
              icon: Target,
              title: 'Đánh giá & Phân tích',
              description: 'Khảo sát hiện trạng, xác định nhu cầu và cơ hội ứng dụng AI trong doanh nghiệp',
              items: ['Phân tích quy trình hiện tại', 'Đánh giá mức độ sẵn sàng', 'Xác định điểm cải thiện'],
              gradient: 'from-blue-500/10 to-cyan-500/10',
              iconColor: 'text-blue-600',
              borderColor: 'border-blue-200'
            },
            {
              icon: Lightbulb,
              title: 'Xây dựng chiến lược',
              description: 'Thiết kế lộ trình chuyển đổi số với AI phù hợp với mục tiêu kinh doanh',
              items: ['Định hướng công nghệ', 'Lộ trình triển khai', 'Dự toán chi phí'],
              gradient: 'from-yellow-500/10 to-orange-500/10',
              iconColor: 'text-yellow-600',
              borderColor: 'border-yellow-200'
            },
            {
              icon: LineChart,
              title: 'Tối ưu ROI',
              description: 'Tư vấn cách tối đa hóa lợi ích từ đầu tư vào công nghệ AI',
              items: ['Đo lường hiệu quả', 'Tối ưu chi phí', 'Mở rộng quy mô'],
              gradient: 'from-green-500/10 to-emerald-500/10',
              iconColor: 'text-green-600',
              borderColor: 'border-green-200'
            },
            {
              icon: Shield,
              title: 'Bảo mật & Tuân thủ',
              description: 'Đảm bảo giải pháp AI tuân thủ quy định và bảo vệ dữ liệu',
              items: ['Đánh giá rủi ro', 'Quy trình bảo mật', 'Tuân thủ pháp lý'],
              gradient: 'from-purple-500/10 to-pink-500/10',
              iconColor: 'text-purple-600',
              borderColor: 'border-purple-200'
            },
            {
              icon: Users,
              title: 'Đào tạo & Chuyển giao',
              description: 'Trang bị kiến thức và kỹ năng AI cho đội ngũ nội bộ',
              items: ['Đào tạo chuyên sâu', 'Workshop thực hành', 'Tài liệu hướng dẫn'],
              gradient: 'from-cyan-500/10 to-blue-500/10',
              iconColor: 'text-cyan-600',
              borderColor: 'border-cyan-200'
            },
            {
              icon: Zap,
              title: 'Hỗ trợ liên tục',
              description: 'Đồng hành và tư vấn trong quá trình triển khai và vận hành',
              items: ['Tư vấn 24/7', 'Giải đáp thắc mắc', 'Cải tiến liên tục'],
              gradient: 'from-orange-500/10 to-red-500/10',
              iconColor: 'text-orange-600',
              borderColor: 'border-orange-200'
            }
          ].map((service, idx) => (
            <div
              key={idx}
              className={`group relative bg-gradient-to-br ${service.gradient} rounded-2xl p-8 border-2 ${service.borderColor} hover:shadow-xl transition-all hover:-translate-y-1 overflow-hidden`}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/30 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <service.icon className={`relative w-12 h-12 ${service.iconColor} mb-6 group-hover:scale-110 transition-transform`} strokeWidth={1.5} />
              <h3 className="relative text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="relative text-slate-600 mb-6 leading-relaxed">{service.description}</p>
              <ul className="relative space-y-2">
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-start space-x-2 text-slate-700">
                    <CheckCircle className={`w-5 h-5 ${service.iconColor} flex-shrink-0 mt-0.5`} strokeWidth={2} />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 rounded-3xl p-12 mb-20 overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>

          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Quy trình tư vấn
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: '01',
                  title: 'Khảo sát',
                  description: 'Tìm hiểu nhu cầu và mục tiêu kinh doanh',
                  icon: Target
                },
                {
                  step: '02',
                  title: 'Phân tích',
                  description: 'Đánh giá hiện trạng và xác định cơ hội',
                  icon: LineChart
                },
                {
                  step: '03',
                  title: 'Đề xuất',
                  description: 'Xây dựng chiến lược và lộ trình chi tiết',
                  icon: Lightbulb
                },
                {
                  step: '04',
                  title: 'Triển khai',
                  description: 'Hỗ trợ thực thi và đào tạo đội ngũ',
                  icon: Zap
                }
              ].map((step, idx) => (
                <div key={idx} className="group text-center">
                  <div className="relative mb-6 flex justify-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-cyan-500 text-white text-2xl font-bold rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                      {step.step}
                    </div>
                    {idx < 3 && (
                      <div className="hidden md:block absolute top-10 left-[60%] w-full h-0.5 bg-gradient-to-r from-blue-500/50 to-transparent"></div>
                    )}
                  </div>
                  <step.icon className="w-8 h-8 text-blue-400 mx-auto mb-3" strokeWidth={1.5} />
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-slate-300 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-10 border-2 border-blue-200">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl mb-6">
              <Users className="w-8 h-8 text-white" strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Tư vấn cá nhân hóa</h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Mỗi doanh nghiệp đều có những thách thức riêng. Chúng tôi cung cấp giải pháp tư vấn được thiết kế riêng cho nhu cầu cụ thể của bạn, không phải mô hình một khuôn mẫu.
            </p>
            <ul className="space-y-3">
              {['Phân tích sâu ngành nghề', 'Lộ trình linh hoạt', 'Hỗ trợ dài hạn'].map((item, i) => (
                <li key={i} className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-white" strokeWidth={2.5} />
                  </div>
                  <span className="text-slate-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-10 border-2 border-green-200">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-500 rounded-2xl mb-6">
              <TrendingUp className="w-8 h-8 text-white" strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Kết quả đo lường được</h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Chúng tôi cam kết mang lại giá trị kinh doanh thực tế với các chỉ số đo lường rõ ràng. Bạn sẽ thấy được ROI từ đầu tư vào AI.
            </p>
            <ul className="space-y-3">
              {['KPI rõ ràng', 'Báo cáo định kỳ', 'Tối ưu liên tục'].map((item, i) => (
                <li key={i} className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-white" strokeWidth={2.5} />
                  </div>
                  <span className="text-slate-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="relative bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 rounded-3xl p-12 text-center text-white overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)] opacity-50"></div>
          <div className="relative z-10">
            <Sparkles className="w-12 h-12 mx-auto mb-6 animate-pulse" strokeWidth={1.5} />
            <h2 className="text-4xl font-bold mb-6">Bắt đầu hành trình chuyển đổi số</h2>
            <p className="text-xl text-blue-50 mb-8 max-w-2xl mx-auto">
              Đặt lịch tư vấn miễn phí với chuyên gia AI của chúng tôi ngay hôm nay
            </p>
            <Link
              to="/#contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-slate-50 transition-all shadow-lg hover:shadow-xl group"
            >
              <span>Đặt lịch tư vấn miễn phí</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
