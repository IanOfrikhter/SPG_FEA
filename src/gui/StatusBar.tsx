// Строка состояния: текущие единицы измерения и подсказка пользователю.
// Позже сюда добавятся координаты курсора и прогресс расчёта.
export function StatusBar() {
  return (
    <div className="statusbar">
      <span>Единицы: м · кН · кПа</span>
      <span className="statusbar-right">Готово</span>
    </div>
  );
}
