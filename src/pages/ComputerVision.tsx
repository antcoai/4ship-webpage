import { useState } from 'react';
import { ArrowLeft, Eye, Shield, Users, Camera, Upload, Loader2, CheckCircle2, XCircle, Info, Sparkles, Zap, Activity, CheckCircle, Building2, ShoppingBag, TrendingUp, Clock, BarChart3, AlertTriangle, Package, ThumbsUp, ThumbsDown, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';

interface JobResponse {
  job_id: string;
  status: string;
  is_fake?: boolean;
  confidence?: number;
  total_files?: number;
  processed_files?: number;
  results?: Array<{
    job_id: string;
    status: string;
    is_fake?: boolean;
    confidence?: number;
  }>;
}

export default function ComputerVision() {
  const [activeTab, setActiveTab] = useState<'anti-spoofing' | 'object-detection' | 'face-recognition'>('anti-spoofing');

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
              <Eye className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-semibold text-cyan-300">GIẢI PHÁP AI</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Computer Vision</h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Giải pháp thị giác máy tính tiên tiến với khả năng nhận diện, phát hiện và phân tích hình ảnh, video theo thời gian thực.
              Áp dụng deep learning để tự động hóa quy trình kiểm soát chất lượng, bảo mật và phân tích hành vi.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: Sparkles, title: 'Độ chính xác cao', description: '99.5% accuracy' },
                { icon: Zap, title: 'Xử lý nhanh', description: '60 FPS real-time' },
                { icon: Shield, title: 'Bảo mật cao', description: 'Anti-spoofing' },
                { icon: Activity, title: 'Đa dạng', description: '100+ objects' }
              ].map((feature) => (
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
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Playground & Service Demo</h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Trải nghiệm các service Computer Vision trực tiếp với demo tương tác
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
              <div className="border-b border-slate-200 bg-slate-50">
                <div className="flex">
                  <button
                    onClick={() => setActiveTab('anti-spoofing')}
                    className={`flex-1 px-8 py-5 font-semibold transition-all ${
                      activeTab === 'anti-spoofing'
                        ? 'bg-white text-blue-600 border-b-3 border-blue-600 shadow-sm'
                        : 'text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    <div className="flex items-center justify-center space-x-2">
                      <Shield className="w-5 h-5" />
                      <span>Anti-Spoofing</span>
                    </div>
                  </button>
                  <button
                    onClick={() => setActiveTab('object-detection')}
                    className={`flex-1 px-8 py-5 font-semibold transition-all ${
                      activeTab === 'object-detection'
                        ? 'bg-white text-blue-600 border-b-3 border-blue-600 shadow-sm'
                        : 'text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    <div className="flex items-center justify-center space-x-2">
                      <Eye className="w-5 h-5" />
                      <span>Object Detection</span>
                    </div>
                  </button>
                  <button
                    onClick={() => setActiveTab('face-recognition')}
                    className={`flex-1 px-8 py-5 font-semibold transition-all ${
                      activeTab === 'face-recognition'
                        ? 'bg-white text-blue-600 border-b-3 border-blue-600 shadow-sm'
                        : 'text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    <div className="flex items-center justify-center space-x-2">
                      <Users className="w-5 h-5" />
                      <span>Face Recognition</span>
                    </div>
                  </button>
                </div>
              </div>

              <div className="min-h-[750px]">
                {activeTab === 'anti-spoofing' && <AntiSpoofingPlayground />}
                {activeTab === 'object-detection' && <ObjectDetectionPlayground />}
                {activeTab === 'face-recognition' && <FaceRecognitionPlayground />}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 px-5 py-2.5 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200/50 rounded-full mb-6">
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-bold text-blue-700 tracking-wider uppercase">ỨNG DỤNG THỰC TẾ</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                Computer Vision trong các ngành
              </h2>
              <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Giải pháp AI đã và đang chuyển đổi cách thức vận hành của doanh nghiệp trên toàn cầu
              </p>
            </div>

            <div className="space-y-20">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="relative order-2 lg:order-1">
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-slate-200">
                    <img
                      src="https://images.pexels.com/photos/1181622/pexels-photo-1181622.jpeg?auto=compress&cs=tinysrgb&w=1920"
                      alt="Manufacturing Quality Control"
                      className="w-full h-[500px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/20 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="grid grid-cols-3 gap-3">
                        <div className="bg-white/20 backdrop-blur-xl p-4 rounded-xl border border-white/30">
                          <div className="text-2xl font-bold text-white mb-1">99.5%</div>
                          <div className="text-xs text-white/90">Độ chính xác</div>
                        </div>
                        <div className="bg-white/20 backdrop-blur-xl p-4 rounded-xl border border-white/30">
                          <div className="text-2xl font-bold text-white mb-1">10x</div>
                          <div className="text-xs text-white/90">Tốc độ nhanh hơn</div>
                        </div>
                        <div className="bg-white/20 backdrop-blur-xl p-4 rounded-xl border border-white/30">
                          <div className="text-2xl font-bold text-white mb-1">85%</div>
                          <div className="text-xs text-white/90">Giảm chi phí</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="order-1 lg:order-2">
                  <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full mb-6">
                    <Package className="w-4 h-4 text-blue-600" />
                    <span className="text-sm font-bold text-blue-900">SẢN XUẤT & CHẾ TẠO</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                    Tự động hóa kiểm soát chất lượng
                    <span className="block text-blue-600 mt-2">với độ chính xác vượt trội</span>
                  </h3>
                  <div className="space-y-5 text-slate-600 text-base md:text-lg leading-relaxed mb-8">
                    <p>
                      <strong className="text-slate-900">Một nhà máy điện tử lớn</strong> tại khu công nghiệp đã triển khai hệ thống Computer Vision của chúng tôi trên 12 dây chuyền sản xuất.
                    </p>
                    <p>
                      Kết quả đạt được sau 3 tháng: <strong className="text-blue-600">tỷ lệ lỗi giảm 95%</strong>, thời gian kiểm tra giảm từ 45 giây xuống còn <strong className="text-blue-600">4 giây</strong>, tiết kiệm được <strong className="text-blue-600">2.5 tỷ đồng/năm</strong> chi phí nhân công và tái làm.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-slate-900">Defect Detection</p>
                        <p className="text-sm text-slate-600">Phát hiện lỗi vi mô</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-slate-900">Quality Inspection</p>
                        <p className="text-sm text-slate-600">Kiểm tra tự động 24/7</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-slate-900">Production Analytics</p>
                        <p className="text-sm text-slate-600">Phân tích real-time</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-slate-900">Predictive Maintenance</p>
                        <p className="text-sm text-slate-600">Dự đoán hỏng hóc</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="order-1 lg:order-1">
                  <div className="inline-flex items-center space-x-2 px-4 py-2 bg-cyan-50 border border-cyan-200 rounded-full mb-6">
                    <Building2 className="w-4 h-4 text-cyan-600" />
                    <span className="text-sm font-bold text-cyan-900">NGÂN HÀNG & TÀI CHÍNH</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                    eKYC an toàn và nhanh chóng
                    <span className="block text-cyan-600 mt-2">chỉ trong 90 giây</span>
                  </h3>
                  <div className="space-y-5 text-slate-600 text-base md:text-lg leading-relaxed mb-8">
                    <p>
                      <strong className="text-slate-900">Một ngân hàng số hàng đầu</strong> đã triển khai hệ thống eKYC với Anti-Spoofing của chúng tôi, xử lý <strong className="text-cyan-600">50,000+ giao dịch mở tài khoản/tháng</strong>.
                    </p>
                    <p>
                      Kết quả đạt được: <strong className="text-cyan-600">tỷ lệ gian lận giảm 95%</strong>, thời gian xác thực giảm từ 2 ngày xuống <strong className="text-cyan-600">90 giây</strong>, tỷ lệ hoàn thành tăng <strong className="text-cyan-600">từ 45% lên 92%</strong>.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-slate-900">Face Liveness</p>
                        <p className="text-sm text-slate-600">Chống giả mạo 98%</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-slate-900">eKYC Verification</p>
                        <p className="text-sm text-slate-600">Xác thực &lt;2 giây</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-slate-900">Document OCR</p>
                        <p className="text-sm text-slate-600">Trích xuất tự động</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-slate-900">Fraud Detection</p>
                        <p className="text-sm text-slate-600">Giảm gian lận 95%</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative order-2 lg:order-2">
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-slate-200">
                    <img
                      src="https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1920"
                      alt="Banking eKYC"
                      className="w-full h-[500px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/80 via-cyan-900/20 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="grid grid-cols-3 gap-3">
                        <div className="bg-white/20 backdrop-blur-xl p-4 rounded-xl border border-white/30">
                          <div className="text-2xl font-bold text-white mb-1">98%</div>
                          <div className="text-xs text-white/90">Chống giả mạo</div>
                        </div>
                        <div className="bg-white/20 backdrop-blur-xl p-4 rounded-xl border border-white/30">
                          <div className="text-2xl font-bold text-white mb-1">&lt;2s</div>
                          <div className="text-xs text-white/90">Xác thực</div>
                        </div>
                        <div className="bg-white/20 backdrop-blur-xl p-4 rounded-xl border border-white/30">
                          <div className="text-2xl font-bold text-white mb-1">50K+</div>
                          <div className="text-xs text-white/90">Giao dịch/tháng</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group bg-gradient-to-br from-slate-50 to-green-50/50 rounded-3xl p-8 border-2 border-slate-200 hover:border-green-300 hover:shadow-2xl transition-all duration-500">
                <div className="flex items-start space-x-6 mb-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-400 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <ShoppingBag className="w-8 h-8 text-white" strokeWidth={2} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">Bán lẻ & Thương mại</h3>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      Tối ưu hóa trải nghiệm mua sắm và vận hành cửa hàng thông minh với phân tích hành vi khách hàng
                      và quản lý hàng hóa tự động
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-white rounded-xl p-4 border border-slate-200">
                    <div className="flex items-center space-x-2 mb-2">
                      <Users className="w-5 h-5 text-green-600" />
                      <span className="font-semibold text-slate-900">People Counting</span>
                    </div>
                    <p className="text-sm text-slate-600">Đếm lượt khách, phân tích lưu lượng theo giờ/ngày</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 border border-slate-200">
                    <div className="flex items-center space-x-2 mb-2">
                      <Activity className="w-5 h-5 text-blue-600" />
                      <span className="font-semibold text-slate-900">Heat Mapping</span>
                    </div>
                    <p className="text-sm text-slate-600">Bản đồ nhiệt di chuyển, khu vực tập trung khách</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 border border-slate-200">
                    <div className="flex items-center space-x-2 mb-2">
                      <Eye className="w-5 h-5 text-cyan-600" />
                      <span className="font-semibold text-slate-900">Shelf Monitoring</span>
                    </div>
                    <p className="text-sm text-slate-600">Giám sát kệ hàng, cảnh báo out-of-stock tự động</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 border border-slate-200">
                    <div className="flex items-center space-x-2 mb-2">
                      <Sparkles className="w-5 h-5 text-green-600" />
                      <span className="font-semibold text-slate-900">Visual Search</span>
                    </div>
                    <p className="text-sm text-slate-600">Tìm kiếm sản phẩm bằng hình ảnh, gợi ý thông minh</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-5 border border-green-200">
                  <div className="flex items-start space-x-3">
                    <TrendingUp className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-green-900 mb-2">Tăng trưởng doanh thu</p>
                      <div className="grid grid-cols-3 gap-3 text-center">
                        <div>
                          <div className="text-2xl font-bold text-green-600">25%</div>
                          <div className="text-xs text-green-700">Tăng conversion</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-green-600">40%</div>
                          <div className="text-xs text-green-700">Giảm mất hàng</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-green-600">30%</div>
                          <div className="text-xs text-green-700">Tối ưu nhân sự</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group bg-gradient-to-br from-slate-50 to-orange-50/50 rounded-3xl p-8 border-2 border-slate-200 hover:border-orange-300 hover:shadow-2xl transition-all duration-500">
                <div className="flex items-start space-x-6 mb-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-400 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Camera className="w-8 h-8 text-white" strokeWidth={2} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">An ninh & Giám sát</h3>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      Hệ thống giám sát thông minh với phát hiện sự kiện bất thường, nhận diện khuôn mặt
                      và cảnh báo real-time cho an ninh tối ưu
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-white rounded-xl p-4 border border-slate-200">
                    <div className="flex items-center space-x-2 mb-2">
                      <Shield className="w-5 h-5 text-orange-600" />
                      <span className="font-semibold text-slate-900">Access Control</span>
                    </div>
                    <p className="text-sm text-slate-600">Kiểm soát ra vào bằng nhận diện khuôn mặt</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 border border-slate-200">
                    <div className="flex items-center space-x-2 mb-2">
                      <AlertTriangle className="w-5 h-5 text-red-600" />
                      <span className="font-semibold text-slate-900">Anomaly Detection</span>
                    </div>
                    <p className="text-sm text-slate-600">Phát hiện hành vi bất thường, xâm nhập trái phép</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 border border-slate-200">
                    <div className="flex items-center space-x-2 mb-2">
                      <Eye className="w-5 h-5 text-blue-600" />
                      <span className="font-semibold text-slate-900">License Plate</span>
                    </div>
                    <p className="text-sm text-slate-600">Nhận dạng biển số xe, quản lý bãi đỗ tự động</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 border border-slate-200">
                    <div className="flex items-center space-x-2 mb-2">
                      <Activity className="w-5 h-5 text-orange-600" />
                      <span className="font-semibold text-slate-900">Crowd Analysis</span>
                    </div>
                    <p className="text-sm text-slate-600">Phân tích đám đông, cảnh báo quá tải khu vực</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-5 border border-orange-200">
                  <div className="flex items-start space-x-3">
                    <Zap className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-orange-900 mb-2">Hiệu suất hệ thống</p>
                      <div className="grid grid-cols-3 gap-3 text-center">
                        <div>
                          <div className="text-2xl font-bold text-orange-600">99%</div>
                          <div className="text-xs text-orange-700">Độ chính xác</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-orange-600">&lt;100ms</div>
                          <div className="text-xs text-orange-700">Response time</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-orange-600">24/7</div>
                          <div className="text-xs text-orange-700">Giám sát</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-50 rounded-3xl p-8 md:p-12 border-2 border-blue-200">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                  Đối tác tin cậy của hơn 500+ doanh nghiệp
                </h3>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                  Từ startup đến tập đoàn lớn, chúng tôi đã giúp doanh nghiệp chuyển đổi số với Computer Vision
                </p>
              </div>
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { value: '500+', label: 'Dự án triển khai' },
                  { value: '99.5%', label: 'Độ chính xác trung bình' },
                  { value: '10M+', label: 'Hình ảnh xử lý/ngày' },
                  { value: '24/7', label: 'Hỗ trợ kỹ thuật' }
                ].map((stat, idx) => (
                  <div key={idx} className="bg-white rounded-2xl p-6 text-center border border-blue-200 shadow-sm">
                    <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-slate-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Sẵn sàng triển khai Computer Vision?</h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Bắt đầu chuyển đổi số với giải pháp Computer Vision thông minh. Liên hệ ngay để được tư vấn và demo miễn phí.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/#contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white rounded-xl font-bold hover:shadow-2xl transition-all text-lg"
              >
                Đăng ký tư vấn miễn phí
              </Link>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-xl font-bold hover:bg-white/20 transition-all text-lg">
                Xem tài liệu API
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AntiSpoofingPlayground() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>('');
  const [mode, setMode] = useState<'basic' | 'advanced'>('advanced');
  const [loading, setLoading] = useState(false);
  const [jobId, setJobId] = useState<string>('');
  const [result, setResult] = useState<JobResponse | null>(null);
  const [error, setError] = useState<string>('');
  const [apiBaseUrl] = useState('http://localhost:8000/api/v1/job');
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedbackType, setFeedbackType] = useState<'correct' | 'incorrect' | null>(null);
  const [feedbackNote, setFeedbackNote] = useState('');
  const [feedbackSubmitting, setFeedbackSubmitting] = useState(false);
  const [feedbackSuccess, setFeedbackSuccess] = useState(false);

  const handleFeedbackSubmit = async () => {
    if (!result || feedbackType === null) return;

    setFeedbackSubmitting(true);

    try {
      const feedbackData = {
        job_id: result.job_id,
        file_name: selectedFile?.name || 'unknown',
        is_correct: feedbackType === 'correct',
        predicted_result: result.is_fake,
        correct_label: feedbackType === 'incorrect' ? (result.is_fake ? 'real' : 'fake') : null,
        feedback_note: feedbackNote || null,
        mode: mode,
        created_at: new Date().toISOString()
      };

      const { error } = await supabase
        .from('cv_feedback')
        .insert([feedbackData]);

      if (error) throw error;

      setFeedbackSuccess(true);
      setTimeout(() => {
        setShowFeedback(false);
        setFeedbackSuccess(false);
        setFeedbackType(null);
        setFeedbackNote('');
      }, 2000);
    } catch (err) {
      console.error('Error submitting feedback:', err);
    } finally {
      setFeedbackSubmitting(false);
    }
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
      setResult(null);
      setError('');
    }
  };

  const handleSubmit = async () => {
    if (!selectedFile) return;

    setLoading(true);
    setError('');
    setResult(null);

    try {
      const formData = new FormData();
      formData.append('file', selectedFile);
      formData.append('mode', mode);

      const response = await fetch(`${apiBaseUrl}/inference`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to create job');
      }

      const data: JobResponse = await response.json();
      setJobId(data.job_id);

      pollJobStatus(data.job_id);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      setLoading(false);
    }
  };

  const pollJobStatus = async (id: string) => {
    const maxAttempts = 30;
    let attempts = 0;

    const poll = async () => {
      try {
        const response = await fetch(`${apiBaseUrl}/${id}`);
        if (!response.ok) {
          throw new Error('Failed to get job status');
        }

        const data: JobResponse = await response.json();

        if (data.status === 'completed' || data.status === 'failed') {
          setResult(data);
          setLoading(false);
          return;
        }

        attempts++;
        if (attempts < maxAttempts) {
          setTimeout(poll, 1000);
        } else {
          setError('Timeout: Job took too long to complete');
          setLoading(false);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        setLoading(false);
      }
    };

    poll();
  };

  return (
    <div className="grid lg:grid-cols-12">
      <div className="lg:col-span-8 border-r border-slate-200 p-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center space-x-2">
              <Shield className="w-7 h-7 text-blue-600" />
              <span>Anti-Spoofing Detection</span>
            </h3>
            <p className="text-slate-600 mb-6">
              Phát hiện ảnh chụp trực tiếp hay ảnh chụp qua màn hình/LCD. Ngăn chặn giả mạo bằng ảnh in, video phát lại, hoặc hiển thị trên thiết bị điện tử.
            </p>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-3">
              Chế độ phát hiện
            </label>
            <div className="flex space-x-4">
              <button
                onClick={() => setMode('basic')}
                className={`flex-1 px-4 py-3 rounded-lg border-2 font-semibold transition-all ${
                  mode === 'basic'
                    ? 'border-blue-500 bg-blue-50 text-blue-700'
                    : 'border-slate-200 text-slate-600 hover:border-blue-300'
                }`}
              >
                Basic Mode
              </button>
              <button
                onClick={() => setMode('advanced')}
                className={`flex-1 px-4 py-3 rounded-lg border-2 font-semibold transition-all ${
                  mode === 'advanced'
                    ? 'border-blue-500 bg-blue-50 text-blue-700'
                    : 'border-slate-200 text-slate-600 hover:border-blue-300'
                }`}
              >
                Advanced Mode
              </button>
            </div>
            <p className="text-xs text-slate-500 mt-2">
              {mode === 'basic'
                ? 'Xử lý nhanh (~100-200ms) - Phù hợp cho ứng dụng cần tốc độ'
                : 'Độ chính xác cao (~500-1000ms) - Phù hợp cho ứng dụng cần bảo mật cao'}
            </p>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-3">
              Tải lên hình ảnh
            </label>
            <div className="relative">
              <input
                type="file"
                accept="image/*"
                onChange={handleFileSelect}
                className="hidden"
                id="file-upload"
              />
              <label
                htmlFor="file-upload"
                className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-slate-300 rounded-xl cursor-pointer hover:border-blue-400 hover:bg-blue-50/50 transition-all"
              >
                {previewUrl ? (
                  <img src={previewUrl} alt="Preview" className="max-h-full max-w-full object-contain rounded-xl" />
                ) : (
                  <>
                    <Upload className="w-12 h-12 text-slate-400 mb-2" />
                    <span className="text-sm text-slate-600">Click để chọn ảnh</span>
                    <span className="text-xs text-slate-400 mt-1">JPEG, PNG, BMP, TIFF</span>
                  </>
                )}
              </label>
            </div>
          </div>

          <button
            onClick={handleSubmit}
            disabled={!selectedFile || loading}
            className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Đang xử lý...</span>
              </>
            ) : (
              <>
                <Camera className="w-5 h-5" />
                <span>Phân tích ngay</span>
              </>
            )}
          </button>
        </div>
      </div>

      <div className="lg:col-span-4 bg-slate-50 p-8">
        <h3 className="text-lg font-bold text-slate-900 mb-4">Kết quả phân tích</h3>

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start space-x-3">
            <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-red-900">Lỗi</p>
              <p className="text-sm text-red-700">{error}</p>
            </div>
          </div>
        )}

        {loading && (
          <div className="flex flex-col items-center justify-center py-12">
            <Loader2 className="w-12 h-12 text-blue-600 animate-spin mb-4" />
            <p className="text-sm text-slate-600">Đang phân tích hình ảnh...</p>
            {jobId && <p className="text-xs text-slate-400 mt-2">Job ID: {jobId}</p>}
          </div>
        )}

        {result && result.status === 'completed' && (
          <div className="space-y-4">
            <div
              className={`rounded-lg p-6 border-2 ${
                result.is_fake
                  ? 'bg-red-50 border-red-300'
                  : 'bg-green-50 border-green-300'
              }`}
            >
              <div className="flex items-center space-x-3 mb-3">
                {result.is_fake ? (
                  <XCircle className="w-8 h-8 text-red-600" />
                ) : (
                  <CheckCircle2 className="w-8 h-8 text-green-600" />
                )}
                <div>
                  <p className="text-lg font-bold text-slate-900">
                    {result.is_fake ? 'Giả mạo phát hiện' : 'Khuôn mặt thật'}
                  </p>
                  <p className="text-sm text-slate-600">
                    Độ tin cậy: {((result.confidence || 0) * 100).toFixed(1)}%
                  </p>
                </div>
              </div>
              <div className="w-full bg-white/50 rounded-full h-2">
                <div
                  className={`h-2 rounded-full transition-all duration-500 ${
                    result.is_fake ? 'bg-red-500' : 'bg-green-500'
                  }`}
                  style={{ width: `${(result.confidence || 0) * 100}%` }}
                ></div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-start space-x-3">
              <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div className="text-sm text-blue-900">
                <p className="font-semibold mb-1">Thông tin kỹ thuật</p>
                <p>Chế độ: {mode === 'basic' ? 'Basic Mode' : 'Advanced Mode'}</p>
                <p className="text-xs text-blue-700 mt-2">Job ID: {result.job_id}</p>
              </div>
            </div>

            {!showFeedback && !feedbackSuccess && (
              <div className="bg-slate-50 border-2 border-slate-200 rounded-lg p-4">
                <p className="text-sm font-semibold text-slate-700 mb-3">Kết quả có chính xác không?</p>
                <div className="flex space-x-3">
                  <button
                    onClick={() => {
                      setShowFeedback(true);
                      setFeedbackType('correct');
                    }}
                    className="flex-1 px-4 py-2 bg-green-50 border-2 border-green-200 text-green-700 rounded-lg hover:bg-green-100 transition-all font-semibold flex items-center justify-center space-x-2"
                  >
                    <ThumbsUp className="w-4 h-4" />
                    <span>Chính xác</span>
                  </button>
                  <button
                    onClick={() => {
                      setShowFeedback(true);
                      setFeedbackType('incorrect');
                    }}
                    className="flex-1 px-4 py-2 bg-red-50 border-2 border-red-200 text-red-700 rounded-lg hover:bg-red-100 transition-all font-semibold flex items-center justify-center space-x-2"
                  >
                    <ThumbsDown className="w-4 h-4" />
                    <span>Không chính xác</span>
                  </button>
                </div>
              </div>
            )}

            {showFeedback && !feedbackSuccess && (
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-lg p-5">
                <div className="flex items-start space-x-3 mb-4">
                  <MessageSquare className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div className="flex-1">
                    <p className="text-sm font-bold text-slate-900 mb-1">
                      {feedbackType === 'correct' ? 'Cảm ơn bạn đã xác nhận!' : 'Rất tiếc vì sự bất tiện'}
                    </p>
                    <p className="text-xs text-slate-600">
                      {feedbackType === 'correct'
                        ? 'Góp ý của bạn giúp chúng tôi cải thiện dịch vụ.'
                        : 'Vui lòng cho chúng tôi biết thêm để cải thiện độ chính xác.'}
                    </p>
                  </div>
                </div>
                <textarea
                  value={feedbackNote}
                  onChange={(e) => setFeedbackNote(e.target.value)}
                  placeholder="Thêm nhận xét (không bắt buộc)..."
                  rows={3}
                  className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none mb-3"
                />
                <div className="flex space-x-2">
                  <button
                    onClick={handleFeedbackSubmit}
                    disabled={feedbackSubmitting}
                    className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all disabled:opacity-50 flex items-center justify-center space-x-2"
                  >
                    {feedbackSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Đang gửi...</span>
                      </>
                    ) : (
                      <span>Gửi feedback</span>
                    )}
                  </button>
                  <button
                    onClick={() => {
                      setShowFeedback(false);
                      setFeedbackType(null);
                      setFeedbackNote('');
                    }}
                    className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg font-semibold hover:bg-slate-200 transition-all"
                  >
                    Hủy
                  </button>
                </div>
              </div>
            )}

            {feedbackSuccess && (
              <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4 flex items-center space-x-3">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                <p className="text-sm font-semibold text-green-900">Cảm ơn bạn đã gửi feedback!</p>
              </div>
            )}
          </div>
        )}

        {!result && !loading && !error && (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <Camera className="w-16 h-16 text-slate-300 mb-4" />
            <p className="text-sm text-slate-500">
              Tải lên hình ảnh để bắt đầu phân tích
            </p>
          </div>
        )}

        <div className="mt-6 pt-6 border-t border-slate-200">
          <h4 className="text-sm font-bold text-slate-900 mb-3">Về service này</h4>
          <div className="space-y-2 text-xs text-slate-600">
            <p><strong>Basic Mode:</strong> Xử lý nhanh, phù hợp cho ứng dụng đại trà</p>
            <p><strong>Advanced Mode:</strong> Độ chính xác cao hơn cho bảo mật</p>
            <p><strong>Use Cases:</strong> eKYC ngân hàng, xác thực người dùng</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ObjectDetectionPlayground() {
  return (
    <div className="p-12">
      <div className="max-w-4xl mx-auto text-center py-20">
        <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <Eye className="w-10 h-10 text-white" />
        </div>
        <h3 className="text-3xl font-bold text-slate-900 mb-4">Object Detection</h3>
        <p className="text-lg text-slate-600 mb-8">
          Service nhận diện đối tượng trong hình ảnh với độ chính xác cao
        </p>
        <div className="inline-flex items-center space-x-2 px-6 py-3 bg-slate-100 rounded-lg text-slate-500">
          <Camera className="w-5 h-5" />
          <span className="font-semibold">Coming soon</span>
        </div>
      </div>
    </div>
  );
}

function FaceRecognitionPlayground() {
  return (
    <div className="p-12">
      <div className="max-w-4xl mx-auto text-center py-20">
        <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <Users className="w-10 h-10 text-white" />
        </div>
        <h3 className="text-3xl font-bold text-slate-900 mb-4">Face Recognition</h3>
        <p className="text-lg text-slate-600 mb-8">
          Service nhận dạng và xác thực khuôn mặt với công nghệ AI
        </p>
        <div className="inline-flex items-center space-x-2 px-6 py-3 bg-slate-100 rounded-lg text-slate-500">
          <Camera className="w-5 h-5" />
          <span className="font-semibold">Coming soon</span>
        </div>
      </div>
    </div>
  );
}
