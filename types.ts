import React from 'react';

export interface HealingCardItem {
  pain: string;
  promise: string;
  reference?: string; // e.g., Bible verse or book concept
  icon: React.ElementType;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface BookChapter {
  title: string;
  description: string;
}

export interface FeaturePoint {
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface AuthorProfile {
  name: string;
  bio: string[];
  signature: string;
  imageUrl: string;
}

export interface AudiencePoint {
  text: string;
}