import { useEffect, useRef } from 'react';

// Вьюпорт — центральная область для геометрии, сетки и результатов.
// Пока рисуется координатная сетка-заглушка; мировые координаты, зум и панорама
// появятся вместе с геометрией. Учтён devicePixelRatio, чтобы линии были чёткими.
export function ViewportPanel() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const draw = () => {
      const dpr = window.devicePixelRatio || 1;
      const w = container.clientWidth;
      const h = container.clientHeight;
      if (w <= 0 || h <= 0) return;

      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;

      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, w, h);

      // Мелкая сетка шагом 10 px (в мировых координатах будет заменена).
      ctx.strokeStyle = '#ececf1';
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let x = 0; x <= w; x += 10) {
        ctx.moveTo(x + 0.5, 0);
        ctx.lineTo(x + 0.5, h);
      }
      for (let y = 0; y <= h; y += 10) {
        ctx.moveTo(0, y + 0.5);
        ctx.lineTo(w, y + 0.5);
      }
      ctx.stroke();

      ctx.fillStyle = '#9aa0a6';
      ctx.font = '14px system-ui, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('Область модели: здесь появятся геометрия и сетка', w / 2, h / 2);
    };

    draw();
    const observer = new ResizeObserver(draw);
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="viewport">
      <canvas ref={canvasRef} />
    </div>
  );
}
