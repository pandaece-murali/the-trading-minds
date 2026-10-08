import { Target, BookOpen, Brain, LineChart, ShieldCheck, MonitorPlay } from "lucide-react";

export default function LearnerTypes() {
  return (
    <section className="py-8 px-4 bg-slate-50">
      <div className="max-w-5xl mx-auto text-center">
        <h3 className="text-3xl md:text-4xl font-bold mb-12 text-primary-brand">Every Kind of Learnerಗಾಗಿ </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {[
            { title: "Investment Enthusiast", desc: "ನೀವು market ಬಗ್ಗೆ curious ಆಗಿರುವ investment enthusiast", icon: Target },
            { title: "Complete Beginner", desc: "ನೀವು zero market background ಇರುವ complete beginner", icon: BookOpen },
            { title: "Working Professional", desc: "ನೀವು side skill ಕಲಿಯಲು ಬಯಸುವ working professional", icon: Brain },
            { title: "Business Owner", desc: "ನೀವು entrepreneur ಅಥವಾ business owner", icon: LineChart },
            { title: "Long-term Planner", desc: "ನೀವು retiree ಅಥವಾ long-term financial planner", icon: ShieldCheck },
            { title: "Always Wanted to Learn", desc: "ನೀವು market ಅರ್ಥಮಾಡಿಕೊಳ್ಳಲು ಯಾವಾಗಲೂ ಬಯಸಿದ್ದರೂ ಎಲ್ಲಿ start ಮಾಡಬೇಕು ಎಂದು ತಿಳಿದಿರಲಿಲ್ಲ", icon: MonitorPlay }
          ].map((item, i) => (
            <div key={i} className="bg-white border border-slate-200 p-6 rounded-2xl hover:border-accent-pink transition-colors group shadow-sm hover:shadow-md">
              <item.icon className="w-8 h-8 text-primary-brand mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="font-semibold text-lg mb-2 text-primary-brand">{item.title}</h4>
              <p className="text-slate-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
