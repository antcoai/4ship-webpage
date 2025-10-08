import { ArrowRight, Sparkles, Brain, Cpu, Network, Zap, Database, Cloud } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = 'cho doanh nghiệp';

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setShowCursor(false);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  const floatingIcons = [
    { Icon: Brain, top: '15%', left: '8%', delay: 0, duration: 20 },
    { Icon: Cpu, top: '25%', right: '10%', delay: 2, duration: 25 },
    { Icon: Network, top: '45%', left: '5%', delay: 4, duration: 22 },
    { Icon: Zap, top: '65%', right: '8%', delay: 1, duration: 18 },
    { Icon: Database, top: '75%', left: '12%', delay: 3, duration: 24 },
    { Icon: Cloud, top: '55%', right: '15%', delay: 5, duration: 21 },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBzdHJva2U9IiMzYjgyZjYiIHN0cm9rZS1vcGFjaXR5PSIwLjA0IiBzdHJva2Utd2lkdGg9IjEiPjxwYXRoIGQ9Ik0wIDQwaDgwTTQwIDAwdjgwIi8+PHBhdGggZD0iTTAgMGw4MCA4ME0wIDgwbDgwLTgwIi8+PGNpcmNsZSBjeD0iNDAiIGN5PSI0MCIgcj0iMzAiLz48Y2lyY2xlIGN4PSI0MCIgY3k9IjQwIiByPSIyMCIvPjwvZz48L3N2Zz4=')] opacity-100"></div>

      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950/50"></div>

      {floatingIcons.map(({ Icon, top, left, right, delay, duration }, index) => (
        <div
          key={index}
          className="absolute hidden lg:block animate-float-slow"
          style={{
            top,
            left,
            right,
            animationDelay: `${delay}s`,
            animationDuration: `${duration}s`,
          }}
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-blue-500/20 rounded-2xl blur-xl group-hover:bg-cyan-500/30 transition-all duration-500"></div>
            <div className="relative w-14 h-14 bg-slate-900/40 backdrop-blur-md rounded-2xl border border-blue-500/20 flex items-center justify-center group-hover:border-cyan-400/40 group-hover:scale-110 transition-all duration-500">
              <Icon className="w-7 h-7 text-blue-400/60 group-hover:text-cyan-300 transition-colors duration-500" strokeWidth={1.5} />
            </div>
          </div>
        </div>
      ))}

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-5 py-2.5 mb-10 animate-fade-in">
            <Sparkles className="w-4 h-4 text-blue-300" />
            <span className="text-sm font-semibold text-blue-100 tracking-wide">
              CÔNG NGHỆ AI HÀNG ĐẦU VIỆT NAM
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-8xl font-extrabold text-cyan-50 mb-12 leading-[1.1] tracking-tight animate-slide-up">
            <span className="block mb-6 drop-shadow-2xl">Giải pháp AI toàn diện</span>
            <span className="block bg-gradient-to-r from-cyan-300 via-sky-200 to-cyan-300 bg-clip-text text-transparent drop-shadow-lg mt-2 pb-4">
              {typedText}
              {showCursor && <span className="inline-block w-1 h-[0.9em] bg-cyan-300 ml-1 animate-pulse align-middle"></span>}
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-cyan-100 mb-16 max-w-4xl mx-auto leading-relaxed font-light">
            Đơn vị tiên phong nghiên cứu và phát triển giải pháp công nghệ AI,
            <span className="block mt-2 font-normal text-cyan-50">
              giúp doanh nghiệp chuyển đổi số và tối ưu hiệu quả vận hành
            </span>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-24">
            <a
              href="#solutions"
              className="group px-10 py-5 bg-gradient-to-r from-cyan-400 to-sky-300 text-slate-950 rounded-xl text-lg font-bold hover:from-cyan-300 hover:to-sky-200 transition-all shadow-2xl shadow-cyan-400/40 hover:shadow-cyan-300/50 hover:scale-105 flex items-center space-x-2"
            >
              <span>Khám phá giải pháp</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="group px-10 py-5 bg-white/10 backdrop-blur-md text-cyan-50 border-2 border-cyan-300/50 rounded-xl text-lg font-semibold hover:bg-white/15 hover:border-cyan-200/60 hover:text-white transition-all"
            >
              Liên hệ tư vấn
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}