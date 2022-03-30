// TODO: Prefered to create as class
const dbService = {

    registerUser: async ({ email, name, password }) => {

        
        function sleep(ms) {
            return new Promise((resolve) => {
                setTimeout(resolve, ms);
            });
        }

        // TODO: add check types and valid values?

        await sleep(5000)
        console.log('Register name:', name, ', email:', email);
        // TODO: add exeption to catch errors
        
    }
}

module.exports = dbService