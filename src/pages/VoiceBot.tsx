import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mic, Volume2, Play, Square, PhoneCall, CheckCircle, Copy, Check, Sparkles, Zap, Globe, Activity, Radio } from 'lucide-react';

export default function VoiceBot() {
  const [activeTab, setActiveTab] = useState<'agent' | 'tts' | 'stt'>('agent');
  const [isRecording, setIsRecording] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedAPI, setSelectedAPI] = useState('tts-api');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [ttsText, setTtsText] = useState('Xin chào, tôi là Voice Bot của 4SHIP. Tôi có thể giúp gì cho bạn hôm nay?');
  const [selectedVoice, setSelectedVoice] = useState('vi-female-1');
  const [conversationLog, setConversationLog] = useState<Array<{ speaker: string; text: string; timestamp: string }>>([]);

  const copyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const voices = [
    { id: 'vi-female-1', name: 'Minh Anh', gender: 'Nữ', style: 'Tự nhiên, thân thiện', accent: 'Miền Bắc' },
    { id: 'vi-female-2', name: 'Phương Linh', gender: 'Nữ', style: 'Chuyên nghiệp, rõ ràng', accent: 'Miền Nam' },
    { id: 'vi-male-1', name: 'Hoàng Nam', gender: 'Nam', style: 'Trầm ấm, nam tính', accent: 'Miền Bắc' },
    { id: 'vi-male-2', name: 'Đức Anh', gender: 'Nam', style: 'Năng động, sôi nổi', accent: 'Miền Trung' },
  ];

  const apiEndpoints = {
    tts: [
      {
        id: 'tts-api',
        name: 'Text to Speech',
        description: 'Chuyển văn bản thành giọng nói',
        method: 'POST',
        endpoint: '/api/v1/tts/synthesize',
        code: `curl -X POST https://api.4ship.ai/v1/tts/synthesize \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "text": "Xin chào, tôi là voice bot của 4SHIP",
    "voice_id": "vi-female-1",
    "speed": 1.0,
    "pitch": 1.0,
    "output_format": "mp3"
  }'`
      },
      {
        id: 'tts-voices',
        name: 'List Voices',
        description: 'Lấy danh sách giọng nói có sẵn',
        method: 'GET',
        endpoint: '/api/v1/tts/voices',
        code: `curl -X GET https://api.4ship.ai/v1/tts/voices \\
  -H "Authorization: Bearer YOUR_API_KEY"`
      }
    ],
    stt: [
      {
        id: 'stt-api',
        name: 'Speech to Text',
        description: 'Chuyển giọng nói thành văn bản',
        method: 'POST',
        endpoint: '/api/v1/stt/transcribe',
        code: `curl -X POST https://api.4ship.ai/v1/stt/transcribe \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -F "audio=@/path/to/audio.wav" \\
  -F "language=vi-VN" \\
  -F "enable_punctuation=true"`
      },
      {
        id: 'stt-stream',
        name: 'Streaming STT',
        description: 'Nhận diện giọng nói thời gian thực',
        method: 'WebSocket',
        endpoint: 'wss://api.4ship.ai/v1/stt/stream',
        code: `const ws = new WebSocket('wss://api.4ship.ai/v1/stt/stream?apikey=YOUR_API_KEY');

ws.onopen = () => {
  ws.send(audioChunk);
};

ws.onmessage = (event) => {
  const result = JSON.parse(event.data);
  console.log('Transcription:', result.text);
};`
      }
    ]
  };

  const currentAPIGroup = activeTab === 'tts' ? apiEndpoints.tts : activeTab === 'stt' ? apiEndpoints.stt : apiEndpoints.tts;
  const currentAPI = currentAPIGroup.find(api => api.id === selectedAPI);

  const handleRecord = () => {
    if (!isRecording) {
      setIsRecording(true);
      setTimeout(() => {
        setIsRecording(false);
        setConversationLog(prev => [
          ...prev,
          { speaker: 'User', text: 'Tôi muốn kiểm tra trạng thái đơn hàng', timestamp: new Date().toLocaleTimeString() },
          { speaker: 'Agent', text: 'Vâng, tôi sẽ giúp bạn kiểm tra. Bạn vui lòng cho tôi biết mã đơn hàng được không?', timestamp: new Date().toLocaleTimeString() }
        ]);
      }, 3000);
    } else {
      setIsRecording(false);
    }
  };

  const handlePlayTTS = () => {
    if (!ttsText.trim()) return;
    setIsPlaying(true);
    setTimeout(() => {
      setIsPlaying(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-sky-50/30 to-white">
      <div className="bg-white/80 backdrop-blur-md border-b border-sky-200/50 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <Link to="/" className="inline-flex items-center space-x-2 text-slate-600 hover:text-sky-600 transition-colors group">
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-semibold">Quay lại trang chủ</span>
          </Link>
        </div>
      </div>

      <div className="relative bg-gradient-to-br from-sky-600 via-blue-600 to-sky-700 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20"></div>
        <div className="absolute top-20 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-sky-300/20 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8 mb-12">
              <div className="relative w-24 h-24 flex-shrink-0">
                <div className="absolute inset-0 bg-white/20 backdrop-blur-sm rounded-3xl shadow-2xl flex items-center justify-center">
                  <Radio className="w-12 h-12" strokeWidth={2} />
                </div>
                <div className="absolute -inset-2 bg-white/10 rounded-3xl animate-pulse"></div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">Voice Bot AI</h1>
                <p className="text-xl text-sky-50 leading-relaxed max-w-3xl">
                  Trải nghiệm công nghệ giọng nói AI tiên tiến với độ chính xác cao và độ trễ thấp, tạo ra trải nghiệm người dùng tự nhiên và mượt mà
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: Sparkles, stat: '98%', label: 'Độ chính xác nhận diện' },
                { icon: Zap, stat: '<100ms', label: 'Độ trễ xử lý real-time' },
                { icon: Globe, stat: '24/7', label: 'Hoạt động liên tục' }
              ].map((item, idx) => (
                <div key={idx} className="group relative bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative flex items-center space-x-4 mb-3">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <item.icon className="w-6 h-6 text-sky-100" strokeWidth={2} />
                    </div>
                    <div className="text-3xl font-bold">{item.stat}</div>
                  </div>
                  <div className="relative text-sm text-sky-100">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20">
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white to-transparent"></div>
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 px-5 py-2.5 bg-gradient-to-r from-sky-50 to-blue-50 border border-sky-200/50 rounded-full mb-6">
                <Sparkles className="w-4 h-4 text-sky-600" />
                <span className="text-sm font-bold text-sky-700 tracking-wider uppercase">Interactive Demo</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Voice AI Playground</h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Khám phá và thử nghiệm các tính năng Voice AI với giao diện trực quan và mạnh mẽ
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
              <div className="border-b border-slate-200 bg-gradient-to-r from-slate-50 to-sky-50/30">
                <div className="flex">
                  {[
                    { id: 'agent' as const, icon: PhoneCall, label: 'Voice Agent', action: () => setActiveTab('agent') },
                    { id: 'tts' as const, icon: Volume2, label: 'Text to Speech', action: () => { setActiveTab('tts'); setSelectedAPI('tts-api'); } },
                    { id: 'stt' as const, icon: Mic, label: 'Speech to Text', action: () => { setActiveTab('stt'); setSelectedAPI('stt-api'); } }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={tab.action}
                      className={`flex-1 px-8 py-6 font-semibold transition-all relative group ${
                        activeTab === tab.id
                          ? 'bg-white text-sky-600'
                          : 'text-slate-600 hover:bg-white/50 hover:text-sky-500'
                      }`}
                    >
                      {activeTab === tab.id && (
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-500 to-blue-500"></div>
                      )}
                      <div className="flex items-center justify-center space-x-2">
                        <tab.icon className={`w-5 h-5 ${activeTab === tab.id ? 'text-sky-600' : 'text-slate-500 group-hover:text-sky-500'}`} strokeWidth={2} />
                        <span>{tab.label}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {activeTab === 'agent' && (
                <div className="p-12">
                  <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-10 mb-12">
                      <div className="flex items-center justify-center p-16">
                        <div className="text-center">
                          <div className="relative inline-block mb-12">
                            <button
                              onClick={handleRecord}
                              className={`relative w-56 h-56 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 ${
                                isRecording
                                  ? 'bg-gradient-to-br from-red-500 to-red-600 hover:from-red-600 hover:to-red-700'
                                  : 'bg-gradient-to-br from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 hover:scale-105'
                              }`}
                            >
                              {isRecording ? (
                                <Square className="w-20 h-20 text-white relative z-10" strokeWidth={2.5} />
                              ) : (
                                <Mic className="w-20 h-20 text-white" strokeWidth={2.5} />
                              )}
                              {isRecording && (
                                <>
                                  <div className="absolute inset-0 rounded-full border-8 border-red-400/60 animate-ping"></div>
                                  <div className="absolute -inset-8 rounded-full border-8 border-red-300/40 animate-pulse"></div>
                                  <div className="absolute -inset-16 rounded-full border-8 border-red-200/20 animate-ping" style={{ animationDelay: '0.3s' }}></div>
                                </>
                              )}
                            </button>
                          </div>
                          <h3 className="text-3xl font-bold text-slate-900 mb-3">
                            {isRecording ? 'Đang ghi âm...' : 'Nhấn để bắt đầu'}
                          </h3>
                          <p className="text-lg text-slate-600">
                            {isRecording ? 'Hệ thống đang xử lý giọng nói của bạn' : 'Nhấn vào nút để bắt đầu trò chuyện'}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col h-[600px]">
                        <div className="flex items-center justify-between mb-6">
                          <h4 className="font-bold text-slate-900 text-2xl">Hội thoại</h4>
                          <Activity className="w-6 h-6 text-sky-500" />
                        </div>
                        <div className="flex-1 space-y-4 overflow-y-auto pr-2">
                          {conversationLog.length === 0 ? (
                            <div className="flex items-center justify-center h-full">
                              <div className="text-center">
                                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                  <Activity className="w-8 h-8 text-slate-400" />
                                </div>
                                <p className="text-slate-400 text-sm">
                                  Nhấn nút ghi âm để bắt đầu cuộc hội thoại...
                                </p>
                              </div>
                            </div>
                          ) : (
                            conversationLog.map((log, idx) => (
                              <div
                                key={idx}
                                className={`flex ${log.speaker === 'User' ? 'justify-end' : 'justify-start'} animate-fade-in`}
                                style={{ animationDelay: `${idx * 0.1}s` }}
                              >
                                <div className={`max-w-[80%] ${log.speaker === 'User' ? 'order-2' : 'order-1'}`}>
                                  <div className="flex items-center space-x-2 mb-2">
                                    {log.speaker === 'Agent' && (
                                      <div className="w-8 h-8 bg-gradient-to-br from-sky-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                                        <PhoneCall className="w-4 h-4 text-white" strokeWidth={2} />
                                      </div>
                                    )}
                                    <span className={`text-xs font-semibold ${log.speaker === 'Agent' ? 'text-sky-700' : 'text-slate-700'}`}>
                                      {log.speaker === 'Agent' ? 'Voice Bot' : 'Bạn'}
                                    </span>
                                    <span className="text-xs text-slate-400">{log.timestamp}</span>
                                  </div>
                                  <div className={`p-4 rounded-2xl shadow-sm ${
                                    log.speaker === 'Agent'
                                      ? 'bg-gradient-to-br from-sky-50 to-blue-50 border border-sky-200 rounded-tl-none'
                                      : 'bg-slate-100 border border-slate-200 rounded-tr-none'
                                  }`}>
                                    <p className="text-slate-800 leading-relaxed">{log.text}</p>
                                  </div>
                                </div>
                              </div>
                            ))
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      {[
                        { title: 'Speech Recognition', desc: 'STT độ chính xác 98%', icon: Mic },
                        { title: 'Natural Language', desc: 'Hiểu ngữ cảnh & ý định', icon: Sparkles },
                        { title: 'Voice Synthesis', desc: 'TTS giọng nói tự nhiên', icon: Volume2 },
                        { title: 'Real-time', desc: 'Xử lý dưới 100ms', icon: Zap }
                      ].map((feature, idx) => (
                        <div key={idx} className="group bg-gradient-to-br from-slate-50 to-sky-50/30 p-6 rounded-2xl border-2 border-slate-200 hover:border-sky-300 hover:shadow-lg transition-all">
                          <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                            <feature.icon className="w-6 h-6 text-white" strokeWidth={2} />
                          </div>
                          <h5 className="font-bold text-slate-900 mb-2">{feature.title}</h5>
                          <p className="text-sm text-slate-600">{feature.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'tts' && (
                <div className="p-12">
                  <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-3 gap-10">
                      <div className="lg:col-span-2 space-y-8">
                        <div className="bg-gradient-to-br from-slate-50 to-sky-50/30 rounded-2xl p-8 border-2 border-slate-200">
                          <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center space-x-2">
                            <Volume2 className="w-6 h-6 text-sky-500" />
                            <span>Chọn giọng nói</span>
                          </h3>
                          <div className="grid grid-cols-2 gap-4">
                            {voices.map((voice) => (
                              <button
                                key={voice.id}
                                onClick={() => setSelectedVoice(voice.id)}
                                className={`group relative p-6 rounded-2xl border-2 transition-all text-left overflow-hidden ${
                                  selectedVoice === voice.id
                                    ? 'border-sky-500 bg-gradient-to-br from-sky-50 to-blue-50 shadow-lg scale-105'
                                    : 'border-slate-200 bg-white hover:border-sky-300 hover:shadow-md'
                                }`}
                              >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-sky-100/30 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div className="relative flex items-start justify-between mb-3">
                                  <div className="font-bold text-lg text-slate-900">{voice.name}</div>
                                  {selectedVoice === voice.id && (
                                    <CheckCircle className="w-5 h-5 text-sky-500" strokeWidth={2.5} />
                                  )}
                                </div>
                                <div className="relative text-sm text-slate-600 mb-2">{voice.gender} • {voice.accent}</div>
                                <div className="relative text-sm text-slate-500 italic">{voice.style}</div>
                              </button>
                            ))}
                          </div>
                        </div>

                        <div className="bg-white rounded-2xl p-8 border-2 border-slate-200 shadow-lg">
                          <h3 className="text-xl font-bold text-slate-900 mb-5 flex items-center space-x-2">
                            <Sparkles className="w-5 h-5 text-sky-500" />
                            <span>Văn bản chuyển đổi</span>
                          </h3>
                          <textarea
                            value={ttsText}
                            onChange={(e) => setTtsText(e.target.value)}
                            placeholder="Nhập văn bản bạn muốn chuyển thành giọng nói..."
                            rows={6}
                            className="w-full px-6 py-4 border-2 border-slate-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent text-base resize-none bg-slate-50 transition-all"
                          />
                          <button
                            onClick={handlePlayTTS}
                            disabled={!ttsText.trim() || isPlaying}
                            className="mt-5 w-full py-4 bg-gradient-to-r from-sky-500 to-blue-600 text-white rounded-xl font-semibold flex items-center justify-center space-x-2 hover:from-sky-600 hover:to-blue-700 hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none group"
                          >
                            {isPlaying ? (
                              <>
                                <Square className="w-5 h-5" strokeWidth={2.5} />
                                <span>Đang phát...</span>
                              </>
                            ) : (
                              <>
                                <Play className="w-5 h-5 group-hover:scale-110 transition-transform" strokeWidth={2.5} />
                                <span>Chuyển đổi & Phát</span>
                              </>
                            )}
                          </button>
                        </div>

                        <div className="bg-slate-900 rounded-2xl p-6 shadow-lg border border-slate-700">
                          <div className="flex items-center justify-between mb-5">
                            <span className="text-sm text-slate-400 font-mono font-semibold">API Integration</span>
                            <button
                              onClick={() => copyCode(currentAPI?.code || '', 'tts-code')}
                              className="flex items-center space-x-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg transition-all hover:scale-105"
                            >
                              {copiedCode === 'tts-code' ? (
                                <>
                                  <Check className="w-4 h-4 text-green-400" strokeWidth={2.5} />
                                  <span className="text-sm font-semibold">Copied!</span>
                                </>
                              ) : (
                                <>
                                  <Copy className="w-4 h-4" strokeWidth={2} />
                                  <span className="text-sm font-semibold">Copy</span>
                                </>
                              )}
                            </button>
                          </div>
                          <pre className="text-sm text-slate-300 overflow-x-auto leading-relaxed bg-slate-950 rounded-xl p-4 border border-slate-800">
                            <code>{currentAPI?.code}</code>
                          </pre>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div>
                          <h3 className="font-bold text-slate-900 text-lg mb-4 flex items-center space-x-2">
                            <Radio className="w-5 h-5 text-sky-500" />
                            <span>API Endpoints</span>
                          </h3>
                          <div className="space-y-3">
                            {apiEndpoints.tts.map((api) => (
                              <button
                                key={api.id}
                                onClick={() => setSelectedAPI(api.id)}
                                className={`group w-full text-left px-5 py-4 rounded-xl transition-all ${
                                  selectedAPI === api.id
                                    ? 'bg-gradient-to-r from-sky-50 to-blue-50 border-2 border-sky-500 shadow-md'
                                    : 'bg-slate-50 border-2 border-slate-200 hover:bg-slate-100 hover:border-sky-300 hover:shadow-sm'
                                }`}
                              >
                                <div className="font-semibold text-slate-900 mb-1 group-hover:text-sky-600 transition-colors">{api.name}</div>
                                <div className="text-sm text-slate-600">{api.description}</div>
                              </button>
                            ))}
                          </div>
                        </div>

                        <div className="bg-gradient-to-br from-sky-50 to-blue-50 border-2 border-sky-200 rounded-xl p-5">
                          <h4 className="font-bold text-sky-900 mb-4 text-sm flex items-center space-x-2">
                            <Sparkles className="w-4 h-4" />
                            <span>Tham số TTS</span>
                          </h4>
                          <ul className="text-sm text-sky-800 space-y-3">
                            {[
                              { key: 'text', desc: 'Văn bản cần chuyển đổi' },
                              { key: 'voice_id', desc: 'ID giọng nói' },
                              { key: 'speed', desc: 'Tốc độ (0.5-2.0)' },
                              { key: 'pitch', desc: 'Cao độ (0.5-2.0)' }
                            ].map((param, idx) => (
                              <li key={idx} className="flex items-start space-x-2 bg-white/50 rounded-lg p-2">
                                <CheckCircle className="w-4 h-4 text-sky-600 mt-0.5 flex-shrink-0" strokeWidth={2} />
                                <span><strong className="text-sky-900">{param.key}:</strong> {param.desc}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'stt' && (
                <div className="p-12">
                  <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-3 gap-10">
                      <div className="lg:col-span-2 space-y-8">
                        <div className="relative bg-gradient-to-br from-slate-50 to-sky-50/50 rounded-3xl p-12 border-2 border-sky-100 overflow-hidden">
                          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.05),transparent_70%)]"></div>

                          <div className="relative text-center py-8">
                            <button
                              onClick={handleRecord}
                              className={`relative w-48 h-48 rounded-full flex items-center justify-center transition-all shadow-2xl mb-8 mx-auto ${
                                isRecording
                                  ? 'bg-gradient-to-br from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 animate-pulse scale-110'
                                  : 'bg-gradient-to-br from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 hover:scale-110'
                              }`}
                            >
                              {isRecording && (
                                <>
                                  <div className="absolute inset-0 rounded-full border-4 border-red-300 animate-ping"></div>
                                  <div className="absolute -inset-4 rounded-full border-4 border-red-200 animate-pulse"></div>
                                </>
                              )}
                              {isRecording ? (
                                <Square className="w-20 h-20 text-white relative z-10" strokeWidth={2.5} />
                              ) : (
                                <Mic className="w-20 h-20 text-white" strokeWidth={2.5} />
                              )}
                            </button>
                            <h4 className="text-3xl font-bold text-slate-900 mb-3">
                              {isRecording ? 'Đang ghi âm...' : 'Nhấn để ghi âm'}
                            </h4>
                            <p className="text-slate-600 text-lg">
                              {isRecording ? 'Hệ thống đang nhận diện giọng nói của bạn' : 'Nhấn vào mic để bắt đầu ghi âm'}
                            </p>
                          </div>

                          <div className="relative bg-white rounded-2xl p-8 border-2 border-slate-200 shadow-xl">
                            <h5 className="font-bold text-slate-900 mb-5 text-xl flex items-center space-x-2">
                              <Activity className="w-5 h-5 text-sky-500" />
                              <span>Kết quả nhận diện</span>
                            </h5>
                            <div className="bg-slate-50 rounded-xl p-6 border-2 border-slate-200 min-h-32">
                              {conversationLog.filter(log => log.speaker === 'User').length > 0 ? (
                                <p className="text-slate-900 leading-relaxed text-lg">
                                  {conversationLog.filter(log => log.speaker === 'User')[conversationLog.filter(log => log.speaker === 'User').length - 1]?.text}
                                </p>
                              ) : (
                                <p className="text-slate-400 italic">Kết quả sẽ hiển thị ở đây sau khi ghi âm...</p>
                              )}
                            </div>
                          </div>
                        </div>

                        <div className="bg-slate-900 rounded-2xl p-6 shadow-lg border border-slate-700">
                          <div className="flex items-center justify-between mb-5">
                            <span className="text-sm text-slate-400 font-mono font-semibold">API Integration</span>
                            <button
                              onClick={() => copyCode(currentAPI?.code || '', 'stt-code')}
                              className="flex items-center space-x-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg transition-all hover:scale-105"
                            >
                              {copiedCode === 'stt-code' ? (
                                <>
                                  <Check className="w-4 h-4 text-green-400" strokeWidth={2.5} />
                                  <span className="text-sm font-semibold">Copied!</span>
                                </>
                              ) : (
                                <>
                                  <Copy className="w-4 h-4" strokeWidth={2} />
                                  <span className="text-sm font-semibold">Copy</span>
                                </>
                              )}
                            </button>
                          </div>
                          <pre className="text-sm text-slate-300 overflow-x-auto leading-relaxed bg-slate-950 rounded-xl p-4 border border-slate-800">
                            <code>{currentAPI?.code}</code>
                          </pre>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div>
                          <h3 className="font-bold text-slate-900 text-lg mb-4 flex items-center space-x-2">
                            <Radio className="w-5 h-5 text-sky-500" />
                            <span>API Endpoints</span>
                          </h3>
                          <div className="space-y-3">
                            {apiEndpoints.stt.map((api) => (
                              <button
                                key={api.id}
                                onClick={() => setSelectedAPI(api.id)}
                                className={`group w-full text-left px-5 py-4 rounded-xl transition-all ${
                                  selectedAPI === api.id
                                    ? 'bg-gradient-to-r from-sky-50 to-blue-50 border-2 border-sky-500 shadow-md'
                                    : 'bg-slate-50 border-2 border-slate-200 hover:bg-slate-100 hover:border-sky-300 hover:shadow-sm'
                                }`}
                              >
                                <div className="font-semibold text-slate-900 mb-1 group-hover:text-sky-600 transition-colors">{api.name}</div>
                                <div className="text-sm text-slate-600">{api.description}</div>
                              </button>
                            ))}
                          </div>
                        </div>

                        <div className="bg-gradient-to-br from-sky-50 to-blue-50 border-2 border-sky-200 rounded-xl p-5">
                          <h4 className="font-bold text-sky-900 mb-4 text-sm flex items-center space-x-2">
                            <Sparkles className="w-4 h-4" />
                            <span>Tham số STT</span>
                          </h4>
                          <ul className="text-sm text-sky-800 space-y-3">
                            {[
                              { key: 'audio', desc: 'File âm thanh (WAV, MP3)' },
                              { key: 'language', desc: 'Ngôn ngữ (vi-VN)' },
                              { key: 'enable_punctuation', desc: 'Tự động dấu câu' },
                              { key: 'enable_formatting', desc: 'Format số, ngày' }
                            ].map((param, idx) => (
                              <li key={idx} className="flex items-start space-x-2 bg-white/50 rounded-lg p-2">
                                <CheckCircle className="w-4 h-4 text-sky-600 mt-0.5 flex-shrink-0" strokeWidth={2} />
                                <span><strong className="text-sky-900">{param.key}:</strong> {param.desc}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-sky-400" />
              <span className="text-xs font-bold text-sky-400 tracking-wider">BẮT ĐẦU NGAY</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Sẵn sàng triển khai Voice Bot?</h2>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed">
              Liên hệ với chúng tôi để được tư vấn và triển khai giải pháp Voice Bot phù hợp với doanh nghiệp của bạn
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/#contact"
                className="group px-10 py-5 bg-gradient-to-r from-sky-500 to-blue-600 text-white rounded-xl font-semibold hover:from-sky-600 hover:to-blue-700 hover:shadow-2xl transition-all text-lg inline-flex items-center space-x-2"
              >
                <span>Liên hệ ngay</span>
                <ArrowLeft className="w-5 h-5 rotate-180 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="px-10 py-5 border-2 border-slate-600 text-slate-200 rounded-xl font-semibold hover:border-sky-500 hover:bg-slate-800/50 transition-all text-lg">
                Xem tài liệu
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
