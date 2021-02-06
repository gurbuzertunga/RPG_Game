import APIHandler from '../utils/apiHandler.js';

describe('postData', () => {
    test('it does not return null', () => expect(APIHandler.postData()).not.toBeNull());
    test('it returns an object', () => expect(APIHandler.postData()).toBeInstanceOf(Object));
    test('it does not return null', () => expect(APIHandler.getData()).not.toBeNull());
    test('it returns an object', () => expect(APIHandler.getData()).toBeInstanceOf(Object));
});