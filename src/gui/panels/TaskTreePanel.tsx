// Дерево задачи — аналог навигатора в GEO5: структура модели сверху вниз.
// Пока список статичный; разделы станут раскрываемыми по мере реализации.
const SECTIONS = ['Геометрия', 'Материалы', 'Сетка', 'Нагрузки', 'Стадии', 'Расчёт', 'Результаты'];

export function TaskTreePanel() {
  return (
    <div className="task-tree">
      <ul>
        <li className="tree-root">
          Проект «Новый»
          <ul>
            {SECTIONS.map((s) => (
              <li key={s} className="tree-item">
                {s}
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}
