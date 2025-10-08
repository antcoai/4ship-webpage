import { Link } from 'react-router-dom';
import { ArrowLeft, Puzzle, Zap, Shield, CheckCircle, Network, Server, Lock, RefreshCw, Bot, Workflow, Database, Cloud, ArrowRight, Sparkles, Code, GitBranch, Boxes, DollarSign, Check } from 'lucide-react';

export default function Integration() {
  return (
    <div className="min-h-screen bg-white">
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e520_1px,transparent_1px),linear-gradient(to_bottom,#4f46e520_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
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
              <Workflow className="w-4 h-4" />
              <span>AI System Integration</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Tích hợp AI Agent vào<br/>
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">Hệ thống Hiện tại</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed mb-8 max-w-3xl mx-auto">
              Kết nối liền mạch AI Agents, MCP Protocol và các giải pháp thông minh vào workflow doanh nghiệp với bảo mật tối đa
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/#contact"
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all flex items-center space-x-2"
              >
                <span>Tư vấn tích hợp</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="#architecture"
                className="px-8 py-4 bg-white/10 border border-white/20 text-white rounded-xl font-semibold hover:bg-white/20 transition-all backdrop-blur-sm"
              >
                Xem kiến trúc
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="relative bg-gradient-to-b from-slate-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-sm font-semibold mb-6">
              <Bot className="w-4 h-4" />
              <span>AI-Powered Integration</span>
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Giải pháp tích hợp thông minh
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Từ AI Agents tự động đến MCP Protocol - Chuyển đổi hệ thống của bạn thành nền tảng thông minh
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {[
              {
                icon: Bot,
                title: 'AI Agents Integration',
                description: 'Triển khai các AI Agent thông minh tự động hóa quy trình nghiệp vụ',
                features: ['Autonomous Decision Making', 'Multi-Agent Orchestration', 'Context-Aware Processing', 'Self-Learning Capabilities'],
                gradient: 'from-blue-600 to-cyan-600',
                borderColor: 'border-blue-200',
                bgGradient: 'from-blue-50 to-cyan-50'
              },
              {
                icon: Workflow,
                title: 'MCP Protocol Integration',
                description: 'Kết nối với Model Context Protocol để tăng cường khả năng AI',
                features: ['Standardized Communication', 'Context Management', 'Tool Integration', 'Real-time Sync'],
                gradient: 'from-cyan-600 to-blue-600',
                borderColor: 'border-cyan-200',
                bgGradient: 'from-cyan-50 to-blue-50'
              },
              {
                icon: Network,
                title: 'System Integration',
                description: 'Tích hợp liền mạch với ERP, CRM và hệ thống legacy hiện tại',
                features: ['RESTful API', 'GraphQL', 'Event-Driven', 'Microservices'],
                gradient: 'from-blue-700 to-cyan-700',
                borderColor: 'border-blue-300',
                bgGradient: 'from-blue-50 to-cyan-50'
              }
            ].map((service, idx) => (
              <div key={idx} className="group relative">
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${service.gradient} rounded-3xl opacity-0 group-hover:opacity-100 blur transition duration-500`}></div>
                <div className={`relative bg-gradient-to-br ${service.bgGradient} rounded-3xl p-8 border-2 ${service.borderColor} group-hover:border-transparent transition-colors overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/40 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className={`relative w-14 h-14 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                    <service.icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                  </div>
                  <h3 className="relative text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="relative text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="relative space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <div className={`w-5 h-5 bg-gradient-to-br ${service.gradient} rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}>
                          <Check className="w-3 h-3 text-white" strokeWidth={3} />
                        </div>
                        <span className="text-slate-700 text-sm font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div id="architecture" className="relative mb-20 overflow-hidden">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-sm font-semibold mb-6">
                <Boxes className="w-4 h-4" />
                <span>Kiến trúc tích hợp</span>
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Kiến trúc tích hợp AI toàn diện</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Sơ đồ chi tiết về cách AI Agents, MCP Protocol và hệ thống của bạn kết nối liền mạch
              </p>
            </div>

            <div className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 rounded-3xl p-8 md:p-12 overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-30"></div>
              <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>

              <div className="relative z-10">
                <div className="flex items-center justify-center mb-8">
                  <div className="px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-300 text-sm font-bold">
                    Môi trường triển khai
                  </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 mb-12">
                  <div className="bg-white/5 backdrop-blur-sm border-2 border-cyan-500/30 rounded-2xl p-6">
                    <div className="flex items-center space-x-3 mb-6">
                      <Cloud className="w-8 h-8 text-cyan-400" strokeWidth={1.5} />
                      <div>
                        <h3 className="text-white font-bold text-lg">Cloud Infrastructure</h3>
                        <p className="text-cyan-300 text-sm">Triển khai trên nền tảng đám mây</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      {['AWS / Azure / Google Cloud', 'Kubernetes Orchestration', 'Auto-scaling & Load Balancing', 'Multi-region Deployment'].map((item, i) => (
                        <div key={i} className="flex items-center space-x-2 text-slate-300 text-sm">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white/5 backdrop-blur-sm border-2 border-blue-500/30 rounded-2xl p-6">
                    <div className="flex items-center space-x-3 mb-6">
                      <Server className="w-8 h-8 text-blue-400" strokeWidth={1.5} />
                      <div>
                        <h3 className="text-white font-bold text-lg">On-Premise</h3>
                        <p className="text-blue-300 text-sm">Triển khai tại hạ tầng khách hàng</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      {['Private Data Center', 'VPN Secured Connection', 'Dedicated Hardware', 'Full Data Control'].map((item, i) => (
                        <div key={i} className="flex items-center space-x-2 text-slate-300 text-sm">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-blue-500 to-transparent opacity-50"></div>

                  <div className="grid lg:grid-cols-3 gap-6 mb-8">
                    <div className="group relative">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl opacity-50 group-hover:opacity-75 blur transition duration-500"></div>
                      <div className="relative bg-slate-800/90 backdrop-blur-sm border border-orange-500/30 rounded-2xl p-6">
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="text-white font-bold">Hệ thống hiện tại</h4>
                          <Database className="w-6 h-6 text-orange-400" strokeWidth={1.5} />
                        </div>
                        <div className="space-y-3">
                          <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                            <div className="flex items-center space-x-2 mb-2">
                              <Server className="w-4 h-4 text-orange-400" strokeWidth={2} />
                              <span className="text-white text-sm font-semibold">ERP System</span>
                            </div>
                            <p className="text-slate-400 text-xs">SAP, Oracle, Microsoft Dynamics</p>
                          </div>
                          <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                            <div className="flex items-center space-x-2 mb-2">
                              <Network className="w-4 h-4 text-orange-400" strokeWidth={2} />
                              <span className="text-white text-sm font-semibold">CRM System</span>
                            </div>
                            <p className="text-slate-400 text-xs">Salesforce, HubSpot</p>
                          </div>
                          <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                            <div className="flex items-center space-x-2 mb-2">
                              <Database className="w-4 h-4 text-orange-400" strokeWidth={2} />
                              <span className="text-white text-sm font-semibold">Database</span>
                            </div>
                            <p className="text-slate-400 text-xs">PostgreSQL, MongoDB, MySQL</p>
                          </div>
                          <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                            <div className="flex items-center space-x-2 mb-2">
                              <Server className="w-4 h-4 text-orange-400" strokeWidth={2} />
                              <span className="text-white text-sm font-semibold">Legacy Systems</span>
                            </div>
                            <p className="text-slate-400 text-xs">Hệ thống kế thừa</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col justify-center space-y-6">
                      <div className="flex flex-col items-center space-y-2">
                        <div className="flex items-center space-x-2">
                          <div className="w-16 h-0.5 bg-gradient-to-r from-orange-500 to-blue-500 animate-pulse"></div>
                          <ArrowRight className="w-6 h-6 text-blue-400 animate-pulse" strokeWidth={2} />
                        </div>
                        <div className="text-xs text-slate-400">API Gateway</div>
                      </div>

                      <div className="group relative">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl opacity-75 group-hover:opacity-100 blur transition duration-500"></div>
                        <div className="relative bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-6 shadow-2xl">
                          <Workflow className="w-8 h-8 text-white mb-3" strokeWidth={1.5} />
                          <h4 className="text-white font-bold mb-1">MCP Layer</h4>
                          <p className="text-blue-100 text-xs mb-3">Model Context Protocol</p>
                          <div className="space-y-1.5">
                            {['Context Manager', 'Protocol Bridge', 'Tool Integration', 'Event Router'].map((item, i) => (
                              <div key={i} className="flex items-center space-x-2">
                                <CheckCircle className="w-3 h-3 text-white" strokeWidth={2} />
                                <span className="text-white text-xs">{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col items-center space-y-2">
                        <div className="flex items-center space-x-2">
                          <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                          <ArrowRight className="w-6 h-6 text-cyan-400 animate-pulse" strokeWidth={2} style={{ animationDelay: '0.3s' }} />
                        </div>
                        <div className="text-xs text-slate-400">Secure Channel</div>
                      </div>
                    </div>

                    <div className="group relative">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-green-500 rounded-2xl opacity-50 group-hover:opacity-75 blur transition duration-500"></div>
                      <div className="relative bg-slate-800/90 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-6">
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="text-white font-bold">AI Platform</h4>
                          <Bot className="w-6 h-6 text-cyan-400" strokeWidth={1.5} />
                        </div>
                        <div className="space-y-3">
                          <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                            <div className="flex items-center space-x-2 mb-2">
                              <Bot className="w-4 h-4 text-cyan-400" strokeWidth={2} />
                              <span className="text-white text-sm font-semibold">AI Agents</span>
                            </div>
                            <p className="text-slate-400 text-xs">Tự động hóa quy trình thông minh</p>
                          </div>
                          <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                            <div className="flex items-center space-x-2 mb-2">
                              <Sparkles className="w-4 h-4 text-cyan-400" strokeWidth={2} />
                              <span className="text-white text-sm font-semibold">LLM Engine</span>
                            </div>
                            <p className="text-slate-400 text-xs">GPT-4, Claude, Gemini</p>
                          </div>
                          <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                            <div className="flex items-center space-x-2 mb-2">
                              <Code className="w-4 h-4 text-cyan-400" strokeWidth={2} />
                              <span className="text-white text-sm font-semibold">Tool Ecosystem</span>
                            </div>
                            <p className="text-slate-400 text-xs">Functions, APIs, Webhooks</p>
                          </div>
                          <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                            <div className="flex items-center space-x-2 mb-2">
                              <Shield className="w-4 h-4 text-cyan-400" strokeWidth={2} />
                              <span className="text-white text-sm font-semibold">Security Layer</span>
                            </div>
                            <p className="text-slate-400 text-xs">Authentication & Encryption</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-12 grid md:grid-cols-4 gap-4">
                  {[
                    {
                      icon: Shield,
                      title: 'Bảo mật dữ liệu',
                      description: 'Mã hóa end-to-end & xác thực đa lớp'
                    },
                    {
                      icon: Zap,
                      title: 'Đồng bộ thời gian thực',
                      description: 'Kiến trúc sự kiện với độ trễ thấp'
                    },
                    {
                      icon: RefreshCw,
                      title: 'Tự động mở rộng',
                      description: 'Phân bổ tài nguyên động theo tải'
                    },
                    {
                      icon: Lock,
                      title: 'Kiểm soát truy cập',
                      description: 'Role-based access & audit logs'
                    }
                  ].map((item, idx) => (
                    <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-all group">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                        <item.icon className="w-5 h-5 text-white" strokeWidth={2} />
                      </div>
                      <h4 className="text-white font-bold mb-1 text-sm">{item.title}</h4>
                      <p className="text-slate-300 text-xs leading-relaxed">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-sm font-semibold mb-6">
                <Code className="w-4 h-4" />
                <span>Integration Capabilities</span>
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Khả năng tích hợp</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  category: 'Enterprise Systems',
                  icon: Building2,
                  items: ['SAP', 'Oracle ERP', 'Microsoft Dynamics', 'Salesforce']
                },
                {
                  category: 'Communication',
                  icon: MessageCircle,
                  items: ['Slack', 'MS Teams', 'Telegram', 'Discord']
                },
                {
                  category: 'Databases',
                  icon: Database,
                  items: ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch']
                },
                {
                  category: 'Cloud Platforms',
                  icon: Cloud,
                  items: ['AWS', 'Azure', 'Google Cloud', 'Alibaba Cloud']
                }
              ].map((category, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-6 border-2 border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center mb-4">
                    <category.icon className="w-6 h-6 text-white" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-4">{category.category}</h3>
                  <ul className="space-y-2">
                    {category.items.map((item, i) => (
                      <li key={i} className="flex items-center space-x-2 text-slate-700 text-sm">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div id="pricing" className="mb-20">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-sm font-semibold mb-6">
                <DollarSign className="w-4 h-4" />
                <span>Transparent Pricing</span>
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Gói tích hợp linh hoạt</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Lựa chọn gói phù hợp với quy mô và nhu cầu của doanh nghiệp
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {[
                {
                  name: 'Starter',
                  price: 'Liên hệ',
                  description: 'Phù hợp cho doanh nghiệp vừa và nhỏ',
                  features: [
                    'Tối đa 2 hệ thống tích hợp',
                    'Cơ bản AI Agent',
                    'API Integration',
                    'Email Support',
                    'Documentation Access'
                  ],
                  highlighted: false
                },
                {
                  name: 'Professional',
                  price: 'Liên hệ',
                  description: 'Dành cho doanh nghiệp đang mở rộng',
                  features: [
                    'Không giới hạn tích hợp',
                    'Advanced AI Agents',
                    'MCP Protocol Support',
                    'Priority Support 24/7',
                    'Custom Development',
                    'Dedicated Account Manager'
                  ],
                  highlighted: true
                },
                {
                  name: 'Enterprise',
                  price: 'Tùy chỉnh',
                  description: 'Giải pháp toàn diện cho tổ chức lớn',
                  features: [
                    'Tất cả tính năng Pro',
                    'Multi-Agent Orchestration',
                    'On-premise Deployment',
                    'SLA 99.99%',
                    'Custom AI Training',
                    'White-label Solution'
                  ],
                  highlighted: false
                }
              ].map((plan, idx) => (
                <div key={idx} className={`relative group ${plan.highlighted ? 'lg:scale-105' : ''}`}>
                  {plan.highlighted && (
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-500"></div>
                  )}
                  <div className={`relative bg-white rounded-3xl p-8 border-2 ${plan.highlighted ? 'border-transparent' : 'border-slate-200'} hover:shadow-2xl transition-all`}>
                    {plan.highlighted && (
                      <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-sm font-bold rounded-full">
                        RECOMMENDED
                      </div>
                    )}
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                    </div>
                    <p className="text-slate-600 mb-6">{plan.description}</p>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" strokeWidth={2} />
                          <span className="text-slate-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/#contact"
                      className={`block text-center px-6 py-3 rounded-xl font-semibold transition-all ${
                        plan.highlighted
                          ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:shadow-lg hover:shadow-blue-500/50'
                          : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                      }`}
                    >
                      Liên hệ tư vấn
                    </Link>
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
              <Sparkles className="w-14 h-14 mx-auto mb-6 opacity-90" strokeWidth={1.5} />
              <h2 className="text-4xl font-bold mb-4">Sẵn sàng tích hợp AI vào hệ thống?</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
                Đặt lịch demo để xem cách AI Agents và MCP có thể chuyển đổi quy trình của bạn
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/#contact"
                  className="group inline-flex items-center justify-center space-x-2 px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-all shadow-xl hover:shadow-2xl"
                >
                  <span>Đặt lịch Demo</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="#architecture"
                  className="inline-flex items-center justify-center px-8 py-4 bg-blue-700 text-white rounded-xl font-semibold hover:bg-blue-800 transition-all border-2 border-blue-400"
                >
                  Xem kiến trúc
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper icons (add to imports if missing)
const Building2 = Server;
const MessageCircle = Network;
