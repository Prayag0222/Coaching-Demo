'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  BookOpen, 
  Users, 
  Clock, 
  CheckCircle2, 
  Menu, 
  X,
  Star,
  ChevronRight
} from 'lucide-react';

const TuitionWebsite = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      
      {/* Top Bar - Contact Info (Desktop Only) */}
      <div className="hidden md:flex bg-slate-900 text-white py-2 px-6 justify-between items-center text-sm">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1"><MapPin size={14} /> Model Town, Delhi</span>
          <span className="flex items-center gap-1"><Clock size={14} /> Mon - Sat: 3:00 PM - 8:00 PM</span>
        </div>
        <div className="font-medium text-yellow-400">
          Admissions Open for New Batch 2024-25
        </div>
      </div>

      {/* Navigation */}
      <nav className={`sticky top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-white border-b border-slate-100 py-4'}`}>
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          {/* Logo / Name */}
          <div className="flex items-center gap-2" onClick={() => window.scrollTo(0,0)}>
            <div className="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center text-white font-bold text-xl">
              B
            </div>
            <div>
              <h1 className="text-xl font-bold leading-none text-slate-900">Bright Future</h1>
              <p className="text-xs font-medium text-slate-500 tracking-wide">ACADEMY</p>
            </div>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 font-medium text-slate-600">
            <button onClick={() => scrollToSection('classes')} className="hover:text-blue-700">Classes</button>
            <button onClick={() => scrollToSection('why-us')} className="hover:text-blue-700">Why Us</button>
            <button onClick={() => scrollToSection('reviews')} className="hover:text-blue-700">Reviews</button>
            <a href="tel:+919876543210" className="flex items-center gap-2 bg-blue-700 text-white px-5 py-2.5 rounded-full hover:bg-blue-800 transition-colors shadow-lg shadow-blue-700/20">
              <Phone size={18} />
              <span>98765 43210</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden p-2 text-slate-700" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-xl p-4 flex flex-col gap-4 animate-in slide-in-from-top-2">
            <button onClick={() => scrollToSection('classes')} className="text-left p-2 font-medium border-b border-slate-50">Classes & Subjects</button>
            <button onClick={() => scrollToSection('why-us')} className="text-left p-2 font-medium border-b border-slate-50">Why Choose Us</button>
            <button onClick={() => scrollToSection('location')} className="text-left p-2 font-medium border-b border-slate-50">Location</button>
            <a href="tel:+919876543210" className="flex items-center justify-center gap-2 bg-blue-700 text-white py-3 rounded-lg font-bold">
              <Phone size={20} /> Call Now
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative bg-white pt-8 pb-16 lg:pt-20 lg:pb-24 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center lg:text-left z-10">
            <div className="inline-block bg-blue-50 text-blue-800 px-4 py-1.5 rounded-full text-sm font-semibold border border-blue-100 mb-2">
              📍 Best Tuition in Model Town
            </div>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
              Helping Students Score Better with <span className="text-blue-700">Clear Concepts.</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-xl mx-auto lg:mx-0">
              Personalized coaching for Class 6 to 12. Maths, Science, and Board Exam preparation with experienced teachers.
            </p>

            {/* Mobile-First CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
              <a href="tel:+919876543210" className="flex items-center justify-center gap-2 bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-800 transition-all shadow-xl shadow-blue-700/20 active:scale-95">
                <Phone className="fill-current" size={20} />
                Call Now
              </a>
              <a href="https://wa.me/919876543210" className="flex items-center justify-center gap-2 bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-700 transition-all shadow-xl shadow-green-600/20 active:scale-95">
                <MessageCircle className="fill-current" size={20} />
                WhatsApp
              </a>
            </div>
            
            <p className="text-sm text-slate-500 pt-2">
              <span className="text-green-600 font-bold">✓</span> 2 Days Free Trial Class Available
            </p>
          </div>

          {/* Hero Image / Graphic */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-full">
             <div className="absolute inset-0 bg-blue-600 rounded-4xl rotate-3 opacity-10"></div>
             <Image
               src="https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&q=80&w=1000"
               alt="Student studying"
               width={1000}
               height={750}
               className="relative rounded-4xl shadow-2xl border-4 border-white object-cover aspect-4/3 w-full"
               priority
               unoptimized
             />
             
             {/* Float Card */}
             <div className="absolute -bottom-6 -left-2 bg-white p-4 rounded-xl shadow-lg border border-slate-100 flex items-center gap-3 animate-bounce-slow">
               <div className="bg-yellow-100 p-2 rounded-full text-yellow-700">
                 <Star fill="currentColor" size={20} />
               </div>
               <div>
                 <p className="font-bold text-slate-900">Proven Results</p>
                 <p className="text-xs text-slate-500">100+ Students Topped</p>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Classes Offered */}
      <section id="classes" className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">Classes & Subjects</h2>
            <p className="text-slate-600">Dedicated batches for different age groups to ensure focus.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:border-blue-500 transition-colors">
              <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center mb-4">
                <BookOpen size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Class 6 to 8</h3>
              <p className="text-slate-500 mb-4 text-sm">Building a strong foundation for future concepts.</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-slate-700 font-medium"><CheckCircle2 size={16} className="text-green-600"/> Mathematics</li>
                <li className="flex items-center gap-2 text-slate-700 font-medium"><CheckCircle2 size={16} className="text-green-600"/> Science</li>
                <li className="flex items-center gap-2 text-slate-700 font-medium"><CheckCircle2 size={16} className="text-green-600"/> English</li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-md border-t-4 border-blue-600 relative transform md:-translate-y-2">
              <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">POPULAR</div>
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Class 9 & 10</h3>
              <p className="text-slate-500 mb-4 text-sm">Focused preparation for School & Board Exams.</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-slate-700 font-medium"><CheckCircle2 size={16} className="text-green-600"/> Maths (NCERT + RD Sharma)</li>
                <li className="flex items-center gap-2 text-slate-700 font-medium"><CheckCircle2 size={16} className="text-green-600"/> Science (Phy, Chem, Bio)</li>
                <li className="flex items-center gap-2 text-slate-700 font-medium"><CheckCircle2 size={16} className="text-green-600"/> Weekly Tests</li>
              </ul>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:border-blue-500 transition-colors">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-4">
                <Clock size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Class 11 & 12</h3>
              <p className="text-slate-500 mb-4 text-sm">Specialized coaching for Science Stream.</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-slate-700 font-medium"><CheckCircle2 size={16} className="text-green-600"/> Physics</li>
                <li className="flex items-center gap-2 text-slate-700 font-medium"><CheckCircle2 size={16} className="text-green-600"/> Chemistry</li>
                <li className="flex items-center gap-2 text-slate-700 font-medium"><CheckCircle2 size={16} className="text-green-600"/> Mathematics</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Factors */}
      <section id="why-us" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Parents Trust Us?</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                    <Users size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-slate-900">Small Batch Size</h4>
                    <p className="text-slate-600">Max 12 students per batch so every child gets personal attention.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-green-100 text-green-700 flex items-center justify-center shrink-0">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-slate-900">Doubt Clearing Sessions</h4>
                    <p className="text-slate-600">Students can ask questions freely. We don&apos;t move ahead until concepts are clear.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-yellow-100 text-yellow-700 flex items-center justify-center shrink-0">
                    <Star size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-slate-900">Experienced Teachers</h4>
                    <p className="text-slate-600">10+ years of teaching experience. We know how to simplify tough topics.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Fees Box */}
            <div className="bg-slate-900 p-8 rounded-3xl text-white relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600 rounded-full blur-3xl opacity-20"></div>
               <h3 className="text-2xl font-bold mb-4">Admissions & Fees</h3>
               <p className="text-slate-300 mb-6 border-b border-slate-700 pb-4">
                 Transparent fee structure. No hidden charges.
               </p>
               
               <div className="space-y-4 mb-8">
                 <div className="flex justify-between items-center">
                   <span className="text-slate-300">Class 6 - 8</span>
                   <span className="font-bold text-xl">₹2,000<span className="text-sm font-normal text-slate-400">/mo</span></span>
                 </div>
                 <div className="flex justify-between items-center">
                   <span className="text-slate-300">Class 9 - 10</span>
                   <span className="font-bold text-xl">₹3,000<span className="text-sm font-normal text-slate-400">/mo</span></span>
                 </div>
                 <div className="flex justify-between items-center">
                   <span className="text-slate-300">Class 11 - 12</span>
                   <span className="font-bold text-xl">₹4,000<span className="text-sm font-normal text-slate-400">/subject</span></span>
                 </div>
               </div>

               <a href="tel:+919876543210" className="block w-full text-center bg-white text-slate-900 font-bold py-3 rounded-xl hover:bg-slate-100 transition-colors">
                 Call to Book Seat
               </a>
               <p className="text-center text-xs text-slate-400 mt-3">*Morning & Evening Batches Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-16 bg-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-10">What Parents Say</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Suman Gupta", text: "My son used to be afraid of Maths. Now he scores above 90%. Very happy with the teachers." },
              { name: "Rahul Sharma", text: "The best tuition in the area. The teachers are very polite and take extra classes during exams." },
              { name: "Mrs. Verma", text: "Small batches make a big difference. My daughter gets full attention here." }
            ].map((review, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex text-yellow-400 mb-3">
                  {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-slate-700 italic mb-4">&quot{review.text}&quot</p>
                <p className="font-bold text-slate-900 text-sm">- {review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / Location */}
      <footer id="location" className="bg-white border-t border-slate-200 pt-12 pb-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Visit Our Center</h2>
              <p className="text-slate-600 mb-6">Come meet the teachers and see the classroom environment. We are happy to discuss your child&apos;s progress.</p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="text-blue-700 mt-1" />
                  <p className="text-slate-800 font-medium">
                    Shop No. 12, First Floor, Near City Park,<br/>
                    Model Town, Delhi - 110009
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="text-blue-700" />
                  <a href="tel:+919876543210" className="text-slate-800 font-bold hover:text-blue-700 text-lg">
                    +91 98765 43210
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MessageCircle className="text-green-600" />
                  <a href="https://wa.me/919876543210" className="text-slate-800 font-medium hover:text-green-600">
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Google Maps Placeholder */}
            <div className="bg-slate-100 rounded-2xl h-64 w-full flex items-center justify-center text-slate-400 border-2 border-slate-200 border-dashed">
              <div className="text-center">
                <MapPin size={40} className="mx-auto mb-2 opacity-50" />
                <p>Google Map Embed Goes Here</p>
              </div>
            </div>
          </div>

          <div className="text-center pt-8 border-t border-slate-100">
            <p className="text-slate-500 text-sm">© 2024 Bright Future Academy. Local Tuition Center.</p>
          </div>
        </div>
      </footer>
      
      {/* Sticky Mobile Bottom Bar */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-slate-200 p-3 flex gap-3 z-50 shadow-negative">
        <a href="tel:+919876543210" className="flex-1 bg-blue-700 text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2">
          <Phone size={18} /> Call
        </a>
        <a href="https://wa.me/919876543210" className="flex-1 bg-green-600 text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2">
           <MessageCircle size={18} /> WhatsApp
        </a>
      </div>
    </div>
  );
};

export default TuitionWebsite;