'use client'
import React from 'react';
import { useState, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import Image from 'next/image';
import { 
  BookOpen, 
  Users, 
  Award, 
  ArrowRight, 
  Menu, 
  X, 
  CheckCircle, 
  Play, 
  Star,
  Zap,
  Layout,
  Smartphone
} from 'lucide-react';

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const lenisRef = useRef(null);

  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Handle scroll for navbar styling
    lenis.on('scroll', ({ scroll }) => {
      setIsScrolled(scroll > 20);
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  // Smooth scroll handler
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element && lenisRef.current) {
      lenisRef.current.scrollTo(element, {
        offset: -80,
        duration: 1.5,
      });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 overflow-x-hidden selection:bg-indigo-500 selection:text-white">
      {/* Custom Styles for Animations */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        @keyframes float-delayed {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 8s ease-in-out infinite; }
        .animate-fade-in { animation: fade-in-up 0.8s ease-out forwards; }
        .glass-nav {
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.3);
        }
        .text-gradient {
          background: linear-gradient(135deg, #4f46e5 0%, #9333ea 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .bg-gradient-primary {
          background: linear-gradient(135deg, #4f46e5 0%, #9333ea 100%);
        }
      `}</style>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-3 shadow-sm' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => lenisRef.current?.scrollTo(0, { duration: 1.5 })}>
            <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-indigo-500/30">
              E
            </div>
            <span className={`text-2xl font-bold tracking-tight ${isScrolled ? 'text-slate-900' : 'text-slate-900'}`}>
              Elevate<span className="text-indigo-600">.</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {['Programs', 'Mentors', 'Results', 'About'].map((item) => (
              <button 
                key={item} 
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors"
              >
                {item}
              </button>
            ))}
            <button className="px-6 py-2.5 rounded-full bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800 transition-all transform hover:scale-105 active:scale-95 shadow-lg">
              Book a Demo
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-slate-900 p-2">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100 p-6 flex flex-col gap-4 animate-fade-in">
             {['Programs', 'Mentors', 'Results', 'About'].map((item) => (
              <button 
                key={item} 
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-left text-lg font-medium text-slate-600 hover:text-indigo-600"
              >
                {item}
              </button>
            ))}
            <button className="w-full py-3 rounded-xl bg-gradient-primary text-white font-semibold">
              Get Started
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background Decor */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-indigo-100 rounded-full blur-3xl opacity-50 animate-float" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[500px] h-[500px] bg-purple-100 rounded-full blur-3xl opacity-50 animate-float-delayed" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-sm font-medium animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse"></span>
              New Batches Starting Soon
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] text-slate-900">
              Master the Future with <br/>
              <span className="text-gradient">Modern Learning.</span>
            </h1>
            
            <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
              We don&apos;t just teach subjects; we engineer careers. Join the premier coaching institute designed for the ambitious.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="px-8 py-4 rounded-full bg-gradient-primary text-white font-semibold shadow-xl shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 group">
                Start Learning <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 rounded-full bg-white border border-slate-200 text-slate-700 font-semibold hover:border-indigo-200 hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                <Play className="w-4 h-4 fill-current" /> Watch Demo
              </button>
            </div>

            <div className="pt-8 flex items-center gap-4 text-sm font-medium text-slate-500">
              <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                    <Image src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i+20}`} alt="avatar" width={40} height={40} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <p>Trusted by 2,000+ students</p>
            </div>
          </div>

          <div className="relative lg:h-[600px] hidden lg:flex items-center justify-center">
            {/* Abstract 3D-ish Composition */}
            <div className="relative w-full h-full max-w-md">
              <div className="absolute top-10 right-10 w-64 h-80 bg-slate-900 rounded-3xl shadow-2xl rotate-3 z-10 overflow-hidden border border-slate-800 animate-float">
                <div className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-slate-400 text-xs uppercase tracking-wider">Live Class</span>
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                  </div>
                  <div className="h-32 bg-slate-800 rounded-xl mb-4 w-full animate-pulse"></div>
                  <div className="space-y-2">
                    <div className="h-3 bg-slate-800 rounded w-3/4"></div>
                    <div className="h-3 bg-slate-800 rounded w-1/2"></div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-20 left-0 w-72 h-64 bg-white rounded-3xl shadow-2xl -rotate-6 z-20 p-6 border border-slate-100 animate-float-delayed">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <CheckCircle size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Success Rate</h4>
                    <p className="text-slate-500 text-sm">Top tier results</p>
                  </div>
                </div>
                <div className="flex items-end gap-2 h-24">
                  {[40, 65, 45, 80, 55, 95].map((h, i) => (
                    <div key={i} className="w-full bg-indigo-50 rounded-t-md relative group">
                      <div 
                        style={{ height: `${h}%` }} 
                        className="absolute bottom-0 w-full bg-indigo-500 rounded-t-md transition-all duration-1000 group-hover:bg-indigo-600"
                      ></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: 'Active Students', value: '2.5k+', icon: Users },
            { label: 'Courses', value: '45+', icon: BookOpen },
            { label: 'Instructors', value: '18+', icon: Award },
            { label: 'Success Rate', value: '94%', icon: Zap },
          ].map((stat, idx) => (
            <div key={idx} className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-2xl bg-slate-50 group-hover:bg-indigo-50 flex items-center justify-center text-indigo-600 transition-colors">
                <stat.icon size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900">{stat.value}</h3>
                <p className="text-sm text-slate-500 font-medium">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features/Why Us */}
      <section id="about" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Why Top Students Choose Us</h2>
            <p className="text-slate-600">We blend traditional teaching methodologies with cutting-edge technology to ensure every concept is crystal clear.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Adaptive Learning', desc: 'AI-driven curriculum that adjusts to your learning speed and weak areas.', icon: Layout },
              { title: 'Expert Mentors', desc: 'Learn directly from industry veterans and academic toppers.', icon: Users },
              { title: 'Mobile Access', desc: 'Study on the go with our premium mobile application and offline mode.', icon: Smartphone },
            ].map((feature, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group cursor-default">
                <div className="w-14 h-14 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  <feature.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-500 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Programs */}
      <section id="programs" className="py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600 rounded-full blur-[120px] opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600 rounded-full blur-[120px] opacity-20"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-indigo-400 font-semibold tracking-wider text-sm uppercase">Our Curriculum</span>
              <h2 className="text-3xl lg:text-4xl font-bold mt-2">Popular Programs</h2>
            </div>
            <button className="hidden md:flex items-center gap-2 text-indigo-300 hover:text-white transition-colors">
              View All Courses <ArrowRight size={18} />
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'JEE Advanced', sub: 'Engineering', students: 400, rating: 4.9, color: 'from-blue-500 to-indigo-500' },
              { title: 'NEET Medical', sub: 'Medical Science', students: 350, rating: 4.8, color: 'from-emerald-400 to-teal-500' },
              { title: 'Foundation', sub: 'Class 9-10', students: 800, rating: 4.9, color: 'from-orange-400 to-pink-500' },
            ].map((course, idx) => (
              <div key={idx} className="group relative rounded-2xl overflow-hidden bg-slate-800 border border-slate-700 hover:border-slate-600 transition-all">
                <div className={`h-2 bg-gradient-to-r ${course.color}`}></div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div className="bg-slate-700 px-3 py-1 rounded-lg text-xs font-medium text-slate-300">{course.sub}</div>
                    <div className="flex items-center gap-1 text-yellow-400 text-sm font-bold">
                      <Star size={14} fill="currentColor" /> {course.rating}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-indigo-400 transition-colors">{course.title}</h3>
                  <p className="text-slate-400 text-sm mb-6">Comprehensive syllabus coverage with 20+ mock tests.</p>
                  
                  <div className="flex items-center justify-between pt-6 border-t border-slate-700">
                    <div className="flex items-center gap-2 text-sm text-slate-400">
                      <Users size={16} /> {course.students} Enrolled
                    </div>
                    <button className="w-10 h-10 rounded-full bg-white text-slate-900 flex items-center justify-center hover:scale-110 transition-transform">
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mentors / Trust Section */}
      <section id="mentors" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-3xl rotate-3 opacity-10"></div>
              <Image 
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1000" 
                alt="Teaching" 
                width={1000}
                height={500}
                className="relative rounded-3xl shadow-2xl object-cover h-[500px] w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-xs">
                <p className="text-slate-900 font-bold text-lg mb-2">&quot;The best decision for my career.&quot;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden">
                    <Image src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="Student" width={40} height={40} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">Alex M.</p>
                    <p className="text-xs text-slate-500">IIT Bombay, CSE</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Mentorship that goes beyond textbooks.</h2>
              <p className="text-lg text-slate-600 mb-8">
                Our faculty consists of alumni from top universities who understand exactly what it takes to crack the toughest exams.
              </p>

              <div className="space-y-6">
                {[
                  { title: 'Personalized Attention', desc: '1:1 Doubt clearing sessions weekly.' },
                  { title: 'Performance Analytics', desc: 'Deep dive into your test scores with AI insights.' },
                  { title: 'Mental Wellness', desc: 'Stress management workshops before exams.' },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0 mt-1">
                      <CheckCircle size={14} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{item.title}</h4>
                      <p className="text-sm text-slate-500 mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button className="mt-10 px-8 py-4 rounded-xl text-indigo-600 font-semibold border-2 border-indigo-100 hover:border-indigo-600 hover:bg-indigo-50 transition-all">
                Meet Our Faculty
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto bg-slate-900 rounded-[2.5rem] p-12 lg:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
             <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600 rounded-full mix-blend-overlay filter blur-[100px] opacity-50 animate-pulse"></div>
             <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-overlay filter blur-[100px] opacity-50 animate-pulse"></div>
          </div>
          
          <div className="relative z-10">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Ready to start your journey?</h2>
            <p className="text-indigo-200 text-lg mb-10 max-w-xl mx-auto">
              Join the waiting list for our next batch. First 50 registrations get a complimentary study kit.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="px-6 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-slate-400 focus:outline-none focus:border-indigo-400 w-full sm:w-80"
              />
              <button className="px-8 py-4 rounded-full bg-white text-indigo-900 font-bold hover:bg-indigo-50 transition-colors shadow-lg shadow-indigo-900/20">
                Get Syllabus
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 pt-16 pb-8 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                 <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold text-sm">
                  E
                </div>
                <span className="text-xl font-bold text-slate-900">Elevate.</span>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed">
                Empowering the next generation of leaders with world-class education.
              </p>
            </div>
            
            {[
              { title: 'Company', links: ['About', 'Careers', 'Press', 'Blog'] },
              { title: 'Resources', links: ['Syllabus', 'Previous Papers', 'Video Lectures', 'Community'] },
              { title: 'Legal', links: ['Terms', 'Privacy', 'Cookie Policy', 'Contact'] },
            ].map((col, idx) => (
              <div key={idx}>
                <h4 className="font-bold text-slate-900 mb-4">{col.title}</h4>
                <ul className="space-y-2">
                  {col.links.map(link => (
                    <li key={link}>
                      <a href="#" className="text-sm text-slate-500 hover:text-indigo-600 transition-colors">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-200">
            <p className="text-slate-400 text-sm">© 2024 Elevate Education. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
               {/* Social placeholders */}
               <div className="w-5 h-5 bg-slate-300 rounded-full opacity-50 hover:opacity-100 hover:bg-indigo-600 transition-all cursor-pointer"></div>
               <div className="w-5 h-5 bg-slate-300 rounded-full opacity-50 hover:opacity-100 hover:bg-indigo-600 transition-all cursor-pointer"></div>
               <div className="w-5 h-5 bg-slate-300 rounded-full opacity-50 hover:opacity-100 hover:bg-indigo-600 transition-all cursor-pointer"></div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;