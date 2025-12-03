import React, { useEffect, useState } from 'react';
import { ArrowUp, ChevronLeft, ChevronRight } from 'lucide-react';

interface LayoutProps {
    children: React.ReactNode;
    darkSlides: number[];
}

const Layout: React.FC<LayoutProps> = ({ children, darkSlides }) => {
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const [isCurrentSlideDark, setIsCurrentSlideDark] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 400);
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    if (id) {
                         const index = parseInt(id.replace('slide-', ''), 10);
                         if (!isNaN(index)) {
                             setCurrentSlideIndex(index);
                             setIsCurrentSlideDark(darkSlides.includes(index));
                         }
                    }
                }
            });
        }, { threshold: 0.3 });

        document.querySelectorAll('section[id^="slide-"]').forEach(section => {
            observer.observe(section);
        });

        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
            observer.disconnect();
        };
    }, [darkSlides]);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const navigate = (direction: 'prev' | 'next') => {
        const targetIndex = direction === 'next' ? currentSlideIndex + 1 : currentSlideIndex - 1;
        const element = document.getElementById(`slide-${targetIndex}`);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        // Global background is set to Primary (Dark Blue)
        <div className="min-h-screen bg-[#0A1F2E] text-primary flex flex-col relative font-sans selection:bg-secondary selection:text-white overflow-x-hidden">
            
            {/* Header with Logo */}
            <header className="fixed top-0 left-0 w-full z-50 px-4 py-3 md:px-8 md:py-6 flex justify-between items-start pointer-events-none transition-all duration-300">
                <div className="pointer-events-auto transition-transform hover:scale-105 duration-500 flex items-center justify-center">
                    <img 
                        src="https://static.wixstatic.com/media/1f17f3_faf8f8e2f6fc4776b301d807c7ff80e6~mv2.png" 
                        alt="UP! Company" 
                        className={`h-5 md:h-7 w-auto object-contain transition-all duration-500 ${
                            isCurrentSlideDark ? 'brightness-0 invert opacity-90' : 'mix-blend-multiply opacity-90'
                        }`}
                    />
                </div>
            </header>

            {/* Main Content Area */}
            <main className="flex-1 w-full flex flex-col pt-0">
                {children}
            </main>

            {/* Navigation and Controls */}
            <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 flex gap-3 z-50 items-center pointer-events-none">
                {/* Navigation Arrows */}
                <div className={`pointer-events-auto flex backdrop-blur-md rounded-full shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ${
                    isCurrentSlideDark ? 'bg-white/10 border border-white/20 text-white' : 'bg-white/80 border border-white/50 text-primary'
                }`}>
                    <button
                        onClick={() => navigate('prev')}
                        disabled={currentSlideIndex === 0}
                        className={`p-2 md:p-2.5 transition-colors disabled:opacity-30 disabled:cursor-not-allowed ${
                            isCurrentSlideDark ? 'hover:bg-white/10' : 'hover:bg-secondary/10'
                        }`}
                        aria-label="Slide anterior"
                    >
                        <ChevronLeft size={16} />
                    </button>
                    <div className={`w-px ${isCurrentSlideDark ? 'bg-white/10' : 'bg-primary/5'}`}></div>
                    <button
                        onClick={() => navigate('next')}
                        className={`p-2 md:p-2.5 transition-colors ${
                             isCurrentSlideDark ? 'hover:bg-white/10' : 'hover:bg-secondary/10'
                        }`}
                        aria-label="Próximo slide"
                    >
                        <ChevronRight size={16} />
                    </button>
                </div>

                {/* Scroll to Top Button */}
                <button 
                    onClick={scrollToTop}
                    className={`pointer-events-auto p-2 md:p-2.5 rounded-full backdrop-blur-md shadow-lg transition-all duration-500 ${
                        isCurrentSlideDark 
                        ? 'bg-white/10 border border-white/20 text-white hover:bg-secondary hover:text-white' 
                        : 'bg-white/80 border border-white/50 text-primary hover:bg-secondary hover:text-white'
                    } ${showScrollTop ? 'scale-100 opacity-100 translate-y-0' : 'scale-50 opacity-0 translate-y-10 hidden'}`}
                    aria-label="Voltar ao topo"
                >
                    <ArrowUp size={16} />
                </button>
            </div>

            {/* Background Decorations (Global Ambient) */}
            <div className="fixed top-0 right-0 -mt-20 -mr-20 w-[40vh] h-[40vh] bg-[#C49B66] opacity-5 rounded-full blur-[100px] pointer-events-none z-0" />
            <div className="fixed bottom-0 left-0 -mb-20 -ml-20 w-[30vh] h-[30vh] bg-[#1F3B2E] opacity-10 rounded-full blur-[80px] pointer-events-none z-0" />
        </div>
    );
};

export default Layout;