import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Download, 
  Activity, 
  Trophy, 
  BarChart3, 
  ChevronRight, 
  Code2, 
  Smartphone, 
  Globe, 
  Mail, 
  MapPin,
  Github,
  Linkedin,
  Flame,
  ShieldCheck,
  FileText,
  User,
  Layout,
  ExternalLink
} from 'lucide-react';

const ProjectCard = ({ title, description, image, tags, link, isReverse = false }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className={`flex flex-col ${isReverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center mb-32`}
  >
    <div className="flex-1 w-full relative group">
      <div className="absolute -inset-4 bg-blue-600 rounded-[2.5rem] opacity-0 blur-2xl group-hover:opacity-20 transition-opacity duration-500" />
      <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 glass-card aspect-[16/10]">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-60" />
      </div>
    </div>
    <div className="flex-1 text-left">
      <div className="flex flex-wrap gap-2 mb-8">
        {tags.map((tag, i) => (
          <span key={i} className="px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-[0.2em]">
            {tag}
          </span>
        ))}
      </div>
      <h3 className="text-4xl lg:text-5xl font-black text-white mb-6 leading-tight tracking-tight">{title}</h3>
      <p className="text-lg text-slate-400 mb-10 leading-relaxed font-medium">
        {description}
      </p>
      {link && (
        <a 
          href={link} 
          download={link.endsWith('.apk') ? "VertexaStats.apk" : undefined}
          className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white px-10 py-5 rounded-2xl font-black transition-all shadow-xl hover:shadow-blue-500/40 group uppercase tracking-widest text-xs"
        >
          {link.endsWith('.apk') ? <Download className="w-5 h-5" /> : <ExternalLink className="w-5 h-5" />}
          <span>{link.endsWith('.apk') ? "Download APK" : "View Live App"}</span>
          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
      )}
    </div>
  </motion.div>
);

const NavItem = ({ icon: Icon, label, href, active, onClick }) => (
  <a 
    href={href}
    onClick={onClick}
    className={`flex flex-col items-center gap-1 transition-all ${active ? 'text-blue-500' : 'text-slate-500 hover:text-white'}`}
  >
    <Icon className="w-6 h-6" />
    <span className="text-[10px] font-black uppercase tracking-tighter">{label}</span>
  </a>
);

function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="min-h-screen bg-[#020617] font-sans text-slate-200 selection:bg-blue-500/30 scroll-smooth pb-20 sm:pb-0">
      
      {/* Desktop Navigation */}
      <nav className="fixed w-full top-0 z-50 nav-blur hidden sm:block">
        <div className="max-w-7xl mx-auto px-10 h-24 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-black tracking-[0.2em] text-white italic">
              VERTEX<span className="text-blue-600">A</span>
            </span>
          </div>
          <div className="flex items-center gap-12 text-[11px] font-black text-slate-400 uppercase tracking-[0.3em]">
            <a href="#projects" className="hover:text-blue-500 transition-colors">Works</a>
            <a href="#about" className="hover:text-blue-500 transition-colors">Profile</a>
            <a href="#cv" className="hover:text-blue-500 transition-colors">Resume</a>
            <a href="#contact" className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-xl transition-all shadow-lg hover:shadow-blue-500/20">Contact</a>
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Nav */}
      <div className="bottom-nav">
        <NavItem icon={Layout} label="Works" href="#projects" active={activeTab === 'works'} onClick={() => setActiveTab('works')} />
        <NavItem icon={User} label="Profile" href="#about" active={activeTab === 'profile'} onClick={() => setActiveTab('profile')} />
        <NavItem icon={FileText} label="Resume" href="#cv" active={activeTab === 'resume'} onClick={() => setActiveTab('resume')} />
        <NavItem icon={Mail} label="Chat" href="#contact" active={activeTab === 'chat'} onClick={() => setActiveTab('chat')} />
      </div>

      {/* Hero Section */}
      <section className="relative pt-48 pb-32 lg:pt-64 lg:pb-48 overflow-hidden">
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] rounded-full bg-blue-600/10 blur-[120px] -z-10" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-indigo-600/5 blur-[120px] -z-10" />
        
        <div className="max-w-7xl mx-auto px-10 text-center sm:text-left">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[11px] font-black tracking-[0.3em] uppercase mb-10"
          >
            <Activity className="w-4 h-4" /> Available for Hire
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl lg:text-[8rem] font-black tracking-lighter mb-10 leading-[0.85] text-white"
          >
            M. AHMED <br />
            <span className="text-blue-600">FULLSTACK</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-400 mb-16 max-w-2xl leading-relaxed font-medium"
          >
            Crafting premium digital products with a focus on performance, aesthetics, and user experience. Based in Rahim Yar Khan.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-8"
          >
            <a href="#projects" className="bg-blue-600 hover:bg-blue-500 text-white px-12 py-6 rounded-2xl font-black text-lg transition-all shadow-2xl hover:shadow-blue-500/40 w-full sm:w-auto text-center tracking-widest uppercase">
              Explore Projects
            </a>
            <div className="flex items-center gap-8">
              <a href="#" className="text-slate-500 hover:text-white transition-colors transform hover:scale-110"><Github className="w-7 h-7" /></a>
              <a href="#" className="text-slate-500 hover:text-white transition-colors transform hover:scale-110"><Linkedin className="w-7 h-7" /></a>
              <a href="mailto:contact@vertexalabs.com" className="text-slate-500 hover:text-white transition-colors transform hover:scale-110"><Mail className="w-7 h-7" /></a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-48 bg-[#010411]">
        <div className="max-w-7xl mx-auto px-10">
          <div className="mb-32 max-w-3xl">
            <h2 className="text-[11px] font-black uppercase tracking-[0.5em] text-blue-500 mb-6 italic underline underline-offset-8">Selected Works</h2>
            <h3 className="text-6xl font-black text-white leading-tight">Mastering the Art of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Software Development.</span></h3>
          </div>

          <ProjectCard 
            title="VertexaStats"
            description="The gold standard for cricket analytics. A high-performance Flutter application designed for professionals to track, analyze, and share their career progression with military-grade precision."
            image="/projects/stats_mockup.png"
            tags={["Flutter", "Firebase", "Real-time Stats", "PDF Engine"]}
            link="/VertexaStats.apk"
          />

          <ProjectCard 
            title="Cricket Auction Prime"
            description="A revolutionary auction simulation engine. Features advanced AI bidding systems, real-time franchise management, and a high-stakes competitive environment that mimics the world's biggest leagues."
            image="/projects/auction_mockup.png"
            tags={["React", "Framer Motion", "AI Engine", "Tailwind"]}
            isReverse={true}
          />

          <ProjectCard 
            title="Advanced Security Shield"
            description="A comprehensive Android security utility. Implements real-time malware detection, Wi-Fi vulnerability auditing, and privacy-first device optimization for power users."
            image="/projects/security_scanner_mockup.png"
            tags={["Flutter", "Kotlin", "Device Security", "System Optimization"]}
          />
        </div>
      </section>

      {/* CV / Resume Section */}
      <section id="cv" className="py-48 bg-[#020617]">
        <div className="max-w-7xl mx-auto px-10">
          <div className="glass-card rounded-[3rem] p-16 lg:p-24 overflow-hidden relative border-blue-500/20">
            <div className="absolute top-0 right-0 p-12 opacity-10">
              <FileText className="w-64 h-64 text-blue-500" />
            </div>
            <div className="relative z-10 max-w-4xl">
              <h2 className="text-[11px] font-black uppercase tracking-[0.5em] text-blue-500 mb-8 italic">Curriculum Vitae</h2>
              <h3 className="text-5xl font-black text-white mb-10">Mohammed Ahmed</h3>
              <p className="text-lg text-slate-400 mb-12 leading-relaxed font-medium">
                I completed my Matriculation in Science from Army Public School, Rahim Yar Khan, followed by a Diploma in Electrical Engineering. Currently pursuing a Bachelor's at Islamia University Bahawalpur. Expert in Fullstack development and IT Infrastructure.
              </p>
              <div className="flex flex-wrap gap-12 mb-16">
                <div>
                  <h4 className="text-xs font-black text-blue-500 uppercase tracking-widest mb-2">Education</h4>
                  <p className="text-white font-bold">BS Software Engineering</p>
                  <p className="text-slate-500 text-sm italic">IUB RYK Campus (ongoing)</p>
                </div>
                <div>
                  <h4 className="text-xs font-black text-blue-500 uppercase tracking-widest mb-2">Experience</h4>
                  <p className="text-white font-bold">Fullstack Developer</p>
                  <p className="text-slate-500 text-sm italic">3+ Years Practical Work</p>
                </div>
              </div>
              <a 
                href="/cv.html" 
                target="_blank"
                className="inline-flex items-center gap-3 bg-white text-[#020617] px-10 py-5 rounded-2xl font-black transition-all hover:bg-blue-500 hover:text-white shadow-2xl group"
              >
                <Download className="w-5 h-5" />
                <span className="uppercase tracking-widest text-xs">Download Full CV</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Stats Section */}
      <section id="about" className="py-48 bg-[#010411]">
        <div className="max-w-7xl mx-auto px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <div>
              <h2 className="text-[11px] font-black uppercase tracking-[0.5em] text-blue-500 mb-6 italic">Profile</h2>
              <h3 className="text-5xl font-black text-white mb-10">Rahim Yar Khan's <br /> <span className="text-blue-600">Pure Talent.</span></h3>
              <p className="text-lg text-slate-400 leading-relaxed mb-12 font-medium">
                My base in RYK allows me to work in a focused environment while delivering world-class software to clients across the globe. I'm dedicated to elevating the local tech ecosystem through high-end engineering.
              </p>
              <div className="grid grid-cols-2 gap-10">
                <div className="p-8 glass-card rounded-2xl border-blue-500/10">
                  <h4 className="text-4xl font-black text-white mb-1">50+</h4>
                  <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest leading-none">Apps Shipped</p>
                </div>
                <div className="p-8 glass-card rounded-2xl border-blue-500/10">
                  <h4 className="text-4xl font-black text-white mb-1">100%</h4>
                  <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest leading-none">Client Success</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { name: 'Flutter', icon: Smartphone },
                { name: 'React', icon: Layout },
                { name: 'Firebase', icon: BarChart3 },
                { name: 'Cloud', icon: Globe },
                { name: 'Security', icon: ShieldCheck },
                { name: 'UI/UX', icon: Code2 },
                { name: 'Node.js', icon: Activity },
                { name: 'Git', icon: Github },
              ].map((skill, index) => (
                <div key={index} className="p-8 glass-card rounded-2xl border-white/5 hover:border-blue-500/50 transition-all group cursor-default">
                  <skill.icon className="w-8 h-8 text-blue-500 mb-4 group-hover:scale-110 transition-transform" />
                  <h4 className="font-black text-xs uppercase tracking-widest">{skill.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="py-48 bg-[#020617] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-10 text-center">
          <motion.h2 
            whileInView={{ scale: [0.9, 1], opacity: [0, 1] }}
            className="text-6xl md:text-8xl font-black text-white mb-16 tracking-tighter"
          >
            LET'S <span className="text-blue-600 italic">SYNC.</span>
          </motion.h2>
          <a href="mailto:mohammedahmed17024@gmail.com" className="inline-flex items-center gap-5 bg-white text-[#020617] px-16 py-8 rounded-[2rem] font-black text-xl hover:bg-blue-600 hover:text-white transition-all shadow-3xl hover:shadow-blue-500/50 uppercase tracking-[0.1em]">
            Start Conversation <Mail className="w-6 h-6" />
          </a>
          
          <div className="mt-48 flex flex-col md:flex-row justify-between items-center gap-10 opacity-40">
            <div className="text-[10px] font-black uppercase tracking-[0.3em]">
              Designed & Developed by Mohammed Ahmed © 2026
            </div>
            <div className="flex gap-12 font-black uppercase tracking-[0.3em] text-[10px]">
              <a href="#" className="hover:text-blue-500 transition-colors">GitHub</a>
              <a href="#" className="hover:text-blue-500 transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-blue-500 transition-colors">Instagram</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;
