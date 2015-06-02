export default {
    create: (text) => {
        return new Promise((resolve, reject) => {
            resolve({
                id: (+new Date() + Math.floor(Math.random() * 999999)).toString(36),
                text: text
            });
        });
    }
};