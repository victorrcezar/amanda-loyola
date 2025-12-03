import React from 'react';
import { Heart, BookOpen, Users, Target, Zap, TrendingUp, ShoppingBag, Award, User, Check, Rocket, BarChart3, Layout, PieChart, Handshake, Coins, MessageCircle } from 'lucide-react';
import { ProjectionChart } from './Charts';
import FadeIn from './FadeIn';

interface SlideFactoryProps {
    index: number;
    isDark?: boolean;
}

const SlideFactory: React.FC<SlideFactoryProps> = ({ index, isDark = false }) => {
    
    // Helper classes for theme switching
    const textPrimary = isDark ? 'text-white' : 'text-[#0A1F2E]';
    const textSecondary = isDark ? 'text-[#C49B66]' : 'text-[#C49B66]'; // Gold stays Gold
    const textNeutral = isDark ? 'text-white/70' : 'text-[#2C3E50]';
    const cardBg = isDark ? 'bg-white/5 backdrop-blur-lg border-white/10' : 'bg-white border-[#0A1F2E]/5';
    const cardBorderHover = isDark ? 'hover:border-[#C49B66]/40' : 'hover:border-[#C49B66]/20';
    const iconBg = isDark ? 'bg-white/10' : 'bg-[#0A1F2E]/5';
    
    // --- Slide 1: Capa (Dark) ---
    if (index === 0) {
        return (
            <div className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 py-24 md:py-32">
                <div className="flex-1 space-y-8 text-center md:text-left order-2 md:order-1 px-4 max-w-xl">
                    <FadeIn delay={200}>
                        <div className={`inline-block px-4 py-1.5 border ${isDark ? 'border-white/20 bg-white/10' : 'border-[#C49B66]/30 bg-white/40'} ${textSecondary} text-[10px] tracking-[0.2em] uppercase mb-4 font-medium rounded-full backdrop-blur-sm`}>
                            Apresentação Estratégica • UP! Company
                        </div>
                    </FadeIn>
                    <FadeIn delay={400}>
                        <h1 className={`text-4xl md:text-5xl lg:text-6xl font-serif ${textPrimary} leading-tight`}>
                            Crescendo com a <br/>
                            <span className={`${textSecondary} italic font-light`}>Falta de Paternidade</span>
                        </h1>
                    </FadeIn>
                    <FadeIn delay={600}>
                        <p className={`text-base md:text-lg ${textNeutral} font-light max-w-lg mx-auto md:mx-0 leading-loose`}>
                            Mais do que uma estratégia de vendas, uma missão: ampliar sua voz para alcançar aqueles que carregam uma história marcada por ausências.
                        </p>
                    </FadeIn>
                    <FadeIn delay={800}>
                        <div className={`pt-8 border-t ${isDark ? 'border-white/10' : 'border-[#C49B66]/10'} inline-block w-full max-w-md`}>
                            <p className={`text-[10px] font-medium ${isDark ? 'text-white/40' : 'text-[#2C3E50]/60'} uppercase tracking-widest`}>
                                "Transformando feridas em caminhos de cura"
                            </p>
                        </div>
                    </FadeIn>
                </div>
                <div className="flex-1 flex justify-center items-center order-1 md:order-2 px-4 w-full">
                    <FadeIn direction="left" delay={300} className="relative w-full flex items-center justify-center p-4">
                        <div className={`absolute inset-0 ${isDark ? 'bg-[#C49B66]/10' : 'bg-[#C49B66]/5'} rounded-full blur-3xl transform scale-75`}></div>
                        <img 
                            src="https://static.wixstatic.com/media/1f17f3_c31dfcd1f5ea46c9b5f8c052fa06a352~mv2.png" 
                            alt="Crescendo com a Falta de Paternidade" 
                            className="relative z-10 w-full h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500 max-h-[65vh] md:max-h-[70vh] object-contain"
                        />
                    </FadeIn>
                </div>
            </div>
        );
    }

    // --- Slide 2: Objetivo (Light) ---
    if (index === 1) {
        return (
            <div className="min-h-screen flex flex-col justify-center py-24 relative">
                <div className="max-w-4xl mb-20 mx-auto w-full px-4">
                    <FadeIn>
                        <h2 className={`text-4xl md:text-6xl font-serif ${textPrimary} mb-8 border-l-4 border-[#C49B66] pl-8`}>
                            Objetivo: Escala e Resultado
                        </h2>
                    </FadeIn>
                    <FadeIn delay={200}>
                        <p className={`text-xl md:text-2xl ${textNeutral} pl-8 max-w-3xl leading-loose font-light`}>
                            Nosso compromisso é unir estratégia e sensibilidade para que sua mensagem chegue a quem precisa ouvir, transformando números em vidas restauradas.
                        </p>
                    </FadeIn>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-0">
                    {[
                        { title: "Alcance com Propósito", icon: <Target className={`w-8 h-8 ${textSecondary}`} />, desc: "Identificar no digital quem está em busca de preencher esse vazio emocional." },
                        { title: "Conexão Real", icon: <Heart className={`w-8 h-8 ${textSecondary}`} />, desc: "Criar campanhas que respeitam a dor e oferecem o livro como um abraço de cura." },
                        { title: "Impacto em Escala", icon: <TrendingUp className={`w-8 h-8 ${textSecondary}`} />, desc: "Ampliar a mensagem de restauração para milhares de lares e famílias." }
                    ].map((item, i) => (
                        <FadeIn key={i} delay={400 + (i * 150)} className="h-full">
                            <div className={`${cardBg} p-10 rounded-xl shadow-sm border hover:border-[#C49B66]/20 transition-all group h-full`}>
                                <div className={`mb-6 transform group-hover:-translate-y-1 transition-transform duration-300 ${iconBg} w-14 h-14 rounded-full flex items-center justify-center`}>{item.icon}</div>
                                <h3 className={`text-xl font-serif mb-4 ${textPrimary} font-medium`}>{item.title}</h3>
                                <p className={`${textNeutral} leading-loose text-base font-light`}>{item.desc}</p>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        );
    }

    // --- Slide 3: O Livro (Dark) ---
    if (index === 2) {
        return (
            <div className="min-h-screen flex flex-col md:flex-row gap-20 items-center justify-center py-24 px-4">
                <div className="flex-1 flex justify-center">
                    <FadeIn direction="right">
                        <img 
                            src="https://static.wixstatic.com/media/1f17f3_c31dfcd1f5ea46c9b5f8c052fa06a352~mv2.png" 
                            alt="Book Presentation" 
                            className="rounded-lg drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] object-contain max-h-[500px] w-auto hover:rotate-1 transition-transform duration-500" 
                        />
                    </FadeIn>
                </div>
                <div className="flex-1 space-y-10">
                    <FadeIn delay={200}>
                        <h2 className={`text-5xl font-serif ${textPrimary}`}>Sobre o Livro</h2>
                    </FadeIn>
                    <FadeIn delay={400}>
                        <p className={`text-xl leading-loose ${textNeutral} font-light`}>
                            Este livro não fala apenas sobre a falta, mas sobre reencontro, propósito e restauração. É um convite sensível para olhar de frente para essa dor silenciosa.
                        </p>
                    </FadeIn>
                    <ul className="space-y-6 mt-10">
                        {[
                            "Enfrentando feridas deixadas pela ausência",
                            "Um caminho de cura e descoberta da identidade",
                            "Para quem busca reencontrar o Pai e a si mesmo"
                        ].map((item, i) => (
                            <FadeIn key={i} delay={600 + (i * 100)}>
                                <li className="flex items-center gap-4">
                                    <div className={`w-2 h-2 rounded-full bg-[#C49B66] flex-shrink-0`} />
                                    <span className={`font-light ${textPrimary} text-lg`}>{item}</span>
                                </li>
                            </FadeIn>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }

    // --- Slide 4: A Autora (Light) ---
    if (index === 3) {
        return (
            <div className="min-h-screen flex flex-col justify-center items-center py-24 px-4">
                <FadeIn className="w-full flex justify-center">
                    <div className={`${cardBg} p-10 md:p-14 rounded-2xl shadow-xl max-w-5xl w-full flex flex-col md:flex-row gap-12 items-center border-t-4 border-[#C49B66]/50`}>
                        <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-[#F5F5F5] flex-shrink-0 shadow-lg relative group">
                            <img 
                                src="https://static.wixstatic.com/media/1f17f3_45945e5111184dec9043cc122480ef92~mv2.webp" 
                                alt="Amanda Loyola" 
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                            />
                        </div>
                        <div className="text-center md:text-left flex-1 space-y-6">
                            <div>
                                <h2 className={`text-4xl md:text-5xl font-serif ${textPrimary} mb-2`}>Amanda Loyola</h2>
                                <p className={`${textSecondary} font-semibold tracking-widest text-xs uppercase`}>Autora e Psicanalista</p>
                            </div>
                            <p className={`${textNeutral} leading-loose mb-6 text-lg font-light`}>
                                Com uma coragem admirável, Amanda não apenas ensina, mas compartilha sua própria jornada de cura. Ela revela um lado de sua história nunca antes mostrado, validando a dor de quem a lê e oferecendo esperança real.
                            </p>
                            <div className={`inline-flex items-center gap-3 text-base font-medium px-6 py-3 rounded-full ${textPrimary} border ${isDark ? 'border-white/20 bg-white/5' : 'border-[#0A1F2E]/5 bg-[#F5F5F5]'} shadow-sm`}>
                                <Heart size={16} className="text-[#C49B66] fill-[#C49B66]" />
                                <span>Missão: Curar a orfandade</span>
                            </div>
                        </div>
                    </div>
                </FadeIn>
            </div>
        );
    }

    // --- Slide 5: Pontos Fortes (Dark) ---
    if (index === 4) {
        return (
            <div className="min-h-screen flex flex-col justify-center py-24">
                <FadeIn>
                    <h2 className={`text-4xl md:text-5xl font-serif ${textPrimary} text-center mb-16`}>Por que este livro conecta?</h2>
                </FadeIn>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-4 max-w-7xl mx-auto">
                    {[
                        { icon: <BookOpen className="w-8 h-8" />, title: "Verdade", sub: "Uma narrativa honesta sobre dores reais" },
                        { icon: <Users className="w-8 h-8" />, title: "Acolhimento", sub: "Para quem se sente só em sua história" },
                        { icon: <Heart className="w-8 h-8" />, title: "Cura", sub: "Trata o 'nó na garganta' da orfandade" },
                        { icon: <Zap className="w-8 h-8" />, title: "Identidade", sub: "Resgate de quem somos em Deus" },
                    ].map((card, i) => (
                        <FadeIn key={i} delay={200 + (i * 100)} className="h-full">
                            <div className={`flex flex-col items-center text-center p-8 ${cardBg} border ${isDark ? 'border-white/5' : 'border-transparent'} rounded-xl hover:-translate-y-2 transition-transform duration-300 ${cardBorderHover} h-full`}>
                                <div className={`p-4 ${iconBg} rounded-full ${textSecondary} mb-6`}>
                                    {card.icon}
                                </div>
                                <h3 className={`font-serif text-xl font-bold mb-3 ${textPrimary}`}>{card.title}</h3>
                                <p className={`text-base ${textNeutral} leading-loose font-light`}>{card.sub}</p>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        );
    }

    // --- Slide 6: Persona 1 (Light) ---
    if (index === 5) {
        return (
            <div className="min-h-screen flex items-center justify-center py-24 px-4">
                 <FadeIn className="w-full flex justify-center">
                    <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-xl overflow-hidden max-w-6xl w-full md:min-h-[600px]">
                        <div className="md:w-1/2 relative min-h-[400px]">
                            <img src="https://static.wixstatic.com/media/1f17f3_fe6f1ed1cc6c48d8a0acac9092e7caeb~mv2.png" alt="Persona" className="absolute inset-0 w-full h-full object-cover opacity-90" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F2E]/90 via-[#0A1F2E]/40 to-transparent flex flex-col justify-end p-10 md:p-12">
                                <span className="text-[#C49B66] font-bold tracking-[0.2em] text-xs uppercase mb-3">Persona Principal</span>
                                <h2 className="text-white font-serif text-4xl md:text-5xl leading-tight">Em busca de <br/>Reencontro</h2>
                            </div>
                        </div>
                        <div className="md:w-1/2 p-10 md:p-14 flex flex-col justify-center space-y-10">
                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-xs font-bold text-[#C49B66] uppercase tracking-[0.2em] mb-2">Quem ela é</h3>
                                    <p className="text-3xl font-serif text-[#0A1F2E]">Mulheres que buscam restaurar sua identidade</p>
                                </div>
                                <div>
                                    <h3 className="text-xs font-bold text-[#C49B66] uppercase tracking-[0.2em] mb-3">O que busca</h3>
                                    <div className="flex flex-wrap gap-3">
                                        {['Paz Interior', 'Entendimento', 'Perdão', 'Paternidade de Deus', 'Cura'].map(tag => (
                                            <span key={tag} className="px-4 py-1.5 bg-[#F5F5F5] text-[#0A1F2E] text-sm rounded-full border border-[#0A1F2E]/5">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xs font-bold text-[#C49B66] uppercase tracking-[0.2em] mb-3">A Dor Profunda</h3>
                                    <p className="text-[#2C3E50] italic border-l-2 border-[#C49B66] pl-6 text-lg leading-loose py-1 font-light">
                                        "Para aquelas que sentem um nó na garganta quando tentam chamar Deus de Pai, e desejam ressignificar essa história familiar marcada por ausências."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                 </FadeIn>
            </div>
        );
    }

    // --- Slide 7: Persona 2 (Dark) ---
    if (index === 6) {
        return (
            <div className="min-h-screen flex flex-col justify-center py-24">
                <FadeIn>
                    <h2 className={`text-4xl font-serif ${textPrimary} mb-16 pl-6 border-l-4 border-[#C49B66] max-w-5xl mx-auto w-full`}>Quem caminha junto</h2>
                </FadeIn>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto w-full px-4">
                    {[
                        { icon: <User className="w-10 h-10" />, title: "Conselheiros", desc: "Líderes que lidam diariamente com a orfandade espiritual e precisam de ferramentas para ajudar." },
                        { icon: <Target className="w-10 h-10" />, title: "A Nova Geração", desc: "Jovens que desejam quebrar ciclos familiares e construir um futuro livre de feridas antigas." },
                        { icon: <Award className="w-10 h-10" />, title: "Intercessores", desc: "Amigos e familiares que veem a dor do outro e usam o livro como um gesto de amor e cuidado." },
                    ].map((card, i) => (
                        <FadeIn key={i} delay={200 + (i * 150)} className="h-full">
                            <div className={`${cardBg} p-10 rounded-xl border ${isDark ? 'border-white/10' : 'border-[#0A1F2E]/5'} ${cardBorderHover} transition-all group shadow-sm flex flex-col gap-5 h-full`}>
                                <div className={`mb-2 ${textNeutral} group-hover:text-[#C49B66] transition-colors`}>{card.icon}</div>
                                <h3 className={`text-2xl font-bold font-serif ${textPrimary}`}>{card.title}</h3>
                                <p className={`${textNeutral} text-base leading-loose font-light`}>{card.desc}</p>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        );
    }

    // --- Slide 8: Método UP! (Light) ---
    if (index === 7) {
        return (
            <div className="min-h-screen flex flex-col justify-center py-24">
                <FadeIn className="text-center mb-20">
                    <span className={`${textSecondary} font-bold tracking-[0.2em] uppercase text-xs`}>Nossa Metodologia</span>
                    <h2 className={`text-5xl font-serif ${textPrimary} mt-4`}>Método UP!</h2>
                </FadeIn>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative max-w-7xl mx-auto px-6">
                    <div className={`hidden md:block absolute top-12 left-0 w-full border-t border-dashed ${isDark ? 'border-white/10' : 'border-[#0A1F2E]/10'} z-0`}></div>
                    
                    {[
                        { 
                            step: "1", 
                            title: "Sensibilidade", 
                            icon: <Layout className="w-6 h-6" />,
                            desc: "Analisamos cada detalhe para que a comunicação seja respeitosa e toque o coração de quem precisa."
                        },
                        { 
                            step: "2", 
                            title: "Conexão", 
                            icon: <Rocket className="w-6 h-6" />,
                            desc: "Usamos a tecnologia para encontrar pessoas que estão vivendo esse momento de busca e dor."
                        },
                        { 
                            step: "3", 
                            title: "Propósito", 
                            icon: <BarChart3 className="w-6 h-6" />,
                            desc: "Acompanhamos os resultados sabendo que cada métrica representa uma oportunidade de transformação."
                        }
                    ].map((item, i) => (
                        <FadeIn key={i} delay={300 + (i * 200)} className="relative z-10 flex flex-col h-full">
                            <div className="flex flex-col h-full items-center md:items-start text-center md:text-left">
                                <div className={`w-12 h-12 flex items-center justify-center font-bold text-lg font-serif ${textSecondary} border border-[#C49B66] rounded-full mb-8 shadow-sm relative z-20 ${isDark ? 'bg-[#0A1F2E]' : 'bg-white'}`}>
                                    {item.step}
                                </div>
                                <div className={`${cardBg} p-10 rounded-xl shadow-sm border ${isDark ? 'border-white/5' : 'border-[#0A1F2E]/5'} flex-1 hover:-translate-y-2 transition-transform duration-300 w-full`}>
                                    <div className={`${textPrimary} mb-6 flex justify-center md:justify-start`}>{item.icon}</div>
                                    <h3 className={`text-xl font-bold font-serif ${textPrimary} mb-4`}>{item.title}</h3>
                                    <p className={`${textNeutral} leading-loose text-base font-light`}>
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        );
    }

    // --- Slide 9: Conversão (Dark) ---
    if (index === 8) {
        return (
            <div className="min-h-screen flex flex-col justify-center py-24 px-4">
                <FadeIn className="flex items-center gap-5 mb-16 max-w-6xl mx-auto w-full">
                    <div className={`p-4 ${isDark ? 'bg-white/10' : 'bg-[#C49B66]/10'} rounded-xl ${textSecondary}`}><ShoppingBag size={32}/></div>
                    <h2 className={`text-4xl md:text-5xl font-serif ${textPrimary}`}>Campanha de Conversão</h2>
                </FadeIn>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto w-full">
                    <FadeIn delay={200} className={`${cardBg} p-10 rounded-2xl shadow-sm space-y-8`}>
                        <h3 className={`text-2xl font-bold border-b ${isDark ? 'border-white/10' : 'border-[#0A1F2E]/5'} pb-4 ${textPrimary}`}>A Ponte para a Cura</h3>
                        <div className="space-y-6">
                            <div className={`flex justify-between items-center border-b border-dashed ${isDark ? 'border-white/10' : 'border-[#0A1F2E]/5'} pb-2`}>
                                <span className={`${textNeutral} text-lg font-light`}>Objetivo</span>
                                <span className={`font-semibold ${textPrimary} text-lg`}>Levar o livro até as mãos certas</span>
                            </div>
                            <div className={`flex justify-between items-center border-b border-dashed ${isDark ? 'border-white/10' : 'border-[#0A1F2E]/5'} pb-2`}>
                                <span className={`${textNeutral} text-lg font-light`}>Destino</span>
                                <span className={`font-semibold ${textPrimary} text-lg`}>Página de Vendas Acolhedora</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className={`${textNeutral} text-lg font-light`}>Foco</span>
                                <span className={`font-semibold ${textPrimary} text-lg`}>60% da Energia</span>
                            </div>
                        </div>
                    </FadeIn>
                    
                    <div className="space-y-8">
                        <FadeIn delay={400} className={`${cardBg} border-l-4 border-[#C49B66] p-8 shadow-sm rounded-r-xl`}>
                            <h4 className={`font-bold mb-3 text-xl ${textPrimary} font-serif`}>Quem queremos alcançar</h4>
                            <p className={`text-base ${textNeutral} leading-loose font-light`}>Pessoas interessadas em cura interior, paternidade, espiritualidade e superação de traumas familiares.</p>
                        </FadeIn>
                        <FadeIn delay={600} className={`${cardBg} border-l-4 ${isDark ? 'border-white' : 'border-[#0A1F2E]'} p-8 shadow-sm rounded-r-xl`}>
                            <h4 className={`font-bold mb-3 text-xl ${textPrimary} font-serif`}>A Mensagem Visual</h4>
                            <p className={`text-base ${textNeutral} leading-loose font-light`}>Usaremos imagens que transmitam paz, o livro sendo lido em momentos de reflexão e a autora conectando com o olhar.</p>
                        </FadeIn>
                    </div>
                </div>
            </div>
        );
    }

    // --- Slide 10: Engajamento (Light) ---
    if (index === 9) {
        return (
            <div className="min-h-screen flex flex-col justify-center py-24 px-4">
                <FadeIn className="flex items-center gap-5 mb-16 max-w-6xl mx-auto w-full">
                    <div className={`p-4 ${isDark ? 'bg-white/10' : 'bg-[#C49B66]/10'} rounded-xl ${textSecondary}`}><Heart size={32}/></div>
                    <h2 className={`text-4xl md:text-5xl font-serif ${textPrimary}`}>Campanha de Engajamento</h2>
                </FadeIn>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto w-full">
                    <FadeIn delay={200} className={`md:col-span-2 ${cardBg} p-10 rounded-2xl shadow-sm`}>
                        <h3 className={`text-2xl font-bold mb-6 font-serif ${textPrimary}`}>Compartilhando Vulnerabilidade</h3>
                        <p className={`${textNeutral} mb-10 leading-loose text-lg font-light`}>
                            Antes de oferecer o livro, ofereceremos empatia. "Aqui eu compartilho minha própria jornada". Vamos usar trechos narrados pela autora para gerar identificação imediata.
                        </p>
                        <div className="grid grid-cols-2 gap-6">
                            <div className={`${isDark ? 'bg-white/5 border-white/10' : 'bg-[#F5F5F5] border-[#0A1F2E]/5'} p-6 rounded-xl text-center border`}>
                                <span className={`block font-bold ${textSecondary} text-3xl mb-2`}>Alcance</span>
                                <span className={`text-xs ${textNeutral} opacity-70 uppercase tracking-widest font-semibold`}>Espalhar a mensagem</span>
                            </div>
                            <div className={`${isDark ? 'bg-white/5 border-white/10' : 'bg-[#F5F5F5] border-[#0A1F2E]/5'} p-6 rounded-xl text-center border`}>
                                <span className={`block font-bold ${textPrimary} text-3xl mb-2`}>Conexão</span>
                                <span className={`text-xs ${textNeutral} opacity-70 uppercase tracking-widest font-semibold`}>Tocar Corações</span>
                            </div>
                        </div>
                    </FadeIn>
                    <FadeIn delay={400} className="bg-[#0A1F2E] text-white p-10 rounded-2xl flex flex-col justify-center items-center text-center shadow-lg relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#C49B66]/10 rounded-full -mr-10 -mt-10 blur-2xl"></div>
                        <MessageCircle size={48} className="mb-6 opacity-80 text-[#C49B66]" />
                        <p className="italic font-serif text-xl text-white/90 leading-loose font-light">"Para quem sente um nó na garganta quando tenta chamar Deus de Pai..."</p>
                    </FadeIn>
                </div>
            </div>
        );
    }

    // --- Slide 11: Remarketing (Dark) ---
    if (index === 10) {
        return (
            <div className="min-h-screen flex flex-col justify-center py-24 px-4">
                <FadeIn className="flex items-center gap-5 mb-16 max-w-5xl mx-auto w-full">
                    <div className={`p-4 ${isDark ? 'bg-white/10' : 'bg-[#C49B66]/10'} rounded-xl ${textSecondary}`}><Zap size={32}/></div>
                    <h2 className={`text-4xl md:text-5xl font-serif ${textPrimary}`}>O Convite Final</h2>
                </FadeIn>

                <div className="space-y-6 max-w-5xl mx-auto w-full">
                    {[
                        { days: "Momento 1", aud: "Visitou a Página", action: "Lembrete gentil: 'Essa história também pode ser a sua'." },
                        { days: "Momento 2", aud: "Quase comprou", action: "Incentivo: 'Não deixe sua jornada de cura para depois'." },
                        { days: "Momento 3", aud: "Se envolveu com o tema", action: "Prova Social: 'Veja como outras vidas foram transformadas'." }
                    ].map((row, i) => (
                        <FadeIn key={i} delay={200 + (i * 150)}>
                            <div className={`flex flex-col md:flex-row items-start md:items-center ${cardBg} p-8 rounded-xl shadow-sm border-l-4 border-[#C49B66] hover:translate-x-2 transition-transform gap-6 md:gap-0 group`}>
                                <div className={`w-full md:w-32 font-bold ${textSecondary} text-xl`}>{row.days}</div>
                                <div className={`flex-1 md:px-6 md:border-l ${isDark ? 'border-white/10' : 'border-[#0A1F2E]/5'}`}>
                                    <div className={`text-[10px] ${textNeutral} opacity-50 uppercase tracking-widest font-bold mb-1`}>Quem é</div>
                                    <div className={`font-medium ${textPrimary} text-lg leading-loose`}>{row.aud}</div>
                                </div>
                                <div className={`flex-1 md:px-6 md:border-l ${isDark ? 'border-white/10' : 'border-[#0A1F2E]/5'}`}>
                                    <div className={`text-[10px] ${textNeutral} opacity-50 uppercase tracking-widest font-bold mb-1`}>Nossa Mensagem</div>
                                    <div className={`font-serif italic ${textPrimary} opacity-80 group-hover:text-[#C49B66] transition-colors text-lg leading-loose`}>{row.action}</div>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        );
    }

    // --- Slide 12: Planejamento (Light) ---
    if (index === 11) {
        return (
            <div className="min-h-screen flex flex-col justify-center py-24 px-4">
                <FadeIn>
                    <h2 className={`text-4xl md:text-5xl font-serif ${textPrimary} mb-20 text-center`}>Planejamento do Projeto</h2>
                </FadeIn>
                
                <div className="space-y-8 max-w-6xl mx-auto w-full">
                    {[
                        { 
                            etapa: "Etapa 1", 
                            title: "Preparando o Caminho", 
                            time: "Fase Inicial",
                            items: ["Entender profundamente o público", "Configurar ferramentas de análise", "Preparar o terreno digital"]
                        },
                        { 
                            etapa: "Etapa 2", 
                            title: "Iniciando a Jornada", 
                            time: "Configuração",
                            items: ["Criar anúncios com a sua voz", "Definir investimento inicial", "Testar as mensagens mais tocantes"]
                        },
                        { 
                            etapa: "Etapa 3", 
                            title: "Alcançando Vidas", 
                            time: "Execução Contínua",
                            items: ["Levar o livro a quem precisa", "Monitorar cada passo", "Expandir a mensagem de esperança"]
                        }
                    ].map((phase, i) => (
                        <FadeIn key={i} delay={200 + (i * 150)}>
                            <div className={`flex flex-col md:flex-row gap-8 ${cardBg} p-8 md:p-10 rounded-2xl shadow-sm border ${isDark ? 'border-white/10' : 'border-[#0A1F2E]/5'}`}>
                                <div className={`md:w-60 flex flex-col justify-center border-b md:border-b-0 md:border-r ${isDark ? 'border-white/10' : 'border-[#0A1F2E]/5'} pb-6 md:pb-0 md:pr-8`}>
                                    <span className={`text-xs font-bold ${textSecondary} uppercase tracking-[0.2em]`}>{phase.etapa}</span>
                                    <h3 className={`text-2xl font-serif ${textPrimary} mt-2`}>{phase.title}</h3>
                                    <span className={`text-sm ${textNeutral} mt-4 flex items-center gap-2`}><PieChart size={16}/> {phase.time}</span>
                                </div>
                                <div className="flex-1 flex flex-col justify-center">
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {phase.items.map((item, idx) => (
                                            <li key={idx} className={`flex items-start gap-3 text-base ${textNeutral} leading-loose font-light`}>
                                                <Check size={18} className={`${textSecondary} mt-1.5 flex-shrink-0`} />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        );
    }

    // --- Slide 13: Parceria (Dark) ---
    if (index === 12) {
        return (
            <div className="min-h-screen flex flex-col justify-center py-24 px-4">
                <FadeIn className="text-center mb-20">
                    <h2 className={`text-4xl md:text-5xl font-serif ${textPrimary}`}>Modelo de Parceria</h2>
                    <p className={`${textNeutral} mt-4 text-lg font-light`}>Cuidando do seu projeto com responsabilidade</p>
                </FadeIn>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto w-full items-stretch">
                    {/* UP! Company Side */}
                    <FadeIn delay={200} className="h-full">
                        <div className="bg-[#0A1F2E] text-white rounded-2xl p-10 shadow-xl flex flex-col border border-[#C49B66]/20 relative overflow-hidden h-full">
                            <div className="absolute top-0 left-0 w-40 h-40 bg-[#C49B66]/10 rounded-full blur-3xl -ml-12 -mt-12"></div>
                            <div className="mb-8 relative z-10">
                                <h3 className="text-2xl font-bold flex items-center gap-3 text-[#C49B66]">
                                    <Handshake size={28} className="text-[#C49B66]"/> Gestão e Cuidado
                                </h3>
                                <p className="text-sm text-white/70 mt-3 uppercase tracking-wider font-semibold">Investimento da Autora: R$ 0,00</p>
                                <p className="text-sm text-white/50 mt-1 font-light">Parceria Estratégica</p>
                            </div>
                            
                            <div className="flex-1 border-t border-white/10 pt-8">
                                <p className="text-lg text-white/90 mb-8 font-serif italic leading-loose font-light">"Nós cuidaremos de toda a estratégia técnica com a mesma reverência e seriedade que você dedicou ao escrever sua história."</p>
                                <ul className="space-y-4">
                                    {["Configuração Profissional", "Criação de Campanhas Sensíveis", "Acompanhamento Diário", "Transparência Total"].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-base text-white/80 font-light">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#C49B66]"></div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Client Side (Media Budget) */}
                    <FadeIn delay={400} className="h-full">
                        <div className={`${cardBg} rounded-2xl p-10 shadow-sm border ${isDark ? 'border-white/10' : 'border-[#0A1F2E]/5'} flex flex-col h-full`}>
                            <div className="mb-8">
                                <h3 className={`text-2xl font-bold ${textPrimary} flex items-center gap-3`}>
                                    <Coins size={28} className={textPrimary}/> Recursos de Mídia
                                </h3>
                                <p className={`text-sm ${textNeutral} mt-3 uppercase tracking-wider font-semibold`}>Combustível para a Mensagem</p>
                                <p className={`text-sm ${textNeutral} opacity-60 mt-1 font-light`}>Investimento direto nas plataformas</p>
                            </div>

                            <div className={`flex-1 border-t ${isDark ? 'border-white/10' : 'border-[#0A1F2E]/5'} pt-8 flex flex-col justify-between`}>
                                <div>
                                    <p className={`${textNeutral} text-base mb-8 leading-loose font-light`}>Para que essa mensagem de cura alcance os lares, precisamos impulsioná-la nas ferramentas certas.</p>
                                    <ul className="space-y-4 mb-8">
                                        <li className={`flex items-start gap-3 text-base ${textNeutral} font-light`}>
                                            <Check size={20} className={`${textSecondary} mt-1`} />
                                            <span>Orçamento para propagar a mensagem</span>
                                        </li>
                                        <li className={`flex items-start gap-3 text-base ${textNeutral} font-light`}>
                                            <Check size={20} className={`${textSecondary} mt-1`} />
                                            <span>Seus vídeos e fotos (Sua voz)</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className={`${isDark ? 'bg-white/5 border-white/10' : 'bg-[#F5F5F5] border-[#0A1F2E]/5'} p-6 rounded-xl text-center border`}>
                                    <span className={`block font-bold ${textPrimary} text-base mb-1`}>Valor do Investimento</span>
                                    <span className={`text-sm ${textNeutral} font-light`}>Definiremos juntos o alcance desejado</span>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        );
    }

    // --- Slide 14: Projeção (Light) ---
    if (index === 13) {
        return (
            <div className="min-h-screen flex flex-col justify-center py-24 px-4">
                <FadeIn>
                    <h2 className={`text-4xl md:text-5xl font-serif ${textPrimary} mb-6 text-center md:text-left`}>Impacto Projetado</h2>
                    <p className={`${textNeutral} mb-12 max-w-4xl leading-loose text-lg font-light text-center md:text-left`}>
                        Mais do que gráficos de vendas, visualizamos vidas sendo tocadas. Cada número aqui representa uma pessoa iniciando sua jornada de restauração.
                    </p>
                </FadeIn>
                
                <FadeIn delay={200} className={`flex-1 ${cardBg} p-6 md:p-8 rounded-2xl shadow-sm border ${isDark ? 'border-white/10' : 'border-[#0A1F2E]/5'} w-full min-h-[350px]`}>
                     <ProjectionChart isDark={isDark} />
                </FadeIn>
                
                <div className="mt-10 mb-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <FadeIn delay={400}>
                        <div className={`text-4xl font-serif ${textSecondary} font-bold`}>+ Vidas</div>
                        <div className={`text-xs uppercase ${textNeutral} mt-2 tracking-widest font-medium`}>Alcançadas Mensalmente</div>
                    </FadeIn>
                    <FadeIn delay={500}>
                        <div className={`text-4xl font-serif ${textPrimary} font-bold`}>Crescimento</div>
                        <div className={`text-xs uppercase ${textNeutral} mt-2 tracking-widest font-medium`}>Sustentável e Real</div>
                    </FadeIn>
                    <FadeIn delay={600}>
                        <div className={`text-4xl font-serif ${textSecondary} font-bold`}>Autoridade</div>
                        <div className={`text-xs uppercase ${textNeutral} mt-2 tracking-widest font-medium`}>Consolidada na Missão</div>
                    </FadeIn>
                </div>

                <FadeIn delay={800} className={`text-center mt-12 max-w-3xl mx-auto border-t ${isDark ? 'border-white/10' : 'border-[#0A1F2E]/5'} pt-8`}>
                     <p className={`text-xl md:text-2xl font-serif ${textPrimary} italic leading-relaxed`}>
                        "Estamos prontos para caminhar ao seu lado, unindo nossa técnica ao seu propósito, para que nenhuma história de ausência fique sem resposta."
                     </p>
                </FadeIn>
            </div>
        );
    }

    // --- Slide 15: Encerramento (Dark/Transparent) ---
    if (index === 14) {
        return (
            <div className="w-full flex justify-center items-center py-12 px-4 relative bg-transparent">
                <FadeIn className="relative z-10 flex justify-center">
                    <img 
                        src="https://static.wixstatic.com/media/1f17f3_faf8f8e2f6fc4776b301d807c7ff80e6~mv2.png" 
                        alt="UP! Company" 
                        className={`h-6 md:h-8 w-auto object-contain ${isDark ? 'brightness-0 invert opacity-90' : ''}`}
                    />
                </FadeIn>
            </div>
        );
    }

    return null;
};

export default SlideFactory;