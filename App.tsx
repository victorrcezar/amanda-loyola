import React, { useState, useEffect } from 'react';
import { APP_CONTENT } from './constants';
import { HealingCardItem } from './types';
import { Button } from './components/Button';
import { Section } from './components/Section';
import { 
  CheckCircle, 
  Gift, 
  ShieldCheck, 
  ChevronDown, 
  ChevronUp, 
  BookOpen,
  Sparkles,
  ArrowRight,
  Check
} from 'lucide-react';

// --- Typewriter Component ---
const TypewriterHeadline = ({ text }: { text: string }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    setDisplayedText(''); 
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayedText((prev) => text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, [text]);

  return (
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight text-sand-900 min-h-[1.4em] drop-shadow-sm">
      {displayedText}
      <span className="animate-blink inline-block w-1 h-[0.8em] bg-brand-600 ml-1 align-middle rounded-full"></span>
    </h1>
  );
};

// --- Interactive Healing Card Component ---
const HealingCard: React.FC<{ item: HealingCardItem; index: number }> = ({ item, index }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const Icon = item.icon;

  return (
    <div 
      className="group perspective-1000 w-full h-64 cursor-pointer touch-manipulation"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className={`relative w-full h-full duration-700 transform-style-3d transition-all ${isFlipped ? 'rotate-y-180' : ''}`}>
        
        {/* Front Side - The Pain */}
        <div className="absolute w-full h-full backface-hidden bg-white border border-sand-200 rounded-2xl p-6 shadow-md hover:shadow-lg hover:border-brand-200 transition-all flex flex-col items-center justify-center text-center">
          <div className="w-14 h-14 bg-brand-50 rounded-full flex items-center justify-center mb-5 text-brand-600 shadow-sm group-hover:bg-brand-100 transition-colors">
            <Icon className="w-7 h-7 stroke-[1.5]" />
          </div>
          <h3 className="text-xl font-serif text-sand-800 mb-2">{item.pain}</h3>
          <p className="text-xs text-brand-600 uppercase tracking-widest mt-4 font-semibold flex items-center gap-1 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity">
            Ver a cura <ArrowRight className="w-3 h-3" />
          </p>
        </div>

        {/* Back Side - The Promise (Rotated) */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-brand-50 border border-brand-200 rounded-2xl p-6 shadow-xl flex flex-col items-center justify-center text-center">
          <Sparkles className="w-8 h-8 text-brand-500 mb-3" />
          <p className="text-sand-900 font-medium leading-relaxed italic mb-4 text-sm md:text-base">
            "{item.promise}"
          </p>
          <span className="text-xs font-bold text-brand-700 bg-brand-100 px-3 py-1 rounded-full">
            {item.reference}
          </span>
        </div>

      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const CHECKOUT_URL = "https://amandaloyolastore.com.br/produtos/livro-crescendo-com-a-falta-de-paternidade-aiy1d";

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToOffer = () => {
    document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCheckout = () => {
    window.location.href = CHECKOUT_URL;
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-sand-900 overflow-x-hidden relative">
      {/* Global Noise Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-50 bg-noise bg-repeat mix-blend-multiply"></div>
      
      <Navbar onCtaClick={scrollToOffer} />
      
      {/* 1. HERO SECTION */}
      <header className="relative pt-28 pb-16 md:pt-40 md:pb-32 overflow-hidden">
        {/* Soft Organic Gradients */}
        <div className="absolute top-[-10%] right-[-5%] w-[50%] h-[70%] bg-gradient-to-b from-brand-100/40 to-transparent rounded-[100%] blur-[80px] -z-10"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[60%] bg-brand-50/60 rounded-full blur-[60px] -z-10"></div>

        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
            
            {/* TEXT */}
            <div className="space-y-6 md:space-y-8 text-center lg:text-left order-2 lg:order-1 relative z-10">
              <div className="inline-block px-4 py-1.5 bg-brand-50 border border-brand-100 rounded-full mb-2">
                 <span className="text-brand-700 text-[10px] md:text-xs font-bold tracking-widest uppercase flex items-center gap-2">
                   <Sparkles className="w-3 h-3" /> {APP_CONTENT.hero.badges[0]}
                 </span>
              </div>
              
              <TypewriterHeadline text={APP_CONTENT.hero.headline} />
              
              <p className="text-base md:text-xl text-sand-700 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light">
                {APP_CONTENT.hero.subheadline}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4 md:pt-6">
                <Button onClick={scrollToOffer} withIcon className="shadow-brand-200/50 shadow-xl bg-brand-600 hover:bg-brand-700 text-white border-none py-3 px-6 md:py-4 md:px-8 text-base md:text-lg w-full sm:w-auto">
                  {APP_CONTENT.hero.cta}
                </Button>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-2 md:gap-3 pt-4 md:pt-6">
                {APP_CONTENT.hero.badges.slice(1).map((badge, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-[10px] md:text-sm text-sand-600 bg-white/60 px-3 py-1.5 rounded-md border border-sand-200/50 backdrop-blur-sm">
                    <CheckCircle className="w-3.5 h-3.5 text-brand-600" />
                    {badge}
                  </div>
                ))}
              </div>
            </div>

            {/* IMAGE */}
            <div className="relative mx-auto lg:mr-0 max-w-[280px] md:max-w-md group order-1 lg:order-2 flex justify-center lg:justify-end perspective-1000 mt-4 md:mt-0">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 md:w-80 md:h-80 bg-brand-200/30 blur-[60px] rounded-full -z-10"></div>
              
              <div className="relative z-10 w-full transition-transform duration-700 ease-out transform group-hover:rotate-y-12 group-hover:scale-105">
                   <img 
                    src="https://static.wixstatic.com/media/1f17f3_c31dfcd1f5ea46c9b5f8c052fa06a352~mv2.png" 
                    alt="Capa do Livro" 
                    className="w-full h-auto drop-shadow-2xl"
                  />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 2. OPEN LETTER */}
      <Section className="py-12 md:py-20 bg-sand-50 relative">
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <div className="bg-[#fffdf5] p-6 md:p-16 shadow-xl md:shadow-2xl shadow-sand-200 border border-[#e8e4d8] transform md:rotate-1 relative">
            <div className="absolute inset-0 bg-noise opacity-[0.05] pointer-events-none mix-blend-multiply"></div>
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-8 bg-brand-100/50 rotate-[-2deg] backdrop-blur-sm border border-white/40 shadow-sm hidden md:block"></div>

            <h2 className="font-hand text-3xl md:text-5xl text-brand-800 mb-6 md:mb-8 md:-rotate-1">
              {APP_CONTENT.letter.greeting}
            </h2>
            
            <div className="space-y-4 md:space-y-6 text-base md:text-xl text-sand-800 leading-relaxed font-serif">
              <p className="font-medium italic text-sand-600">"{APP_CONTENT.letter.intro}"</p>
              {APP_CONTENT.letter.body.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 md:mt-12 flex flex-col items-end">
              <p className="font-hand text-xl md:text-2xl text-sand-600">{APP_CONTENT.letter.closing}</p>
              <p className="font-hand text-3xl md:text-4xl text-brand-700 mt-2 transform -rotate-2">{APP_CONTENT.letter.author}</p>
            </div>
          </div>
        </div>
      </Section>

      {/* 3. HEALING CARDS (Interactive) */}
      <Section className="bg-white">
        <div className="text-center mb-8 md:mb-12">
          <span className="font-hand text-2xl md:text-3xl text-brand-600 block mb-2">Um toque de esperança</span>
          <h2 className="text-2xl md:text-4xl font-serif text-sand-900">Onde dói hoje?</h2>
          <p className="text-sand-500 mt-2 md:mt-4 text-sm md:text-base">Toque em um cartão para receber uma palavra do livro</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto px-4">
          {APP_CONTENT.healingCards.map((item, idx) => (
            <HealingCard key={idx} item={item} index={idx} />
          ))}
        </div>
      </Section>

      {/* 4. TARGET AUDIENCE (NEW - High Conversion) */}
      <Section className="bg-brand-900 text-sand-50 py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-5"></div>
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <h2 className="text-2xl md:text-4xl font-serif text-center mb-8 md:mb-12 text-brand-100">
            Este livro é para você se...
          </h2>
          <div className="space-y-3 md:space-y-4">
            {APP_CONTENT.audience.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 md:gap-4 p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                 <div className="bg-brand-500 rounded-full p-1 mt-0.5 md:mt-1 shrink-0">
                   <Check className="w-3 h-3 md:w-4 md:h-4 text-brand-900" strokeWidth={3} />
                 </div>
                 <p className="text-base md:text-xl font-light leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 5. SOLUTION */}
      <Section className="bg-sand-50/50">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center max-w-6xl mx-auto">
          <div className="order-2 lg:order-1">
             <h2 className="text-2xl md:text-4xl font-serif text-sand-900 mb-4 md:mb-6">{APP_CONTENT.solution.title}</h2>
             <p className="text-base md:text-lg text-sand-600 mb-6 md:mb-8 leading-relaxed">
               {APP_CONTENT.solution.description}
             </p>
             <div className="space-y-4 md:space-y-6">
                {APP_CONTENT.solution.features.map((feature, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border border-brand-100 flex items-center justify-center text-brand-600 shadow-sm">
                      <feature.icon className="w-4 h-4 md:w-5 md:h-5" />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-sand-800 text-base md:text-lg">{feature.title}</h4>
                      <p className="text-sand-600 text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                ))}
             </div>
             <div className="mt-8 md:mt-10">
               <Button onClick={scrollToOffer} variant="secondary" className="w-full sm:w-auto">
                 Quero começar a ler
               </Button>
             </div>
          </div>
          
          <div className="relative order-1 lg:order-2 mb-4 lg:mb-0">
             <div className="absolute inset-0 bg-brand-100 rounded-tl-[40px] rounded-br-[40px] md:rounded-tl-[80px] md:rounded-br-[80px] -rotate-3 z-0"></div>
             <img 
               src="https://static.wixstatic.com/media/1f17f3_fe6f1ed1cc6c48d8a0acac9092e7caeb~mv2.png" 
               alt="Leitura"
               className="relative z-10 rounded-tl-[40px] rounded-br-[40px] md:rounded-tl-[80px] md:rounded-br-[80px] shadow-xl w-full h-64 md:h-[500px] object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-700"
             />
          </div>
        </div>
      </Section>

      {/* 6. AUTHOR BIO (NEW - Authority) */}
      <Section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="w-full md:w-1/3">
              <div className="relative max-w-sm mx-auto md:max-w-none">
                <div className="absolute -inset-4 border-2 border-brand-200 rounded-full md:rounded-[4rem] -rotate-6"></div>
                <img 
                  src={APP_CONTENT.author.imageUrl} 
                  alt={APP_CONTENT.author.name}
                  className="w-full rounded-full md:rounded-[4rem] shadow-2xl relative z-10 grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3 text-center md:text-left">
              <span className="font-hand text-2xl md:text-3xl text-brand-600 mb-2 block">Sobre a Autora</span>
              <h2 className="text-2xl md:text-4xl font-serif text-sand-900 mb-4 md:mb-6">{APP_CONTENT.author.name}</h2>
              <div className="space-y-3 md:space-y-4 text-base md:text-lg text-sand-600 leading-relaxed font-light">
                {APP_CONTENT.author.bio.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <div className="mt-6 md:mt-8 font-hand text-3xl md:text-4xl text-brand-800 opacity-80">
                {APP_CONTENT.author.signature}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 7. OFFER SECTION */}
      <Section id="offer" className="bg-sand-50 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-sand-900 rounded-[1.5rem] md:rounded-[2.5rem] p-1 shadow-2xl shadow-brand-900/10">
            <div className="bg-sand-900 rounded-[1.3rem] md:rounded-[2.3rem] overflow-hidden border border-white/10 relative">
              
              <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-brand-900/40 to-transparent pointer-events-none"></div>
              
              <div className="grid md:grid-cols-2">
                <div className="p-8 md:p-14 flex flex-col items-center justify-center relative bg-sand-800/50 border-b md:border-b-0 md:border-r border-white/5">
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
                  <h3 className="font-hand text-2xl md:text-3xl text-brand-200 mb-6 text-center transform -rotate-2">Edição Especial de Lançamento</h3>
                  <div className="relative w-40 md:w-56 transform hover:scale-105 transition-all duration-500 z-10">
                    <img src="https://static.wixstatic.com/media/1f17f3_c31dfcd1f5ea46c9b5f8c052fa06a352~mv2.png" className="w-full drop-shadow-2xl" alt="Book" />
                  </div>
                </div>

                <div className="p-6 md:p-14 bg-white md:rounded-l-[2rem] relative z-10 flex flex-col justify-center">
                  
                  <div className="mb-6 text-center md:text-left">
                    <p className="text-brand-600 font-bold uppercase text-[10px] md:text-xs tracking-widest mb-2 flex items-center justify-center md:justify-start gap-2">
                      <Sparkles className="w-4 h-4" /> Oferta por Tempo Limitado
                    </p>
                    <div className="flex items-end justify-center md:justify-start gap-3 mb-1">
                      <span className="text-sand-400 line-through text-lg">{APP_CONTENT.offer.regularPrice}</span>
                      <span className="text-4xl md:text-5xl font-serif font-bold text-sand-900">{APP_CONTENT.offer.dealPrice}</span>
                    </div>
                  </div>

                  <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                     <BenefitItem text="Livro Físico Autografado" highlight />
                  </div>

                  <div className="bg-brand-50 border-l-4 border-brand-400 p-3 md:p-4 mb-6 md:mb-8 rounded-r-lg">
                    <p className="text-brand-900 font-serif italic text-sm text-center md:text-left">
                      "{APP_CONTENT.offer.spiritualHook}"
                    </p>
                  </div>

                  <Button fullWidth onClick={handleCheckout} className="bg-brand-600 hover:bg-brand-700 text-white shadow-lg shadow-brand-200 text-sm md:text-lg py-3 md:py-4">
                    Sim, quero curar minha história
                  </Button>

                  <p className="text-center text-xs text-sand-400 mt-4 flex items-center justify-center gap-2">
                    <ShieldCheck className="w-3 h-3" /> {APP_CONTENT.offer.guarantee}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 8. FAQ */}
      <Section className="bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-serif text-center mb-8 md:mb-12 text-sand-900">Dúvidas Frequentes</h2>
          <div className="space-y-3">
            {APP_CONTENT.faq.map((item, idx) => (
              <AccordionItem key={idx} question={item.question} answer={item.answer} />
            ))}
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
};

// --- Sub-components ---

const Navbar: React.FC<{ onCtaClick: () => void }> = ({ onCtaClick }) => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-2 md:py-3' : 'bg-transparent py-4 md:py-6'}`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <span className={`font-hand text-2xl md:text-3xl font-bold ${isScrolled ? 'text-brand-800' : 'text-brand-900'}`}>
          Amanda Loyola
        </span>
        <button 
          onClick={onCtaClick}
          className={`px-4 py-2 md:px-6 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all transform hover:-translate-y-0.5 ${
            isScrolled 
              ? 'bg-brand-600 text-white hover:bg-brand-700 shadow-md' 
              : 'bg-white/90 text-brand-800 hover:bg-white shadow-lg'
          }`}
        >
          Adquirir Livro
        </button>
      </div>
    </nav>
  );
};

const BenefitItem: React.FC<{ text: string, highlight?: boolean }> = ({ text, highlight }) => (
  <div className="flex items-start gap-3">
    <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${highlight ? 'bg-brand-100 text-brand-700' : 'bg-sand-100 text-sand-500'}`}>
      {highlight ? <Gift className="w-3 h-3" /> : <CheckCircle className="w-3 h-3" />}
    </div>
    <span className={`text-sm ${highlight ? 'text-brand-800 font-medium' : 'text-sand-600'}`}>{text}</span>
  </div>
);

const AccordionItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-white rounded-xl border border-sand-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-4 md:p-5 text-left bg-white"
      >
        <span className="font-medium text-sand-800 pr-4 text-sm md:text-base">{question}</span>
        {isOpen ? <ChevronUp className="w-5 h-5 text-brand-500 shrink-0" /> : <ChevronDown className="w-5 h-5 text-sand-400 shrink-0" />}
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="p-4 md:p-5 pt-0 text-sand-600 text-sm leading-relaxed border-t border-sand-100 mt-0 bg-sand-50/50">
          {answer}
        </p>
      </div>
    </div>
  );
};

const Footer: React.FC = () => (
  <footer className="bg-[#2E2A23] text-sand-400 py-12 md:py-16 text-center text-sm relative overflow-hidden">
    <div className="absolute inset-0 bg-noise opacity-5"></div>
    <div className="container mx-auto px-4 relative z-10">
      <BookOpen className="w-6 h-6 md:w-8 md:h-8 mx-auto text-brand-600 mb-6 opacity-80" />
      <p className="mb-6 font-serif text-base md:text-lg text-sand-200">"A cura começa quando o silêncio termina."</p>
      <div className="w-12 h-0.5 bg-brand-800 mx-auto mb-8"></div>
      <p className="mb-2">&copy; {new Date().getFullYear()} Amanda Loyola.</p>
      <div className="flex justify-center gap-4 md:gap-6 mb-8 text-[10px] md:text-xs tracking-wide uppercase">
        <a href="#" className="hover:text-brand-400 transition-colors">Termos</a>
        <a href="#" className="hover:text-brand-400 transition-colors">Privacidade</a>
        <a href="#" className="hover:text-brand-400 transition-colors">Suporte</a>
      </div>
    </div>
  </footer>
);

export default App;