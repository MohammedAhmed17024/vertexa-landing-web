import React from 'react';
import { motion } from 'framer-motion';
import { Download, Activity, Trophy, BarChart3, FileText, ChevronRight, Shield, Layers } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, colorClass }) => (
  <motion.div 
    whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
    className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm transition-all duration-300 flex flex-col items-center text-center h-full"
  >
    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm ${colorClass}`}>
      <Icon className="w-8 h-8 text-white" />
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
    <p className="text-slate-500 leading-relaxed max-w-sm">
      {description}
    </p>
  </motion.div>
);

const SubFeature = ({ title, description, icon: Icon }) => (
  <div className="flex gap-4 p-6 rounded-2xl border border-gray-100 bg-white hover:shadow-md transition-shadow">
    <div className="w-12 h-12 rounded-full bg-[#f4f7fa] flex flex-shrink-0 items-center justify-center text-blue-600">
      <Icon className="w-6 h-6" />
    </div>
    <div>
      <h4 className="text-lg font-bold text-slate-900 mb-1">{title}</h4>
      <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
    </div>
  </div>
);

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100 scroll-smooth">
      
      {/* Navbar */}
      <nav className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold tracking-tight text-[#0a192f]">
              Vertexa<span className="text-blue-500">Stats</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm font-semibold text-slate-600">
            <a href="#features" className="hover:text-blue-600 transition-colors">Features</a>
            <a href="#about" className="hover:text-blue-600 transition-colors">Why Us</a>
            <a 
              href="https://vertexa-labs-c9fd.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors"
            >
              Vertexa Labs
            </a>
            <a href="/app.apk" download="VertexaStats.apk" className="bg-[#0a192f] hover:bg-blue-600 text-white px-5 py-2.5 rounded-full transition-colors flex items-center gap-2">
              <Download className="w-4 h-4" /> Download APK
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-blue-50/50 blur-3xl -z-10" />
        
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          
          <div className="flex-1 text-center md:text-left z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-bold tracking-wide uppercase mb-8">
              INNOVATION MEETS EXCELLENCE
            </div>
            
            <h1 className="text-5xl lg:text-[5.5rem] font-extrabold tracking-tight mb-8 leading-[1.1] text-[#0a192f]">
              Master Your <br className="hidden lg:block"/>
              <span className="text-blue-600">Cricket</span> Stats.
            </h1>
            
            <p className="text-lg md:text-xl text-slate-500 mb-12 max-w-2xl leading-relaxed mx-auto md:mx-0">
              VertexaStats transforms your local cricket performance into professional insights. We bridge the gap between amateur play and pro-level analytics.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <a 
                href="/app.apk" 
                download="VertexaStats.apk"
                className="bg-[#0a192f] hover:bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center gap-2 transition-all shadow-lg hover:shadow-blue-500/25 w-full sm:w-auto justify-center group"
              >
                <Download className="w-5 h-5 group-hover:-translate-y-1 transition-transform" /> 
                Download APK
              </a>
              <a 
                href="#features"
                className="bg-white border-2 border-gray-100 hover:border-gray-200 text-[#0a192f] px-8 py-4 rounded-full font-bold text-lg flex items-center gap-2 transition-all w-full sm:w-auto justify-center"
              >
                Explore Features <ChevronRight className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="flex-1 relative w-full max-w-xl hidden md:block">
            {/* The beautiful image/video card placeholder from design */}
            <div className="bg-[#f8fafc] rounded-[2.5rem] p-8 aspect-video flex items-center justify-center relative overflow-hidden shadow-2xl shadow-blue-900/5">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white/50" />
              
              <div className="relative z-10 text-center flex flex-col items-center">
                 <div className="w-20 h-20 bg-white rounded-3xl shadow-lg flex items-center justify-center mb-6 transform rotate-3">
                   <Activity className="w-10 h-10 text-blue-600" />
                 </div>
                 <h3 className="text-2xl font-bold text-[#0a192f]">Experience Professional Analytics</h3>
              </div>
              
            </div>
          </div>

        </div>
      </section>

      {/* Features Grid Section */}
      <section id="features" className="py-24 bg-[#fafbfc]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-[2.75rem] font-bold text-[#0a192f] mb-6 tracking-tight leading-tight">
              Technological Solutions for Modern Cricketers
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
              We leverage the best industry practices to build tools that stand out. Track, analyze, and elevate your game like never before.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard 
              icon={BarChart3} 
              title="Deep Analytics" 
              description="Professional, SEO-optimized, and lightning-fast web applications built with the latest frameworks."
              colorClass="bg-[#3b82f6]" 
            />
            <FeatureCard 
              icon={FileText} 
              title="PDF Exports" 
              description="Beautiful, high-performance cross-platform mobile apps for iOS and Android from a single codebase."
              colorClass="bg-[#0ea5e9]" 
            />
            <FeatureCard 
              icon={Trophy} 
              title="Achievements" 
              description="User-centric design that balances aesthetics with functionality to create memorable digital experiences."
              colorClass="bg-[#6366f1]" 
            />
            <FeatureCard 
              icon={Layers} 
              title="Cloud Sync" 
              description="Scalable, secure server-side solutions and robust API architectures to power your application."
              colorClass="bg-[#0f172a]" 
            />
          </div>
        </div>
      </section>

      {/* About App / Why Us Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
          
          <div className="flex-1 w-full bg-[#f8fafc] rounded-[3rem] p-12 relative overflow-hidden min-h-[500px] flex items-center justify-center text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent" />
            <div className="relative z-10 flex flex-col items-center">
               <div className="w-24 h-24 bg-blue-100/50 rounded-full flex items-center justify-center mb-6">
                 <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
                   <Shield className="w-8 h-8" />
                 </div>
               </div>
               <h3 className="text-2xl font-bold text-[#0a192f] mb-2">Secure & Reliable</h3>
               <p className="text-blue-600 font-medium">Your Data, Safe.</p>
            </div>
          </div>

          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0a192f] mb-6 tracking-tight">
              Innovation Rooted in Passion, Serving the Players
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-10">
              VertexaStats is a premier analytics hub designed for cricketers. We specialize in empowering local players to understand their game and achieve success through world-class digital solutions.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-10">
               <div className="bg-[#f8fafc] p-6 rounded-2xl border border-gray-100">
                 <h4 className="font-bold text-[#0a192f] mb-2">Mission</h4>
                 <p className="text-slate-500 text-sm">To empower cricketers through cutting-edge analytics and human-centric design.</p>
               </div>
               <div className="bg-[#f8fafc] p-6 rounded-2xl border border-gray-100">
                 <h4 className="font-bold text-[#0a192f] mb-2">Vision</h4>
                 <p className="text-slate-500 text-sm">To be the global benchmark for digital sports innovation and excellence.</p>
               </div>
            </div>

            <div className="space-y-4">
              <SubFeature 
                icon={Activity} 
                title="Performance Tracking" 
                description="We track every run, wicket, and strike rate so you can focus on playing." 
              />
              <SubFeature 
                icon={Layers} 
                title="Scalable Architecture" 
                description="Built on robust backend systems to ensure your stats are always available." 
              />
            </div>

          </div>
        </div>
      </section>

      {/* Footer / CTA block */}
      <footer className="bg-[#fafbfc] border-t border-gray-100 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a192f] mb-6">Ready to download the App?</h2>
          <p className="text-slate-500 mb-10 max-w-xl mx-auto">Join thousands of players transforming their game with professional grade statistics and insights.</p>
          
          <a href="/app.apk" download="VertexaStats.apk" className="inline-flex items-center justify-center bg-[#0a192f] text-white px-10 py-4 font-bold rounded-full hover:bg-blue-600 transition-colors mb-20 shadow-xl shadow-slate-200">
            Download VertexaStats Free
          </a>

          <div className="border-t border-gray-200 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold tracking-tight text-[#0a192f]">
                Vertexa<span className="text-blue-500">Labs</span>
              </span>
            </div>
            
            <p className="text-slate-500 text-sm font-medium">
              © {new Date().getFullYear()} Vertexa Labs. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;
