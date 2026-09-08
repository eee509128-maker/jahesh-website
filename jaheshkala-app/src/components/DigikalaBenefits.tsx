import React from 'react';
import { Truck, Headphones, ShieldCheck, RotateCcw, Award } from 'lucide-react';

export const DigikalaBenefits: React.FC = () => {
  const benefits = [
    {
      title: 'امکان تحویل اکسپرس',
      desc: 'ارسال سریع به سراسر کشور',
      icon: Truck,
    },
    {
      title: 'پشتیبانی ۲۴ ساعته',
      desc: '۷ روز هفته پاسخگوی شما هستیم',
      icon: Headphones,
    },
    {
      title: 'پرداخت امن آنلاین',
      desc: 'متصل به شاپرک و درگاه زیبال',
      icon: ShieldCheck,
    },
    {
      title: '۷ روز ضمانت بازگشت',
      desc: 'تضمین سلامت و اصالت محصول',
      icon: RotateCcw,
    },
    {
      title: 'ضمانت اصل بودن کالا',
      desc: 'تضمین بالاترین کیفیت محصولات',
      icon: Award,
    },
  ];

  return (
    <div className="py-6 border-y border-purple-900/30">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {benefits.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="flex flex-col items-center text-center p-3 rounded-2xl bg-[#130d2a]/50 hover:bg-[#181035] transition-colors border border-purple-900/20"
            >
              <div className="w-10 h-10 rounded-xl bg-purple-950/80 border border-purple-800/40 flex items-center justify-center text-amber-400 mb-2">
                <Icon className="w-5 h-5" />
              </div>
              <h5 className="text-xs font-bold text-white mb-1">{item.title}</h5>
              <p className="text-[10px] text-slate-400">{item.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
