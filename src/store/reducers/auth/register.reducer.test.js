import registerReducer from "./register.reducer";
import { requestRegister } from "../../actions/auth";

describe('Register flow', () => {

    it('should show an error when no email is provided', () => {
        const actual = registerReducer({
            password: "123321",
            name: "Test Name"
        }, requestRegister());
        expect(actual.error.code).toEqual('no-email')
    });

    it('should show an error when email doesn\'t include any (at)@ or dot(.)', () => {
        const actual = registerReducer({
            email: "testtest.gr",
            name: "Test Name",
            password: '123321',
            error: null,
        }, requestRegister());

        expect(actual.error.code).toEqual('invalid-email');

        const actual2 = registerReducer({
            email: "test@testgr",
            name: "Test Name",
            password: '123321',
            error: null,
        }, requestRegister());

        expect(actual2.error.code).toEqual('invalid-email');
    });

    it('should show an error when no password is provided', () => {
        const actual = registerReducer({
            email: "test@test.gr",
            password: ' ',
            name: "Test Name",
            error: null,
        }, requestRegister());
        expect(actual.error.code).toEqual('invalid-password')

        const actual2 = registerReducer({
            email: "test@test.gr",
            name: "Test Name",
            password: '123321',
            error: null,
        }, requestRegister());

        expect(actual2.error).toEqual(null);
    });

    it('should show an error when password is less than 6 characters', () => {
        const actual = registerReducer({
            email: "test@test.gr",
            password: "12332",
            name: "Test Name",
            error: null,
        }, requestRegister());

        expect(actual.error.code).toEqual('invalid-password');
    });

    it('should start loading when register is being requested', () => {
        const actual = registerReducer({
            email: "test@test.gr",
            password: "123321",
            name: "Test Name",
            error: null,
        }, requestRegister());
        expect(actual.isLoading).toEqual(true);
    });
});