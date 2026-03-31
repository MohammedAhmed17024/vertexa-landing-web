import React from 'react';
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
  Flame
} from 'lucide-react';

const ProjectCard = ({ title, description, image, tags, link, isReverse = false }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className={`flex flex-col ${isReverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center mb-24`}
  >
    <div className="flex-1 w-full relative group">
      <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[2.5rem] opacity-10 blur-2xl group-hover:opacity-20 transition-opacity" />
      <div className="relative overflow-hidden rounded-[2rem] border border-gray-100 shadow-2xl bg-white aspect-[16/10]">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
        />
      </div>
    </div>
    <div className="flex-1 text-left">
      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map((tag, i) => (
          <span key={i} className="px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider">
            {tag}
          </span>
        ))}
      </div>
      <h3 className="text-4xl font-extrabold text-[#0a192f] mb-6 leading-tight">{title}</h3>
      <p className="text-lg text-slate-500 mb-8 leading-relaxed">
        {description}
      </p>
      {link && (
        <a 
          href={link} 
          download={link.endsWith('.apk') ? "VertexaStats.apk" : undefined}
          className="inline-flex items-center gap-2 bg-[#0a192f] hover:bg-blue-600 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-blue-500/25 group"
        >
          {link.endsWith('.apk') ? <Download className="w-5 h-5" /> : "View Project"}
          <span>{link.endsWith('.apk') ? "Download APK" : "Learn More"}</span>
          <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </a>
      )}
    </div>
  </motion.div>
);

const SkillBadge = ({ name, icon: Icon }) => (
  <div className="flex flex-col items-center gap-4 p-8 rounded-3xl border border-gray-100 bg-white hover:shadow-xl transition-all duration-300 group">
    <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
      <Icon className="w-8 h-8" />
    </div>
    <span className="font-bold text-[#0a192f]">{name}</span>
  </div>
);

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100 scroll-smooth">
      
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-black tracking-tight text-[#0a192f]">
              M<span className="text-blue-600">.</span>Ahmed
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-bold text-slate-600">
            <a href="#projects" className="hover:text-blue-600 transition-colors uppercase tracking-widest text-[11px]">Projects</a>
            <a href="#about" className="hover:text-blue-600 transition-colors uppercase tracking-widest text-[11px]">About</a>
            <a href="#skills" className="hover:text-blue-600 transition-colors uppercase tracking-widest text-[11px]">Skills</a>
            <a href="#contact" className="bg-[#0a192f] hover:bg-blue-600 text-white px-6 py-2.5 rounded-full transition-all uppercase tracking-widest text-[11px]">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 lg:pt-56 lg:pb-32 overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-blue-50/50 blur-3xl -z-10" />
        <div className="max-w-7xl mx-auto px-6 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-black tracking-widest uppercase mb-8">
            <Flame className="w-4 h-4" /> Available for New Projects
          </div>
          <h1 className="text-6xl lg:text-[7rem] font-black tracking-tighter mb-8 leading-[0.9] text-[#0a192f]">
            Building the <br />
            <span className="text-blue-600">Future</span> of Sport.
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 mb-12 max-w-2xl leading-relaxed">
            I'm a full-stack developer dedicated to creating premium, high-performance software for the cricket community.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <a href="#projects" className="bg-[#0a192f] hover:bg-blue-600 text-white px-10 py-5 rounded-full font-bold text-lg transition-all shadow-xl hover:shadow-blue-500/40 w-full sm:w-auto text-center">
              View Work
            </a>
            <div className="flex items-center gap-6">
              <a href="#" className="p-3 hover:text-blue-600 transition-colors"><Github className="w-6 h-6" /></a>
              <a href="#" className="p-3 hover:text-blue-600 transition-colors"><Linkedin className="w-6 h-6" /></a>
              <a href="mailto:contact@vertexalabs.com" className="p-3 hover:text-blue-600 transition-colors"><Mail className="w-6 h-6" /></a>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 bg-[#fafbfc]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-24 max-w-3xl">
            <h2 className="text-sm font-black uppercase tracking-[0.3em] text-blue-600 mb-4">Featured Work</h2>
            <h3 className="text-5xl font-extrabold text-[#0a192f]">Crafting Digital Experiences with Precision.</h3>
          </div>

          <ProjectCard 
            title="Cricket Stats App (VertexaStats)"
            description="The ultimate premium cricket tracker and analyzer. Features real-time match tracking, detailed career analytics, automatic achievement unlocking, and beautiful PDF exports. Built for cricketers who want to master their game."
            image="/projects/stats_mockup.png"
            tags={["Flutter", "Firebase", "PDF Generation", "Cloud Sync"]}
            link="/app.apk"
          />

          <ProjectCard 
            title="Cricket Auction Simulator"
            description="A high-stakes, real-time auction simulation platform. Integrated with advanced AI bidding logic, live room updates, and comprehensive player comparison screens. Designed to provide an authentic auction experience."
            image="/projects/auction_mockup.png"
            tags={["React", "Framer Motion", "Real-time AI", "Tailwind CSS"]}
            isReverse={true}
          />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="flex-1">
              <h2 className="text-sm font-black uppercase tracking-[0.3em] text-blue-600 mb-4">About Me</h2>
              <h3 className="text-5xl font-extrabold text-[#0a192f] mb-8">Passionate Developer Based in Rahim Yar Khan.</h3>
              <p className="text-lg text-slate-500 leading-relaxed mb-10">
                I am a professional software developer with a deep passion for the intersection of technology and sports. Based in Pakistan, I specialize in building robust, user-centric applications that solve real-world problems.
              </p>
              <div className="grid grid-cols-2 gap-8 py-8 border-y border-gray-100">
                <div>
                  <h4 className="text-2xl font-bold text-[#0a192f] mb-2">50+</h4>
                  <p className="text-slate-500 text-sm font-bold uppercase tracking-widest">Projects Delivered</p>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-[#0a192f] mb-2">3+</h4>
                  <p className="text-slate-500 text-sm font-bold uppercase tracking-widest">Years Experience</p>
                </div>
              </div>
            </div>
            <div className="flex-1 w-full bg-[#f8fafc] rounded-[3rem] p-16 relative">
              <div className="absolute top-0 right-0 p-8">
                 <MapPin className="text-blue-200 w-32 h-32" />
              </div>
              <div className="relative z-10">
                <div className="inline-flex p-4 rounded-2xl bg-white shadow-xl mb-6">
                  <Globe className="text-blue-600 w-8 h-8" />
                </div>
                <h4 className="text-2xl font-bold text-[#0a192f] mb-4">Remote Ready</h4>
                <p className="text-slate-500">I collaborate with clients and teams worldwide from my base in Rahim Yar Khan, Pakistan.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 bg-[#020617] text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="mb-24">
            <h2 className="text-sm font-black uppercase tracking-[0.3em] text-blue-600 mb-4">Expertise</h2>
            <h3 className="text-5xl font-extrabold text-white">My Technical Toolkit.</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="p-10 rounded-3xl border border-slate-800 bg-slate-900/50 hover:bg-blue-600 transition-all group">
              <Smartphone className="w-12 h-12 mx-auto mb-6 text-blue-500 group-hover:text-white transition-colors" />
              <h4 className="font-bold">Flutter/Dart</h4>
            </div>
            <div className="p-10 rounded-3xl border border-slate-800 bg-slate-900/50 hover:bg-blue-600 transition-all group">
              <Code2 className="w-12 h-12 mx-auto mb-6 text-blue-500 group-hover:text-white transition-colors" />
              <h4 className="font-bold">React.js</h4>
            </div>
            <div className="p-10 rounded-3xl border border-slate-800 bg-slate-900/50 hover:bg-blue-600 transition-all group">
              <BarChart3 className="w-12 h-12 mx-auto mb-6 text-blue-500 group-hover:text-white transition-colors" />
              <h4 className="font-bold">Firebase</h4>
            </div>
            <div className="p-10 rounded-3xl border border-slate-800 bg-slate-900/50 hover:bg-blue-600 transition-all group">
              <Trophy className="w-12 h-12 mx-auto mb-6 text-blue-500 group-hover:text-white transition-colors" />
              <h4 className="font-bold">Redux/Riverpod</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-40 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-6xl font-black text-[#0a192f] mb-12 tracking-tight">Let's work together.</h2>
          <p className="text-2xl text-slate-500 mb-16 leading-relaxed">
            Have a project in mind or just want to say hi? <br />
            I'm always open to new opportunities and collaborations.
          </p>
          <a href="mailto:contact@vertexalabs.com" className="inline-flex items-center gap-4 bg-[#0a192f] text-white px-12 py-6 rounded-full font-bold text-xl hover:bg-blue-600 transition-all shadow-2xl hover:shadow-blue-500/40">
            Send a Message <Activity className="w-6 h-6" />
          </a>
          <div className="mt-24 pt-24 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="text-left font-bold text-slate-400 uppercase tracking-widest text-xs">
              Base: Rahim Yar Khan, PK
            </div>
            <div className="flex gap-8">
              <a href="#" className="font-bold text-[#0a192f] hover:text-blue-600 transition-colors uppercase tracking-widest text-[11px]">Git</a>
              <a href="#" className="font-bold text-[#0a192f] hover:text-blue-600 transition-colors uppercase tracking-widest text-[11px]">Ln</a>
              <a href="#" className="font-bold text-[#0a192f] hover:text-blue-600 transition-colors uppercase tracking-widest text-[11px]">Tw</a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default App;
