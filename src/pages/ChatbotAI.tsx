import { useState } from 'react';
import { ArrowLeft, MessageSquare, Send, Code, Zap, Shield, Globe, CheckCircle, Copy, Check, Database, FileText, Link as LinkIcon, BarChart3, ChevronDown, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ChatbotAI() {
  const [activeTab, setActiveTab] = useState<'chat' | 'api'>('chat');
  const [chatMessages, setChatMessages] = useState([
    { role: 'assistant', content: 'Xin chào! Tôi là chatbot AI của 4SHIP. Tôi có thể giúp gì cho bạn?' }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [selectedAPI, setSelectedAPI] = useState('qa');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    setChatMessages([...chatMessages,
      { role: 'user', content: inputMessage },
      { role: 'assistant', content: 'Đây là câu trả lời mẫu từ Chatbot AI. Trong phiên bản production, hệ thống sẽ xử lý và trả lời câu hỏi của bạn một cách thông minh dựa trên dữ liệu đã được đào tạo.' }
    ]);
    setInputMessage('');
  };

  const apiEndpoints = [
    {
      id: 'qa',
      name: 'API Hỏi đáp',
      description: 'Gửi câu hỏi và nhận câu trả lời từ AI',
      method: 'POST',
      endpoint: '/api/v1/chatbot/query',
      code: `curl -X POST https://api.4ship.vn/v1/chatbot/query \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "message": "Sản phẩm của bạn có những tính năng gì?",
    "session_id": "user_123",
    "context": {}
  }'`
    },
    {
      id: 'train',
      name: 'API Đào tạo',
      description: 'Cập nhật kiến thức cho chatbot',
      method: 'POST',
      endpoint: '/api/v1/chatbot/train',
      code: `curl -X POST https://api.4ship.vn/v1/chatbot/train \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "documents": [
      {
        "title": "Sản phẩm mới",
        "content": "Nội dung mô tả sản phẩm..."
      }
    ],
    "auto_process": true
  }'`
    },
    {
      id: 'sessions',
      name: 'API Quản lý phiên',
      description: 'Quản lý lịch sử hội thoại',
      method: 'GET',
      endpoint: '/api/v1/chatbot/sessions',
      code: `curl -X GET https://api.4ship.vn/v1/chatbot/sessions \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`
    },
    {
      id: 'analytics',
      name: 'API Phân tích',
      description: 'Thống kê và phân tích hiệu suất',
      method: 'GET',
      endpoint: '/api/v1/chatbot/analytics',
      code: `curl -X GET https://api.4ship.vn/v1/chatbot/analytics \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "from_date": "2024-01-01",
    "to_date": "2024-12-31"
  }'`
    }
  ];

  const features = [
    {
      icon: Zap,
      title: 'Phản hồi nhanh',
      description: 'Thời gian phản hồi dưới 100ms'
    },
    {
      icon: Shield,
      title: 'Bảo mật cao',
      description: 'Mã hóa end-to-end, tuân thủ GDPR'
    },
    {
      icon: Globe,
      title: 'Đa ngôn ngữ',
      description: 'Hỗ trợ 20+ ngôn ngữ khác nhau'
    },
    {
      icon: CheckCircle,
      title: 'Độ chính xác cao',
      description: '95% độ chính xác trong trả lời'
    }
  ];

  const dataSources = [
    {
      icon: LinkIcon,
      title: 'Website & Landing Pages',
      description: 'Crawl và thu thập dữ liệu tự động từ website của bạn. Chatbot sẽ hiểu và trả lời dựa trên nội dung trang web.',
      features: ['Auto-crawl URLs', 'Sitemap integration', 'Real-time updates']
    },
    {
      icon: Database,
      title: 'Cơ sở dữ liệu',
      description: 'Kết nối trực tiếp với database (MySQL, PostgreSQL, MongoDB) để truy vấn và cung cấp thông tin real-time.',
      features: ['SQL/NoSQL support', 'Secure connections', 'Query optimization']
    },
    {
      icon: FileText,
      title: 'Tài liệu & Files',
      description: 'Upload và xử lý các file PDF, Word, Excel, TXT. Hệ thống tự động trích xuất và phân tích nội dung.',
      features: ['PDF/DOCX/XLSX support', 'OCR processing', 'Bulk upload']
    },
    {
      icon: Code,
      title: 'API & Webhooks',
      description: 'Tích hợp với API của bên thứ ba để lấy dữ liệu động. Hỗ trợ REST API và GraphQL.',
      features: ['REST & GraphQL', 'Webhook triggers', 'Custom integrations']
    }
  ];

  const faqs = [
    {
      question: 'Thời gian triển khai chatbot mất bao lâu?',
      answer: 'Thời gian triển khai phụ thuộc vào độ phức tạp của dự án. Thông thường, một chatbot cơ bản có thể triển khai trong 1-2 tuần. Các dự án phức tạp hơn với tích hợp nhiều nguồn dữ liệu và customization sâu có thể mất 4-6 tuần.'
    },
    {
      question: 'Chatbot có hỗ trợ tiếng Việt không?',
      answer: 'Có, chatbot của chúng tôi được tối ưu hóa đặc biệt cho tiếng Việt với khả năng hiểu ngữ cảnh, từ lóng, và các biến thể ngôn ngữ. Ngoài ra còn hỗ trợ 20+ ngôn ngữ khác để phục vụ khách hàng quốc tế.'
    },
    {
      question: 'Dữ liệu của tôi có được bảo mật không?',
      answer: 'Chúng tôi tuân thủ các tiêu chuẩn bảo mật cao nhất bao gồm mã hóa end-to-end, ISO 27001, và GDPR. Dữ liệu của bạn được lưu trữ an toàn và không bao giờ được chia sẻ với bên thứ ba. Bạn có toàn quyền kiểm soát và xóa dữ liệu bất cứ lúc nào.'
    },
    {
      question: 'Tôi có thể tùy chỉnh giao diện chatbot không?',
      answer: 'Hoàn toàn có thể! Bạn có thể tùy chỉnh màu sắc, logo, font chữ, vị trí hiển thị, và cả personality của chatbot để phù hợp với thương hiệu của bạn. Chúng tôi cung cấp cả widget nhúng và API để tích hợp linh hoạt.'
    },
    {
      question: 'Chatbot có thể tích hợp với hệ thống CRM của tôi không?',
      answer: 'Có, chatbot hỗ trợ tích hợp với hầu hết các hệ thống CRM phổ biến như Salesforce, HubSpot, Zoho CRM. Ngoài ra, chúng tôi cung cấp API và webhook để tích hợp với bất kỳ hệ thống custom nào.'
    },
    {
      question: 'Làm sao để đào tạo chatbot với dữ liệu mới?',
      answer: 'Bạn có thể đào tạo chatbot qua nhiều cách: upload file, nhập URL website, kết nối database, hoặc nhập trực tiếp qua giao diện quản lý. Hệ thống sẽ tự động xử lý và cập nhật kiến thức. Bạn cũng có thể sử dụng API để tự động hóa quá trình này.'
    }
  ];

  const pricingPlans = [
    {
      name: 'Usage-Based',
      description: 'Thanh toán theo số lượng request',
      icon: BarChart3,
      features: [
        'Tính phí theo request thực tế',
        'Không giới hạn tính năng',
        'Scale tự động theo nhu cầu',
        'Báo cáo chi tiết usage',
        'Hỗ trợ 24/7'
      ],
      pricing: [
        { range: '0 - 10,000 requests/tháng', price: 'Miễn phí (0đ)' },
        { range: '10,001 - 100,000 requests', price: '0.50đ/request' },
        { range: '100,001 - 500,000 requests', price: '0.40đ/request' },
        { range: '500,000+ requests', price: 'Liên hệ để báo giá' }
      ]
    },
    {
      name: 'Dedicated Instance',
      description: 'Máy chủ riêng biệt cho doanh nghiệp',
      icon: Shield,
      features: [
        'Server riêng biệt, độc lập',
        'Không giới hạn request',
        'Custom domain & branding',
        'Priority support',
        'SLA 99.9% uptime',
        'Dedicated account manager'
      ],
      pricing: [
        { range: 'Small Instance', price: '15,000,000đ/tháng' },
        { range: 'Medium Instance', price: '30,000,000đ/tháng' },
        { range: 'Large Instance', price: '50,000,000đ/tháng' },
        { range: 'Enterprise Instance', price: 'Liên hệ để báo giá' }
      ]
    }
  ];

  const copyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const currentAPI = apiEndpoints.find(api => api.id === selectedAPI);

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20">
        <div className="container mx-auto px-6">
          <Link to="/" className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 mb-8 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span>Quay lại trang chủ</span>
          </Link>

          <div className="max-w-4xl">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full mb-6">
              <MessageSquare className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-semibold text-cyan-300">GIẢI PHÁP AI</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Chatbot AI</h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Trợ lý ảo thông minh 24/7, tự động xử lý yêu cầu khách hàng với độ chính xác cao.
              Hệ thống học máy liên tục để cải thiện chất lượng phục vụ.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {features.map((feature) => (
                <div key={feature.title} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <feature.icon className="w-8 h-8 text-cyan-400 mb-2" />
                  <h3 className="font-semibold text-sm mb-1">{feature.title}</h3>
                  <p className="text-xs text-slate-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-50 py-16">
        <div className="w-full">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Playground & Tích hợp API</h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Trải nghiệm chatbot trực tiếp và xem cách tích hợp vào hệ thống của bạn
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
              <div className="border-b border-slate-200 bg-slate-50">
                <div className="flex">
                  <button
                    onClick={() => setActiveTab('chat')}
                    className={`flex-1 px-8 py-5 font-semibold transition-all ${
                      activeTab === 'chat'
                        ? 'bg-white text-blue-600 border-b-3 border-blue-600 shadow-sm'
                        : 'text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    <div className="flex items-center justify-center space-x-2">
                      <MessageSquare className="w-5 h-5" />
                      <span>Chat Demo</span>
                    </div>
                  </button>
                  <button
                    onClick={() => setActiveTab('api')}
                    className={`flex-1 px-8 py-5 font-semibold transition-all ${
                      activeTab === 'api'
                        ? 'bg-white text-blue-600 border-b-3 border-blue-600 shadow-sm'
                        : 'text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    <div className="flex items-center justify-center space-x-2">
                      <Code className="w-5 h-5" />
                      <span>API Integration</span>
                    </div>
                  </button>
                </div>
              </div>

              <div className="min-h-[750px] grid lg:grid-cols-12">
                {activeTab === 'chat' ? (
                  <>
                    <div className="lg:col-span-8 border-r border-slate-200 flex flex-col">
                      <div className="flex-1 p-8 overflow-y-auto bg-gradient-to-b from-slate-50 to-white" style={{ maxHeight: '750px' }}>
                        <div className="max-w-4xl mx-auto space-y-6">
                          {chatMessages.map((msg, idx) => (
                            <div
                              key={idx}
                              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-fadeIn`}
                            >
                              {msg.role === 'assistant' && (
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center mr-3 flex-shrink-0">
                                  <MessageSquare className="w-5 h-5 text-white" />
                                </div>
                              )}
                              <div
                                className={`max-w-[75%] rounded-2xl px-6 py-4 ${
                                  msg.role === 'user'
                                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg'
                                    : 'bg-white border border-slate-200 text-slate-900 shadow-md'
                                }`}
                              >
                                <p className="text-[15px] leading-relaxed">{msg.content}</p>
                              </div>
                              {msg.role === 'user' && (
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-600 to-slate-800 flex items-center justify-center ml-3 flex-shrink-0 text-white font-semibold">
                                  U
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="border-t border-slate-200 p-6 bg-white">
                        <div className="max-w-4xl mx-auto">
                          <div className="flex space-x-3">
                            <input
                              type="text"
                              value={inputMessage}
                              onChange={(e) => setInputMessage(e.target.value)}
                              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                              placeholder="Nhập câu hỏi của bạn..."
                              className="flex-1 px-5 py-4 border-2 border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base shadow-sm"
                            />
                            <button
                              onClick={handleSendMessage}
                              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl hover:shadow-xl transition-all flex items-center space-x-2 font-semibold"
                            >
                              <Send className="w-5 h-5" />
                              <span>Gửi</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="lg:col-span-4 bg-slate-50 p-8 overflow-y-auto" style={{ maxHeight: '750px' }}>
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-lg font-bold text-slate-900 mb-4">Thông tin Demo</h3>
                          <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
                            <div className="flex items-start space-x-3">
                              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                                <MessageSquare className="w-5 h-5 text-blue-600" />
                              </div>
                              <div>
                                <h4 className="font-semibold text-slate-900 mb-2">Môi trường Demo</h4>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                  Chatbot này sử dụng dữ liệu mẫu. Trong production, AI sẽ được đào tạo với dữ liệu thực tế của bạn.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h3 className="text-lg font-bold text-slate-900 mb-4">Khả năng</h3>
                          <div className="space-y-3">
                            <div className="bg-white rounded-lg p-4 border border-slate-200">
                              <div className="flex items-start space-x-3">
                                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                <div>
                                  <h5 className="font-semibold text-slate-900 text-sm mb-1">Trả lời tức thì</h5>
                                  <p className="text-xs text-slate-600">Phản hồi dưới 100ms</p>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white rounded-lg p-4 border border-slate-200">
                              <div className="flex items-start space-x-3">
                                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                <div>
                                  <h5 className="font-semibold text-slate-900 text-sm mb-1">Hiểu ngữ cảnh</h5>
                                  <p className="text-xs text-slate-600">Nhớ và liên kết hội thoại</p>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white rounded-lg p-4 border border-slate-200">
                              <div className="flex items-start space-x-3">
                                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                <div>
                                  <h5 className="font-semibold text-slate-900 text-sm mb-1">Đa nguồn dữ liệu</h5>
                                  <p className="text-xs text-slate-600">Website, DB, Files, API</p>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white rounded-lg p-4 border border-slate-200">
                              <div className="flex items-start space-x-3">
                                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                <div>
                                  <h5 className="font-semibold text-slate-900 text-sm mb-1">Học liên tục</h5>
                                  <p className="text-xs text-slate-600">Cải thiện theo thời gian</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h3 className="text-lg font-bold text-slate-900 mb-4">Câu hỏi gợi ý</h3>
                          <div className="space-y-2">
                            {[
                              'Chatbot có thể làm gì?',
                              'Thời gian tích hợp mất bao lâu?',
                              'Chi phí triển khai như thế nào?',
                              'Hỗ trợ những ngôn ngữ nào?'
                            ].map((question, idx) => (
                              <button
                                key={idx}
                                onClick={() => {
                                  setInputMessage(question);
                                }}
                                className="w-full text-left px-4 py-3 bg-white hover:bg-blue-50 border border-slate-200 hover:border-blue-300 rounded-lg text-sm text-slate-700 hover:text-blue-700 transition-all"
                              >
                                {question}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="lg:col-span-12 grid lg:grid-cols-3 gap-8 p-8">
                    <div className="lg:col-span-1">
                      <h3 className="font-bold text-slate-900 text-lg mb-6">API Endpoints</h3>
                      <div className="space-y-3">
                        {apiEndpoints.map((api) => (
                          <button
                            key={api.id}
                            onClick={() => setSelectedAPI(api.id)}
                            className={`w-full text-left px-5 py-4 rounded-xl transition-all ${
                              selectedAPI === api.id
                                ? 'bg-blue-50 border-2 border-blue-500 text-blue-700 shadow-md'
                                : 'bg-slate-50 border-2 border-slate-200 text-slate-700 hover:bg-slate-100 hover:border-slate-300'
                            }`}
                          >
                            <div className="font-semibold mb-1">{api.name}</div>
                            <div className="text-xs opacity-75">{api.description}</div>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="lg:col-span-2">
                      {currentAPI && (
                        <div className="space-y-6">
                          <div>
                            <h3 className="font-bold text-slate-900 text-2xl mb-3">{currentAPI.name}</h3>
                            <p className="text-slate-600 mb-6 text-base">{currentAPI.description}</p>

                            <div className="flex items-center space-x-3 mb-6">
                              <span className="px-4 py-2 bg-green-100 text-green-700 rounded-lg font-mono text-sm font-bold">
                                {currentAPI.method}
                              </span>
                              <code className="text-sm text-slate-700 bg-slate-100 px-4 py-2 rounded-lg font-mono">
                                {currentAPI.endpoint}
                              </code>
                            </div>
                          </div>

                          <div className="bg-slate-900 rounded-xl p-6 relative">
                            <div className="flex items-center justify-between mb-4">
                              <span className="text-sm text-slate-400 font-mono font-semibold">cURL Request</span>
                              <button
                                onClick={() => copyCode(currentAPI.code, currentAPI.id)}
                                className="flex items-center space-x-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg transition-colors"
                              >
                                {copiedCode === currentAPI.id ? (
                                  <>
                                    <Check className="w-4 h-4 text-green-400" />
                                    <span className="text-sm font-semibold">Copied!</span>
                                  </>
                                ) : (
                                  <>
                                    <Copy className="w-4 h-4" />
                                    <span className="text-sm font-semibold">Copy</span>
                                  </>
                                )}
                              </button>
                            </div>
                            <pre className="text-sm text-slate-300 overflow-x-auto leading-relaxed">
                              <code>{currentAPI.code}</code>
                            </pre>
                          </div>

                          <div className="bg-cyan-50 border-2 border-cyan-200 rounded-xl p-5">
                            <h4 className="font-bold text-cyan-900 mb-3">Lưu ý khi tích hợp</h4>
                            <ul className="text-sm text-cyan-800 space-y-2">
                              <li className="flex items-start space-x-2">
                                <span className="text-cyan-600 mt-0.5">•</span>
                                <span>Thay YOUR_API_KEY bằng API key thực tế của bạn</span>
                              </li>
                              <li className="flex items-start space-x-2">
                                <span className="text-cyan-600 mt-0.5">•</span>
                                <span>Tất cả request cần authentication qua Bearer token</span>
                              </li>
                              <li className="flex items-start space-x-2">
                                <span className="text-cyan-600 mt-0.5">•</span>
                                <span>Rate limit: 1000 requests/phút (có thể tăng theo gói)</span>
                              </li>
                              <li className="flex items-start space-x-2">
                                <span className="text-cyan-600 mt-0.5">•</span>
                                <span>Timeout: 30 giây, hỗ trợ retry tự động</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Tích hợp dữ liệu đa dạng</h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Chatbot AI của chúng tôi có khả năng kết nối và học từ nhiều nguồn dữ liệu khác nhau,
                giúp cung cấp câu trả lời chính xác và cập nhật
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {dataSources.map((source) => (
                <div key={source.title} className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center mb-4">
                    <source.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{source.title}</h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">{source.description}</p>
                  <div className="space-y-2">
                    {source.features.map((feature) => (
                      <div key={feature} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>


      <div className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Bảng giá doanh nghiệp</h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Chọn gói phù hợp với quy mô và nhu cầu của doanh nghiệp bạn
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {pricingPlans.map((plan) => (
                <div key={plan.name} className="bg-slate-50 rounded-2xl border-2 border-slate-200 overflow-hidden hover:border-blue-400 hover:shadow-xl transition-all">
                  <div className="bg-gradient-to-br from-slate-900 to-blue-900 text-white p-8">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4">
                      <plan.icon className="w-7 h-7 text-cyan-400" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-slate-300">{plan.description}</p>
                  </div>

                  <div className="p-8">
                    <div className="mb-6">
                      <h4 className="font-bold text-slate-900 mb-4">Tính năng</h4>
                      <div className="space-y-3">
                        {plan.features.map((feature) => (
                          <div key={feature} className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-slate-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="border-t-2 border-slate-200 pt-6">
                      <h4 className="font-bold text-slate-900 mb-4">Chi phí</h4>
                      <div className="space-y-3">
                        {plan.pricing.map((tier) => (
                          <div key={tier.range} className="flex justify-between items-center bg-white border border-slate-200 rounded-lg p-3">
                            <span className="text-sm text-slate-700">{tier.range}</span>
                            <span className="font-bold text-blue-600">{tier.price}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <button className="w-full mt-6 px-6 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all">
                      Liên hệ tư vấn
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-blue-50 border-2 border-blue-200 rounded-2xl p-8 text-center">
              <h3 className="text-xl font-bold text-blue-900 mb-3">Cần tư vấn gói phù hợp?</h3>
              <p className="text-blue-700 mb-6 max-w-2xl mx-auto">
                Đội ngũ chuyên gia của chúng tôi sẽ phân tích nhu cầu và đề xuất giải pháp tối ưu nhất cho doanh nghiệp bạn
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="mailto:contact@4ship.vn" className="flex items-center space-x-2 px-6 py-3 bg-white border-2 border-blue-300 text-blue-700 rounded-lg font-semibold hover:bg-blue-50 transition-all">
                  <Mail className="w-5 h-5" />
                  <span>contact@4ship.vn</span>
                </a>
                <a href="tel:0332302333" className="flex items-center space-x-2 px-6 py-3 bg-white border-2 border-blue-300 text-blue-700 rounded-lg font-semibold hover:bg-blue-50 transition-all">
                  <Phone className="w-5 h-5" />
                  <span>0332.302.333</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-50 py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Câu hỏi thường gặp</h2>
              <p className="text-lg text-slate-600">
                Giải đáp những thắc mắc phổ biến về Chatbot AI
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl border-2 border-slate-200 overflow-hidden hover:border-blue-300 transition-all">
                  <button
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
                  >
                    <span className="font-semibold text-slate-900 pr-4">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-600 flex-shrink-0 transition-transform ${
                        openFAQ === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openFAQ === index && (
                    <div className="px-6 pb-5 text-slate-700 leading-relaxed border-t border-slate-200 pt-5">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Sẵn sàng triển khai Chatbot AI?</h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Bắt đầu chuyển đổi số với giải pháp Chatbot AI thông minh. Liên hệ ngay để được tư vấn và demo miễn phí.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/#contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-xl font-bold hover:shadow-2xl transition-all text-lg"
              >
                Đăng ký tư vấn miễn phí
              </a>
              <a
                href="#"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-xl font-bold hover:bg-white/20 transition-all text-lg"
              >
                Xem tài liệu API
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
