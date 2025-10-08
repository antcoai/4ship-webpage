import { useState, useEffect, useRef, useCallback } from 'react';
import { ArrowLeft, Eye, Shield, Users, Camera, Upload, Loader2, CheckCircle2, XCircle, Info, Sparkles, Zap, Activity, CheckCircle, Building2, ShoppingBag, TrendingUp, Clock, BarChart3, AlertTriangle, Package, ThumbsUp, ThumbsDown, MessageSquare, ChevronLeft, ChevronRight } from 'lucide-react';
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
  const [antiSpoofSubTab, setAntiSpoofSubTab] = useState<'playground' | 'api-docs'>('playground');
  const [objectDetectionSubTab, setObjectDetectionSubTab] = useState<'playground' | 'api-docs'>('playground');
  const [faceRecognitionSubTab, setFaceRecognitionSubTab] = useState<'playground' | 'api-docs'>('playground');

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
                {activeTab === 'anti-spoofing' && (
                  <>
                    <div className="border-b border-slate-200 bg-slate-50 px-8">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => setAntiSpoofSubTab('playground')}
                          className={`px-6 py-3 font-semibold transition-all ${
                            antiSpoofSubTab === 'playground'
                              ? 'text-blue-600 border-b-2 border-blue-600'
                              : 'text-slate-600 hover:text-slate-900'
                          }`}
                        >
                          Playground
                        </button>
                        <button
                          onClick={() => setAntiSpoofSubTab('api-docs')}
                          className={`px-6 py-3 font-semibold transition-all ${
                            antiSpoofSubTab === 'api-docs'
                              ? 'text-blue-600 border-b-2 border-blue-600'
                              : 'text-slate-600 hover:text-slate-900'
                          }`}
                        >
                          API Document
                        </button>
                      </div>
                    </div>
                    {antiSpoofSubTab === 'playground' && <AntiSpoofingPlayground />}
                    {antiSpoofSubTab === 'api-docs' && <AntiSpoofingAPIDocs />}
                  </>
                )}
                {activeTab === 'object-detection' && (
                  <>
                    <div className="border-b border-slate-200 bg-slate-50 px-8">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => setObjectDetectionSubTab('playground')}
                          className={`px-6 py-3 font-semibold transition-all ${
                            objectDetectionSubTab === 'playground'
                              ? 'text-blue-600 border-b-2 border-blue-600'
                              : 'text-slate-600 hover:text-slate-900'
                          }`}
                        >
                          Playground
                        </button>
                        <button
                          onClick={() => setObjectDetectionSubTab('api-docs')}
                          className={`px-6 py-3 font-semibold transition-all ${
                            objectDetectionSubTab === 'api-docs'
                              ? 'text-blue-600 border-b-2 border-blue-600'
                              : 'text-slate-600 hover:text-slate-900'
                          }`}
                        >
                          API Document
                        </button>
                      </div>
                    </div>
                    {objectDetectionSubTab === 'playground' && <ObjectDetectionPlayground />}
                    {objectDetectionSubTab === 'api-docs' && <div className="p-8 text-slate-600">API Documentation coming soon...</div>}
                  </>
                )}
                {activeTab === 'face-recognition' && (
                  <>
                    <div className="border-b border-slate-200 bg-slate-50 px-8">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => setFaceRecognitionSubTab('playground')}
                          className={`px-6 py-3 font-semibold transition-all ${
                            faceRecognitionSubTab === 'playground'
                              ? 'text-blue-600 border-b-2 border-blue-600'
                              : 'text-slate-600 hover:text-slate-900'
                          }`}
                        >
                          Playground
                        </button>
                        <button
                          onClick={() => setFaceRecognitionSubTab('api-docs')}
                          className={`px-6 py-3 font-semibold transition-all ${
                            faceRecognitionSubTab === 'api-docs'
                              ? 'text-blue-600 border-b-2 border-blue-600'
                              : 'text-slate-600 hover:text-slate-900'
                          }`}
                        >
                          API Document
                        </button>
                      </div>
                    </div>
                    {faceRecognitionSubTab === 'playground' && <FaceRecognitionPlayground />}
                    {faceRecognitionSubTab === 'api-docs' && <div className="p-8 text-slate-600">API Documentation coming soon...</div>}
                  </>
                )}
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

            <IndustryCarousel />

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

function TypingText({ text, speed = 30 }: { text: string; speed?: number }) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setDisplayedText('');
    setCurrentIndex(0);
  }, [text]);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  return <span>{displayedText}</span>;
}

function AnimatedNumber({ value, duration = 2000 }: { value: string; duration?: number }) {
  const [displayValue, setDisplayValue] = useState('0');
  const isNumber = /^\d+\.?\d*$/.test(value.replace('%', '').replace('+', '').replace('K', '').replace('M', '').replace('s', '').replace('ms', '').replace('x', '').replace('<', '').replace('>', ''));

  useEffect(() => {
    if (!isNumber) {
      const chars = value.split('');
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex < chars.length) {
          setDisplayValue(chars.slice(0, currentIndex + 1).join(''));
          currentIndex++;
        } else {
          clearInterval(interval);
        }
      }, duration / chars.length);
      return () => clearInterval(interval);
    }

    const numericPart = parseFloat(value.replace(/[^\d.]/g, ''));
    const suffix = value.replace(/[\d.]/g, '');
    const steps = 60;
    const stepValue = numericPart / steps;
    let current = 0;

    const interval = setInterval(() => {
      current += stepValue;
      if (current >= numericPart) {
        setDisplayValue(value);
        clearInterval(interval);
      } else {
        const formatted = suffix.includes('.')
          ? current.toFixed(1)
          : Math.floor(current).toString();
        setDisplayValue(formatted + suffix);
      }
    }, duration / steps);

    return () => clearInterval(interval);
  }, [value, duration, isNumber]);

  return <span>{displayValue}</span>;
}

function IndustryCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollTimeout = useRef<NodeJS.Timeout>();

  const industries = [
    {
      id: 'manufacturing',
      icon: Package,
      badge: 'SẢN XUẤT & CHẾ TẠO',
      badgeColor: 'bg-blue-50 border-blue-200 text-blue-900',
      iconColor: 'text-blue-600',
      title: 'Tự động hóa kiểm soát chất lượng',
      subtitle: 'với độ chính xác vượt trội',
      subtitleColor: 'text-blue-600',
      image: 'https://images.pexels.com/photos/1181622/pexels-photo-1181622.jpeg?auto=compress&cs=tinysrgb&w=1920',
      gradientFrom: 'from-blue-900/80',
      gradientVia: 'via-blue-900/20',
      story: [
        '<strong>Một nhà máy điện tử lớn</strong> tại khu công nghiệp đã triển khai hệ thống Computer Vision của chúng tôi trên 12 dây chuyền sản xuất.',
        'Kết quả đạt được sau 3 tháng: <strong class="text-blue-600">tỷ lệ lỗi giảm 95%</strong>, thời gian kiểm tra giảm từ 45 giây xuống còn <strong class="text-blue-600">4 giây</strong>, tiết kiệm được <strong class="text-blue-600">2.5 tỷ đồng/năm</strong> chi phí nhân công và tái làm.'
      ],
      features: [
        { title: 'Defect Detection', desc: 'Phát hiện lỗi vi mô' },
        { title: 'Quality Inspection', desc: 'Kiểm tra tự động 24/7' },
        { title: 'Production Analytics', desc: 'Phân tích real-time' },
        { title: 'Predictive Maintenance', desc: 'Dự đoán hỏng hóc' }
      ],
      metrics: [
        { value: '99.5%', label: 'Độ chính xác' },
        { value: '10x', label: 'Tốc độ nhanh hơn' },
        { value: '85%', label: 'Giảm chi phí' }
      ],
      imageOrder: 'order-2 lg:order-1',
      textOrder: 'order-1 lg:order-2'
    },
    {
      id: 'banking',
      icon: Building2,
      badge: 'NGÂN HÀNG & TÀI CHÍNH',
      badgeColor: 'bg-cyan-50 border-cyan-200 text-cyan-900',
      iconColor: 'text-cyan-600',
      title: 'eKYC an toàn và nhanh chóng',
      subtitle: 'chỉ trong 90 giây',
      subtitleColor: 'text-cyan-600',
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1920',
      gradientFrom: 'from-cyan-900/80',
      gradientVia: 'via-cyan-900/20',
      story: [
        '<strong>Một ngân hàng số hàng đầu</strong> đã triển khai hệ thống eKYC với Anti-Spoofing của chúng tôi, xử lý <strong class="text-cyan-600">50,000+ giao dịch mở tài khoản/tháng</strong>.',
        'Kết quả đạt được: <strong class="text-cyan-600">tỷ lệ gian lận giảm 95%</strong>, thời gian xác thực giảm từ 2 ngày xuống <strong class="text-cyan-600">90 giây</strong>, tỷ lệ hoàn thành tăng <strong class="text-cyan-600">từ 45% lên 92%</strong>.'
      ],
      features: [
        { title: 'Face Liveness', desc: 'Chống giả mạo 98%' },
        { title: 'eKYC Verification', desc: 'Xác thực <2 giây' },
        { title: 'Document OCR', desc: 'Trích xuất tự động' },
        { title: 'Fraud Detection', desc: 'Giảm gian lận 95%' }
      ],
      metrics: [
        { value: '98%', label: 'Chống giả mạo' },
        { value: '<2s', label: 'Xác thực' },
        { value: '50K+', label: 'Giao dịch/tháng' }
      ],
      imageOrder: 'order-2 lg:order-2',
      textOrder: 'order-1 lg:order-1'
    },
    {
      id: 'retail',
      icon: ShoppingBag,
      badge: 'BÁN LẺ & THƯƠNG MẠI',
      badgeColor: 'bg-green-50 border-green-200 text-green-900',
      iconColor: 'text-green-600',
      title: 'Cửa hàng thông minh',
      subtitle: 'tăng doanh thu 25%',
      subtitleColor: 'text-green-600',
      image: 'https://images.pexels.com/photos/1005638/pexels-photo-1005638.jpeg?auto=compress&cs=tinysrgb&w=1920',
      gradientFrom: 'from-green-900/80',
      gradientVia: 'via-green-900/20',
      story: [
        '<strong>Một chuỗi siêu thị lớn</strong> đã triển khai hệ thống Computer Vision trên <strong class="text-green-600">50 cửa hàng</strong>, phân tích hành vi khách hàng và tối ưu vận hành.',
        'Kết quả: <strong class="text-green-600">doanh thu tăng 25%</strong>, giảm <strong class="text-green-600">40% tình trạng out-of-stock</strong>, và tiết kiệm <strong class="text-green-600">30% chi phí nhân sự</strong> nhờ tự động hóa.'
      ],
      features: [
        { title: 'People Counting', desc: 'Đếm lượt khách' },
        { title: 'Heat Mapping', desc: 'Bản đồ nhiệt' },
        { title: 'Shelf Monitoring', desc: 'Giám sát kệ hàng' },
        { title: 'Visual Search', desc: 'Tìm kiếm ảnh' }
      ],
      metrics: [
        { value: '25%', label: 'Tăng doanh thu' },
        { value: '40%', label: 'Giảm out-of-stock' },
        { value: '30%', label: 'Tiết kiệm nhân sự' }
      ],
      imageOrder: 'order-2 lg:order-1',
      textOrder: 'order-1 lg:order-2'
    },
    {
      id: 'security',
      icon: Camera,
      badge: 'AN NINH & GIÁM SÁT',
      badgeColor: 'bg-orange-50 border-orange-200 text-orange-900',
      iconColor: 'text-orange-600',
      title: 'Giám sát thông minh',
      subtitle: 'phát hiện bất thường real-time',
      subtitleColor: 'text-orange-600',
      image: 'https://images.pexels.com/photos/2449600/pexels-photo-2449600.jpeg?auto=compress&cs=tinysrgb&w=1920',
      gradientFrom: 'from-orange-900/80',
      gradientVia: 'via-orange-900/20',
      story: [
        '<strong>Một tòa nhà văn phòng cao cấp</strong> đã nâng cấp hệ thống an ninh với AI, giám sát <strong class="text-orange-600">200+ camera</strong> và phát hiện sự cố tức thì.',
        'Kết quả: <strong class="text-orange-600">99% sự kiện bất thường được phát hiện</strong>, thời gian phản ứng giảm từ 5 phút xuống <strong class="text-orange-600">10 giây</strong>, và <strong class="text-orange-600">giảm 70%</strong> nhân lực giám sát.'
      ],
      features: [
        { title: 'Access Control', desc: 'Kiểm soát ra vào' },
        { title: 'Anomaly Detection', desc: 'Phát hiện bất thường' },
        { title: 'License Plate', desc: 'Nhận dạng biển số' },
        { title: 'Crowd Analysis', desc: 'Phân tích đám đông' }
      ],
      metrics: [
        { value: '99%', label: 'Độ chính xác' },
        { value: '<100ms', label: 'Response time' },
        { value: '24/7', label: 'Giám sát' }
      ],
      imageOrder: 'order-2 lg:order-2',
      textOrder: 'order-1 lg:order-1'
    }
  ];

  const currentIndustry = industries[currentSlide];

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % industries.length);
    setTimeout(() => setIsTransitioning(false), 800);
  }, [isTransitioning, industries.length]);

  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev - 1 + industries.length) % industries.length);
    setTimeout(() => setIsTransitioning(false), 800);
  }, [isTransitioning, industries.length]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) < 150 || isTransitioning) return;

      e.preventDefault();

      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }

      scrollTimeout.current = setTimeout(() => {
        if (e.deltaY > 0) {
          nextSlide();
        } else {
          prevSlide();
        }
      }, 100);
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      container.removeEventListener('wheel', handleWheel);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, [isTransitioning, nextSlide, prevSlide]);

  return (
    <div className="relative" ref={containerRef}>
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className={`relative ${currentIndustry.imageOrder} transition-all duration-700 ease-out ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-slate-200">
            <img
              key={currentSlide}
              src={currentIndustry.image}
              alt={currentIndustry.badge}
              className="w-full h-[500px] object-cover animate-[fadeIn_0.8s_ease-out]"
            />
            <div className={`absolute inset-0 bg-gradient-to-t ${currentIndustry.gradientFrom} ${currentIndustry.gradientVia} to-transparent`}></div>
            <div className="absolute bottom-6 left-6 right-6">
              <div className="grid grid-cols-3 gap-3">
                {currentIndustry.metrics.map((metric, idx) => (
                  <div
                    key={idx}
                    className="bg-white/20 backdrop-blur-xl p-4 rounded-xl border border-white/30 animate-[slideUp_0.6s_ease-out] opacity-0"
                    style={{ animationDelay: `${idx * 0.1}s`, animationFillMode: 'forwards' }}
                  >
                    <div className="text-2xl font-bold text-white mb-1">
                      <AnimatedNumber value={metric.value} duration={1500} />
                    </div>
                    <div className="text-xs text-white/90">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className={`${currentIndustry.textOrder} transition-all duration-700 ease-out ${isTransitioning ? 'opacity-0 translate-x-8' : 'opacity-100 translate-x-0'}`}>
          <div className={`inline-flex items-center space-x-2 px-4 py-2 ${currentIndustry.badgeColor} border rounded-full mb-6 animate-[fadeIn_0.5s_ease-out]`}>
            <currentIndustry.icon className={`w-4 h-4 ${currentIndustry.iconColor}`} />
            <span className="text-sm font-bold">{currentIndustry.badge}</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight animate-[slideInRight_0.6s_ease-out]">
            <TypingText text={currentIndustry.title} speed={40} />
            <span className={`block ${currentIndustry.subtitleColor} mt-2`}>
              <TypingText text={currentIndustry.subtitle} speed={40} />
            </span>
          </h3>
          <div className="space-y-5 text-slate-600 text-base md:text-lg leading-relaxed mb-8">
            {currentIndustry.story.map((paragraph, idx) => (
              <p
                key={idx}
                dangerouslySetInnerHTML={{ __html: paragraph }}
                className="animate-[fadeIn_0.8s_ease-out] opacity-0"
                style={{ animationDelay: `${0.3 + idx * 0.2}s`, animationFillMode: 'forwards' }}
              />
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            {currentIndustry.features.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-start space-x-3 animate-[slideInRight_0.5s_ease-out] opacity-0"
                style={{ animationDelay: `${0.5 + idx * 0.1}s`, animationFillMode: 'forwards' }}
              >
                <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-slate-900">{feature.title}</p>
                  <p className="text-sm text-slate-600">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center mt-12 space-x-3">
        <div className="flex space-x-2">
          {industries.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                if (!isTransitioning) {
                  setIsTransitioning(true);
                  setCurrentSlide(idx);
                  setTimeout(() => setIsTransitioning(false), 800);
                }
              }}
              className={`h-2.5 rounded-full transition-all ${
                idx === currentSlide
                  ? 'w-12 bg-gradient-to-r from-blue-600 to-cyan-500'
                  : 'w-2.5 bg-slate-300 hover:bg-slate-400'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

  
    </div>
  );
}

function AntiSpoofingPlayground() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [jobId, setJobId] = useState<string>('');
  const [result, setResult] = useState<JobResponse | null>(null);
  const [error, setError] = useState<string>('');
  const [apiBaseUrl] = useState('https://api-cv.4ship.vn/api/v1/job');
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedbackType, setFeedbackType] = useState<'correct' | 'incorrect' | null>(null);
  const [feedbackNote, setFeedbackNote] = useState('');
  const [feedbackSubmitting, setFeedbackSubmitting] = useState(false);
  const [feedbackSuccess, setFeedbackSuccess] = useState(false);

  const handleFeedbackSubmit = async () => {
    if (!result || feedbackType === null) return;

    setFeedbackSubmitting(true);

    try {
      const feedbackPayload = {
        job_id: result.job_id,
        image_id: result.image_id,
        is_correct: feedbackType === 'correct',
        correct_label: feedbackType === 'incorrect' ? (result.is_fake ? 'real' : 'fake') : null,
        feedback_note: feedbackNote || null
      };

      const feedbackResponse = await fetch('https://api-cv.4ship.vn/api/v1/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(feedbackPayload),
      });

      if (!feedbackResponse.ok) {
        throw new Error('Failed to submit feedback');
      }

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
    <div className="p-8 max-w-5xl mx-auto">
      <div className="space-y-6">

        <div className="bg-white rounded-xl border border-slate-200 p-6">
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
              className="flex flex-col items-center justify-center w-full h-80 border-2 border-dashed border-slate-300 rounded-xl cursor-pointer hover:border-blue-400 hover:bg-blue-50/30 transition-all bg-slate-50"
            >
              {previewUrl ? (
                <div className="relative w-full h-full p-4">
                  <img src={previewUrl} alt="Preview" className="w-full h-full object-contain rounded-lg" />
                </div>
              ) : (
                <>
                  <Upload className="w-10 h-10 text-slate-400 mb-3" />
                  <span className="text-sm font-medium text-slate-700">Click để tải ảnh lên</span>
                  <span className="text-xs text-slate-400 mt-1">JPEG, PNG, BMP, TIFF (Max 10MB)</span>
                </>
              )}
            </label>
          </div>
        </div>

        {!loading && !result && !error && (
          <button
            onClick={handleSubmit}
            disabled={!selectedFile}
            className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-semibold hover:shadow-lg hover:scale-[1.02] transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center space-x-2"
          >
            <Camera className="w-5 h-5" />
            <span>Phân tích ngay</span>
          </button>
        )}

        {error && (
          <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6 flex items-start space-x-3">
            <XCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
            <div>
              <p className="font-bold text-red-900 mb-1">Lỗi</p>
              <p className="text-sm text-red-700">{error}</p>
            </div>
          </div>
        )}

        {loading && (
          <div className="bg-white rounded-xl border border-slate-200 p-8">
            <div className="flex flex-col items-center justify-center py-8">
              <div className="relative">
                <Loader2 className="w-16 h-16 text-blue-600 animate-spin" />
              </div>
              <p className="text-base font-medium text-slate-700 mt-6">Đang phân tích...</p>
              <p className="text-sm text-slate-500 mt-2">Vui lòng chờ trong giây lát</p>
            </div>
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
                    {result.is_fake ? 'Ảnh giả mạo' : 'Ảnh thật'}
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

            <button
              onClick={() => {
                setResult(null);
                setSelectedFile(null);
                setPreviewUrl('');
                setError('');
                setShowFeedback(false);
                setFeedbackType(null);
                setFeedbackNote('');
                setFeedbackSuccess(false);
              }}
              className="w-full px-6 py-3 bg-white border-2 border-blue-600 text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-all flex items-center justify-center space-x-2"
            >
              <Upload className="w-5 h-5" />
              <span>Phân tích ảnh mới</span>
            </button>
          </div>
        )}

        {!result && !loading && !error && (
          <div className="bg-white rounded-xl border border-slate-200 p-12 text-center">
            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Camera className="w-8 h-8 text-slate-400" />
            </div>
            <p className="text-sm text-slate-600">
              Tải lên hình ảnh để bắt đầu
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

function ObjectDetectionPlayground() {
  return (
    <div className="p-8 max-w-5xl mx-auto">
      <div className="bg-white rounded-xl border border-slate-200 p-12 text-center">
        <div className="w-20 h-20 bg-gradient-to-br from-slate-100 to-slate-200 rounded-full flex items-center justify-center mx-auto mb-6">
          <Eye className="w-10 h-10 text-slate-400" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-3">Object Detection</h3>
        <p className="text-slate-600 mb-6">
          Service phát hiện và nhận diện đối tượng trong ảnh
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
    <div className="p-8 max-w-5xl mx-auto">
      <div className="bg-white rounded-xl border border-slate-200 p-12 text-center">
        <div className="w-20 h-20 bg-gradient-to-br from-slate-100 to-slate-200 rounded-full flex items-center justify-center mx-auto mb-6">
          <Users className="w-10 h-10 text-slate-400" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-3">Face Recognition</h3>
        <p className="text-slate-600 mb-6">
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

function AntiSpoofingAPIDocs() {
  const [copiedEndpoint, setCopiedEndpoint] = useState<string>('');

  const copyToClipboard = (text: string, endpoint: string) => {
    navigator.clipboard.writeText(text);
    setCopiedEndpoint(endpoint);
    setTimeout(() => setCopiedEndpoint(''), 2000);
  };

  const CodeBlock = ({ code }: { code: string }) => (
    <div className="relative group">
      <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto text-sm leading-relaxed">
        <code>{code}</code>
      </pre>
      <button
        onClick={() => copyToClipboard(code, code)}
        className="absolute top-2 right-2 p-2 bg-slate-700 hover:bg-slate-600 rounded text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity"
      >
        {copiedEndpoint === code ? 'Copied!' : 'Copy'}
      </button>
    </div>
  );

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Anti-Spoofing Detection API</h2>
        <p className="text-lg text-slate-600">
          API phát hiện ảnh giả mạo với job-based processing và feedback system
        </p>
      </div>

      <div className="space-y-8">
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-2xl p-6">
          <h3 className="text-xl font-bold text-slate-900 mb-3">Base URL</h3>
          <div className="bg-white rounded-lg p-4 border border-blue-200 font-mono text-sm">
            https://api-cv.4ship.vn/api/v1/job
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
          <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center space-x-2">
            <span className="bg-gradient-to-r from-green-600 to-emerald-500 text-white px-3 py-1 rounded-lg text-sm font-semibold">POST</span>
            <span>1. Create Inference Job</span>
          </h3>

          <div className="mb-4">
            <p className="text-slate-600 mb-4">Tạo background job để xử lý phát hiện ảnh giả mạo.</p>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
              <p className="font-mono text-sm text-slate-900">POST /api/v1/job/inference</p>
            </div>
          </div>

          <div className="mb-4">
            <h4 className="font-bold text-slate-900 mb-2">Parameters</h4>
            <div className="space-y-2">
              <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-mono text-sm font-semibold text-slate-900">file</span>
                  <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded font-semibold">required</span>
                </div>
                <p className="text-sm text-slate-600">Image file (JPEG, PNG, BMP, TIFF, max 10MB)</p>
              </div>
              <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-mono text-sm font-semibold text-slate-900">mode</span>
                  <span className="text-xs bg-slate-200 text-slate-700 px-2 py-1 rounded font-semibold">optional</span>
                </div>
                <p className="text-sm text-slate-600">Detection mode: <code className="bg-white px-2 py-0.5 rounded border">basic</code> (fast) or <code className="bg-white px-2 py-0.5 rounded border">advanced</code> (accurate, default)</p>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <h4 className="font-bold text-slate-900 mb-2">Example Request</h4>
            <CodeBlock code={`curl -X POST "https://api-cv.4ship.vn/api/v1/job/inference" \\
  -F "file=@image.jpg" \\
  -F "mode=advanced"`} />
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-2">Example Response</h4>
            <CodeBlock code={`{
  "job_id": "550e8400-e29b-41d4-a716-446655440000",
  "status": "pending"
}`} />
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
          <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center space-x-2">
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-3 py-1 rounded-lg text-sm font-semibold">GET</span>
            <span>2. Get Job Status & Results</span>
          </h3>

          <div className="mb-4">
            <p className="text-slate-600 mb-4">Lấy trạng thái và kết quả xử lý của job.</p>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
              <p className="font-mono text-sm text-slate-900">GET /api/v1/job/{'{job_id}'}</p>
            </div>
          </div>

          <div className="mb-4">
            <h4 className="font-bold text-slate-900 mb-2">Job Status Values</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="bg-yellow-50 border border-yellow-200 p-3 rounded-lg">
                <span className="font-mono text-sm font-bold text-yellow-800">pending</span>
                <p className="text-xs text-yellow-700 mt-1">Đang chờ xử lý</p>
              </div>
              <div className="bg-blue-50 border border-blue-200 p-3 rounded-lg">
                <span className="font-mono text-sm font-bold text-blue-800">processing</span>
                <p className="text-xs text-blue-700 mt-1">Đang xử lý</p>
              </div>
              <div className="bg-green-50 border border-green-200 p-3 rounded-lg">
                <span className="font-mono text-sm font-bold text-green-800">completed</span>
                <p className="text-xs text-green-700 mt-1">Hoàn thành</p>
              </div>
              <div className="bg-red-50 border border-red-200 p-3 rounded-lg">
                <span className="font-mono text-sm font-bold text-red-800">failed</span>
                <p className="text-xs text-red-700 mt-1">Lỗi xử lý</p>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <h4 className="font-bold text-slate-900 mb-2">Example Request</h4>
            <CodeBlock code={`curl -X GET "https://api-cv.4ship.vn/api/v1/job/550e8400-e29b-41d4-a716-446655440000"`} />
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-2">Example Response (Completed)</h4>
            <CodeBlock code={`{
  "job_id": "550e8400-e29b-41d4-a716-446655440000",
  "status": "completed",
  "image_id": "abc123-def456-ghi789",
  "file_name": "image.jpg",
  "is_fake": true,
  "confidence": 0.85,
  "has_feedback": false,
  "feedback_count": 0
}`} />
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
          <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center space-x-2">
            <span className="bg-gradient-to-r from-green-600 to-emerald-500 text-white px-3 py-1 rounded-lg text-sm font-semibold">POST</span>
            <span>3. Submit Feedback</span>
          </h3>

          <div className="mb-4">
            <p className="text-slate-600 mb-4">Gửi feedback khi kết quả phát hiện không chính xác.</p>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
              <p className="font-mono text-sm text-slate-900">POST /api/v1/feedback</p>
            </div>
          </div>

          <div className="mb-4">
            <h4 className="font-bold text-slate-900 mb-2">Request Body</h4>
            <div className="space-y-2">
              <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-mono text-sm font-semibold text-slate-900">job_id</span>
                  <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded font-semibold">required</span>
                </div>
                <p className="text-sm text-slate-600">ID của inference job</p>
              </div>
              <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-mono text-sm font-semibold text-slate-900">image_id</span>
                  <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded font-semibold">required</span>
                </div>
                <p className="text-sm text-slate-600">ID của ảnh đã xử lý</p>
              </div>
              <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-mono text-sm font-semibold text-slate-900">is_correct</span>
                  <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded font-semibold">required</span>
                </div>
                <p className="text-sm text-slate-600">Kết quả có chính xác không (true/false)</p>
              </div>
              <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-mono text-sm font-semibold text-slate-900">correct_label</span>
                  <span className="text-xs bg-slate-200 text-slate-700 px-2 py-1 rounded font-semibold">optional</span>
                </div>
                <p className="text-sm text-slate-600">Label đúng: <code className="bg-white px-2 py-0.5 rounded border">real</code> hoặc <code className="bg-white px-2 py-0.5 rounded border">fake</code> (bắt buộc nếu is_correct = false)</p>
              </div>
              <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-mono text-sm font-semibold text-slate-900">feedback_note</span>
                  <span className="text-xs bg-slate-200 text-slate-700 px-2 py-1 rounded font-semibold">optional</span>
                </div>
                <p className="text-sm text-slate-600">Ghi chú thêm về feedback</p>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <h4 className="font-bold text-slate-900 mb-2">Example Request</h4>
            <CodeBlock code={`curl -X POST "https://api-cv.4ship.vn/api/v1/feedback" \\
  -H "Content-Type: application/json" \\
  -d '{
    "job_id": "550e8400-e29b-41d4-a716-446655440000",
    "image_id": "abc123-def456-ghi789",
    "is_correct": false,
    "correct_label": "real",
    "feedback_note": "This is actually a real face"
  }'`} />
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-2">Example Response</h4>
            <CodeBlock code={`{
  "id": "770e8400-e29b-41d4-a716-446655440002",
  "job_id": "550e8400-e29b-41d4-a716-446655440000",
  "image_id": "abc123-def456-ghi789",
  "created_at": "2024-01-01T12:00:00Z",
  "is_correct": false,
  "correct_label": "real",
  "feedback_note": "This is actually a real face"
}`} />
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-50 to-blue-50 border border-slate-200 rounded-2xl p-6">
          <h3 className="text-xl font-bold text-slate-900 mb-4">Detection Modes</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
              <h4 className="font-bold text-slate-900 mb-3 flex items-center space-x-2">
                <Zap className="w-5 h-5 text-yellow-600" />
                <span>Basic Mode</span>
              </h4>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>• <strong>Method:</strong> Rule-based detection</li>
                <li>• <strong>Speed:</strong> ~100-200ms/image</li>
                <li>• <strong>Use case:</strong> Ứng dụng cần tốc độ</li>
                <li>• <strong>Features:</strong> Frequency, texture, color analysis</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
              <h4 className="font-bold text-slate-900 mb-3 flex items-center space-x-2">
                <Shield className="w-5 h-5 text-blue-600" />
                <span>Advanced Mode</span>
              </h4>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>• <strong>Method:</strong> CNN-based detection</li>
                <li>• <strong>Speed:</strong> ~500-1000ms/image</li>
                <li>• <strong>Use case:</strong> eKYC, bảo mật cao</li>
                <li>• <strong>Accuracy:</strong> Higher for subtle attacks</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
          <div className="flex items-start space-x-3">
            <Info className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-blue-900 mb-2">Lưu ý quan trọng</h4>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• Polling mỗi 1-2 giây để check job status</li>
                <li>• File size tối đa: 10MB cho single inference</li>
                <li>• Supported formats: JPEG, PNG, BMP, TIFF</li>
                <li>• Feedback giúp cải thiện độ chính xác của model</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
