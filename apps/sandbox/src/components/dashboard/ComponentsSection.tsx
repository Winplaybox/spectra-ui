import React from 'react';
import { ComponentDocPage } from './ComponentDocPage';
import { AllComponentsPage } from './AllComponentsPage';

interface ComponentsSectionProps {
  componentId?: string;
}

export const ComponentsSection: React.FC<ComponentsSectionProps> = ({ componentId = 'all-components' }) => {
  if (componentId === 'all-components' || componentId === 'all') {
    return <AllComponentsPage />;
  }

  return <ComponentDocPage componentId={componentId} />;
};
