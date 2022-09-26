import { ThemeContent, ThemeHeader } from 'components/theme';

import './style.scss';

export const ThemeContainer = () => (
  <div className="container-theme">
    <ThemeHeader />
    <ThemeContent />
  </div>
);
