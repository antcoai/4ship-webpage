import { Link } from 'react-router-dom';
import { ArrowLeft, GraduationCap, Lightbulb, TrendingUp, Users, Target, Award, ArrowRight, Sparkles, Briefcase, Code, BarChart3, Zap, CheckCircle2, Building2, Clock, BookOpen } from 'lucide-react';

export default function Support() {
  return (
    <div className="min-h-screen bg-white">
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e520_1px,transparent_1px),linear-gradient(to_bottom,#4f46e520_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

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
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-semibold mb-6 backdrop-blur-sm">
              <GraduationCap className="w-4 h-4" />
              <span>Enterprise AI Training</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Chương trình Đào tạo AI<br/>
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">Toàn diện cho Doanh nghiệp</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed mb-8 max-w-3xl mx-auto">
              Hệ thống đào tạo 3 cấp độ được thiết kế bởi các chuyên gia hàng đầu, giúp chuyển đổi tổ chức từ chiến lược đến thực thi
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/#contact"
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all flex items-center space-x-2"
              >
                <span>Tư vấn chương trình</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="#programs"
                className="px-8 py-4 bg-white/10 border border-white/20 text-white rounded-xl font-semibold hover:bg-white/20 transition-all backdrop-blur-sm"
              >
                Khám phá ngay
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="relative bg-gradient-to-b from-slate-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4" />
              <span>3-Tier Training Framework</span>
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Mô hình đào tạo 3 cấp độ
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Từ Ban lãnh đạo đến Đội ngũ thực thi - Chuyển đổi toàn diện năng lực AI trong tổ chức
            </p>
          </div>

          <div id="programs" className="space-y-8 mb-20">
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative bg-white rounded-3xl border border-slate-200 overflow-hidden">
                <div className="grid lg:grid-cols-12">
                  <div className="lg:col-span-4 bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-700 p-10 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
                    <div className="relative">
                      <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-bold mb-6">
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                        <span>LEVEL 01</span>
                      </div>
                      <div className="mb-6">
                        <Lightbulb className="w-16 h-16 mb-4" strokeWidth={1.5} />
                        <h3 className="text-3xl font-bold mb-2">AI For Leaders</h3>
                        <p className="text-blue-100 text-lg font-medium">Chiến lược AI cho Lãnh đạo</p>
                      </div>

                      <div className="space-y-4 mb-8">
                        <div className="flex items-start space-x-3">
                          <Building2 className="w-5 h-5 text-cyan-300 flex-shrink-0 mt-1" strokeWidth={2} />
                          <div>
                            <div className="text-sm font-semibold text-cyan-300 mb-1">Đối tượng</div>
                            <div className="text-sm text-blue-100">C-Level, Directors, VPs</div>
                          </div>
                        </div>

                        <div className="flex items-start space-x-3">
                          <Clock className="w-5 h-5 text-cyan-300 flex-shrink-0 mt-1" strokeWidth={2} />
                          <div>
                            <div className="text-sm font-semibold text-cyan-300 mb-1">Thời lượng</div>
                            <div className="text-sm text-blue-100">1-2 ngày Workshop</div>
                          </div>
                        </div>

                        <div className="flex items-start space-x-3">
                          <BookOpen className="w-5 h-5 text-cyan-300 flex-shrink-0 mt-1" strokeWidth={2} />
                          <div>
                            <div className="text-sm font-semibold text-cyan-300 mb-1">Hình thức</div>
                            <div className="text-sm text-blue-100">Executive Workshop / Online</div>
                          </div>
                        </div>
                      </div>

                      <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                        <Target className="w-4 h-4" strokeWidth={2} />
                        <span className="text-sm font-semibold">Strategic Focus</span>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-8 p-10">
                    <div className="mb-8">
                      <div className="flex items-start space-x-3 mb-6">
                        <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Award className="w-6 h-6 text-blue-600" strokeWidth={2} />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-slate-900 mb-2">Giá trị cốt lõi</h4>
                          <p className="text-slate-600 leading-relaxed">
                            <strong className="text-slate-900">Xây dựng Chiến lược AI:</strong> Hiểu cách AI tạo lợi thế cạnh tranh, nhận diện cơ hội đầu tư và quản trị rủi ro đạo đức, pháp lý. Đánh giá mức độ sẵn sàng và xây dựng lộ trình chuyển đổi số phù hợp với mục tiêu tổ chức.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      {[
                        { icon: Target, text: 'Khung chiến lược AI toàn diện' },
                        { icon: BarChart3, text: 'Đánh giá mức độ trưởng thành AI' },
                        { icon: Lightbulb, text: 'Quản trị và Đạo đức AI' },
                        { icon: TrendingUp, text: 'Lộ trình chuyển đổi số' }
                      ].map((item, idx) => (
                        <div key={idx} className="group/item flex items-start space-x-3 p-4 rounded-xl hover:bg-blue-50 transition-colors">
                          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform">
                            <item.icon className="w-4 h-4 text-white" strokeWidth={2} />
                          </div>
                          <span className="text-slate-700 font-medium text-sm leading-relaxed">{item.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative bg-white rounded-3xl border border-slate-200 overflow-hidden">
                <div className="grid lg:grid-cols-12">
                  <div className="lg:col-span-4 bg-gradient-to-br from-cyan-600 via-cyan-700 to-blue-700 p-10 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
                    <div className="relative">
                      <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-bold mb-6">
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                        <span>LEVEL 02</span>
                      </div>
                      <div className="mb-6">
                        <Zap className="w-16 h-16 mb-4" strokeWidth={1.5} />
                        <h3 className="text-3xl font-bold mb-2">AI For Productivity</h3>
                        <p className="text-cyan-100 text-lg font-medium">AI cho Năng suất</p>
                      </div>

                      <div className="space-y-4 mb-8">
                        <div className="flex items-start space-x-3">
                          <Users className="w-5 h-5 text-cyan-300 flex-shrink-0 mt-1" strokeWidth={2} />
                          <div>
                            <div className="text-sm font-semibold text-cyan-300 mb-1">Đối tượng</div>
                            <div className="text-sm text-cyan-100">Marketing, Sales, HR, Văn phòng</div>
                          </div>
                        </div>

                        <div className="flex items-start space-x-3">
                          <Clock className="w-5 h-5 text-cyan-300 flex-shrink-0 mt-1" strokeWidth={2} />
                          <div>
                            <div className="text-sm font-semibold text-cyan-300 mb-1">Thời lượng</div>
                            <div className="text-sm text-cyan-100">Linh hoạt theo nhu cầu</div>
                          </div>
                        </div>

                        <div className="flex items-start space-x-3">
                          <BookOpen className="w-5 h-5 text-cyan-300 flex-shrink-0 mt-1" strokeWidth={2} />
                          <div>
                            <div className="text-sm font-semibold text-cyan-300 mb-1">Hình thức</div>
                            <div className="text-sm text-cyan-100">E-learning / Interactive Classes</div>
                          </div>
                        </div>
                      </div>

                      <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                        <TrendingUp className="w-4 h-4" strokeWidth={2} />
                        <span className="text-sm font-semibold">Productivity Focus</span>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-8 p-10">
                    <div className="mb-8">
                      <div className="flex items-start space-x-3 mb-6">
                        <div className="w-10 h-10 bg-cyan-100 rounded-xl flex items-center justify-center flex-shrink-0">
                          <TrendingUp className="w-6 h-6 text-cyan-600" strokeWidth={2} />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-slate-900 mb-2">Giá trị cốt lõi</h4>
                          <p className="text-slate-600 leading-relaxed">
                            <strong className="text-slate-900">Tăng năng suất tức thì 30%+:</strong> Thành thạo Prompt Engineering và sử dụng hiệu quả các công cụ AI tạo sinh (GenAI) trong công việc hàng ngày - từ viết nội dung, phân tích dữ liệu đến tự động hóa quy trình.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      {[
                        { icon: Sparkles, text: 'Prompt Engineering nâng cao' },
                        { icon: TrendingUp, text: 'AI trong Marketing & Content' },
                        { icon: Zap, text: 'Tự động hóa công việc văn phòng' },
                        { icon: BarChart3, text: 'Phân tích dữ liệu với AI' }
                      ].map((item, idx) => (
                        <div key={idx} className="group/item flex items-start space-x-3 p-4 rounded-xl hover:bg-cyan-50 transition-colors">
                          <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform">
                            <item.icon className="w-4 h-4 text-white" strokeWidth={2} />
                          </div>
                          <span className="text-slate-700 font-medium text-sm leading-relaxed">{item.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-700 to-cyan-700 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative bg-white rounded-3xl border border-slate-200 overflow-hidden">
                <div className="grid lg:grid-cols-12">
                  <div className="lg:col-span-4 bg-gradient-to-br from-blue-700 via-blue-800 to-cyan-800 p-10 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
                    <div className="relative">
                      <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-bold mb-6">
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                        <span>LEVEL 03</span>
                      </div>
                      <div className="mb-6">
                        <Code className="w-16 h-16 mb-4" strokeWidth={1.5} />
                        <h3 className="text-3xl font-bold mb-2">AI For Builders</h3>
                        <p className="text-blue-100 text-lg font-medium">AI cho Phát triển Kỹ thuật</p>
                      </div>

                      <div className="space-y-4 mb-8">
                        <div className="flex items-start space-x-3">
                          <Users className="w-5 h-5 text-cyan-300 flex-shrink-0 mt-1" strokeWidth={2} />
                          <div>
                            <div className="text-sm font-semibold text-cyan-300 mb-1">Đối tượng</div>
                            <div className="text-sm text-blue-100">Engineers, Data Scientists, Developers</div>
                          </div>
                        </div>

                        <div className="flex items-start space-x-3">
                          <Clock className="w-5 h-5 text-cyan-300 flex-shrink-0 mt-1" strokeWidth={2} />
                          <div>
                            <div className="text-sm font-semibold text-cyan-300 mb-1">Thời lượng</div>
                            <div className="text-sm text-blue-100">8-12 tuần intensive</div>
                          </div>
                        </div>

                        <div className="flex items-start space-x-3">
                          <BookOpen className="w-5 h-5 text-cyan-300 flex-shrink-0 mt-1" strokeWidth={2} />
                          <div>
                            <div className="text-sm font-semibold text-cyan-300 mb-1">Hình thức</div>
                            <div className="text-sm text-blue-100">Bootcamp / Project-based</div>
                          </div>
                        </div>
                      </div>

                      <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                        <Code className="w-4 h-4" strokeWidth={2} />
                        <span className="text-sm font-semibold">Technical Focus</span>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-8 p-10">
                    <div className="mb-8">
                      <div className="flex items-start space-x-3 mb-6">
                        <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Code className="w-6 h-6 text-blue-600" strokeWidth={2} />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-slate-900 mb-2">Giá trị cốt lõi</h4>
                          <p className="text-slate-600 leading-relaxed">
                            <strong className="text-slate-900">Nâng cấp R&D nội bộ:</strong> Phát triển năng lực xây dựng, tùy chỉnh và triển khai các giải pháp AI. Từ Machine Learning, MLOps đến Fine-tuning LLMs - Tạo sản phẩm và quy trình thông minh cho doanh nghiệp.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      {[
                        { icon: Code, text: 'Machine Learning & Deep Learning' },
                        { icon: Zap, text: 'MLOps và Model Deployment' },
                        { icon: Sparkles, text: 'Xây dựng RAG & LLMs nội bộ' },
                        { icon: Target, text: 'Fine-tuning Models' }
                      ].map((item, idx) => (
                        <div key={idx} className="group/item flex items-start space-x-3 p-4 rounded-xl hover:bg-blue-50 transition-colors">
                          <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform">
                            <item.icon className="w-4 h-4 text-white" strokeWidth={2} />
                          </div>
                          <span className="text-slate-700 font-medium text-sm leading-relaxed">{item.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              {
                icon: Award,
                title: 'Chứng chỉ quốc tế',
                description: 'Certificate được công nhận bởi các tổ chức hàng đầu',
                stats: '100% học viên'
              },
              {
                icon: Users,
                title: 'Chuyên gia thực chiến',
                description: 'Giảng viên từ các doanh nghiệp công nghệ hàng đầu',
                stats: '15+ năm kinh nghiệm'
              },
              {
                icon: Target,
                title: 'Dự án thực tế',
                description: 'Áp dụng ngay với case study từ tổ chức của bạn',
                stats: '100+ dự án'
              }
            ].map((feature, idx) => (
              <div key={idx} className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500"></div>
                <div className="relative bg-white rounded-2xl p-8 border-2 border-slate-200 group-hover:border-transparent transition-colors">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                  </div>
                  <div className="text-sm font-bold text-blue-600 mb-2">{feature.stats}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative bg-gradient-to-br from-blue-600 via-cyan-600 to-blue-700 rounded-3xl p-12 overflow-hidden">
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
            </div>
            <div className="relative z-10 text-center text-white">
              <GraduationCap className="w-14 h-14 mx-auto mb-6 opacity-90" strokeWidth={1.5} />
              <h2 className="text-4xl font-bold mb-4">Sẵn sàng chuyển đổi tổ chức với AI?</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
                Đăng ký tư vấn để nhận roadmap đào tạo chi tiết, phù hợp với mục tiêu và quy mô của doanh nghiệp bạn
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/#contact"
                  className="group inline-flex items-center justify-center space-x-2 px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-all shadow-xl hover:shadow-2xl"
                >
                  <span>Tư vấn miễn phí</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="tel:1900xxxx"
                  className="inline-flex items-center justify-center px-8 py-4 bg-blue-700 text-white rounded-xl font-semibold hover:bg-blue-800 transition-all border-2 border-blue-400"
                >
                  <span>Hotline: 1900 xxxx</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
