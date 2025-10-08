import { User, Phone, Mail, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Contact() {
  const formAnim = useScrollAnimation({ threshold: 0.2 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const services = [
    'Dịch vụ bạn quan tâm',
    'Chatbot AI',
    'Voice Bot',
    'Document AI',
    'CMS AI',
    'Số hóa dữ liệu',
    'Giải pháp AI tùy chỉnh'
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white via-slate-50/50 to-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a08_1px,transparent_1px),linear-gradient(to_bottom,#0f172a08_1px,transparent_1px)] bg-[size:32px_32px]">
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white to-transparent"></div>
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div ref={formAnim.ref} className={`bg-gradient-to-br from-blue-50 via-slate-50 to-cyan-50 rounded-3xl py-20 px-8 mb-24 scroll-scale-up ${formAnim.isVisible ? 'visible' : ''}`}>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Nhận tư vấn miễn phí từ chúng tôi
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Họ và tên"
                    className="w-full px-6 py-4 pr-14 rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all bg-white text-slate-900 placeholder:text-slate-400"
                  />
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">
                    <User className="w-5 h-5 text-slate-400" />
                  </div>
                </div>

                <div className="relative">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Số điện thoại"
                    className="w-full px-6 py-4 pr-14 rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all bg-white text-slate-900 placeholder:text-slate-400"
                  />
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">
                    <Phone className="w-5 h-5 text-slate-400" />
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Địa chỉ email"
                    className="w-full px-6 py-4 pr-14 rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all bg-white text-slate-900 placeholder:text-slate-400"
                  />
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">
                    <Mail className="w-5 h-5 text-slate-400" />
                  </div>
                </div>

                <div className="relative">
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 pr-14 rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all bg-white text-slate-900 appearance-none cursor-pointer"
                  >
                    {services.map((service, idx) => (
                      <option key={idx} value={service} disabled={idx === 0}>
                        {service}
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">
                    <ChevronDown className="w-5 h-5 text-slate-400" />
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 items-center">
                <p className="text-slate-600 text-sm leading-relaxed">
                  Sau khi nhận được yêu cầu của bạn, <br className="hidden md:block" />
                  chúng tôi sẽ liên hệ với bạn qua thông tin đã cung cấp
                </p>

                <button
                  type="submit"
                  className="w-full px-8 py-5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-cyan-600 hover:shadow-xl transition-all"
                >
                  Gửi ngay
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
