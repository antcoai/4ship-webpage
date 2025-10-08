import { useState } from 'react';
import { Eye, Shield, Users, Camera, Upload, Loader2, CheckCircle2, XCircle, Info } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

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
  const [activeService, setActiveService] = useState(0);
  const headerAnim = useScrollAnimation({ threshold: 0.2 });
  const servicesAnim = useScrollAnimation({ threshold: 0.15 });

  const services = [
    {
      id: 'anti-spoofing',
      icon: Shield,
      title: 'Anti-Spoofing Detection',
      description: 'Phát hiện giả mạo khuôn mặt với độ chính xác cao, ngăn chặn tấn công bằng ảnh in, video hoặc mặt nạ 3D.',
      color: 'from-red-500 to-orange-500',
      component: AntiSpoofingPlayground,
    },
    {
      id: 'object-detection',
      icon: Eye,
      title: 'Object Detection',
      description: 'Nhận diện và phát hiện nhiều đối tượng trong hình ảnh với độ chính xác cao, hỗ trợ hơn 80 loại đối tượng.',
      color: 'from-blue-500 to-cyan-500',
      component: ObjectDetectionPlayground,
    },
    {
      id: 'face-recognition',
      icon: Users,
      title: 'Face Recognition',
      description: 'Nhận dạng khuôn mặt với độ chính xác cao, so khớp và xác thực danh tính trong thời gian thực.',
      color: 'from-green-500 to-emerald-500',
      component: FaceRecognitionPlayground,
    },
  ];

  const CurrentComponent = services[activeService].component;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4 md:px-6 pt-32 pb-16">
        <div ref={headerAnim.ref} className={`text-center mb-16 scroll-fade-in ${headerAnim.isVisible ? 'visible' : ''}`}>
          <div className="inline-flex items-center space-x-2 px-5 py-2.5 bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200/50 rounded-full mb-6">
            <Eye className="w-4 h-4 text-orange-600" />
            <span className="text-xs md:text-sm font-bold text-orange-700 tracking-wider">COMPUTER VISION</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Giải pháp thị giác máy tính
            <span className="block bg-gradient-to-r from-orange-600 to-red-500 bg-clip-text text-transparent mt-2">
              thông minh và chính xác
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Trải nghiệm các giải pháp Computer Vision tiên tiến với công nghệ AI và Deep Learning
          </p>
        </div>

        <div ref={servicesAnim.ref} className={`mb-12 scroll-slide-up ${servicesAnim.isVisible ? 'visible' : ''}`}>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <button
                key={service.id}
                onClick={() => setActiveService(index)}
                className={`p-6 rounded-xl border-2 transition-all duration-300 text-left ${
                  activeService === index
                    ? 'border-orange-500 bg-gradient-to-br from-orange-50 to-red-50 shadow-lg scale-105'
                    : 'border-slate-200 bg-white hover:border-orange-300 hover:shadow-md'
                }`}
              >
                <service.icon
                  className={`w-10 h-10 mb-4 ${
                    activeService === index ? 'text-orange-600' : 'text-slate-400'
                  }`}
                />
                <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{service.description}</p>
              </button>
            ))}
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <CurrentComponent />
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
    <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
      <div className="flex items-center space-x-3 mb-8">
        <Shield className="w-8 h-8 text-orange-600" />
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Anti-Spoofing Detection</h2>
          <p className="text-sm text-slate-600">Phát hiện giả mạo khuôn mặt với AI</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <div className="mb-6">
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

          <div className="mb-6">
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
                className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-slate-300 rounded-xl cursor-pointer hover:border-orange-400 hover:bg-orange-50/50 transition-all"
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

        <div>
          <div className="bg-slate-50 rounded-xl p-6 h-full">
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
          </div>
        </div>
      </div>

      <div className="mt-8 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-6 border border-orange-200/50">
        <h4 className="text-sm font-bold text-slate-900 mb-3">Về Anti-Spoofing Detection</h4>
        <div className="grid md:grid-cols-3 gap-4 text-sm text-slate-700">
          <div>
            <p className="font-semibold mb-1">Basic Mode</p>
            <p className="text-xs text-slate-600">Phân tích tần số, texture và màu sắc với tốc độ cao</p>
          </div>
          <div>
            <p className="font-semibold mb-1">Advanced Mode</p>
            <p className="text-xs text-slate-600">Sử dụng CNN để phát hiện các cuộc tấn công tinh vi</p>
          </div>
          <div>
            <p className="font-semibold mb-1">Use Cases</p>
            <p className="text-xs text-slate-600">Xác thực sinh trắc học, bảo mật ngân hàng, kiểm soát truy cập</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ObjectDetectionPlayground() {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
      <div className="flex items-center space-x-3 mb-8">
        <Eye className="w-8 h-8 text-blue-600" />
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Object Detection</h2>
          <p className="text-sm text-slate-600">Nhận diện đối tượng trong hình ảnh</p>
        </div>
      </div>
      <div className="text-center py-20 bg-slate-50 rounded-xl">
        <Camera className="w-16 h-16 text-slate-300 mx-auto mb-4" />
        <p className="text-slate-500">Coming soon</p>
      </div>
    </div>
  );
}

function FaceRecognitionPlayground() {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
      <div className="flex items-center space-x-3 mb-8">
        <Users className="w-8 h-8 text-green-600" />
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Face Recognition</h2>
          <p className="text-sm text-slate-600">Nhận dạng và xác thực khuôn mặt</p>
        </div>
      </div>
      <div className="text-center py-20 bg-slate-50 rounded-xl">
        <Camera className="w-16 h-16 text-slate-300 mx-auto mb-4" />
        <p className="text-slate-500">Coming soon</p>
      </div>
    </div>
  );
}
