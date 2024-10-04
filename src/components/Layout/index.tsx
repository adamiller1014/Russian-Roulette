import { useEffect, PropsWithChildren } from 'react';
import BaseLayout from './BaseLayout';
import MainLayout from './MainLayout';
import { useTheme } from '../../providers/ThemeProvider';

const layoutContainers = {
  base: BaseLayout,
  main: MainLayout
};

interface ILayoutFactory extends PropsWithChildren {
  type: keyof typeof layoutContainers;
}

function Layout({ children, type }: ILayoutFactory) {
  const { onChangeThemeConfig } = useTheme();

  useEffect(() => {
    onChangeThemeConfig('light');
  }, []);

  const Container = layoutContainers[type];

  return <Container>{children}</Container>;
}

export default Layout;
