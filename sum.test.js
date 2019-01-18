const sum = require('./sum');
// 1 + 2 เท่ากับ 3
test('1 + 2 เท่ากับ 3', ()=> {
  expect(sum(1,2)).toBe(3);
});

// 20 + 1 เท่ากับ 21
test('20 + 1 เท่ากับ 21', ()=> {
  expect(sum(20,1)).toBe(21);
});

// 2 + 5 เท่ากับ ?
test('2 + 5 เท่ากับ ?', ()=> {
  expect(sum(2,5)).toBe(7);
});
// ทำอีก 3 อัน โดยการพิมพ์เอง อย่า copy
// 55 + 5 เท่ากับ 60
test('55 + 5 เท่ากับ 60', ()=> {
  expect(sum(55,5)).toBe(60);
});

// 100 + 2 เท่ากับ 102
test('100 + 2 เท่ากับ 102', ()=> {
  expect(sum(100,2)).toBe(102);
});

// 20 + 15 เท่ากับ 35
test('20 + 15 เท่ากับ 35', ()=> {
  expect(sum(20,15)).toBe(35);
});
