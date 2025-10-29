import { useTheme } from '../../../shared/lib/theme/useTheme';
import { Button } from '../../../shared/ui/Button/Button';

export const ThemeSwitcher = () => {
  const { theme, toggle } = useTheme();

  return (
    <Button onClick={toggle}>
      Сменить тему (сейчас {theme})
    </Button>
  );
};
