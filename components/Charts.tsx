import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-white/90 backdrop-blur-xl p-4 border border-white/50 rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] min-w-[180px]">
                <p className="font-serif text-[#0A1F2E] text-lg mb-3 border-b border-[#0A1F2E]/5 pb-2">{label}</p>
                {payload.map((entry: any, index: number) => (
                    <div key={index} className="flex items-center gap-3 py-1.5">
                        <div className="w-2.5 h-2.5 rounded-full ring-2 ring-white" style={{ backgroundColor: entry.color }} />
                        <span className="text-sm font-medium text-[#2C3E50]/80">{entry.name}:</span>
                        <span className="text-sm font-bold text-[#0A1F2E] ml-auto tabular-nums">{entry.value}</span>
                    </div>
                ))}
            </div>
        );
    }
    return null;
};

export const BudgetChart: React.FC<{isDark?: boolean}> = ({ isDark = false }) => {
    const data = [
        { name: 'Fase 1: Teste', amount: 2000 },
        { name: 'Fase 2: Otimização', amount: 3500 },
        { name: 'Fase 3: Escala', amount: 8000 },
    ];
    
    const axisColor = isDark ? '#FFFFFF' : '#2C3E50';

    return (
        <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
                <CartesianGrid strokeDasharray="3 3" stroke={axisColor} strokeOpacity={0.1} vertical={false} />
                <XAxis 
                    dataKey="name" 
                    stroke={axisColor} 
                    tick={{fontFamily: 'Poppins', fontSize: 12, fill: axisColor, opacity: 0.7}} 
                    axisLine={false}
                    tickLine={false}
                    dy={15}
                />
                <YAxis 
                    stroke={axisColor} 
                    tick={{fontFamily: 'Poppins', fontSize: 12, fill: axisColor, opacity: 0.7}} 
                    axisLine={false}
                    tickLine={false}
                    dx={-15}
                />
                <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#C49B66', strokeWidth: 1, strokeDasharray: '4 4' }} />
                <Line 
                    type="monotone" 
                    dataKey="amount" 
                    name="Investimento"
                    stroke="#C49B66" 
                    strokeWidth={3} 
                    dot={{ r: 6, fill: '#FFFFFF', strokeWidth: 3, stroke: '#C49B66' }} 
                    activeDot={{ r: 8, fill: '#0A1F2E', stroke: '#fff', strokeWidth: 3, cursor: 'pointer' }} 
                />
            </LineChart>
        </ResponsiveContainer>
    );
};

export const ProjectionChart: React.FC<{isDark?: boolean}> = ({ isDark = false }) => {
    const data = [
        { month: 'Mês 1', traffic: 1000, sales: 20 },
        { month: 'Mês 2', traffic: 2500, sales: 55 },
        { month: 'Mês 3', traffic: 4000, sales: 120 },
        { month: 'Mês 4', traffic: 6500, sales: 240 },
        { month: 'Mês 5', traffic: 10000, sales: 450 },
    ];
    
    const axisColor = isDark ? '#FFFFFF' : '#2C3E50';
    const gridColor = isDark ? '#FFFFFF' : '#0A1F2E';

    return (
        <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                <defs>
                    <linearGradient id="colorTraffic" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#C49B66" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#C49B66" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#0A1F2E" stopOpacity={0.5}/>
                        <stop offset="95%" stopColor="#0A1F2E" stopOpacity={0}/>
                    </linearGradient>
                </defs>
                <XAxis 
                    dataKey="month" 
                    stroke={axisColor} 
                    tick={{fontFamily: 'Poppins', fontSize: 12, fill: axisColor, opacity: 0.7}} 
                    axisLine={false}
                    tickLine={false}
                    dy={15}
                />
                <YAxis 
                    stroke={axisColor} 
                    tick={{fontFamily: 'Poppins', fontSize: 12, fill: axisColor, opacity: 0.7}} 
                    axisLine={false}
                    tickLine={false}
                    dx={-15}
                />
                <CartesianGrid strokeDasharray="3 3" stroke={gridColor} strokeOpacity={0.1} vertical={false} />
                <Tooltip content={<CustomTooltip />} cursor={{ stroke: gridColor, strokeWidth: 1, strokeDasharray: '4 4' }} />
                <Area 
                    type="monotone" 
                    dataKey="traffic" 
                    stroke="#C49B66" 
                    strokeWidth={3}
                    fillOpacity={1} 
                    fill="url(#colorTraffic)" 
                    name="Tráfego Estimado" 
                    animationDuration={2000}
                    activeDot={{ r: 6, fill: '#C49B66', stroke: '#fff', strokeWidth: 2 }}
                />
                <Area 
                    type="monotone" 
                    dataKey="sales" 
                    stroke={isDark ? '#F5F5F5' : '#0A1F2E'}
                    strokeWidth={3}
                    fillOpacity={1} 
                    fill="url(#colorSales)" 
                    name="Vendas Projetadas" 
                    animationDuration={2500}
                    activeDot={{ r: 6, fill: '#0A1F2E', stroke: '#fff', strokeWidth: 2 }}
                />
            </AreaChart>
        </ResponsiveContainer>
    );
};