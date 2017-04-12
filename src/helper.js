export default {
    randomName () {
        const name = ['Gabriel', 'Letícia', 'Giovani', 'Esley', 'Marcelo', 'Douglas', 'Pedro', 'Lucas', 'John', 'Jane', 'Joe', 'Paulo', 'Jorge', 'Fabiana'];
        const lastname = ['da Silva', 'dos Santos', 'Costa', 'Fernandes', 'Souza', 'Alvares Cabral', 'Doe', 'Garcia']

        return name[Math.floor(Math.random() * name.length)] + ' ' + lastname[Math.floor(Math.random() * lastname.length)]
    },

    uniqueID () {
        return '_' + Math.random().toString(36).substr(2, 9);
    }
}