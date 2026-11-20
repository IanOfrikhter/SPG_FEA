import { useState } from 'react';

interface RibbonCommand {
  label: string;
  hint: string;
}

interface RibbonGroup {
  title: string;
  commands: RibbonCommand[];
}

interface RibbonTab {
  name: string;
  groups: RibbonGroup[];
}

// Структура ленты повторяет логику GEO5/SIO2D: этапы работы над задачей слева направо
// (геометрия → материалы → сетка → нагрузки → стадии → расчёт → результаты).
// Пока все команды-заглушки: включаются по мере реализации.
const TABS: RibbonTab[] = [
  {
    name: 'Файл',
    groups: [
      {
        title: 'Проект',
        commands: [
          { label: 'Создать', hint: 'Создать новый проект (не реализовано)' },
          { label: 'Открыть', hint: 'Открыть проект из файла (не реализовано)' },
          { label: 'Сохранить', hint: 'Сохранить проект в файл (не реализовано)' },
        ],
      },
    ],
  },
  {
    name: 'Геометрия',
    groups: [
      {
        title: 'Объекты',
        commands: [
          { label: 'Точка', hint: 'Добавить точку (не реализовано)' },
          { label: 'Линия', hint: 'Добавить линию (не реализовано)' },
          { label: 'Многоугольник', hint: 'Добавить многоугольник (не реализовано)' },
        ],
      },
    ],
  },
  {
    name: 'Материалы',
    groups: [
      {
        title: 'Грунты',
        commands: [{ label: 'Новый грунт', hint: 'Создать модель грунта (не реализовано)' }],
      },
    ],
  },
  {
    name: 'Сетка',
    groups: [
      {
        title: 'Генерация',
        commands: [
          { label: 'Сгенерировать', hint: 'Построить сетку КЭ (не реализовано)' },
          { label: 'Измельчить', hint: 'Локальное измельчение (не реализовано)' },
        ],
      },
    ],
  },
  {
    name: 'Нагрузки',
    groups: [
      {
        title: 'Типы',
        commands: [
          { label: 'Сосредоточенная', hint: 'Сила в точке (не реализовано)' },
          { label: 'Распределённая', hint: 'Нагрузка на линию (не реализовано)' },
        ],
      },
    ],
  },
  {
    name: 'Стадии',
    groups: [
      {
        title: 'Расчётные стадии',
        commands: [
          { label: 'Добавить стадию', hint: 'Добавить стадию монтажа/выемки (не реализовано)' },
        ],
      },
    ],
  },
  {
    name: 'Расчёт',
    groups: [
      {
        title: 'Запуск',
        commands: [{ label: 'Рассчитать', hint: 'Запустить расчёт МКЭ (не реализовано)' }],
      },
    ],
  },
  {
    name: 'Результаты',
    groups: [
      {
        title: 'Поля',
        commands: [
          { label: 'Перемещения', hint: 'Изополя перемещений (не реализовано)' },
          { label: 'Напряжения', hint: 'Изополя напряжений (не реализовано)' },
        ],
      },
    ],
  },
];

export function Ribbon() {
  const [active, setActive] = useState(TABS[0].name);
  const tab = TABS.find((t) => t.name === active) ?? TABS[0];

  return (
    <div className="ribbon">
      <div className="ribbon-tabs">
        {TABS.map((t) => (
          <button
            key={t.name}
            className={t.name === active ? 'ribbon-tab active' : 'ribbon-tab'}
            onClick={() => setActive(t.name)}
          >
            {t.name}
          </button>
        ))}
      </div>
      <div className="ribbon-content">
        {tab.groups.map((g) => (
          <div key={g.title} className="ribbon-group">
            <div className="ribbon-buttons">
              {g.commands.map((c) => (
                <button key={c.label} className="ribbon-button" disabled title={c.hint}>
                  {c.label}
                </button>
              ))}
            </div>
            <div className="ribbon-group-title">{g.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
