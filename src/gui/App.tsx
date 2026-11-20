import { useCallback } from 'react';
import { DockviewReact, type DockviewReadyEvent } from 'dockview';
import 'dockview-core/dist/styles/dockview.css';
import { Ribbon } from './Ribbon';
import { StatusBar } from './StatusBar';
import { PropertiesPanel } from './panels/PropertiesPanel';
import { TaskTreePanel } from './panels/TaskTreePanel';
import { ViewportPanel } from './panels/ViewportPanel';

// Компоненты-панели, доступные докинг-менеджеру.
const components = {
  taskTree: TaskTreePanel,
  viewport: ViewportPanel,
  properties: PropertiesPanel,
};

export default function App() {
  // Стартовая раскладка «как в настольных программах»:
  // слева — дерево задачи, в центре — вид модели, снизу справа — свойства.
  const onReady = useCallback((event: DockviewReadyEvent) => {
    event.api.addPanel({ id: 'tree', component: 'taskTree', title: 'Дерево задачи' });
    event.api.addPanel({
      id: 'viewport',
      component: 'viewport',
      title: 'Вид',
      position: { referencePanel: 'tree', direction: 'right' },
    });
    event.api.addPanel({
      id: 'props',
      component: 'properties',
      title: 'Свойства',
      position: { referencePanel: 'viewport', direction: 'below' },
    });
  }, []);

  return (
    <div className="app">
      <Ribbon />
      <div className="workspace">
        <DockviewReact
          components={components}
          onReady={onReady}
          className="dockview-theme-light dv-host"
        />
      </div>
      <StatusBar />
    </div>
  );
}
