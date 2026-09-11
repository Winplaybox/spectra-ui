import React from 'react';
import { ComponentDocPage } from './ComponentDocPage';

interface ComponentsSectionProps {
  componentId?: string;
}

export const ComponentsSection: React.FC<ComponentsSectionProps> = ({ componentId = 'button' }) => {
  return <ComponentDocPage componentId={componentId} />;
};
