import authService from './authService';

it ("Fails to signin with error.code=USR_05 when email doesn't exist", () => {
    expect.assertions(1);

    return authService.signIn("test@test.gr", "123321").catch(error => {
        expect(error.code).toMatch("USR_05");
    });
});

it ('should register with a new email, and fail next time', async () => {
    expect.assertions(1);
    try {
        const res = await authService.signUp("test@test.gr", "123321");
        expect(res.customer).toBeTruthy
    } catch (error) {
        expect(error).toBeTruthy
    }
});