import { useState } from 'react';
import { ArrowLeft, Eye, Shield, Users, Camera, Upload, Loader2, CheckCircle2, XCircle, Info, Sparkles, Zap, Activity, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

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
      <div className="bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900 text-white py-20">
        <div className="container mx-auto px-6">
          <Link to="/" className="inline-flex items-center space-x-2 text-orange-400 hover:text-orange-300 mb-8 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span>Quay lại trang chủ</span>
          </Link>

          <div className="max-w-4xl">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-orange-500/20 backdrop-blur-sm border border-orange-400/30 rounded-full mb-6">
              <Eye className="w-4 h-4 text-orange-400" />
              <span className="text-sm font-semibold text-orange-300">GIẢI PHÁP AI</span>
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
                  <feature.icon className="w-8 h-8 text-orange-400 mb-2" />
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
                        ? 'bg-white text-orange-600 border-b-3 border-orange-600 shadow-sm'
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
                        ? 'bg-white text-orange-600 border-b-3 border-orange-600 shadow-sm'
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
                        ? 'bg-white text-orange-600 border-b-3 border-orange-600 shadow-sm'
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

      <div className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Ứng dụng thực tế</h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Computer Vision được áp dụng rộng rãi trong nhiều lĩnh vực khác nhau
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: Shield,
                  title: 'Bảo mật & Xác thực',
                  description: 'Kiểm tra khuôn mặt thật/giả, phát hiện giả mạo, xác thực sinh trắc học cho ngân hàng và ứng dụng bảo mật.',
                  features: ['Face liveness detection', 'ID card verification', 'Access control']
                },
                {
                  icon: Camera,
                  title: 'Giám sát thông minh',
                  description: 'Theo dõi và phân tích hành vi trong video, đếm người, phát hiện sự kiện bất thường trong thời gian thực.',
                  features: ['People counting', 'Behavior analysis', 'Anomaly detection']
                },
                {
                  icon: Eye,
                  title: 'Kiểm soát chất lượng',
                  description: 'Tự động phát hiện lỗi sản phẩm, kiểm tra chất lượng trên dây chuyền sản xuất với độ chính xác cao.',
                  features: ['Defect detection', 'Quality inspection', 'Automated sorting']
                },
                {
                  icon: Users,
                  title: 'Phân tích khách hàng',
                  description: 'Nhận diện cảm xúc, phân tích hành vi mua sắm, thống kê lưu lượng khách hàng tại cửa hàng.',
                  features: ['Emotion recognition', 'Customer analytics', 'Heat mapping']
                }
              ].map((useCase) => (
                <div key={useCase.title} className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:border-orange-300 hover:shadow-lg transition-all">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-400 rounded-xl flex items-center justify-center mb-4">
                    <useCase.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{useCase.title}</h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">{useCase.description}</p>
                  <div className="space-y-2">
                    {useCase.features.map((feature) => (
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

      <div className="bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900 py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Sẵn sàng triển khai Computer Vision?</h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Bắt đầu chuyển đổi số với giải pháp Computer Vision thông minh. Liên hệ ngay để được tư vấn và demo miễn phí.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/#contact"
                className="px-8 py-4 bg-gradient-to-r from-orange-400 to-red-500 text-white rounded-xl font-bold hover:shadow-2xl transition-all text-lg"
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
              <Shield className="w-7 h-7 text-orange-600" />
              <span>Anti-Spoofing Detection</span>
            </h3>
            <p className="text-slate-600 mb-6">
              Phát hiện giả mạo khuôn mặt với AI, ngăn chặn tấn công bằng ảnh in, video hoặc mặt nạ 3D
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
                    ? 'border-orange-500 bg-orange-50 text-orange-700'
                    : 'border-slate-200 text-slate-600 hover:border-orange-300'
                }`}
              >
                Basic Mode
              </button>
              <button
                onClick={() => setMode('advanced')}
                className={`flex-1 px-4 py-3 rounded-lg border-2 font-semibold transition-all ${
                  mode === 'advanced'
                    ? 'border-orange-500 bg-orange-50 text-orange-700'
                    : 'border-slate-200 text-slate-600 hover:border-orange-300'
                }`}
              >
                Advanced Mode
              </button>
            </div>
            <p className="text-xs text-slate-500 mt-2">
              {mode === 'basic'
                ? 'Nhanh (~100-200ms) - Phân tích dựa trên quy tắc'
                : 'Chính xác (~500-1000ms) - Phân tích dựa trên CNN'}
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
                className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-slate-300 rounded-xl cursor-pointer hover:border-orange-400 hover:bg-orange-50/50 transition-all"
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
            className="w-full px-6 py-4 bg-gradient-to-r from-orange-600 to-red-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
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
            <Loader2 className="w-12 h-12 text-orange-600 animate-spin mb-4" />
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
                <p>Chế độ: {mode === 'basic' ? 'Basic (Rule-based)' : 'Advanced (CNN)'}</p>
                <p className="text-xs text-blue-700 mt-2">Job ID: {result.job_id}</p>
              </div>
            </div>
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
            <p><strong>Basic Mode:</strong> Phân tích tần số, texture và màu sắc</p>
            <p><strong>Advanced Mode:</strong> CNN để phát hiện tấn công tinh vi</p>
            <p><strong>Use Cases:</strong> Bảo mật ngân hàng, kiểm soát truy cập</p>
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
        <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
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
        <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
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
