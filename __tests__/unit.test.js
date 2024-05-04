// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

/*
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1,2)).toBe(3);
});
*/

// TODO - Part 2

//phone number tests
test('valid phone number (123)456-7890', () => {
  expect(isPhoneNumber("(123)456-7890")).toBe(true);
});
test('valid phone number (999)000-0000', () => {
  expect(isPhoneNumber("(999)000-0000")).toBe(true);
});
test('invalid phone number (123)456-7890', () => {
  expect(isPhoneNumber("(123)4567890")).toBe(false);
});
test('invalid phone number 1234567890', () => {
  expect(isPhoneNumber("1234567890")).toBe(false);
});

//email tests
test('valid email: ', () => {
  expect(isEmail("bruh@gmail.com")).toBe(true);
});

test('valid email: ', () => {
  expect(isEmail("fartfart23@gmail.com")).toBe(true);
});

test('valid email: ', () => {
  expect(isEmail("bruh@bruh@gmail.com")).toBe(false);
});

test('valid email: ', () => {
  expect(isEmail("b@n@n@warrior@gmail.com")).toBe(false);
});

//password tests
test('valid password: ', () => {
  expect(isStrongPassword("bruh28_fart")).toBe(true);
});

test('valid password: ', () => {
  expect(isStrongPassword("owlLuver_420lvr")).toBe(true);
});

test('valid password: ', () => {
  expect(isStrongPassword("69420fartfart")).toBe(false);
});

test('valid password: ', () => {
  expect(isStrongPassword("69420sungodgoer?")).toBe(false);
});


//date tests

test('valid date 1/2/2022', () => {
  expect(isDate("1/2/2022")).toBe(true);
});

test('valid date 12/12/2024', () => {
  expect(isDate("12/12/2024")).toBe(true);
});

test('invalid date 12/12/23', () => {
  expect(isDate("12/12/23")).toBe(false);
});

test('invalid date 12-12-2031', () => {
  expect(isDate("12-12-2031")).toBe(false);
});

//hexColor tests

test('valid hex: #6781a1', () => {
  expect(isHexColor('#db9481')).toBe(true);
});

test('valid hex: #db9481', () => {
  expect(isHexColor('#db9481')).toBe(true);
});

test('invalid hex: a1876', () => {
  expect(isHexColor('a1876')).toBe(false);
});

test('invalid hex: badHex!', () => {
  expect(isHexColor('badHex!')).toBe(false);
});
