import { describe, expect, it } from 'vitest';
import { add, dot, length, scale, vec2 } from './vec2';

describe('core/math/vec2', () => {
  it('складывает векторы покомпонентно', () => {
    expect(add(vec2(1, 2), vec2(3, 4))).toEqual(vec2(4, 6));
  });

  it('умножает вектор на скаляр', () => {
    expect(scale(vec2(2, -3), 2)).toEqual(vec2(4, -6));
  });

  it('скалярное произведение ортогональных векторов равно нулю', () => {
    expect(dot(vec2(1, 0), vec2(0, 1))).toBe(0);
  });

  it('длина вектора (3, 4) равна 5', () => {
    expect(length(vec2(3, 4))).toBeCloseTo(5, 12);
  });
});
