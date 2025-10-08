import { Link } from 'react-router-dom';
import { ArrowLeft, Code, Cpu, Database, CheckCircle, Globe, Cloud, ArrowRight, Boxes, Target, Server, Mic, Eye, MessageSquare, Volume2, Radio, Users, Layers, DollarSign, Check, Brain, Sparkles, Zap, Shield, Network } from 'lucide-react';

export default function Development() {
  return (
    <div className="min-h-screen bg-white">
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e520_1px,transparent_1px),linear-gradient(to_bottom,#4f46e520_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
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
              <Brain className="w-4 h-4" />
              <span>Enterprise AI Development</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Phát Triển Công Nghệ AI<br/>
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">Cấp Độ Doanh Nghiệp</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed mb-8 max-w-3xl mx-auto">
              Giải pháp AI toàn diện từ nghiên cứu đến triển khai, tối ưu hóa cho từng ngành nghề và quy mô doanh nghiệp của bạn
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/#contact"
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all flex items-center space-x-2"
              >
                <span>Tư vấn miễn phí</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="#models"
                className="px-8 py-4 bg-white/10 border border-white/20 text-white rounded-xl font-semibold hover:bg-white/20 transition-all backdrop-blur-sm"
              >
                Xem portfolio
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="relative bg-gradient-to-b from-slate-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-sm font-semibold mb-6">
              <Brain className="w-4 h-4" />
              <span>6 Giác quan AI</span>
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Hệ sinh thái mô hình AI
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-12">
              Phương pháp luận phát triển AI công nghiệp 4.0 được chứng minh hiệu quả
            </p>
          </div>

          {/* AI Development Process */}
          <div className="mb-20">
            <div className="relative">
              {/* Timeline connector */}
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-cyan-200 to-purple-200 transform -translate-y-1/2 hidden lg:block"></div>

              <div className="grid lg:grid-cols-3 gap-8 relative z-10">
                {[
                  {
                    step: "01",
                    title: "Xây dựng Nền tảng",
                    subtitle: "AI Foundation Architecture",
                    icon: Layers,
                    gradient: "from-blue-600 to-cyan-600",
                    description: "Thiết kế kiến trúc AI enterprise với khả năng mở rộng và bảo mật cao",
                    features: [
                      "Phân tích mục tiêu kinh doanh",
                      "Lựa chọn kiến trúc tối ưu cho hiệu suất và chi phí",
                      "Chuẩn bị hạ tầng cloud/on-premise linh hoạt"
                    ],
                    technologies: ["PyTorch", "TensorFlow", "Kubernetes", "MLOps"]
                  },
                  {
                    step: "02",
                    title: "Chuyên hóa Ngành nghề",
                    subtitle: "Industry-Specific Intelligence",
                    icon: Target,
                    gradient: "from-cyan-600 to-purple-600",
                    description: "Tùy chỉnh sâu cho từng lĩnh vực với hiệu suất vượt trội",
                    features: [
                      "Thu thập và xử lý dữ liệu ngành chuyên sâu",
                      "Fine-tuning mô hình với tri thức chuyên môn",
                      "Đánh giá hiệu quả trên tình huống thực tế",
                      "Tối ưu hóa liên tục qua phản hồi người dùng"
                    ],
                    technologies: ["Transfer Learning", "Few-shot Learning", "RAG", "Knowledge Graph"]
                  },
                  {
                    step: "03",
                    title: "Vận hành Enterprise",
                    subtitle: "Production Excellence",
                    icon: Zap,
                    gradient: "from-purple-600 to-pink-600",
                    description: "Triển khai, giám sát và mở rộng hệ thống AI cấp doanh nghiệp",
                    features: [
                      "Tối ưu hóa hiệu suất và giảm tài nguyên",
                      "Pipeline CI/CD tự động hóa hoàn toàn",
                      "Giám sát real-time và cảnh báo thông minh",
                      "Auto-scaling và quản lý chi phí tối ưu"
                    ],
                    technologies: ["Docker", "Kubernetes", "Prometheus", "Terraform"]
                  }
                ].map((phase, idx) => (
                  <div key={idx} className="group relative">
                    {/* Timeline dot */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 w-4 h-4 bg-white border-4 border-blue-500 rounded-full z-20 hidden lg:block"></div>

                    <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group-hover:border-blue-200">
                      {/* Header */}
                      <div className="flex items-center justify-between mb-6">
                        <span className="text-xs font-bold text-slate-400 bg-slate-100 px-3 py-1 rounded-full">{phase.step}</span>
                        <div className={`w-12 h-12 bg-gradient-to-br ${phase.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                          <phase.icon className="w-6 h-6 text-white" strokeWidth={2} />
                        </div>
                      </div>

                      {/* Title */}
                      <div className="mb-6">
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">{phase.title}</h3>
                        <p className={`text-sm font-semibold bg-gradient-to-r ${phase.gradient} bg-clip-text text-transparent`}>
                          {phase.subtitle}
                        </p>
                      </div>

                      {/* Description */}
                      <p className="text-slate-600 mb-6 leading-relaxed">{phase.description}</p>

                      {/* Features */}
                      <div className="space-y-3 mb-6">
                        <h4 className="text-sm font-semibold text-slate-900">Quy trình chính:</h4>
                        {phase.features.map((feature, i) => (
                          <div key={i} className="flex items-start space-x-3">
                            <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" strokeWidth={2} />
                            <span className="text-sm text-slate-600">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="text-sm font-semibold text-slate-900 mb-3">Công nghệ:</h4>
                        <div className="flex flex-wrap gap-2">
                          {phase.technologies.map((tech, i) => (
                            <span key={i} className={`px-3 py-1 bg-gradient-to-r ${phase.gradient} text-white rounded-full text-xs font-medium shadow-sm`}>
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Full width 6 Giác quan AI section */}
      <div id="models" className="relative bg-gradient-to-br from-blue-50 via-slate-50 to-cyan-50 py-20 overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 left-0 w-full h-full opacity-30">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-200 to-transparent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-l from-cyan-200 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-slate-900 mb-4">6 Năng lực AI Cốt lõi</h3>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">Nền tảng trí tuệ nhân tạo đa phương thức, tích hợp sâu và đạt chuẩn doanh nghiệp quốc tế</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                icon: MessageSquare,
                title: 'Ngôn ngữ Thông minh',
                subtitle: 'Advanced Language Intelligence',
                description: 'Xử lý ngôn ngữ phức tạp, hiểu ngữ cảnh và tạo nội dung chuyên nghiệp',
                delay: '0s'
              },
              {
                icon: Eye,
                title: 'Thị giác Đa phương thức',
                subtitle: 'Multimodal Vision Intelligence',
                description: 'Phân tích hình ảnh, video kết hợp ngôn ngữ cho hiểu biết toàn diện',
                delay: '0.1s'
              },
              {
                icon: Target,
                title: 'Nhận diện Thông minh',
                subtitle: 'Intelligent Recognition Systems',
                description: 'Nhận diện đối tượng, khuôn mặt, hành vi với độ chính xác cao',
                delay: '0.2s'
              },
              {
                icon: Volume2,
                title: 'Giọng nói Nhân tạo',
                subtitle: 'Natural Voice Synthesis',
                description: 'Tạo giọng nói tự nhiên, cá nhân hóa và đa cảm xúc',
                delay: '0.3s'
              },
              {
                icon: Mic,
                title: 'Nhận diện Giọng nói',
                subtitle: 'Advanced Speech Recognition',
                description: 'Chuyển đổi giọng nói thành văn bản với độ chính xác cao',
                delay: '0.4s'
              },
              {
                icon: Radio,
                title: 'Trí tuệ Âm thanh',
                subtitle: 'Advanced Audio Intelligence',
                description: 'Xử lý âm thanh phức tạp, tách tiếng và tổng hợp âm nhạc',
                delay: '0.5s'
              }
            ].map((model, idx) => (
              <div
                key={idx}
                className="group bg-white/70 backdrop-blur-sm border border-white/50 rounded-2xl p-8 hover:bg-white/90 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 animate-fade-in-up"
                style={{ animationDelay: model.delay }}
              >
                <div className="text-center">
                  <div className="mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <model.icon className="w-16 h-16 text-blue-600 mx-auto" strokeWidth={1.5} />
                  </div>
                  <h4 className="text-slate-900 font-bold text-xl mb-2">{model.title}</h4>
                  <p className="text-blue-600 font-semibold text-sm mb-3">{model.subtitle}</p>
                  <p className="text-slate-600 text-sm leading-relaxed">{model.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative bg-gradient-to-b from-cyan-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-sm font-semibold mb-6">
                <Layers className="w-4 h-4" />
                <span>Enterprise MLOps</span>
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Phương pháp luận MLOps Chuyên nghiệp</h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Quy trình công nghiệp hóa AI từ nghiên cứu đến sản xuất, đảm bảo chất lượng và hiệu quả kinh doanh
              </p>
            </div>

            <div className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 rounded-3xl p-8 md:p-12 overflow-hidden">
              {/* Sophisticated pattern overlay */}
              <div className="absolute inset-0 opacity-12">
                <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,rgba(255,255,255,0.1)_0deg,transparent_60deg,transparent_300deg,rgba(255,255,255,0.1)_360deg)] bg-[size:40px_40px]"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(59,130,246,0.1)_0%,transparent_50%),radial-gradient(circle_at_75%_75%,rgba(16,185,129,0.1)_0%,transparent_50%)] bg-[size:80px_80px]"></div>
                <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(-45deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
              </div>
              {/* Ambient lighting effects */}
              <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/8 to-transparent rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-cyan-500/8 to-transparent rounded-full blur-3xl"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-purple-500/6 to-pink-500/6 rounded-full blur-xl"></div>

              <div className="relative z-10">
                <div className="grid lg:grid-cols-5 gap-4 mb-12">
                  {[
                    {
                      step: '01',
                      title: 'Thu thập Dữ liệu',
                      icon: Database,
                      items: ['Dữ liệu chuẩn doanh nghiệp', 'Gán nhãn tự động', 'Kiểm chứng chất lượng']
                    },
                    {
                      step: '02',
                      title: 'Công nghệ Tiền xử lý',
                      icon: Code,
                      items: ['Làm sạch dữ liệu thông minh', 'Tăng cường dữ liệu', 'Trích xuất đặc trưng']
                    },
                    {
                      step: '03',
                      title: 'Huấn luyện Chuyên sâu',
                      icon: Brain,
                      items: ['Lựa chọn mô hình tối ưu', 'Fine-tuning chuyên nghiệp', 'Tối ưu hóa hiệu suất']
                    },
                    {
                      step: '04',
                      title: 'Kiểm thử & Xác thực',
                      icon: Target,
                      items: ['Kiểm thử toàn diện', 'Đánh giá so sánh', 'Xác thực thực tế']
                    },
                    {
                      step: '05',
                      title: 'Triển khai & Vận hành',
                      icon: Zap,
                      items: ['Triển khai tự động', 'Giám sát 24/7', 'Mở rộng linh hoạt']
                    }
                  ].map((step, idx) => (
                    <div key={idx} className="group relative">
                      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all">
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-xs font-bold text-blue-400">{step.step}</span>
                          <step.icon className="w-5 h-5 text-cyan-400" strokeWidth={1.5} />
                        </div>
                        <h3 className="text-white font-bold mb-3 text-sm">{step.title}</h3>
                        <ul className="space-y-1.5">
                          {step.items.map((item, i) => (
                            <li key={i} className="flex items-start space-x-2">
                              <div className="w-1 h-1 bg-blue-400 rounded-full mt-1.5 flex-shrink-0"></div>
                              <span className="text-slate-300 text-xs">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      {idx < 4 && (
                        <div className="hidden lg:block absolute top-1/2 -right-2 w-4 h-0.5 bg-gradient-to-r from-blue-500 to-transparent -translate-y-1/2"></div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    {
                      icon: Shield,
                      title: 'Bảo mật dữ liệu',
                      description: 'Mã hóa và bảo vệ dữ liệu training'
                    },
                    {
                      icon: Zap,
                      title: 'High Performance',
                      description: 'Tối ưu hóa tốc độ inference'
                    },
                    {
                      icon: Network,
                      title: 'MLOps Pipeline',
                      description: 'CI/CD cho machine learning'
                    }
                  ].map((item, idx) => (
                    <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-all">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center mb-3">
                        <item.icon className="w-5 h-5 text-white" strokeWidth={2} />
                      </div>
                      <h4 className="text-white font-bold mb-1 text-sm">{item.title}</h4>
                      <p className="text-slate-300 text-xs">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-sm font-semibold mb-6">
                <Cloud className="w-4 h-4" />
                <span>Triển khai Đa nền tảng</span>
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Linh hoạt Mọi Môi trường Vận hành</h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Tùy chọn nền tảng triển khai phù hợp với chiến lược công nghệ và yêu cầu bảo mật của doanh nghiệp
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Cloud',
                  icon: Cloud,
                  items: ['AWS', 'Azure', 'Google Cloud', 'Alibaba'],
                  gradient: 'from-blue-600 to-cyan-600'
                },
                {
                  title: 'On-Premise',
                  icon: Server,
                  items: ['Private Cloud', 'GPU Clusters', 'Hybrid', 'Air-gapped'],
                  gradient: 'from-cyan-600 to-blue-600'
                },
                {
                  title: 'Edge',
                  icon: Cpu,
                  items: ['Mobile', 'IoT', 'Embedded', 'Offline'],
                  gradient: 'from-purple-600 to-pink-600'
                }
              ].map((platform, idx) => (
                <div key={idx} className="group relative">
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${platform.gradient} rounded-3xl opacity-0 group-hover:opacity-100 blur transition duration-500`}></div>
                  <div className="relative bg-white rounded-3xl p-8 border-2 border-slate-200 group-hover:border-transparent hover:scale-105 hover:-translate-y-2 transition-all duration-500">
                    <div className={`w-14 h-14 bg-gradient-to-br ${platform.gradient} rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-2xl group-hover:rotate-6 transition-all duration-500`}>
                      <platform.icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{platform.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {platform.items.map((item, i) => (
                        <span key={i} className={`px-3 py-1 bg-gradient-to-r ${platform.gradient} text-white rounded-full text-xs font-semibold`}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative bg-gradient-to-br from-blue-600 via-cyan-600 to-blue-700 rounded-3xl p-12 overflow-hidden">
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
            </div>
            <div className="relative z-10 text-center text-white">
              <Brain className="w-14 h-14 mx-auto mb-6 opacity-90 animate-pulse" strokeWidth={1.5} />
              <h2 className="text-4xl font-bold mb-4">Bắt đầu dự án AI</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
                Tư vấn miễn phí • Proposal chi tiết • Timeline rõ ràng
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/#contact"
                  className="group inline-flex items-center justify-center space-x-2 px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-all shadow-xl hover:shadow-2xl"
                >
                  <span>Đặt lịch tư vấn</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="#models"
                  className="inline-flex items-center justify-center px-8 py-4 bg-blue-700 text-white rounded-xl font-semibold hover:bg-blue-800 transition-all border-2 border-blue-400"
                >
                  Xem các mô hình
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
