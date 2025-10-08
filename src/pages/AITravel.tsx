import { useState } from 'react';
import { ArrowLeft, Plane, Mic, Volume2, Globe, Map, Sparkles, Camera, Navigation, CheckCircle, Play, Pause, Languages, MapPin, Calendar, Users, Star, TrendingUp, Headphones, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AITravel() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState(0);

  const heroFeatures = [
    {
      icon: Mic,
      title: 'Voice Bot Thông minh',
      description: 'Tư vấn địa điểm bằng giọng nói'
    },
    {
      icon: Eye,
      title: 'VR360 Immersive',
      description: 'Khám phá trước khi đi'
    },
    {
      icon: Headphones,
      title: 'Audio Guide AI',
      description: 'Thuyết minh đa ngôn ngữ'
    },
    {
      icon: Sparkles,
      title: 'Smart Recommendations',
      description: 'Gợi ý cá nhân hóa'
    }
  ];

  const features = [
    {
      id: 'voicebot',
      icon: Mic,
      title: 'Trợ lý giọng nói AI - Tư vấn du lịch 24/7',
      description: 'Giải pháp tư vấn tự động bằng giọng nói, hiểu ngữ cảnh và đưa ra gợi ý chính xác cho mọi hành trình',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1920',
      story: 'Hãy tưởng tượng bạn đang lên kế hoạch cho chuyến du lịch. Thay vì tìm kiếm thông tin qua hàng trăm website, bạn chỉ cần nói: "Tôi muốn đi biển, nơi yên tĩnh, phù hợp cho gia đình". Voice Bot AI sẽ phân tích giọng nói, hiểu ngữ cảnh và đưa ra gợi ý cụ thể dựa trên sở thích, ngân sách và thời gian của bạn.',
      specs: [
        { label: 'Nhận diện giọng nói', value: '99.2%', icon: TrendingUp },
        { label: 'Độ trễ phản hồi', value: '<50ms', icon: TrendingUp },
        { label: 'Ngôn ngữ hỗ trợ', value: '30+', icon: Languages }
      ],
      capabilities: [
        'Hiểu ngữ cảnh và ý định du lịch',
        'Phân tích giọng điệu để đề xuất phù hợp',
        'Tư vấn real-time về thời tiết, giá cả',
        'Tích hợp lịch sử và sở thích cá nhân',
        'Hỗ trợ đặt tour và booking ngay lập tức'
      ]
    },
    {
      id: 'audio',
      icon: Volume2,
      title: 'Hệ thống thuyết minh thông minh AI',
      description: 'Giải pháp audio guide tự động nhận diện vị trí và tùy chỉnh nội dung theo từng đối tượng du khách',
      image: 'https://images.pexels.com/photos/2422286/pexels-photo-2422286.jpeg?auto=compress&cs=tinysrgb&w=1920',
      story: 'Bạn đang đứng trước Chùa Một Cột nghìn năm tuổi. Hệ thống AI tự động phát: "Chùa Một Cột, kiệt tác kiến trúc thời Lý, được vua Lý Thái Tông xây dựng năm 1049. Câu chuyện kể rằng, vua nằm mơ thấy Quan Âm Bồ Tát ngồi trên đài sen đưa cho Ngài một đứa con trai..." Hay tại Yên Tử, khi bạn bước lên chùa Đồng, giọng AI thủ thỉ: "Nơi đây, vua Trần Nhân Tông từng xuống tóc đi tu, để lại lời dạy về Thiền phái Trúc Lâm Yên Tử..." AI không chỉ kể sự kiện, mà kể câu chuyện sống động với cảm xúc, âm thanh thiên nhiên xung quanh hòa quyện.',
      specs: [
        { label: 'Chất lượng giọng đọc', value: 'Tự nhiên', icon: Volume2 },
        { label: 'Tốc độ tổng hợp', value: 'Tức thì', icon: TrendingUp },
        { label: 'Giọng đọc tùy chỉnh', value: '100+', icon: Users }
      ],
      capabilities: [
        'Tự động nhận diện địa điểm qua GPS',
        'Thuyết minh đa tầng theo đối tượng',
        'Điều chỉnh độ dài nội dung linh hoạt',
        'Hỗ trợ offline với cache thông minh',
        'Tích hợp background music phù hợp'
      ]
    },
    {
      id: 'vr360',
      icon: Camera,
      title: 'Trải nghiệm thực tế ảo VR360',
      description: 'Công nghệ thực tế ảo 360° cho phép trải nghiệm điểm đến một cách chân thực nhất',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1920',
      story: 'Bạn đang cân nhắc giữa hai resort nhưng chưa quyết định? Đeo kính VR và bước vào resort ngay tại nhà. Dạo quanh bãi biển, khám phá phòng nghỉ, nhìn thấy view từ ban công. AI sẽ highlight những điểm đặc biệt, cho bạn biết "Lúc hoàng hôn, view từ đây tuyệt đẹp" hoặc "Khu vực này yên tĩnh, phù hợp cho gia đình có trẻ nhỏ".',
      specs: [
        { label: 'Độ phân giải', value: '8K/360°', icon: Eye },
        { label: 'Frame rate', value: '60fps', icon: TrendingUp },
        { label: 'Tương tác', value: 'Đầy đủ 6DoF', icon: Navigation }
      ],
      capabilities: [
        'Quay 360° với độ phân giải 8K',
        'AI enhancement cho chất lượng hình ảnh',
        'Interactive hotspots thông minh',
        'Tích hợp sound design không gian',
        'Virtual avatar guide dẫn tour'
      ]
    },
    {
      id: 'itinerary',
      icon: Map,
      title: 'Lập lộ trình thông minh AI',
      description: 'Hệ thống phân tích và đề xuất lộ trình thông minh dựa trên thời tiết, sở thích và ngân sách',
      image: 'https://images.pexels.com/photos/1252500/pexels-photo-1252500.jpeg?auto=compress&cs=tinysrgb&w=1920',
      story: 'Bạn có 3 ngày ở Đà Nẵng nhưng không biết đi đâu trước? AI phân tích thời tiết, lưu lượng du khách, giờ mở cửa và đề xuất lộ trình tối ưu. Sáng nay trời đẹp? Đi Bà Nà Hills. Chiều có mưa? Ghé bảo tàng và trung tâm thương mại. Hệ thống liên tục cập nhật và điều chỉnh khi có thay đổi.',
      specs: [
        { label: 'Điểm đến trong DB', value: '500K+', icon: MapPin },
        { label: 'Độ chính xác dự đoán', value: '92%', icon: TrendingUp },
        { label: 'Cập nhật thời gian thực', value: 'Tức thì', icon: Navigation }
      ],
      capabilities: [
        'Tối ưu hóa di chuyển giữa các điểm',
        'Dự đoán thời gian phù hợp ghé thăm',
        'Tính toán chi phí tự động',
        'Đề xuất thay thế khi có thay đổi',
        'Sync với lịch cá nhân'
      ]
    },
    {
      id: 'social',
      icon: Users,
      title: 'Trợ lý du lịch cá nhân hóa AI',
      description: 'AI đồng hành thông minh, học hỏi và đề xuất phù hợp với từng thời điểm trong chuyến đi',
      image: 'https://images.pexels.com/photos/1467300/pexels-photo-1467300.jpeg?auto=compress&cs=tinysrgb&w=1920',
      story: 'Trong suốt chuyến đi, AI companion như một người bạn đồng hành. "Bạn đã đi được 5km rồi, nghỉ chân uống cafe nhé?", "Nhà hàng phía trước có món ăn bạn thích đấy", "Nhớ mua quà cho mẹ, shop này có đồ handmade đẹp lắm". AI học hỏi từng hành vi, càng đi càng hiểu bạn hơn.',
      specs: [
        { label: 'Cá nhân hóa', value: '100%', icon: Sparkles },
        { label: 'Tốc độ học', value: 'Nhanh', icon: TrendingUp },
        { label: 'Hiểu ngữ cảnh', value: 'Sâu', icon: Globe }
      ],
      capabilities: [
        'Gợi nhớ và nhắc việc thông minh',
        'Phát hiện cơ hội chụp ảnh đẹp',
        'Đề xuất hoạt động theo mood',
        'Kết nối với du khách cùng sở thích',
        'Tự động tạo album và video recap'
      ]
    },
    {
      id: 'translation',
      icon: Languages,
      title: 'Phiên dịch đa ngôn ngữ AI',
      description: 'Giải pháp phiên dịch đa ngôn ngữ tức thì, hiểu ngữ cảnh văn hóa và giao tiếp tự nhiên',
      image: 'https://images.pexels.com/photos/4099471/pexels-photo-4099471.jpeg?auto=compress&cs=tinysrgb&w=1920',
      story: 'Bạn đang ở chợ nổi Thái Lan, muốn mặc cả nhưng không biết tiếng. Chỉ cần nói tiếng Việt vào điện thoại, AI dịch sang tiếng Thái tức thì với giọng nói tự nhiên. Người bán trả lời? AI dịch ngược lại cho bạn nghe. Hay khi bạn ở Nhật đọc menu nhà hàng, chụp ảnh là AI dịch toàn bộ từ Kanji sang tiếng Việt. Ở Pháp cần gọi taxi? AI giúp bạn nói tiếng Pháp chuẩn. Hệ thống hỗ trợ 100+ ngôn ngữ: tiếng Anh, Trung, Nhật, Hàn, Thái, Pháp, Đức, Tây Ban Nha, Ý, Nga... và hiểu cả ngữ cảnh văn hóa để bạn giao tiếp đúng mực.',
      specs: [
        { label: 'Ngôn ngữ', value: '100+', icon: Languages },
        { label: 'Độ trễ', value: '<200ms', icon: TrendingUp },
        { label: 'Độ chính xác', value: '98%', icon: CheckCircle }
      ],
      capabilities: [
        'Dịch giọng nói song phương real-time',
        'Nhận dạng ngữ cảnh văn hóa',
        'Dịch menu nhà hàng qua camera',
        'Gợi ý cách giao tiếp phù hợp',
        'Offline mode cho vùng không sóng'
      ]
    }
  ];

  const destinations = [
    {
      name: 'Vịnh Hạ Long',
      country: 'Việt Nam',
      image: 'https://images.pexels.com/photos/672358/pexels-photo-672358.jpeg?auto=compress&cs=tinysrgb&w=1920',
      rating: 4.9,
      tours: 328,
      description: 'Di sản thiên nhiên thế giới với hàng nghìn đảo đá vôi kỳ vĩ'
    },
    {
      name: 'Đền Angkor Wat',
      country: 'Campuchia',
      image: 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=1920',
      rating: 4.8,
      tours: 445,
      description: 'Quần thể đền đài cổ xưa và huyền bí nhất Đông Nam Á'
    },
    {
      name: 'Mount Fuji',
      country: 'Nhật Bản',
      image: 'https://images.pexels.com/photos/2187605/pexels-photo-2187605.jpeg?auto=compress&cs=tinysrgb&w=1920',
      rating: 5.0,
      tours: 567,
      description: 'Biểu tượng thiêng liêng của xứ sở hoa anh đào'
    }
  ];

  const useCases = [
    {
      title: 'Tour Guide Automation',
      description: 'Thay thế hoàn toàn hướng dẫn viên truyền thống bằng AI, giảm 80% chi phí vận hành',
      icon: Users,
      impact: '80% cost reduction',
      companies: ['Vietravel', 'Saigontourist']
    },
    {
      title: 'Hotel & Resort Experience',
      description: 'Voice assistant trong phòng, VR360 marketing, audio guide tại resort',
      icon: Star,
      impact: '45% booking increase',
      companies: ['Vinpearl', 'FLC']
    },
    {
      title: 'Museum & Heritage Sites',
      description: 'Audio guide đa ngôn ngữ tự động, VR reconstruction các di tích lịch sử',
      icon: Globe,
      impact: '3x visitor engagement',
      companies: ['Bảo tàng Lịch sử', 'Di sản Huế']
    },
    {
      title: 'Travel Agency Platform',
      description: 'Nền tảng tư vấn tự động 24/7, tối ưu lộ trình cho khách hàng',
      icon: MapPin,
      impact: '200% productivity',
      companies: ['Booking.com', 'Agoda']
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Tăng trải nghiệm khách hàng',
      description: 'Cung cấp thông tin tức thì, cá nhân hóa cao, giảm thời gian chờ đợi và tăng sự hài lòng',
      stat: '+150%',
      label: 'Engagement'
    },
    {
      icon: Users,
      title: 'Giảm chi phí vận hành',
      description: 'Tự động hóa tư vấn, thuyết minh, giảm nhu cầu nhân sự và tối ưu quy trình',
      stat: '-80%',
      label: 'Operating Cost'
    },
    {
      icon: Star,
      title: 'Tăng tỷ lệ chuyển đổi',
      description: 'VR360 giúp khách hàng quyết định nhanh hơn, voice bot tư vấn chính xác tăng booking',
      stat: '+45%',
      label: 'Conversion'
    },
    {
      icon: Globe,
      title: 'Mở rộng thị trường',
      description: 'Hỗ trợ đa ngôn ngữ giúp tiếp cận khách quốc tế, không giới hạn địa lý',
      stat: '100+',
      label: 'Languages'
    }
  ];

  const currentFeature = features[activeFeature];

  return (
    <div className="min-h-screen bg-white">
      <div className="relative bg-gradient-to-br from-blue-900 via-blue-900 to-cyan-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/50 to-blue-900"></div>

        <div className="relative container mx-auto px-6 py-20">
          <Link to="/" className="inline-flex items-center space-x-2 text-cyan-300 hover:text-cyan-200 mb-8 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span>Quay lại trang chủ</span>
          </Link>

          <div className="max-w-5xl mx-auto text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-5 py-2.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-6">
              <Plane className="w-5 h-5 text-cyan-300" />
              <span className="text-sm font-bold tracking-wider">AI FOR TRAVEL</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Tương lai của
              <span className="block bg-gradient-to-r from-cyan-300 via-cyan-300 to-cyan-300 bg-clip-text text-transparent">
                Trải nghiệm Du lịch
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-blue-100 mb-12 leading-relaxed max-w-3xl mx-auto">
              Nền tảng AI toàn diện kết hợp Voice Bot, VR360, Audio Guide và Smart Planning.
              Biến mỗi chuyến đi thành một trải nghiệm ma thuật.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {heroFeatures.map((feature) => (
                <div key={feature.title} className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20 hover:bg-white/15 transition-all">
                  <feature.icon className="w-10 h-10 text-cyan-300 mb-3 mx-auto" />
                  <h3 className="font-bold text-sm mb-1">{feature.title}</h3>
                  <p className="text-xs text-blue-200">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-bold hover:shadow-2xl hover:scale-105 transition-all">
                Demo trải nghiệm ngay
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white rounded-xl font-bold hover:bg-white/20 transition-all">
                Xem case studies
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 px-5 py-2.5 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-full mb-6">
                <Sparkles className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-bold text-blue-900 tracking-wider">CÔNG NGHỆ TIÊN TIẾN</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Nền tảng AI Travel
                <span className="block bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent mt-2">
                  Toàn diện & Chuyên sâu
                </span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Hệ sinh thái 6 công nghệ AI tích hợp liền mạch, mang đến trải nghiệm du lịch
                <span className="font-semibold text-blue-600"> thông minh và cá nhân hóa cao</span>
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {features.map((feature, index) => (
                <button
                  key={feature.id}
                  onClick={() => setActiveFeature(index)}
                  className={`group text-left p-8 rounded-2xl transition-all duration-300 relative overflow-hidden ${
                    activeFeature === index
                      ? 'bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 text-white shadow-2xl scale-[1.02] ring-4 ring-blue-200'
                      : 'bg-white border-2 border-slate-200 hover:border-cyan-400 hover:shadow-xl'
                  }`}
                >
                  {activeFeature === index && (
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
                  )}
                  <div className={`relative w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-all ${
                    activeFeature === index
                      ? 'bg-white/20 backdrop-blur-sm'
                      : 'bg-gradient-to-br from-blue-100 to-cyan-100 group-hover:scale-110'
                  }`}>
                    <feature.icon className={`w-7 h-7 ${activeFeature === index ? 'text-white' : 'text-blue-600'}`} strokeWidth={2} />
                  </div>
                  <h3 className={`font-bold text-xl mb-3 leading-tight ${activeFeature === index ? 'text-white' : 'text-slate-900'}`}>
                    {feature.title}
                  </h3>
                  <p className={`text-[15px] leading-relaxed ${activeFeature === index ? 'text-blue-50' : 'text-slate-600'}`}>
                    {feature.description}
                  </p>
                  {activeFeature === index && (
                    <div className="mt-4 flex items-center space-x-2 text-white/90">
                      <Sparkles className="w-4 h-4" />
                      <span className="text-sm font-semibold">Đang xem chi tiết</span>
                    </div>
                  )}
                </button>
              ))}
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl shadow-2xl overflow-hidden border-2 border-blue-200">
              <div className="grid lg:grid-cols-5">
                <div className="lg:col-span-2 relative h-[500px] lg:h-auto">
                  <img
                    src={currentFeature.image}
                    alt={currentFeature.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <div className="grid grid-cols-1 gap-3">
                      {currentFeature.specs.map((spec, idx) => (
                        <div key={idx} className="bg-white/20 backdrop-blur-xl px-5 py-3 rounded-xl border border-white/40 hover:bg-white/30 transition-all">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-white/30 rounded-lg flex items-center justify-center">
                              <spec.icon className="w-5 h-5 text-white" strokeWidth={2.5} />
                            </div>
                            <div>
                              <div className="text-xs text-white/90 font-medium">{spec.label}</div>
                              <div className="text-lg font-bold text-white">{spec.value}</div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-3 p-10 lg:p-12 bg-white">
                  <div className="mb-8">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg">
                        <currentFeature.icon className="w-8 h-8 text-white" strokeWidth={2} />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-slate-900 leading-tight">{currentFeature.title}</h3>
                        <p className="text-slate-600 mt-1">{currentFeature.description}</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-50 rounded-2xl p-8 mb-8 border-2 border-blue-200 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-300/20 rounded-full blur-3xl"></div>
                    <div className="relative">
                      <div className="flex items-center space-x-2 mb-4">
                        <Sparkles className="w-6 h-6 text-blue-600" />
                        <h4 className="font-bold text-blue-900 text-lg">Câu chuyện ứng dụng</h4>
                      </div>
                      <p className="text-slate-700 text-[15px] leading-relaxed">{currentFeature.story}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-900 text-lg mb-5 flex items-center">
                      <div className="w-1 h-6 bg-gradient-to-b from-blue-600 to-cyan-600 rounded-full mr-3"></div>
                      Khả năng vượt trội
                    </h4>
                    <div className="grid gap-3">
                      {currentFeature.capabilities.map((capability, idx) => (
                        <div key={idx} className="flex items-start space-x-3 p-4 bg-slate-50 rounded-xl border border-slate-200 hover:border-cyan-300 hover:bg-blue-50/50 transition-all group">
                          <div className="w-6 h-6 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all">
                            <CheckCircle className="w-4 h-4 text-green-600" strokeWidth={2.5} />
                          </div>
                          <span className="text-slate-700 text-[15px] leading-relaxed">{capability}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Điểm đến được trải nghiệm qua VR360
              </h2>
              <p className="text-xl text-slate-300">
                Khám phá thế giới từ màn hình của bạn
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {destinations.map((dest, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedDestination(idx)}
                  className={`relative rounded-2xl overflow-hidden cursor-pointer transition-all hover:scale-105 ${
                    selectedDestination === idx ? 'ring-4 ring-cyan-500' : ''
                  }`}
                >
                  <div className="relative h-80">
                    <img
                      src={dest.image}
                      alt={dest.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

                    <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border-4 border-white hover:scale-110 transition-all">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </button>

                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-center space-x-2 mb-2">
                        <MapPin className="w-4 h-4 text-cyan-400" />
                        <span className="text-sm text-cyan-300">{dest.country}</span>
                      </div>
                      <h3 className="text-2xl font-bold mb-2">{dest.name}</h3>
                      <p className="text-sm text-slate-300 mb-3">{dest.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="font-bold">{dest.rating}</span>
                        </div>
                        <div className="text-sm text-slate-300">{dest.tours} VR tours</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Ứng dụng thực tế
              </h2>
              <p className="text-xl text-slate-600">
                Các doanh nghiệp hàng đầu đang sử dụng AI Travel
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {useCases.map((useCase, idx) => (
                <div key={idx} className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border-2 border-blue-200 hover:shadow-2xl hover:scale-105 transition-all">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center mb-6">
                    <useCase.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{useCase.title}</h3>
                  <p className="text-slate-700 mb-4 leading-relaxed">{useCase.description}</p>
                  <div className="flex items-center justify-between pt-4 border-t-2 border-blue-200">
                    <div>
                      <div className="text-sm text-blue-600 font-semibold mb-1">Impact</div>
                      <div className="text-lg font-bold text-blue-900">{useCase.impact}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-slate-600 mb-1">Đối tác</div>
                      <div className="text-xs text-slate-500">{useCase.companies.join(', ')}</div>
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
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-100 rounded-full mb-4">
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-bold text-blue-900">LỢI ÍCH VƯỢT TRỘI</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Tại sao chọn AI Travel?
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Giải pháp toàn diện mang lại giá trị thực tế cho doanh nghiệp du lịch
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-8 border-2 border-slate-200 hover:border-cyan-300 hover:shadow-2xl transition-all group">
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all">
                      <benefit.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                      <p className="text-slate-600 leading-relaxed mb-4">{benefit.description}</p>
                      <div className="flex items-center space-x-3">
                        <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                          {benefit.stat}
                        </div>
                        <div className="text-sm text-slate-500">{benefit.label}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 bg-gradient-to-br from-blue-900 via-blue-900 to-cyan-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Plane className="w-20 h-20 mx-auto mb-6 text-cyan-300" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Sẵn sàng khởi hành?
            </h2>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed">
              Tham gia cùng hàng trăm doanh nghiệp du lịch hàng đầu đang sử dụng AI Travel.
              Đặt lịch demo ngay để trải nghiệm công nghệ tương lai.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all">
                Đặt lịch Demo miễn phí
              </button>
              <button className="px-10 py-5 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white rounded-xl font-bold text-lg hover:bg-white/20 transition-all">
                Tải tài liệu chi tiết
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
